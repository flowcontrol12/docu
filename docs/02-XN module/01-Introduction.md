---
slug: /
---

In this document you will find information about the most important options available in the FlowControl System. How to operate with data, graphs and charts as well as a general description of options available in the system. 


## kendo icons
https://www.telerik.com/kendo-react-ui/components/styling/icons/
<span className="k-icon k-i-calendar"></span>
<br />
<span style={{ fontSize: '30px', color: 'red' }} className="k-icon k-i-floppy"></span>
<br />
<span style={{ fontSize: '60px', color: 'blue' }} className="k-icon k-i-gear"></span>
<br />
<span style={{ fontSize: '90px', color: 'green' }} className="k-icon k-i-gear"></span>

## custom icons
<span style={{ fontSize: '30px' }} className="k-icon f-i-flow-stats"></span>
<br/>
<span style={{ fontSize: '30px' }} className="f-i-security-dashboard"></span>
<br/>
<span style={{ fontSize: '30px' }} className="f-i-as-icon"></span>
<br/>
<span style={{ fontSize: '30px' }} className="f-i-cocpit-manager"></span>
<br/>
<span style={{ fontSize: '30px' }} className="f-i-flow-stats"></span>
<br/>
<span style={{ fontSize: '30px' }} className="f-i-last-day"></span>
<br/>
<span style={{ fontSize: '30px' }} className="f-i-last-week"></span>
<br/>
<span style={{ fontSize: '30px' }} className="f-i-last-month"></span>
<br/>
<span style={{ fontSize: '30px' }} className="f-i-threat-detection"></span>
<br/>
<span style={{ fontSize: '30px' }} className="f-i-threat-intelligence"></span>

## System Architecture

> A flow is defined as a unidirectional sequence of packets with some common properties that pass through a network device.  These collected flows are exported to an external device, the NetFlow collector.  Network flows are highly granular e.g.: flow records include details such as IP addresses, packet and byte counts, timestamps, Type of Service (ToS), application ports, input and output interfaces, etc.

Source: [RFC3954](https://www.ietf.org/rfc/rfc3954.txt)

According to the RFC3964 FlowControl solution works as a Flow Collector which collects, analyzes and visualize the collected flows. Metrics are presented and examined from two perspectives: Network and Security giving the operator valuable input into network/application problems analysis as well as security threats hunting. 

![](../assets/sycope_flowcontrol_1_5.jpg)

FlowControl supports the following flow protocol data sources: 

- NetFlow 

- sFlow, 

- IPFIX,

- NSEL.


> **Note:** Specific options such as NSEL (Cisco ASA) or different sampling multipliers per device must be additionally configured. System uses SNMP v1/2/3 to query devices. the above fields are handled from the ver. 1.6 of the FlowControl system. In order to analyze the historical data collected  in previous versions of the system, the handling of all additional  fields in the N Mentions must be disabled

