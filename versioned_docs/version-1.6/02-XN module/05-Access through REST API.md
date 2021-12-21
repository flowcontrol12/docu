<!-- Wersja 1.6.1 - docusaurus 2.0 dopasowana rozdzielczość rysunków -->

Since FolowControl version 1.6 it is possible to download data based on queries through external mechanisms - REST API.

```
Link: 

https://[IP]/api_2

Method:

POST



JSON:
{
   "username":" ",
   "pass":" ",
   "method":"local",
   "appName":"fcxn-tops",
    "top":100,
   "aggr":"1MIN",
   "range":"'202105051759','202105051759'",
   "search":"",
   "appType":"xn",
   "tz":"Warsaw"
}
	
```





### Available fields with values they can take



- method = 'local|ldap|radius'

- aggr = 'AUTO|1MIN|10MIN|1HOUR|1DAY'

- appType='xn'

- appName = 'fcxn-tops|fcxn-rawdata|fcxn-asa|fcxn-traffic|fcxn-apps|fcxn-maps|fcxn-groups|fcxn-as|fcxn-alerts'

- appType='xns'

- appName = 'fcxn-security-internal|fcxn-security-external|fcxn-security-threatanalysis|fcxn-security-alerts'

- appType='xnd'

- appName = 'fcxn-module-ddos|fcxn-ddos-protocols-details'

- appType='xnr'

- appName = 'fcxn-netim'

- appType='sys'

- appName = 'fcxn-audit-logs|fcxn-flowstats'

- tz = 'Abu Dhabi|Adelaide|Alaska|Amsterdam|Arizona|Astana|Athens|Atlantic Time (Canada)|Auckland|Azores|Baghdad|Baku|Bangkok|Beijing|Belgrade|Berlin|Bern|Bogota|Brasilia|Bratislava|Brisbane|Brussels|Bucharest|Budapest|Buenos Aires|Cairo|Canberra|Cape Verde Is.|Caracas|Casablanca|Central America|Central Time (US & Canada)|Chennai|Chihuahua|Chongqing|Copenhagen|Darwin|Dhaka|Eastern Time (US & Canada)|Edinburgh|Ekaterinburg|Fiji|Georgetown|Greenland|Greenwich Mean Time : Dublin|Guadalajara|Guam|Hanoi|Harare|Hawaii|Helsinki|Hobart|Hong Kong|Indiana (East)|International Date Line West|Irkutsk|Islamabad|Istanbul|Jakarta|Jerusalem|Kabul|Kamchatka|Karachi|Kathmandu|Kolkata|Krasnoyarsk|Kuala Lumpur|Kuwait|Kyiv|La Paz|Lima|Lisbon|Ljubljana|London|Madrid|Magadan|Mazatlan|Melbourne|Mexico City|Mid-Atlantic|Minsk|Monrovia|Monterrey|Moscow|Mountain Time (US & Canada)|Mumbai|Muscat|Nairobi|New Caledonia|New Delhi|Newfoundland|Novosibirsk|Nuku'alofa|Osaka|Pacific Time (US & Canada)|Paris|Perth|Port Moresby|Prague|Pretoria|Quito|Riga|Riyadh|Rome|Samoa|Santiago|Sapporo|Sarajevo|Saskatchewan|Seoul|Singapore|Skopje|Sofia|Solomon Is.|Sri Jayawardenepura|St. Petersburg|Stockholm|Sydney|Taipei|Tallinn|Tashkent|Tbilisi|Tehran|Tokyo|Urumqi|Warsaw|Wellington|West Central Africa|Vienna|Vilnius|Vladivostok|Volgograd|Yakutsk|Yerevan|Zagreb'

  ​	

### Available databases for querying a specific application

**XN**

- fcxn-tops = 'HostAppTops,IntRawTops'
- fcxn-rawdata = 'IntRaw,IntUtil'
- fcxn-asa = 'IntRawASA'
- fcxn-traffic = 'HostApp,TotalAggrBytes'
- fcxn-apps = 'HostApps'
- fcxn-maps = 'HostApp,IntUtil'
- fcxn-groups = 'HostApp,TotalAggrBytes'
- fcxn-as = 'HostApp,TotalAggrBytes'
- fcxn-alerts = 'AlertHost,AlertInt'



**XNS**

- fcxn-security-internal = 'Incidents'
- fcxn-security-external = 'Incidents'
- fcxn-security-threatanalysis = 'Incidents'
- fcxn-security-alerts = 'Incidents'



**XND**

- fcxn-module-ddos = 'Incidents'
- fcxn-ddos-protocols-details = 'Incidents,Protocols'



**XNR**

- fcxn-netim = ''NetIM'



**SYS**

- fcxn-audit-logs = 'Logs'



### Example

```
Request:

{
   "username":"admin",
   "pass":"[password]",
   "method":"local",
   "appName":"fcxn-tops",
   "top":1,
   "aggr":"1MIN",
   "range":"'202105051759','202105051759'",
   "search":"",
   "appType":"xn",
   "tz":"Warsaw"
}

Response:

{
    "Status":"Success",
    "Message":"Module  XN. Application FCXN-TOPS.",
    "Data":[
        {
            "Name":"HostAppTops-1MIN",
            "Content":"{
                "Time (Host/App)":"202105051759",
                "Bytes (Host/App)":"6615615",
                "Packets (Host/App)":"7593",
                "Source Host Name (Host/App)":"172.16.40.75",
                "Destination Host Name (Host/App)":"172.16.95.183",
                "Source Host (Host/App)":"172.16.40.75",
                "Destination Host (Host/App)":"172.16.95.183",
                "Protocol (Host/App)":"UDP",
                "Application (Host/App)":"5142",
                "Port (Host/App)":"5142",
                "Source Host Role (Host/App)":"Client",
                "Source Host ASByIP (Host/App)":"LVLT-1",
                "Destination Host ASByIP (Host/App)":"",
                "Source Host ASN (Host/App)":"1",
                "Destination Host ASN (Host/App)":"",
                "Protocol Group (Host/App)":"",
                "Source Application Group (Host/App)":"",
                "Destination Application Group (Host/App)":""
            }"
        },
        {
            "Name":"IntRawTops-1MIN",
            "Content":"{
                "Netflow Device (Int)":"172.16.40.1",
                "Device Name (Int)":"Routert Test1",
                "Time (Int)":"202105051759",
                "Bytes (Int)":"6465451",
                "Packets (Int)":"7464",
                "Input Interface (Int)":"7",
                "Output Interface (Int)":"14",
                "Input Interface Name (Int)":"LAB",
                "Output Interface Name (Int)":"TMP_5",
                "Source Host (Int)":"172.16.40.75",
                "Destination Host (Int)":"172.16.95.183",
                "Source Host Name (Int)":"172.16.40.75",
                "Destination Host Name (Int)":"172.16.95.183"
            }"
        }
    ]
}'
```

