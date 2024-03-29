// import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import React, { useState, useEffect }from 'react';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { SelectButton } from 'primereact/selectbutton';

const width = '350px';
const formatter = new Intl.NumberFormat();
const aggreagations = {
  'Aggregations (visiblity)': {
    '120000': 39160000000,
    '60000': 21929600000,
    '30000': 12531200000,
  },
  'Aggregations (performance)': {
    '120000': 13811979059,
    '60000': 5524791624,
    '30000': 3946279731.2,
  }
}

export default function Calculator() {
  const optionFps = [{ label: 'Medium - 60,000 FPS', value: '60000' }, { label: 'Low - 30,000 FPS', value: '30000' }];
  const optionMetric = [{ label: 'Terabyte', value: 'TB' }, { label: 'Gigabyte', value: 'GB' }, { label: 'Byte', value: 'B' }];
  const [advanced, setAdvanced] = useState(false);
  const [metric, setMetric] = useState(optionMetric[1].value);
  const [fps, setFps] = useState(optionFps[0].value);
  const [netflow, setNetflow] = useState();
  const [alert, setAlert] = useState();
  const [daily, setDaily] = useState();
  const [deduplication, setDeduplication] = useState();
  const [aggreagation, setAggregation] = useState();
  const [isPerformance, setIsPerformance] = useState(true)
  const [values, setValues] = useState([]);

  const reset = () => {
    setFps(optionFps[0].value);
    setNetflow(300);
    setAlert(300);
    setDaily(100);
    setDeduplication(4);
    setAggregation(2);
    setIsPerformance(true);
    setValues([
      { stream: 'Netflows',                   retention: 1, frame: 'hours' },
      { stream: 'Alerts',                     retention: 24, frame: 'hours' },
      { stream: 'Aggregations (visiblity)',   retention: 1, frame: 'days' },
      { stream: 'Aggregations (performance)', retention: 1, frame: 'days' },
    ]);
  }

  useEffect(() => reset(), []);

  const addMetric = number => {
    let value = number;
    if (metric === 'GB') {
      value = number / 1000000000;
    }
    if (metric === 'TB') {
      value = number / 1000000000000;
    }
    return formatter.format(value) + ' ' + metric;
  }

  const calculate = (rowData) => {
    const { stream } = rowData
    if (stream === 'Aggregations (performance)' && !isPerformance) return 0;
    switch(stream) {
      case 'Netflows':                    return (rowData.retention * netflow * parseInt(fps) * 60 * 60) / parseInt(deduplication);
      case 'Alerts':                      return rowData.retention * alert * daily * 60 * 60;
      case 'Aggregations (visiblity)':    return (rowData.retention * aggreagations[stream][fps]) / parseInt(aggreagation);
      case 'Aggregations (performance)':  return rowData.retention * aggreagations[stream][fps];
      default: return 0;
    }
  }

  const checkboxTemplate = (rowData) => {
    if (rowData.stream !== 'Aggregations (performance)') {
      return null;
    }
    return <Checkbox onChange={e => setIsPerformance(e.checked)} checked={isPerformance}></Checkbox>;
  }

  const streamTemplate = (rowData) => {
    if (rowData.stream === 'Aggregations (performance)') {
      return <span style={{ cursor: 'pointer'}} onClick={() => setIsPerformance(!isPerformance)}>{rowData.stream}</span>
    }
    return <span>{rowData.stream}</span>
  }

  const retentionTemplate = (rowData) => {
    if (rowData.stream === 'Aggregations (performance)' && !isPerformance) {
      return (
        <div className="p-inputgroup">
          <InputNumber value={0} disabled />
          <span className="p-inputgroup-addon">{rowData.frame}</span>
        </div>
      )
    }    
    return (
      <div className="p-inputgroup">
        <InputNumber
          value={rowData.retention}
          onValueChange={(e) => {
            setValues(values.map(value => {
              if (value.stream === rowData.stream) {
                value.retention = e.value
              }
              return value;
            }))
          }}
          placeholder="Retention" />
        <span className="p-inputgroup-addon">{rowData.frame}</span>
      </div>
    );
  }

  const volumeTemplate = (rowData) => (
    <div className="p-text-right">
      {addMetric(calculate(rowData))}
    </div>
  );

  const header = (
    <div className="p-d-flex p-jc-between">
      <Dropdown value={fps} options={optionFps} onChange={(e) => setFps(e.value)} placeholder="Select FPS" />
      <SelectButton className="p-button-sm" value={metric} options={optionMetric} onChange={(e) => setMetric(e.value)} />
    </div>
  )

  const total = values.map(calculate).reduce((p, c) => p + c, 0);
  const footer = (
    <div className="p-d-flex p-jc-between">
      <h2 style={{ color: 'var(--text-color)' }}>TOTAL</h2>
      <h2 style={{ color: 'var(--text-color)' }}>{addMetric(total)}</h2>
    </div>
  )

  return (
    <div id="calculator">
      <DataTable value={values} header={header} footer={footer} size="large">
        <Column
          headerStyle={{ width: '3rem'}}
          body={checkboxTemplate}></Column>
        <Column
          header="Stream"
          body={streamTemplate}></Column>
        <Column
          header="Retention"
          body={retentionTemplate}></Column>
        <Column
          header="Volume"
          body={volumeTemplate}></Column>
      </DataTable>

      <div className="p-mt-5 p-d-flex p-jc-between">
        <Button
          onClick={() => setAdvanced(!advanced)}
          className="p-button-outlined"
          label="Advanced Options"></Button>
        <Button onClick={() => reset()} label="Reset Calculation"></Button>
      </div>
      
      {advanced && (
        <div className="p-mt-5">
          <div className="p-field p-grid">
            <label style={{ width }} className="p-col-fixed">Single Netflow size</label>
            <div className="p-col p-inputgroup">
              <InputNumber placeholder="Single Netflow Size" value={netflow} onValueChange={(e) => setNetflow(e.value)} />
              <span className="p-inputgroup-addon">Bytes</span>
            </div>
          </div>
          <div className="p-field p-grid">
            <label style={{ width }} className="p-col-fixed">Single Alert size</label>
            <div className="p-col p-inputgroup">
              <InputNumber placeholder="Single Alert Size" value={alert} onValueChange={(e) => setAlert(e.value)} />
              <span className="p-inputgroup-addon">Bytes</span>
            </div>
          </div>
          <div className="p-field p-grid">
            <label style={{ width }} className="p-col-fixed">Daily Alert number</label>
            <div className="p-col p-inputgroup">
              <InputNumber placeholder="Daily Alert Number" value={daily} onValueChange={(e) => setDaily(e.value)} />
              <span className="p-inputgroup-addon">Per minute</span>
            </div>
          </div>
          <div className="p-field p-grid">
            <label style={{ width }} className="p-col-fixed">Deduplication level</label>
            <div className="p-col p-inputgroup">
              <InputNumber placeholder="Deduplication level" value={deduplication} onValueChange={(e) => setDeduplication(e.value)} />
              <span className="p-inputgroup-addon"></span>
            </div>
          </div>
          <div className="p-field p-grid">
            <label style={{ width }} className="p-col-fixed">Visibility Aggregations values’ uniqueness</label>
            <div className="p-col p-inputgroup">
              <InputNumber placeholder="Visibility Aggregations values’ uniqueness" value={aggreagation} onValueChange={(e) => setAggregation(e.value)} />
              <span className="p-inputgroup-addon"></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}