DDoS attacks (Distributed Denial of Service) are currently among the most popular and most simple attacks used by cybercriminals. Their goal is to disrupt the network infrastructure or the running application – “the victim of the attack”, by sending massive amounts of data packets. This threat affects all service sectors on the internet. Modern attacks of DDoS require the use of thousands of devices organized into so-called botnets. DDoS attacks usually result in financial and image losses.

Thanks to an efficient algorithm using many network parameters, the FlowControl XND module is able to detect various types of DDoS attacks. This is due to the implemented ability to flexibly change network parameters depending on needs. *Table 1.1* contains examples of what parameter is important to detect a specific type of DDoS attack. All attributes are related to data for 1 minute, e.g. Bytes parameter means de facto BPM (Bytes per Minute).

| **DDoS Attack Type** | **Description**                                              | **Important FlowControl  paramaters**                        |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Volume attack**             | An attack saturating the victims link capacity.              | ●     Bytes <br />●     Bytes_Limit  (In case of UDP Flood attacks, the following parameters should also be considered: IP, IP Ex, ASN, BPF.) |
| **Protocol attack**              | An attack consuming actual server resources or  intermediate communication equipment such as firewall, IDS, or switch. | ●     Packets                                                |
| **Application layer  attack** | An attack causing the web server to crash.                   | ●     Flows                                                  |

*Table 1.1 Examples of* *XND module parameter control*
