# NQL query examples

## Glossary

|                   | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| field             | Key-value pair, a way of storing information, e.g. name=John. In special cases, it is allowed to store an empty value in the field. It is not possible to create a field with an empty/undefined key. The value of the field for a specific data type. |
| object            | A collection of fields that form the basic unit of data storage. It has mandatory/system fields. A blank document has only mandatory/system fields. |
| collection        | A logical container for storing objects. The collection can be empty or it can be distributed. Provides an interface for querying, adding/deleting/modifying documents regardless of their internal organization. |
| input collection  | A collection of objects (input objects) that is passed to the command. |
| output collection | A collection of objects (output objects) that is the result of executing a command. |
| stream            | Data source. Generates (on demand or continuously) a sequence of objects (collection) of a specific type (origin). |
| command           | Processes a set of data (collections) coming from the input and passes the output result. Commands can be more than one and can form a so-called pipe: source1 \| command1 \| command2 \| .... commandN. Each command has an input and an output of data (collections). The input of a command is a sequence of input objects (collection) which are the result (output) of the previous command or stream. The result of a command is a collection of output objects. A special type of command is a stream, which has only an output. |
| pipe  (nql)       | A sequence of commands that processes collections of objects. A pipeline is defined by an nql expression. |

---

## Example 1

### Scenario

Select the ten oldest people in the `IT` department and display the full names of these people.

### NQL Query

```
src stream="testdata"  | set fullName = concat(fName, lName, delimiter=",")  | where dep="IT"  | aggr fName=first(fName), lName=first(lName), ctry=first(ctry), age=first(age), docs=first(docs), host=first(host), PD=max(PD), Balance=max(balance) by fullName | sort age desc | limit 10
```

### Description

Below is a step-by-step explanation of the NQL Query.

1. **records**

Get the objects from the test database.  

Result:  	

```json
{
	"fName": "Jake",
	"lName": "White",
	"dep": "HR",
	"ctry": "DE",
	"age": 56,
	"host": "www.facebook.com",
	"docs": [
		"IDCard",
		"Passport",
		"DrivingLicense"
	],
	"PD": 0.43859708144526346,
	"ts": 1673755017972,
	"balance": 9966.23
},
{
	"fName": "Jack",
	"lName": "Magenta",
	"dep": "HR",
	"ctry": "PL",
	"age": 27,
	"host": "pl.wikipedia.org",
	"docs": [
		"Passport"
	],
	"PD": 0.511210222043333,
	"ts": 1674845669100,
	"balance": 5556.47
},
{
	"fName": "Harry",
	"lName": "Watermelon",
	"dep": "HR",
	"ctry": "US",
	"age": 49,
	"host": "www.google.com",
	"docs": [
		"Passport"
	],
	"PD": 0.3029903276018222,
	"ts": 1673763725949,
	"balance": 7404.62
},
{"...":"..."}
```



2. **concat**

Add a new field containing first and last names separated by a comma.

```
set fullName = concat(fName, lName, delimiter=",")
```

Result:  	

```json
{
	"fName": "Jake",
	"lName": "White",
	"dep": "HR",
	"ctry": "DE",
	"age": 56,
	"host": "www.facebook.com",
	"docs": [
		"IDCard",
		"Passport",
		"DrivingLicense"
	],
	"PD": 0.43859708144526346,
	"ts": 1673755017972,
	"balance": 9966.23,
	"fullName":"Jake,White"
},
{
	"fName": "Jack",
	"lName": "Magenta",
	"dep": "HR",
	"ctry": "PL",
	"age": 27,
	"host": "pl.wikipedia.org",
	"docs": [
		"Passport"
	],
	"PD": 0.511210222043333,
	"ts": 1674845669100,
	"balance": 5556.47,	
	"fullName":"Jake,Magenta"
},
{
	"fName": "Harry",
	"lName": "Watermelon",
	"dep": "HR",
	"ctry": "US",
	"age": 49,
	"host": "www.google.com",
	"docs": [
		"Passport"
	],
	"PD": 0.3029903276018222,
	"ts": 1673763725949,
	"balance": 7404.62,	
	"fullName":"Harry,Watermelon"
},
{"...":"..."}
```



3. **where**

Select only those people who belong to the `IT` department.

```
where dep="IT"
```

Result:  	

```json
{
	"lName": "Blue",
	"fName": "Jack",
	"dep":"IT",
	"docs": [
		"Passport"
	],		
	"PD": 0.8441553273619709,
	"ctry": "PL",
	"host": "www.linkedin.com",
	"balance": 8899.6,
	"age": 60,
	"fullName" : "Jack,Blue"
},
{
	"lName": "Yellow",
	"fName": "Jacob",
	"dep":"IT",
	"docs": [
		"IDCard",
		"Passport"
	],		
	"PD": 0.8416937579622111,
	"ctry": "IE",
	"host": "www.google.com",
	"balance": 9376.34,
	"age": 60,
	"fullName" : "Jacob,Yellow"
}
,
{"...":"..."}
```



4. **aggr**

   The data contains several values of the `Balance` and `PD` fields for a person at different `ts` times. 
   In this example, only one object for each person will be displayed. To do this, you need to aggregate the data by full name (`fullName` field), taking the maximum values of the `Balance` and `PD` fields. The value of the fullName field by which the aggregation will be done will be stored in the aggregation field `_id`.

```
aggr fName=first(fName), lName=first(lName), ctry=first(ctry), age=first(age), docs=first(docs), host=first(host), PD=max(PD), Balance=max(balance) by fullName 
```

Result:  	

```json
{
	"lName": "Blue",
	"fName": "Jack",
	"docs": [
		"Passport"
	],
	"PD": 0.8441553273619709,
	"ctry": "PL",
	"host": "www.linkedin.com",
	"balance": 8899.6,
	"_id": [
		"Jack,Blue"
	],
	"age": 60
},
{
	"lName": "Yellow",
	"fName": "Jacob",
	"docs": [
		"IDCard",
		"Passport"
	],
	"PD": 0.8416937579622111,
	"ctry": "IE",
	"host": "www.google.com",
	"balance": 9376.34,
	"_id": [
		"Jacob,Yellow"
	],
	"age": 60
},
{"...":"..."}
```



5. **sort**

   Sort the results by the age of the people starting with the oldest (desc).

```
sort age desc
```


6. **limit**

   Select the first ten people from a previously sorted list.

```
limit 10
```

Result:  

```json
[
	{
		"lName": "Blue",
		"fName": "Jack",
		"docs": [
			"Passport"
		],
		"PD": 0.8441553273619709,
		"ctry": "PL",
		"host": "www.linkedin.com",
		"balance": 8899.6,
		"_id": [
			"Jack,Blue"
		],
		"age": 60
	},
	{
		"lName": "Yellow",
		"fName": "Jacob",
		"docs": [
			"IDCard",
			"Passport"
		],
		"PD": 0.8416937579622111,
		"ctry": "IE",
		"host": "www.google.com",
		"balance": 9376.34,
		"_id": [
			"Jacob,Yellow"
		],
		"age": 60
	},
	{
		"lName": "Copper",
		"fName": "Olive",
		"docs": [
			"IDCard",
			"Passport"
		],
		"PD": 0.8762584426876398,
		"ctry": "IE",
		"host": "www.linkedin.com",
		"balance": 8586.93,
		"_id": [
			"Olive,Copper"
		],
		"age": 59
	},
	{
		"lName": "Cinnamon",
		"fName": "Neil",
		"docs": [
			"Passport"
		],
		"PD": 0.9939145170408105,
		"ctry": "DE",
		"host": "www.google.com",
		"balance": 8096.58,
		"_id": [
			"Neil,Cinnamon"
		],
		"age": 57
	},
	,
{"...":"..."}
]
```



### Example 2

### Scenario

For each person, display the current balance along with the date from which this balance is valid.

### NQL Query method 1

```
src stream="testdata"  | sort ts desc | aggr latestBalance=first(balance),latestPD=first(PD)  by fName, lName unwind=true

```

### Description

Below is a step-by-step explanation of the NQL Query.

1. **sort**

   Sort collections by `ts` field from the largest value (desc).

```
sort ts desc
```


2. **aggr**

   Select the values of the `Balance` and `PD` fields from the first object found from the aggregated data by the `fName` and `lName` fields.
   The previous command sorted the values by `ts ` in descending order, so if in this step you select  the value of the `Balance` field and `PD`
   field from the first object encountered, these will be the values for the maximum `ts`, i.e. the last ones.


```
aggr latestBalance=first(balance),latestPD=first(PD)  by fName, lName unwind=true
```

Result:

```json
[
	{
		"lName": "Amber",
		"fName": "Matt",
		"latestBalance": 8540.07,
		"latestPD": 0.3231355816784073
	},
	{
		"lName": "Olive",
        "fName": "William",
		"latestBalance": 595.67,
		"latestPD": 0.6249965829144613
	},
	{
		"lName": "Magenta",
		"fName": "Jack",
		"latestBalance": 3772.04,
		"latestPD": 0.2969195237000811
	},
	{
		"lName": "Ruby",
		"fName": "Paul",
		"latestBalance": 4879.27,
		"latestPD": 0.006748252054172954
	},
	{
		"lName": "Yellow",
		"fName": "Richard",
		"latestBalance": 4011.64,
		"latestPD": 0.5387816649690332
	},	
{"...":"..."}
]
```


### NQL Query method 2

Sequence of three NQLs:

```
src stream="testdata"  | dst "collTestData" 
```

```
coll "collTestData" |  fork ( set fullName=concat(fName, " ", lName) | dst "data3"), ( aggr latestTs=max(ts)by fName, lName unwind=true | dst "data4") 
```

```
coll "data3" |  set latestTs=valColl("data4", "latestTs", {"fName":fName, "lName":lName}) |  where $eq(latestTs,ts) |  sort fullName
```

### Description

Below is a step-by-step explanation of the NQL Query.

1. **dst `collTestData`** 	

Prepare a collector with test data.

Result:

```json
[
    {
        "lName": "White",
        "fName": "Jake",
        "docs": [
            "IDCard",
            "Passport",
            "DrivingLicense"
        ],
        "PD": 0.43859708144526344,
        "ctry": "DE",
        "host": "www.facebook.com",
        "balance": 9966.23,
        "dep": "HR",
        "age": 56,
        "ts": 1673755017972
    },
    {
        "lName": "Magenta",
        "fName": "Jack",
        "docs": [
            "Passport"
        ],
        "PD": 0.511210222043333,
        "ctry": "PL",
        "host": "pl.wikipedia.org",
        "balance": 5556.47,
        "dep": "HR",
        "age": 27,
        "ts": 1674845669100
    },
    ...
]
```

2. **coll `collTestData`**

Get the test data from the `collTestData` collector 

3. **fork**

Execute two NQLs in parallel.

3.1 **set, dst** 

Add a new `fullName` field which is a composite of the values of the fields: `Name` , `" "` (space) and `Name`.
Store the result to a collector with "data3" id .

Result:  

```json
[
    {
        "lName": "White",
        "fName": "Jake",
        "docs": [
            "IDCard",
            "Passport",
            "DrivingLicense"
        ],
        "PD": 0.43859708144526344,
        "ctry": "DE",
        "host": "www.facebook.com",
        "balance": 9966.23,
        "dep": "HR",
        "age": 56,
        "ts": 1673755017972,
        "fullName": "Jake White"
    },
    {
        "lName": "Magenta",
        "fName": "Jack",
        "docs": [
            "Passport"
        ],
        "PD": 0.511210222043333,
        "ctry": "PL",
        "host": "pl.wikipedia.org",
        "balance": 5556.47,
        "dep": "HR",
        "age": 27,
        "ts": 1674845669100,
        "fullName": "Jack Magenta"
    },
    ...
]
```

3.2 **aggr, dst**

Calculate the maximum timestamp (``latestTs``) for each person and store the result in the collector with "data4" id.

Result:

```json
[
    {
        "lName": "White",
        "fName": "Jake",
        "latestTs": 1675018088389
    },
    {
        "lName": "Magenta",
        "fName": "Jack",
        "latestTs": 1675201265593
    },
    {
        "lName": "Watermelon",
        "fName": "Harry",
        "latestTs": 1674670980569
    },
    ...
]
```

4. **coll "data3"**

Get the test data from the "data3" collector .

5. **set, valColl**

To all objects from the "data3" collector add the `latestTs`  field of which the value is taken for each person from the "data4" collector .

Result:

```json
[
    {
        "lName": "White",
        "fName": "Jake",
        "docs": [
            "IDCard",
            "Passport",
            "DrivingLicense"
        ],
        "PD": 0.43859708144526344,
        "ctry": "DE",
        "host": "www.facebook.com",
        "balance": 9966.23,
        "dep": "HR",
        "age": 56,
        "ts": 1673755017972,
        "fullName": "Jake White",
        "latestTs": null
    },
    {
        "lName": "Magenta",
        "fName": "Jack",
        "docs": [
            "Passport"
        ],
        "PD": 0.511210222043333,
        "ctry": "PL",
        "host": "pl.wikipedia.org",
        "balance": 5556.47,
        "dep": "HR",
        "age": 27,
        "ts": 1674845669100,
        "fullName": "Jack Magenta",
        "latestTs": null
    },
    ...
]
```

6. **where**

From the previously prepared set of objects (people), select only those for which `latestTs` equals `ts`. 
These are the objects containing the most recent (latest) `PD` and `balance` values. 

7. **sort**

Sort the result.

Result:

```json
[
    {
        "lName": "Amber",
        "fName": "Connor",
        "docs": [
            "IDCard",
            "Passport",
            "DrivingLicense"
        ],
        "PD": 0.48863820141709124,
        "ctry": "IE",
        "host": "www.linkedin.com",
        "balance": 1440.24,
        "dep": "ADM",
        "age": 24,
        "ts": 1675165590523,
        "fullName": "Connor Amber",
        "latestTs": 1675165590523
    },
    {
        "lName": "Green",
        "fName": "Connor",
        "docs": [
            "IDCard",
            "Passport",
            "DrivingLicense"
        ],
        "PD": 0.5409617064298299,
        "ctry": "IE",
        "host": "www.google.com",
        "balance": 5851.46,
        "dep": "ADM",
        "age": 31,
        "ts": 1674903306796,
        "fullName": "Connor Green",
        "latestTs": 1674903306796
    },
    ...
]
```



## Example 3

### Scenario

Add a new `fullName` field to all objects, sort and display them and perform data aggregation in parallel. To do this, perform three NQLs.

### NQL Query

```
src stream="testdata"  |  dst "collTestData"  
```

```
coll "collTestData" |  fork (set fullName=concat(fName, " ", lName) | limit 100 | dst "collData1"), ( aggr fieldsCount=sum(age) by fName,lName maxBuckets=2 | dst "collData2")  
```

```
coll "collData1" |  sort fullName  	 
```

### Description

Below is a step-by-step explanation of the NQL Query.

1. **dst**

   Store all objects from `testdata` in a new collector with the `collTestData` identifier.

Result:

```json
[
    {
        "lName": "White",
        "fName": "Jake",
        "docs": [
            "IDCard",
            "Passport",
            "DrivingLicense"
        ],
        "PD": 0.43859708144526344,
        "balance": 9966.23,
        "ctry": "DE",
        "host": "www.facebook.com",
        "dep": "HR",
        "age": 56,
        "ts": 1673755017972
    },
    {
        "lName": "Magenta",
        "fName": "Jack",
        "docs": [
            "Passport"
        ],
        "PD": 0.511210222043333,
        "balance": 5556.47,
        "ctry": "PL",
        "host": "pl.wikipedia.org",
        "dep": "HR",
        "age": 27,
        "ts": 1674845669100
    },
    ...
]
```

2. **coll**

   The previously created  `collTestData` data collector is the data source for the next step NQL.

3. **fork**

   On the data from the `collTestData` collector perform two NQLs in parallel: `set...` and `aggr...`.
   Each of them stores its results in the newly created `collData1` and `collData1` collectors.


Result for `set...` stored in `collData1` collector:

```json
[
    {
        "lName": "White",
        "fName": "Jake",
        "docs": [
            "IDCard",
            "Passport",
            "DrivingLicense"
        ],
        "PD": 0.43859708144526344,
        "balance": 9966.23,
        "ctry": "DE",
        "host": "www.facebook.com",
        "dep": "HR",
        "age": 56,
        "ts": 1673755017972,
        "fullName": "Jake White"
    },
    {
        "lName": "Magenta",
        "fName": "Jack",
        "docs": [
            "Passport"
        ],
        "PD": 0.511210222043333,
        "balance": 5556.47,
        "ctry": "PL",
        "host": "pl.wikipedia.org",
        "dep": "HR",
        "age": 27,
        "ts": 1674845669100,
        "fullName": "Jack Magenta"
    },
    ...
]
```

Result for `aggr...` stored in `collData2` collector:

```json
[
    {
        "fieldsCount": 560,
        "_id": [
            "Jake",
            "White"
        ]
    },
    {
        "fieldsCount": 270,
        "_id": [
            "Jack",
            "Magenta"
        ]
    }
]
```

4. **coll**

   The result of the NQL ("set...") from the previous step stored in the `collData1` collector is the data source for the next NQL.

5. **sort**

   Sort the data from the `collData1` collector and display the result.  

Result:

```json
[
    {
        "fName": "Connor",
        "lName": "Amber",
        "docs": [
            "IDCard",
            "Passport",
            "DrivingLicense"
        ],
        "PD": 0.7200228784043261,
        "balance": 1118.7,
        "ctry": "IE",
        "host": "www.linkedin.com",
        "dep": "ADM",
        "age": 24,
        "ts": 1673615235896,
        "fullName": "Connor Amber"
    },
    {
        "fName": "Connor",
        "lName": "Green",
        "docs": [
            "IDCard",
            "Passport",
            "DrivingLicense"
        ],
        "PD": 0.8421159777008483,
        "balance": 7882.33,
        "ctry": "IE",
        "host": "www.google.com",
        "dep": "ADM",
        "age": 31,
        "ts": 1673976067457,
        "fullName": "Connor Green"
    },
    ...
]
```

In this example, the data from the aggregation is ignored in further processing and not displayed at the end.




## Example 4

### Scenario

Calculate the average value of a person's balance and add it to each person object in the source table.

### NQL Query

```
src stream="testdata" |  aggr avgBalance=avg(balance) by fName, lName unwind=true |  dst "avgBalanceColl" 
```

```
src stream="testdata" |  set avgBalance=valColl("avgBalanceColl", "avgBalance", {"fName":fName, "lName":lName}) 
```

### Description

Below is a step-by-step explanation of the NQL Query.

1. Calculate the average balance value for a person and save it in the `avgBalance` field.

2. Save the results to the collector with the `avgBalanceColl` id. 

3. For each person from the `testdata` collection, add the `avgBalance` field whose value is taken from the `avgBalanceColl` collector 
   from the `avgBalance` field of the object selected in this collector after the filter
   `avgBalanceColl.fName = testdata.fName and avgBalanceColl.lName = testdata.lName`.


```json
[
  {
    "fName": "Jake",
    "lName": "White",
    "dep": "HR",
    "country": "DE",
    "age": 56,
    "host": "www.facebook.com",
    "docs": [
      "IDCard",
      "Passport",
      "DrivingLicense"
    ],
    "PD": 0.43859708144526344,
    "ts": 1673755017972,
    "balance": 9966.23,
    "avgBalance": 6849.086
  },
  {
    "fName": "Jack",
    "lName": "Magenta",
    "dep": "HR",
    "country": "PL",
    "age": 27,
    "host": "pl.wikipedia.org",
    "docs": [
      "Passport"
    ],
    "PD": 0.511210222043333,
    "ts": 1674845669100,
    "balance": 5556.47,
    "avgBalance": 4675.839
  }
  ...
]
```

## Example 5 (real data from the network)

Display five IP clients for which there is the most data.

```
src stream="netflow"  | isIp(clientIp) | aggr countClientIp=count(clientIp) by clientIp as client unwind=true | sort countClientIp desc | limit 5
```


### Description

Below is a step-by-step explanation of the NQL Query.

1. Get the data from the netflow stream.

Result (first two objects):

```json
[
    {
        "_stream": "netflow",
        "timestamp": 1677225660000,
        "sessionId": 1727,
        "clientIp": "172.16.70.220",
        "serverIp": "172.16.10.11",
        "protocol": 6,
        "clientPort": 60236,
        "serverPort": 49666,
        "application": 49666,
        "exporterIps": [
            "172.16.100.1"
        ],
        "interfaces": [
            "172.16.100.1[58]",
            "172.16.100.1[5]"
        ],
        "clientFunction": [
            "Workstations"
        ],
        "serverFunction": [
            "Workstations"
        ],
        "clientLocation": [],
        "serverLocation": [],
        "clientRole": [],
        "serverRole": [],
        "clientTcpFlags": 0,
        "serverTcpFlags": 0,
        "tosNumbers": [],
        "mpls": [],
        "asNumbers": [],
        "icmpType": [],
        "clientCountry": null,
        "serverCountry": null,
        "clientAsNumber": null,
        "serverAsNumber": null,
        "activeTime": 92,
        "firstTimestamp": 1677225416260,
        "lastTimestamp": 1677225416352,
        "clientBytes": 3756,
        "serverBytes": 1878,
        "clientPackets": 10,
        "serverPackets": 9,
        "flows": 2,
        "customField1036": null
    },
    {
        "_stream": "netflow",
        "timestamp": 1677225660000,
        "sessionId": 1729,
        "clientIp": "172.16.20.75",
        "serverIp": "8.253.186.44",
        "protocol": 6,
        "clientPort": 51310,
        "serverPort": 80,
        "application": 80,
        "exporterIps": [
            "172.16.100.1"
        ],
        "interfaces": [
            "172.16.100.1[3]",
            "172.16.100.1[5]"
        ],
        "clientFunction": [
            "Workstations"
        ],
        "serverFunction": [],
        "clientLocation": [],
        "serverLocation": [],
        "clientRole": [],
        "serverRole": [],
        "clientTcpFlags": 0,
        "serverTcpFlags": 0,
        "tosNumbers": [],
        "mpls": [],
        "asNumbers": [],
        "icmpType": [],
        "clientCountry": null,
        "serverCountry": null,
        "clientAsNumber": null,
        "serverAsNumber": null,
        "activeTime": 121156,
        "firstTimestamp": 1677225274816,
        "lastTimestamp": 1677225395972,
        "clientBytes": 80,
        "serverBytes": 40,
        "clientPackets": 2,
        "serverPackets": 1,
        "flows": 2,
        "customField1036": null
    }
    ...
]
```


2. Select only those objects in which the `clientIp` field contains the current value ip4 or ip6.

`| isIp(clientIp)`

3. Calculate the number of objects for each client ip.

`| aggr countClientIp=count(clientIp) by clientIp as client unwind=true`

Result (first three values):

```json
[
    {
        "countClientIp": 542,
        "client": "172.16.70.220"
    },
    {
        "countClientIp": 925,
        "client": "172.16.20.75"
    },
    {
        "countClientIp": 2139,
        "client": "172.16.20.141"
    }
    ...
]
```

4. Sort the results from the largest value of `countClientIp`.

5. Select the first 5 objects from the result.

Result:

```json
[
    {
        "countClientIp": 15744,
        "client": "172.16.70.36"
    },
    {
        "countClientIp": 12255,
        "client": "172.16.60.107"
    },
    {
        "countClientIp": 6888,
        "client": "172.16.10.11"
    },
    {
        "countClientIp": 4520,
        "client": "172.16.70.108"
    },
    {
        "countClientIp": 3777,
        "client": "172.16.20.59"
    }
]
```


## Example 6 (real data from the network)


### Scenario

Display ten protocols with the highest network traffic.

### NQL Query

```
src stream="netflowByProtocolAggr" 
| aggr sumClientBytes=sum(clientBytes),sumServerBytes=sum(serverBytes),sumClientPackets=sum(clientPackets),sumServerPackets=sum(serverPackets),sumFlows=sum(flows) by protocol as protocolName unwind=true 
| set _sumBytes1=add(sumClientBytes,sumServerBytes),_sumClientBitsPerSecond4=div(mul(sumClientBytes,8),60),_sumServerBitsPerSecond5=div(mul(sumServerBytes,8),60),_sumPacketsPerSecond6=div(add(sumClientPackets,sumServerPackets),60),_sumFlowsPerSecond7=div(sumFlows, 60) 
| fork (aggr _sumBytes1=sum(_sumBytes1), _sumClientBytes2=sum(sumClientBytes), _sumServerBytes3=sum(sumServerBytes), _sumClientBitsPerSecond4=sum(_sumClientBitsPerSecond4),_sumServerBitsPerSecond5=sum(_sumServerBitsPerSecond5), _sumPacketsPerSecond6=sum(_sumPacketsPerSecond6), _sumFlowsPerSecond7=sum(_sumFlowsPerSecond7), total=count(1) | set protocolName="Total", _isTotalRow=true), (sort _sumBytes1 desc | limit 10) 

```

### Description

Below is a step-by-step explanation of the NQL Query.

1. Select the data from the `netflowByProtocolAggr` stream.

```
src stream="netflowByProtocolAggr" 
```

Result:

```json
[
    {
        "_stream": "netflowByProtocolAggr",
        "timestamp": 1677196980000,
        "protocol": 17,
        "tenantId": 1284495119,
        "activeTime": 14978853,
        "clientBytes": 44116491,
        "serverBytes": 160063,
        "clientPackets": 117479,
        "serverPackets": 1045,
        "flows": 1566,
        "sessions": 676
    },
    {
        "_stream": "netflowByProtocolAggr",
        "timestamp": 1677196980000,
        "protocol": 1,
        "tenantId": 1284495119,
        "activeTime": 1120484,
        "clientBytes": 1228,
        "serverBytes": 399559,
        "clientPackets": 23,
        "serverPackets": 1263,
        "flows": 112,
        "sessions": 23
    },
    {
        "_stream": "netflowByProtocolAggr",
        "timestamp": 1677196980000,
        "protocol": 2,
        "tenantId": 1284495119,
        "activeTime": 79982,
        "clientBytes": 0,
        "serverBytes": 1224,
        "clientPackets": 0,
        "serverPackets": 34,
        "flows": 2,
        "sessions": 1
    }
]
```


2. Calculate the sum of the values of the `clientBytes`, `serverBytes`, `clientPackets` and `serverPackets` fields for each protocol.

   Set `unwind=true` then the value of the `protocol` field will be in the resulting object in the `protocolName` field, otherwise the value will be returned in the `_id:[<protocol>]` field. 

```
| aggr sumClientBytes=sum(clientBytes),
       sumServerBytes=sum(serverBytes), 
	   sumClientPackets=sum(clientPackets),
	   sumServerPackets=sum(serverPackets), 
	   sumFlows=sum(flows) 
  by protocol as protocolName unwind=true 
  
```

Result:

```json
[
    {
        "protocolName": 17,
        "sumClientBytes": 27629261045,
        "sumServerBytes": 200320556,
        "sumClientPackets": 73431273,
        "sumServerPackets": 736372,
        "sumFlows": 787521
    },
    {
        "protocolName": 1,
        "sumClientBytes": 771406,
        "sumServerBytes": 210319829,
        "sumClientPackets": 13398,
        "sumServerPackets": 706733,
        "sumFlows": 63849
    },
    {
        "protocolName": 2,
        "sumClientBytes": 0,
        "sumServerBytes": 227536,
        "sumClientPackets": 0,
        "sumServerPackets": 6318,
        "sumFlows": 491
    },
    {
        "protocolName": 6,
        "sumClientBytes": 1873217764,
        "sumServerBytes": 11520014000,
        "sumClientPackets": 16168561,
        "sumServerPackets": 9237395,
        "sumFlows": 884914
    },
    {
        "protocolName": 58,
        "sumClientBytes": 0,
        "sumServerBytes": 192648,
        "sumClientPackets": 0,
        "sumServerPackets": 3514,
        "sumFlows": 765
    }
]
```

3. Add fields whose values are the result of the following arithmetic expressions:

`_sumBytes1 = sumClientBytes + sumServerBytes`
`_sumClientBitsPerSecond4 = (sumClientBytes * 8) / 60`
`_sumServerBitsPerSecond5 = (sumServerBytes * 8) / 60`
`_sumPacketsPerSecond6 = (sumClientPackets + sumServerPackets) / 60`
`_sumFlowsPerSecond7 = sumFlows / 60`
`_sumFlowsPerSecond7 = sumFlows / 60`

```
| set _sumBytes1=add(sumClientBytes,sumServerBytes), 
      _sumClientBitsPerSecond4=div(mul(sumClientBytes,8),60), 
	  _sumServerBitsPerSecond5=div(mul(sumServerBytes,8),60), 
	  _sumPacketsPerSecond6=div(add(sumClientPackets,sumServerPackets),60), 
	  _sumFlowsPerSecond7=div(sumFlows, 60) 	 
```

Result:

```json
[
    {
        "protocolName": 17,
        "sumClientBytes": 27629261045,
        "sumServerBytes": 200320556,
        "sumClientPackets": 73431273,
        "sumServerPackets": 736372,
        "sumFlows": 787521,
        "_sumBytes1": 27829581601,
        "_sumClientBitsPerSecond4": 3683901472.6666665,
        "_sumServerBitsPerSecond5": 26709407.466666665,
        "_sumPacketsPerSecond6": 1236127.4166666667,
        "_sumFlowsPerSecond7": 13125.35
    },
    {
        "protocolName": 1,
        "sumClientBytes": 771406,
        "sumServerBytes": 210319829,
        "sumClientPackets": 13398,
        "sumServerPackets": 706733,
        "sumFlows": 63849,
        "_sumBytes1": 211091235,
        "_sumClientBitsPerSecond4": 102854.13333333333,
        "_sumServerBitsPerSecond5": 28042643.866666667,
        "_sumPacketsPerSecond6": 12002.183333333332,
        "_sumFlowsPerSecond7": 1064.15
    },
    {
        "protocolName": 2,
        "sumClientBytes": 0,
        "sumServerBytes": 227536,
        "sumClientPackets": 0,
        "sumServerPackets": 6318,
        "sumFlows": 491,
        "_sumBytes1": 227536,
        "_sumClientBitsPerSecond4": 0.0,
        "_sumServerBitsPerSecond5": 30338.133333333335,
        "_sumPacketsPerSecond6": 105.3,
        "_sumFlowsPerSecond7": 8.183333333333334
    },
    {
        "protocolName": 6,
        "sumClientBytes": 1873217764,
        "sumServerBytes": 11520014000,
        "sumClientPackets": 16168561,
        "sumServerPackets": 9237395,
        "sumFlows": 884914,
        "_sumBytes1": 13393231764,
        "_sumClientBitsPerSecond4": 249762368.53333333,
        "_sumServerBitsPerSecond5": 1536001866.6666667,
        "_sumPacketsPerSecond6": 423432.6,
        "_sumFlowsPerSecond7": 14748.566666666668
    },
    {
        "protocolName": 58,
        "sumClientBytes": 0,
        "sumServerBytes": 192648,
        "sumClientPackets": 0,
        "sumServerPackets": 3514,
        "sumFlows": 765,
        "_sumBytes1": 192648,
        "_sumClientBitsPerSecond4": 0.0,
        "_sumServerBitsPerSecond5": 25686.4,
        "_sumPacketsPerSecond6": 58.56666666666667,
        "_sumFlowsPerSecond7": 12.75
    }
]
```

4. Show results.

Show ten aggregation results by protocol from the highest value of the sum of the
`sumClientBytes` and `sumServerBytes `fields and one object containing all the summed values (total) of the fields
`_sumBytes1, sumClientBytes, sumServerBytes, _sumClientBitsPerSecond4, _sumServerBitsPerSecond5 and _sumPacketsPerSecond6, _sumFlowsPerSecond7`.


```
| fork (aggr _sumBytes1=sum(_sumBytes1), 
             _sumClientBytes2=sum(sumClientBytes), 
			 _sumServerBytes3=sum(sumServerBytes), 
			 _sumClientBitsPerSecond4=sum(_sumClientBitsPerSecond4),
			 _sumServerBitsPerSecond5=sum(_sumServerBitsPerSecond5), 
			 _sumPacketsPerSecond6=sum(_sumPacketsPerSecond6), 
			 _sumFlowsPerSecond7=sum(_sumFlowsPerSecond7), 
			 total=count(1) | set protocolName="Total", _isTotalRow=true), (sort _sumBytes1 desc | limit 10) 
```

Result:

The first object in the following list (`protocolName: Total`) contains a summary (total) of values.

```json
[
    {
        "_sumBytes1": 41572536009,
        "_sumClientBytes2": 29606497335,
        "_sumServerBytes3": 11966038674,
        "_sumClientBitsPerSecond4": 3947532978,
        "_sumServerBitsPerSecond5": 1595471823.2,
        "_sumPacketsPerSecond6": 1678277.1666666667,
        "_sumFlowsPerSecond7": 29062.8,
        "total": 5,
        "protocolName": "Total",
        "_isTotalRow": true
    },
    {
        "protocolName": 17,
        "sumClientBytes": 27719053914,
        "sumServerBytes": 201911191,
        "sumClientPackets": 73654716,
        "sumServerPackets": 742475,
        "sumFlows": 789663,
        "_sumBytes1": 27920965105,
        "_sumClientBitsPerSecond4": 3695873855.2,
        "_sumServerBitsPerSecond5": 26921492.133333333,
        "_sumPacketsPerSecond6": 1239953.1833333333,
        "_sumFlowsPerSecond7": 13161.05
    },
    {
        "protocolName": 6,
        "sumClientBytes": 1886667955,
        "sumServerBytes": 11552918926,
        "sumClientPackets": 16300918,
        "sumServerPackets": 9267241,
        "sumFlows": 888874,
        "_sumBytes1": 13439586881,
        "_sumClientBitsPerSecond4": 251555727.33333334,
        "_sumServerBitsPerSecond5": 1540389190.1333334,
        "_sumPacketsPerSecond6": 426135.98333333334,
        "_sumFlowsPerSecond7": 14814.566666666668
    },
    {
        "protocolName": 1,
        "sumClientBytes": 775466,
        "sumServerBytes": 210788181,
        "sumClientPackets": 13425,
        "sumServerPackets": 708019,
        "sumFlows": 63973,
        "_sumBytes1": 211563647,
        "_sumClientBitsPerSecond4": 103395.46666666666,
        "_sumServerBitsPerSecond5": 28105090.8,
        "_sumPacketsPerSecond6": 12024.066666666668,
        "_sumFlowsPerSecond7": 1066.2166666666667
    },
    {
        "protocolName": 2,
        "sumClientBytes": 0,
        "sumServerBytes": 227536,
        "sumClientPackets": 0,
        "sumServerPackets": 6318,
        "sumFlows": 491,
        "_sumBytes1": 227536,
        "_sumClientBitsPerSecond4": 0.0,
        "_sumServerBitsPerSecond5": 30338.133333333335,
        "_sumPacketsPerSecond6": 105.3,
        "_sumFlowsPerSecond7": 8.183333333333334
    },
    {
        "protocolName": 58,
        "sumClientBytes": 0,
        "sumServerBytes": 192840,
        "sumClientPackets": 0,
        "sumServerPackets": 3518,
        "sumFlows": 767,
        "_sumBytes1": 192840,
        "_sumClientBitsPerSecond4": 0.0,
        "_sumServerBitsPerSecond5": 25712.0,
        "_sumPacketsPerSecond6": 58.63333333333333,
        "_sumFlowsPerSecond7": 12.783333333333333
    }
]
```



## Example 7 (real data from the network)

### Scenario

Show the average amount of network traffic in bytes for each country in 3-hour time frames.

### NQL Query

```
src stream ="netflowByCountryAggr" 
| set sumClientBytesAndServerBytes = add(clientBytes, serverBytes) 
| timeAggr dcCountry0=dc(country),avgSumClientBytesAndServerBytes=avg(sumClientBytesAndServerBytes),countries=join(country),   mintimestamp=min(timestamp),maxtimestamp=max(timestamp) on timestamp interval="3h" 
| set timestampStr=tsToStr(_bucket),mintimestampStr=tsToStr(mintimestamp),maxtimestampStr=tsToStr(maxtimestamp)
| project -dcCountry0, -mintimestamp, -maxtimestamp, -_bucket

```

### Description

Below is a step-by-step explanation of the NQL Query.

1. Select the data from the `netflowByCountryAggr` stream and calculate the sum of `clientBytes + serverBytes`

`src stream ="netflowByCountryAggr" | set sumClientBytesAndServerBytes = add(clientBytes, serverBytes) `

Result:

```json
[
    {
        "_stream": "netflowByCountryAggr",
        "timestamp": 1677196800000,
        "country": "DE",
        "tenantId": 1284495119,
        "direction": 0,
        "activeTime": 439550000,
        "clientBytes": 382021135,
        "serverBytes": 379897485,
        "clientPackets": 1487888,
        "serverPackets": 1479586,
        "flows": 35164,
        "sessions": 8791,
        "sumClientBytesAndServerBytes": 761918620
    },
    {
        "_stream": "netflowByCountryAggr",
        "timestamp": 1677196800000,
        "country": "SE",
        "tenantId": 1284495119,
        "direction": 0,
        "activeTime": 732700000,
        "clientBytes": 640053594,
        "serverBytes": 638382685,
        "clientPackets": 2492900,
        "serverPackets": 2486417,
        "flows": 58614,
        "sessions": 14654,
        "sumClientBytesAndServerBytes": 1278436279
    },
    {
        "_stream": "netflowByCountryAggr",
        "timestamp": 1677196800000,
        "country": "DK",
        "tenantId": 1284495119,
        "direction": 0,
        "activeTime": 88827750000,
        "clientBytes": 77620570054,
        "serverBytes": 77625811592,
        "clientPackets": 302319389,
        "serverPackets": 302339738,
        "flows": 7106172,
        "sessions": 1776555,
        "sumClientBytesAndServerBytes": 155246381646
    },
   ...
]	
```


2. Calculate the average value over a 3-hour interval and save it to the `avgSumClientBytesAndServerBytes` variable.

In addition, the data from the country field is combined, so as to show a list of countries in a given time interval (`countries` variable) and the beginning and end of a given time interval (`mintimestamp, maxtimestamp` variables).

```
| timeAggr dcCountry0=dc(country),
	avgSumClientBytesAndServerBytes=avg(sumClientBytesAndServerBytes),
	sum1 = sum(sumClientBytesAndServerBytes),
	countries=join(country),	
	mintimestamp=min(timestamp),
	maxtimestamp=max(timestamp) 
	on timestamp interval="3h" 
```


Result:

```json
[
    {
        "dcCountry0": 4,
        "avgSumClientBytesAndServerBytes": 78643487893.42223,
        "countries": "DE,SE,DK,US,DE,SE,DK,US,DE,SE,DK,...",
        "mintimestamp": 1677196800000,
        "maxtimestamp": 1677207540000,
        "_bucket": 1677196800000
    },
    {
        "dcCountry0": 4,
        "avgSumClientBytesAndServerBytes": 78643537084.8361,
        "countries": "DE,SE,DK,US,DE,SE,DK,US,DE,SE,DK,...",
        "mintimestamp": 1677207600000,
        "maxtimestamp": 1677218340000,
        "_bucket": 1677207600000
    },
    {
        "dcCountry0": 4,
        "avgSumClientBytesAndServerBytes": 78643425062.48611,
        "countries": "DE,SE,DK,US,DE,SE,DK,US,DE,SE,DK,...",
        "mintimestamp": 1677218400000,
        "maxtimestamp": 1677229140000,
        "_bucket": 1677218400000
    },
    {
        "dcCountry0": 4,
        "avgSumClientBytesAndServerBytes": 78643393605.52942,
        "countries": "DE,SE,DK,US,DE,SE,DK,US,DE,SE,DK,...",
        "mintimestamp": 1677229200000,
        "maxtimestamp": 1677231180000,
        "_bucket": 1677229200000
    }
]
```

3. Convert variables containing a `timestamp` value to a readable text value.

```
| set timestampStr=tsToStr(_bucket),
	mintimestampStr=tsToStr(mintimestamp),
	maxtimestampStr=tsToStr(maxtimestamp)
```

Result:

```json
[
    {
        "dcCountry0": 4,
        "avgSumClientBytesAndServerBytes": 78643487893.42223,
        "countries": "DE,SE,DK,US,DE,SE,DK,US,DE,SE,DK,...",
        "mintimestamp": 1677196800000,
        "maxtimestamp": 1677207540000,
        "_bucket": 1677196800000,
        "timestampStr": "2023-02-24 00:00:00.000",
        "mintimestampStr": "2023-02-24 00:00:00.000",
        "maxtimestampStr": "2023-02-24 02:59:00.000"
    },
    {
        "dcCountry0": 4,
        "avgSumClientBytesAndServerBytes": 78643537084.8361,
        "countries": "DE,SE,DK,US,DE,SE,DK,US,DE,SE,DK,US,...",
        "mintimestamp": 1677207600000,
        "maxtimestamp": 1677218340000,
        "_bucket": 1677207600000,
        "timestampStr": "2023-02-24 03:00:00.000",
        "mintimestampStr": "2023-02-24 03:00:00.000",
        "maxtimestampStr": "2023-02-24 05:59:00.000"
    },
    {
        "dcCountry0": 4,
        "avgSumClientBytesAndServerBytes": 78643425062.48611,
        "countries": "DE,SE,DK,US,DE,SE,DK,US,DE,SE,DK,US,...",
        "mintimestamp": 1677218400000,
        "maxtimestamp": 1677229140000,
        "_bucket": 1677218400000,
        "timestampStr": "2023-02-24 06:00:00.000",
        "mintimestampStr": "2023-02-24 06:00:00.000",
        "maxtimestampStr": "2023-02-24 08:59:00.000"
    },
    {
        "dcCountry0": 4,
        "avgSumClientBytesAndServerBytes": 78643404454.77777,
        "countries": "DE,SE,DK,US,DE,SE,DK,US,DE,SE,DK,US,...",
        "mintimestamp": 1677229200000,
        "maxtimestamp": 1677231300000,
        "_bucket": 1677229200000,
        "timestampStr": "2023-02-24 09:00:00.000",
        "mintimestampStr": "2023-02-24 09:00:00.000",
        "maxtimestampStr": "2023-02-24 09:35:00.000"
    }
]
```

4. Remove the fields you do not want to display from the result .

`| project -dcCountry0, -mintimestamp, -maxtimestamp, -_bucket`

Result:

```json
[
    {
        "avgSumClientBytesAndServerBytes": 78643487893.42223,
        "countries": "DE,SE,DK,US,DE,SE,DK,US,DE,SE,DK,US,DE,SE,...",
        "timestampStr": "2023-02-24 00:00:00.000",
        "mintimestampStr": "2023-02-24 00:00:00.000",
        "maxtimestampStr": "2023-02-24 02:59:00.000"
    },
    {
        "avgSumClientBytesAndServerBytes": 78643537084.8361,
        "countries": "DE,SE,DK,US,DE,SE,DK,US,DE,SE,DK,US,DE,SE,...",
        "timestampStr": "2023-02-24 03:00:00.000",
        "mintimestampStr": "2023-02-24 03:00:00.000",
        "maxtimestampStr": "2023-02-24 05:59:00.000"
    },
    {
        "avgSumClientBytesAndServerBytes": 78643425062.48611,
        "countries": "DE,SE,DK,US,DE,SE,DK,US,DE,SE,DK,US,DE,SE,...",
        "timestampStr": "2023-02-24 06:00:00.000",
        "mintimestampStr": "2023-02-24 06:00:00.000",
        "maxtimestampStr": "2023-02-24 08:59:00.000"
    },
    {
        "avgSumClientBytesAndServerBytes": 78643408233.22368,
        "countries": "DE,SE,DK,US,DE,SE,DK,US,DE,SE,DK,US,DE,SE,...",
        "timestampStr": "2023-02-24 09:00:00.000",
        "mintimestampStr": "2023-02-24 09:00:00.000",
        "maxtimestampStr": "2023-02-24 09:37:00.000"
    }
]
```



## Example 8 (real data from the network)

### Scenario

Threats Trajectory for most suspicious IPs. 

### NQL Query

```
src stream="alerts" 
 | valInColl(clientIp, "top10ClientIpLast15Minute_Alerts", "clientIp") 
 | splitAggr countAlertName0=count(alertName) 
             (timeAggr on timestamp interval="1m" dir="desc" bucketAlias="srcEventTimestamp"), 
             (aggr by clientIp as clientIp unwind=true maxBuckets=20) unwind=true 
 | sort countAlertName0 desc 
 | limit 480

```


### Description

Below is a step-by-step explanation of the NQL Query.


1. Select the data from the `alerts` stream and take only those objects which have an entry in the `top10ClientIpLast15Minute_Alerts` collector for client IP value.


```
src stream="alerts" 
 | valInColl(clientIp, "top10ClientIpLast15Minute_Alerts", "clientIp") 
```

Result:

```json
[
    {
        "id": "61c43b97-0e06e7a1-3e17bce1",
        "timestamp": 1679616180000,
        "alertName": "Brute Force Attack",
        "alertSeverity": "Medium",
        "alertRuleType": "Security",
        "alertTags": [
            "60143f92-3f2b5b74-c234033d",
            "60143f92-3f2b5b74-c2340327"
        ],
        "alertRuleId": "Credential Access_015",
        "alertFlagThresholdLevel": "Critical",
        "alertSeen": false,
        "alertFalsePositive": false,
        "alertComment": null,
        "alertMitreTactic": "Credential Access",
        "alertMitreTechnique": "Brute Force",
        "alertMitreId": "T1110",
        "alertMitreSubtechnique": null,
        "alertDefId": "61a869fa-825ce206-718d6533",
        "alertAckUser": null,
        "alertAckLastUpdate": null,
        "alertFalsePositiveUser": null,
        "alertFalsePositiveLastUpdate": null,
        "alertCommentUser": null,
        "alertCommentLastUpdate": null,
        "_firstServerCountry": null,
        "serverPort": 443,
        "_serverIp": "172.16.60.31",
        "_firstServerPort": 443,
        "_firstClientCountry": null,
        "_firstClientIp": "172.16.70.243",
        "_firstClientFunction": [
            "Workstations"
        ],
        "_firstServerFunction": [
            "Workstations"
        ],
        "clientIp": "172.16.70.243",
        "serverIp": "172.16.60.31",
        "_clientIp": "172.16.70.243",
        "_countSessions": 949,
        "_firstServerIp": "172.16.60.31",
        "_firstClientAsn": null,
        "_firstServerAsn": null
    },
    {
        "id": "61c43b97-0e06e7a1-3e17bce3",
        "timestamp": 1679616180000,
        "alertName": "Brute Force Attack 2",
        "alertSeverity": "Medium",
        "alertRuleType": "Security",
        "alertTags": [
            "60143f92-3f2b5b74-c234033d",
            "60143f92-3f2b5b74-c2340327"
        ],
        "alertRuleId": "Credential Access_019",
        "alertFlagThresholdLevel": "Critical",
        "alertSeen": false,
        "alertFalsePositive": false,
        "alertComment": null,
        "alertMitreTactic": "Credential Access",
        "alertMitreTechnique": "Brute Force",
        "alertMitreId": "T1110",
        "alertMitreSubtechnique": null,
        "alertDefId": "61a739be-037e4715-be7c2dcf",
        "alertAckUser": null,
        "alertAckLastUpdate": null,
        "alertFalsePositiveUser": null,
        "alertFalsePositiveLastUpdate": null,
        "alertCommentUser": null,
        "alertCommentLastUpdate": null,
        "_firstServerCountry": null,
        "serverPort": 443,
        "_serverIp": "172.16.60.31",
        "_firstServerPort": 443,
        "_firstClientCountry": null,
        "_firstClientIp": "172.16.70.243",
        "_firstClientFunction": [
            "Workstations"
        ],
        "_firstServerFunction": [
            "Workstations"
        ],
        "clientIp": "172.16.70.243",
        "serverIp": "172.16.60.31",
        "_clientIp": "172.16.70.243",
        "_countSessions": 949,
        "_firstServerIp": "172.16.60.31",
        "_firstClientAsn": null,
        "_firstServerAsn": null
    },
    ...
]
```



2. Calculate the number of alerts in groups by time bucket `1m` (one month) and `clientIp` value.

```
 | splitAggr countAlertName0=count(alertName) 
           (timeAggr on timestamp interval="1m" dir="desc" bucketAlias="srcEventTimestamp"), 
           (aggr by clientIp as clientIp unwind=true maxBuckets=20) unwind=true 
```

2.1. Calculate the number of alerts in `1m` time range buckets.

```
 | splitAggr countAlertName0=count(alertName) 
           (timeAggr on timestamp interval="1m" dir="desc" bucketAlias="srcEventTimestamp")           
```

Result:

```json
[
    {
        "countAlertName0": 2,
        "srcEventTimestamp": 1679644920000
    },
    {
        "countAlertName0": 2,
        "srcEventTimestamp": 1679644860000
    },
    ...
]
```

2.2. Calculate the number of alerts in `clientIp` groups.

```
 | splitAggr countAlertName0=count(alertName)            
           (aggr by clientIp as clientIp unwind=true maxBuckets=20) unwind=true 
```

Result:

```json
[
    {
        "countAlertName0": 166,
        "clientIp": "172.16.70.243"
    },
    {
        "countAlertName0": 35,
        "clientIp": "172.16.42.30"
    },
    {
        "countAlertName0": 28,
        "clientIp": "110.78.211.84"
    }
]
```


Result for `splitAggr`:

```json
[
    {
        "countAlertName0": 2,
        "clientIp": "172.16.70.243",
        "srcEventTimestamp": 1679644620000
    },
    {
        "countAlertName0": 2,
        "clientIp": "172.16.70.243",
        "srcEventTimestamp": 1679644500000
    },
    {
        "countAlertName0": 2,
        "clientIp": "172.16.70.243",
        "srcEventTimestamp": 1679644380000
    },
    ...
]		
```


3. Sort the objects by the number of alerts and show the first 480 objects

```
| sort countAlertName0 desc 
| limit 480
```

Result:

```json
[
    {
        "countAlertName0": 2,
        "clientIp": "172.16.70.243",
        "srcEventTimestamp": 1679644680000
    },
    {
        "countAlertName0": 2,
        "clientIp": "172.16.70.243",
        "srcEventTimestamp": 1679644620000
    },
    {
        "countAlertName0": 2,
        "clientIp": "172.16.70.243",
        "srcEventTimestamp": 1679644500000
    },
    ...
]
```



## Example 9 (real data from the network)

### Scenario

A rule detects a brute force/dictionary attack on specific applications (FTP, HTTPS, HTTP, IMAP, RDP, SSH, IMAP3, LDAP, LDAPS, MYSQL, POP3, POP3S, POSTGRESQL, SMTP, TELNET, TFTP, ASTERISK, VNC, SNMP, MSSQL, SMB, ICQ, NNTP, PCANYWHERE, ORACLELISTENER, SVN, XMPP, SIP, RADMIN2, REXEC, RLOGIN, WS - Management and PowerShell remoting via HTTP, WS - Management and PowerShell remoting via HTTPS, RPCAP, NetBIOS, Kerberos) from a single IP address to the same host. 

### NQL Query

```
src stream="netflow" 
| in(serverPort,[21,22,23,25,69,80,88,110,119,139,143,161,220,389,443,445,512,513,636,995,1433,1521,2002,3306,3389,3690,4000,4899,5038,5060,5222,5432,5631,5900,5985,5986,6667]) 
| aggr _countSessions=count(timestamp), 
       _clientIp=first(clientIp), 
	   _firstClientCountry=first(clientCountry), 
	   _firstClientFunction=first(clientFunction), 
	   _serverIp=first(serverIp), 
	   _firstServerCountry=first(serverCountry), 
	   _firstServerFunction=first(serverFunction), 
	   _firstClientIp=first(clientIp),
	   _firstServerIp=first(serverIp), 
	   _firstServerPort=first(serverPort) by clientIp as clientIp, serverIp as serverIp, serverPort as serverPort unwind=true 
| sort _countSessions desc 
| limit 100 
| set _firstClientAsn=lookup("ip-as","name", {"ip": _clientIp} ), _firstServerAsn=lookup("ip-as","name", {"ip": _serverIp} ) 
| limit 1000
```


### Description

Below is a step-by-step explanation of the NQL Query.

1. Select objects from the `netflow` stream for which the value of the `serverPort ` field is on the list: `21,22,23,25,69,80,88,110,119,139,143,161,220,389,443,445,512,513,636,995,1433,1521,2002,3306,3389,3690,4000,4899,5038,5060,5222,5432,5631,5900,5985,5986,6667`.


```
src stream="netflow" 
| in(serverPort,[21,22,23,25,69,80,88,110,119,139,143,161,220,389,443,445,512,513,636,995,1433,1521,2002,3306,3389,3690,4000,4899,5038,5060,5222,5432,5631,5900,5985,5986,6667]) 
```

Result:

```json
[
    {
        "_stream": "netflow",
        "timestamp": 1677603840000,
        "sessionId": 1,
        "clientIp": "172.16.60.107",
        "serverIp": "172.105.8.229",
        "protocol": 6,
        "clientPort": 44276,
        "serverPort": 443,
        "application": 443,
        "exporterIps": [
            "172.16.100.1"
        ],
        "interfaces": [
            "172.16.100.1[3]",
            "172.16.100.1[5]"
        ],
        "clientFunction": [
            "Workstations"
        ],
        "serverFunction": [],
        "clientLocation": [],
        "serverLocation": [],
        "clientRole": [],
        "serverRole": [],
        "clientTcpFlags": 0,
        "serverTcpFlags": 0,
        "tosNumbers": [],
        "mpls": [],
        "asNumbers": [],
        "icmpType": [],
        "clientCountry": null,
        "serverCountry": null,
        "clientAsNumber": null,
        "serverAsNumber": null,
        "activeTime": 1368,
        "firstTimestamp": 1677603559044,
        "lastTimestamp": 1677603560436,
        "clientBytes": 1622,
        "serverBytes": 25892,
        "clientPackets": 15,
        "serverPackets": 25,
        "flows": 4
    },
    {
        "_stream": "netflow",
        "timestamp": 1677603840000,
        "sessionId": 3,
        "clientIp": "172.16.20.141",
        "serverIp": "52.97.229.210",
        "protocol": 6,
        "clientPort": 60297,
        "serverPort": 443,
        "application": 443,
        "exporterIps": [
            "172.16.100.1"
        ],
        "interfaces": [
            "172.16.100.1[4]",
            "172.16.100.1[5]"
        ],
        "clientFunction": [
            "Workstations"
        ],
        "serverFunction": [],
        "clientLocation": [],
        "serverLocation": [],
        "clientRole": [],
        "serverRole": [],
        "clientTcpFlags": 0,
        "serverTcpFlags": 0,
        "tosNumbers": [],
        "mpls": [],
        "asNumbers": [],
        "icmpType": [],
        "clientCountry": null,
        "serverCountry": null,
        "clientAsNumber": null,
        "serverAsNumber": null,
        "activeTime": 43948,
        "firstTimestamp": 1677603524348,
        "lastTimestamp": 1677603568296,
        "clientBytes": 40,
        "serverBytes": 1273,
        "clientPackets": 1,
        "serverPackets": 3,
        "flows": 2
    },
    ...
]
```

2. Select the first values of the ` _clientIp, _firstClientCountry, _firstClientFunction, _serverIp, _firstServerCountry, _firstServerFunction, _firstClientIp, _firstServerIp, _firstServerPort`  fields for the given `clientIp, serverIp` i `serverPort` groups and the calculation of the number of objects in these groups (`_countSessions`).

```
| aggr _countSessions=count(timestamp), 
       _clientIp=first(clientIp), 
	   _firstClientCountry=first(clientCountry), 
	   _firstClientFunction=first(clientFunction), 
	   _serverIp=first(serverIp), 
	   _firstServerCountry=first(serverCountry), 
	   _firstServerFunction=first(serverFunction), 
	   _firstClientIp=first(clientIp),
	   _firstServerIp=first(serverIp), 
	   _firstServerPort=first(serverPort) by clientIp as clientIp, serverIp as serverIp, serverPort as serverPort unwind=true 
```

Result:

```json
[
    {
        "_firstServerCountry": null,
        "serverPort": 443,
        "_serverIp": "172.105.8.229",
        "_firstServerPort": 443,
        "_firstClientCountry": null,
        "_firstClientIp": "172.16.60.107",
        "_firstClientFunction": [
            "Workstations"
        ],
        "_firstServerFunction": [],
        "clientIp": "172.16.60.107",
        "serverIp": "172.105.8.229",
        "_clientIp": "172.16.60.107",
        "_countSessions": 4,
        "_firstServerIp": "172.105.8.229"
    },
    {
        "_firstServerCountry": null,
        "serverPort": 443,
        "_serverIp": "52.97.229.210",
        "_firstServerPort": 443,
        "_firstClientCountry": null,
        "_firstClientIp": "172.16.20.141",
        "_firstClientFunction": [
            "Workstations"
        ],
        "_firstServerFunction": [],
        "clientIp": "172.16.20.141",
        "serverIp": "52.97.229.210",
        "_clientIp": "172.16.20.141",
        "_countSessions": 19,
        "_firstServerIp": "52.97.229.210"
    },
    ...
]
````


3. Sort the results by the` _countSessions` field in descending order and select the first 100 objects. 

```
| sort _countSessions desc 
| limit 100 
```

Result:

```json
[
    {
        "_firstServerCountry": null,
        "serverPort": 443,
        "_serverIp": "209.206.5.62",
        "_firstServerPort": 443,
        "_firstClientCountry": null,
        "_firstClientIp": "172.16.10.76",
        "_firstClientFunction": [
            "Workstations"
        ],
        "_firstServerFunction": [],
        "clientIp": "172.16.10.76",
        "serverIp": "209.206.5.62",
        "_clientIp": "172.16.10.76",
        "_countSessions": 223,
        "_firstServerIp": "209.206.5.62"
    },
    {
        "_firstServerCountry": null,
        "serverPort": 443,
        "_serverIp": "52.113.194.132",
        "_firstServerPort": 443,
        "_firstClientCountry": null,
        "_firstClientIp": "172.16.43.38",
        "_firstClientFunction": [
            "Workstations"
        ],
        "_firstServerFunction": [],
        "clientIp": "172.16.43.38",
        "serverIp": "52.113.194.132",
        "_clientIp": "172.16.43.38",
        "_countSessions": 146,
        "_firstServerIp": "52.113.194.132"
    },
    ...
]
```


4. Add the `_firstClientAsn` and `_firstServerAsn` fields  whose values are selected from the `ip-as` and `ip-as` files (lookups), from the `name` field for conditions: `ip=_clientIp` oraz `ip=_serverIp`. Get the first 1000 objects.

```
| set _firstClientAsn=lookup("ip-as","name", {"ip": _clientIp} ), _firstServerAsn=lookup("ip-as","name", {"ip": _serverIp} ) 
| limit 1000
```

Result:

```json
[
    {
        "_firstServerCountry": null,
        "serverPort": 443,
        "_serverIp": "209.206.5.62",
        "_firstServerPort": 443,
        "_firstClientCountry": null,
        "_firstClientIp": "172.16.10.76",
        "_firstClientFunction": [
            "Workstations"
        ],
        "_firstServerFunction": [],
        "clientIp": "172.16.10.76",
        "serverIp": "209.206.5.62",
        "_clientIp": "172.16.10.76",
        "_countSessions": 223,
        "_firstServerIp": "209.206.5.62",
        "_firstClientAsn": 23456,
        "_firstServerAsn": 65535
    },
    {
        "_firstServerCountry": null,
        "serverPort": 443,
        "_serverIp": "52.113.194.132",
        "_firstServerPort": 443,
        "_firstClientCountry": null,
        "_firstClientIp": "172.16.43.38",
        "_firstClientFunction": [
            "Workstations"
        ],
        "_firstServerFunction": [],
        "clientIp": "172.16.43.38",
        "serverIp": "52.113.194.132",
        "_clientIp": "172.16.43.38",
        "_countSessions": 146,
        "_firstServerIp": "52.113.194.132",
        "_firstClientAsn": 131072,
        "_firstServerAsn": 64512
    },
    ...
]
```



