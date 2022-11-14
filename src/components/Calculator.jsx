// import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import React, { useState, useEffect }from 'react';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { SelectButton } from 'primereact/selectbutton';

const width = '300px';
const formatter = new Intl.NumberFormat();
const aggreagations = (fps) => fps == '60000' ? 4000000000 : 3000000000;

export default function Calculator() {
  const optionFps = [{ label: 'Medium - 60,000 FPS', value: '60000' }, { label: 'Low - 30,000 FPS', value: '30000' }];
  const optionMetric = [{ label: 'Gigabyte', value: 'GB' }, { label: 'Byte', value: 'B' }];
  const [advanced, setAdvanced] = useState(true);
  const [fps, setFps] = useState(optionFps[0].value);
  const [metric, setMetric] = useState(optionMetric[0].value);
  const [netflow, setNetflow] = useState();
  const [alert, setAlert] = useState();
  const [daily, setDaily] = useState();
  const [values, setValues] = useState([]);

  const reset = () => {
    setValues([
      { stream: 'Netflows', retention: 24, frame: 'hours' },
      { stream: 'Alerts', retention: 720, frame: 'hours' },
      { stream: 'Aggregations', retention: 90, frame: 'days' },
    ]);
    setDaily(100);
    setAlert(300);
    setNetflow(300);
    setFps(optionFps[0].value);
  }

  useEffect(() => reset(), []);

  const retentionTemplate = (rowData) => (
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
      {/* <Button style={{width: '60px'}} className="p-button-outlined" label={rowData.frame} /> */}
    </div>
  )

  const calculate = (rowData) => {
    let volume = 0;
    switch(rowData.stream) {
      case 'Netflows': volume = netflow * parseInt(fps) * 60 * 60 * rowData.retention; break;
      case 'Alerts': volume = alert * daily * 60 * 60 * rowData.retention; break;
      case 'Aggregations': volume = rowData.retention * aggreagations(fps); break;
    }
    return metric == 'GB' ? (volume / 1000000000) : volume;
  }

  const volumeTemplate = (rowData) => (
    <div className="p-text-right">
      {formatter.format(calculate(rowData)) + ' ' + metric}
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
      <h3 style={{ color: 'var(--text-color)' }}>TOTAL</h3>
      <h3 style={{ color: 'var(--text-color)' }}>{formatter.format(total)} {metric}</h3>
    </div>
  )

  return (
    <div id="calculator">
      <DataTable value={values} header={header} footer={footer} size="large">
        <Column
          field="stream"
          header="Stream"></Column>
        <Column
          header="Retention"
          field="retention"
          body={retentionTemplate}></Column>
        <Column
          field="volume"
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
            <label style={{ width }} className="p-col-fixed">Single Netflow Size</label>
            <div className="p-col p-inputgroup">
              <InputNumber placeholder="Single Netflow Size" value={netflow} onValueChange={(e) => setNetflow(e.value)} />
              <span className="p-inputgroup-addon">Bytes</span>
            </div>
          </div>
          <div className="p-field p-grid">
            <label style={{ width }} className="p-col-fixed">Single Alert Size</label>
            <div className="p-col p-inputgroup">
              <InputNumber placeholder="Single Alert Size" value={alert} onValueChange={(e) => setAlert(e.value)} />
              <span className="p-inputgroup-addon">Bytes</span>
            </div>
          </div>
          <div className="p-field p-grid">
            <label style={{ width }} className="p-col-fixed">Daily Alert Number</label>
            <div className="p-col p-inputgroup">
              <InputNumber placeholder="Daily Alert Number" value={daily} onValueChange={(e) => setDaily(e.value)} />
              <span className="p-inputgroup-addon">Per Minute</span>
            </div>
          </div>
          <div className="p-field p-grid">
            <label style={{ width }} className="p-col-fixed">Aggreagations Per Day</label>
            <div className="p-col p-inputgroup">
              <InputNumber placeholder="Aggreagations Per Day" disabled value={aggreagations(fps)} />
              <span className="p-inputgroup-addon">Bytes</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}