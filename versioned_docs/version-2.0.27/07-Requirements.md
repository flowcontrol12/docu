## Collector hardware requirements

The tables below are lists of required server hardware parameters for desired flow limits.



|                             | Basic                 | Small                 |
| --------------------------- | :-------------------- | --------------------- |
| Max number of flows         | 30k flow/s            | 60k flow/s            |
| Max number of data  sources | unlimited             | unlimited             |
| Supported VM Systems        | VMWare 6.5 and higher | VMWare 6.5 and higher |



| Base OS **\*** | Basic  | Small   |
| -------------- | ------ | ------- |
| CPU cores      | 8 pcs. | 16 pcs. |
| RAM            | 16 GB  | 32 GB   |
| **Storage**    |        |         |
| OS disk        | 500 GB | 500 GB  |
| Data disk      | 300 GB | 600 GB  |

**\*** Minimum requirements for Proof of Concept. Any production environment requires additional resources based on number and types of modules 

---

**Resources for licensed modules**  



| VISIBILITY  module | Basic      | Small      |
| ------------------ | ---------- | ---------- |
| CPU cores          | +8 pcs.    | +16 pcs.   |
| RAM                | +2 GB      | +4 GB      |
| **Storage**        |            |            |
| Data disk          | 450 GB     | 900 GB     |
| LAN Interfaces     | 2x1 Gbit/s | 2x1 Gbit/s |
|                    |            |            |

---

| SECURITY module | Basic                  | Small                  |
| --------------- | ---------------------- | ---------------------- |
| CPU cores       | +2 pcs.                | +4 pcs.                |
| RAM             | +2 GB                  | +4 GB                  |
| **Storage**     |                        |                        |
| Data disk       | customer specification | customer specification |
| LAN Interfaces  | 2x1 Gbit/s             | 2x1 Gbit/s             |
|                 |                        |                        |

---

| PERFORMANCE module | Basic                  | Small                  |
| ------------------ | ---------------------- | ---------------------- |
| CPU cores          | +2 pcs.                | +4 pcs.                |
| RAM                | +2 GB                  | +4 GB                  |
| **Storage**        |                        |                        |
| Data disk          | customer specification | customer specification |
| LAN Interfaces     | 2x1 Gbit/s             | 2x1 Gbit/s             |

---

| Resources for all modules users | Basic   | Small   |
| ------------------------------- | ------- | ------- |
| CPU cores                       | 20 pcs. | 40 pcs. |
| RAM                             | 22 GB   | 44 GB   |
| Storage                         | 1,25 TB | 2 TB    |

<br />

<br />

:::tip


While we do our best to represent the data as fairly and accurately as possible (interal tests), your environment may experience different limits.

1. Raw estimate is that ~60k fps should generate around 300 GB/day.
2. In custom dashboard configurations we recommend to add (best performance) up to 12 widgets per single dashboard.
3. Software image has by default : 128GB System and 128GB Data plus default retention policy configured. Please modify those before any production installation. 					
:::

## Probe hardware requirements 

Probe is available as a license for Virtual or Hardware Appliance. The performance of the Probe depends on the hardware resources. Please see below the requirements depends on the traffic through out to monitor: 

| Traffic           | < 100 Mbps | Between 100 Mbps and 1 Gbps | Between 1 and 10 Gbps | Above 10 Gbps     |
| ----------------- | ---------- | --------------------------- | --------------------- | ----------------- |
| Flow Export Rate  | < 100 FPS  | < 1000 FPS                  | < 3000 FPS            | 3000+ FPS         |
| Active Flow Cache | Thousands  | Hundreds of Thousands       | A few Millions        | Tenth of Millions |
| CPU Type          | 2 cores    | 2 cores+                    | 4 cores+              | 8 cores+          |
| Memory            | 2 GB       | 2 GB+                       | 4-8 GB+               | 16 GB+            |