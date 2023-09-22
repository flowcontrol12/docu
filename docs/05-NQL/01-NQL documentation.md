# NQL User Manual

This document describes the NQL query language.

## Glossary

| Term              | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| field             | Key-value pair, a way of storing information, e.g. name=John. In special cases, it is allowed to store an empty value in the field. It is not possible to create a field with an empty/undefined key. The value of the field for a specific data type. |
| object            | A collection of fields that form the basic unit of data storage. It has mandatory/system fields. A blank document has only mandatory/system fields. |
| collection        | A logical container for storing objects. The collection can be empty, or it can be distributed.  Provides an interface for querying, adding/deleting/modifying documents regardless of their internal organization. |
| input collection  | A collection of objects (input objects) that is passed to the command. |
| output collection | A collection of objects (output objects) that is the result of executing a command. |
| stream            | Data source. Generates (on demand or continuously) a sequence of objects (collection) of a specific type (origin). |
| command           | Processes a set of data (collections) coming from the input and passes the output result. Commands can be more than one and can form a so-called pipe: source1 \| command1 \| command2 \| .... commandN. Each command has an input and an output of data (collections). The input of a command is a sequence of input objects (collection) which are the result (output) of the previous command or stream. The result of a command is a collection of output objects. A special type of command is a stream, which has only an output. |
| pipe (nql)        | A sequence of commands that process collections of objects results in the processing of data sets originating "on the left side" and passes the results "to the right". A pipeline is defined by an nql expression. |
| argN              | A function's Nth argument.                                   |
| kwarg             | A function's argument in format `key=value`.                 |



### Data types

| Typ                | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| boolean            | boolean value true or false.                                 |
| number             | A number of type: byte, int, long, float lub double          |
| byte               | byte                                                         |
| int                | 32 bits integer number                                       |
| long               | 64 bits integer number                                       |
| float              | 32 bits floating point number                                |
| double             | 64 bits floating point number                                |
| string             | A sequence of characters (default type).                     |
| ip4                | IP address version 4                                         |
| ip6                | IP version 6                                                 |
| ip                 | IP version 4 or 6                                            |
| mac                | MAC address MAC                                              |
| subnet             | Subnet address                                               |
| datetime           | Date and Time                                                |
| timespan           | a time (look [timespan](#timespan))                          |
| map                | A collection of key->value pairs.                            |
| collection         | A collection, array or set.                                  |
| object             | A type which means that a variable or function has a one of the types described above. |
| logical_expression | A boolean expression which returns a value of boolean type.  |


Notice: the operators or functions aare to perform an internal conversion of types so that while creating a query there is no need to provide the NQL with the types each time. 
In the absence of a "logically" reasonable manner of procedure, the function/expression treats the data as String (default form). 

For example:

`asd + asd = asdasd`

`2 + 2 = 4`

`asd + 2 = asd2`


#### timespan

`timespan` defines a point in time.

accepts:

- a number value which is a number of milliseconds since EPOCH.

- an expression containing the '@' special character.

| timespan                         | Description                             |
| -------------------------------- | --------------------------------------- |
| @now                             | Current time (UTC) |
| -1m@now                          | Current time minus 1 minute. |
| @2632913200000                   | Set a fixed timestamp value to 2632913200000.|
| 2632913200000                    | Like above.|
| -1h@2632913200000                | 2632913200000 time minus 1 hour.|
| -15s@2007-12-03T10:15:30+01:00   | 15 seconds earlier calculated from date and time with offset (2007-12-03T10:15:30+01:00). |
| -1m20s@2007-12-03T10:15:30       | 1 minute and 20 seconds earlier calculated from date and time (2007-12-03T10:15:30) local.|



***

An example of collection of objects containing person's data.

```json
[
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
	}
]
```

## Streams

### source (src)

The command feeds NQL with objects. It must always be located as the first element. 
Generates collections of objects from a given source in the form of an Object List. 
An object or a list of objects can have many forms, more or less structured and it depends on the type of source and its native capabilities. 
If it is, for example, a relational database or a csv file, then it will be a fixed structure form that may be a requirement and can be controlled. 
Sometimes, it is possible to use objects of a less complex form. It is assumed that the source has its own configuration, 
character (e.g. whether it is a stream or a database) which affects the form of the objects undergoing further processing.

#### Syntax

```src stream="string" [startTime="timespan" endTime="timespan"]```

#### Parameters

| Parameter name | Required/not required; Field type | Description |
| --------------- | ----------------- | ---- |
| stream          | Yes; string   | Source name with objects. |
| startTime       | No; timespan   | Start and end of the time range. Format: (see defining time). |
| endTime         | No; timespan   | End of time range. Format: (see defining time). |

#### Example

```
src stream="{string}" [startTime="{time}" endTime="{time}"]
```


***
### dst 

The command stores the result to a new collector with the specified name. If a collector with the specified name already exists, the command will return an error. A collector created and fed in this way can be the data source for the next nql.


#### Syntax

```dst {collectorName}```

#### Parameters

| Parameter Name | Required/not required; Field type | Description |
| --------------- | ----------------- | ---- |
| collectorName   | Yes; string       | Collector name. |

#### Example

Store the first 1000 objects from the source `{test_data}` to a collector named `collector1`.

```
src stream="testdata" | limit 1000 | dst "collector1"
```

***
### collector (coll)

The command feeds NQL with objects taken from the collector with the given ID. 


#### Syntax

``` coll {id} [bunchSize={liczba}] ```


#### Parameters

| Parameter Name | Required/not required; Field type | Description |
| --------------- | ----------------- | ---- |
| id              | Yes, string | Identifier of the collector from which objects will be retrieved. |
| bunchSize       | No, int  | Maximum number of objects retrieved from the collector. |



#### Example 1

```
1. src stream="testdata" | set fullName=concat(fName, " ", lName) | limit 1000 | dst "collector1"

2. coll "collector1" | sort fullName
```

The first nql adds the fullName field to the objects and stores the results in a collector with the "collector1" identifier . The second nql uses the "collector1" collector as the data source and then sorts it by the fullName field.

***
### records

The command generates a collection of objects passed to the output.

#### Syntax
```
records {tuple0} [, ... {tupleN}] 
```


#### Parameters

| Parameter Name | Required/not required; Field type | Description |
| --------------- | ----------------- | ---- |
| tuple0..N | Yes, string | The collection of objects that will be passed to the command output. |




#### Example 1
```
records {"fName":"Jake","dep":"IT"},{"fName":"Jack","dep":"ADM"},{"fName":"Harry","dep":"ADM"},{"fName":"Jacob","dep":"IT"}
```



## Commands

### sort

The command sorts the collection objects according to the value of the field. Sorting is performed for a maximum number of records specified in the "limit" parameter.

#### Syntax
```
| sort field1 [asc/desc] [,… fieldN [asc/desc]] [limit={number}] [outLimit={number}]
```


#### Parameters

| Parameter Name | Required/not required; Field type | Description                                                  |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| field1..N      | Yes, string                       | The field or list of fields by which the sorting will be performed. |
| asc / desc     | No, string                        | Sort order from the lowest value (asc) or from the highest value (desc). |
| limit          | No, int                           | Limit of records that will be sorted (default is 100 thousand). |
| outLimit       | No, int                           | Output record limit; changes the default limit to 1 million. |


#### Example 1
```
src stream="testdata" | sort fName, lName asc limit=1000
```

***
### project

The command allows you to select the object fields that will be passed to the output and/or renaming of the fields. Renaming does not change the names of the input object fields, it only causes the name to be remapped to the output object. For example, the field fName="John" in the output object will take the form of name="John".


#### Syntax

```
| project +{fieldName} as alias} / -{fieldName},...
```

#### Parameters

| Parameter Name    | Required/not required; Field type | Description |
| ------------------ | ----------------- | ---- |
| +fieldName         | No, string      | Keeps the "fieldName" field from the object and passes it on. The output object will have only the specified (+) fields. |
| -fieldName         | No, string      | Removes the "fieldName" field. Passes on an object with all fields except the specified field. |
| fieldName as alias | No, string      | Passes the field under a changed name. |


#### Example 1

```src stream="testdata" | project +fName, +lName ```

Input:

```{"fName": "Jake","lName": "White","dep": "IT","ctry": "FR"} , ...```


Result: 

```{"fName": "Jake","lName": "White"}, ...```


#### Example 2

```
src stream="testdata" | project fName as imie 
```

Input: 

```
{"**fName**": "Jake","lName": "White","dep": "IT","ctry": "FR"},...
```


Result:

```
{"**imie**": "Jake","lName": "White","dep": "IT","ctry": "FR"},... 
```


#### Example 3

```
src stream="testdata" | project -fName
```

Input: 

```
{**"fName": "Jake"**,"lName": "White","dep": "IT","ctry": "FR"},... 
```

Result: 

```
{"lName": "White","dep": "IT","ctry": "FR"},…
```



#### Example 4

Renaming fields in the object and removing the docs field.
```
src stream="testdata" | project -docs, fName as Imie, lName as Nazwisko, dep as Departament, ctry as Kraj, age as Wiek, ts as TimeStamp, PD as ProbalilityOfDefault, balance as BalancePLN | limit 2
```

Result:
```json
[
	{
		"Nazwisko": "White",
		"Imie": "Jake",
		"ProbalilityOfDefault": 0.27245159724157366,
		"Kraj": "US",
		"host": "www.linkedin.com",
		"BalancePLN": 3366.13,
		"Departament": "HR",
		"Wiek": 26,
		"TimeStamp": 1675164610825
	},
	{
		"Nazwisko": "Magenta",
		"Imie": "Jack",
		"ProbalilityOfDefault": 0.2100865387760955,
		"Kraj": "DE",
		"host": "www.facebook.com",
		"BalancePLN": 103.09,
		"Departament": "HR",
		"Wiek": 40,
		"TimeStamp": 1675163862053
	}
]
```

***
### limit

The command truncates collections of output objects to a specified number of objects. It returns the {limit} of the first objects from the given source, starting from the {offset} position.


#### Syntax
```
| limit [{offset},] {limit}
```


#### Parameters

| Parameter Name | Required/not required; Field type | Description                                                  |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| offset         | No,  int                          | The position from which objects will be returned.            |
| limit          | Yes,  int or constant value "ALL" | Limit of objects that will be returned in the result.  The value can be a number or the ALL keyword can be used. |



#### Example 1.

The first 10 objects.

```
src stream="testdata" | limit 10
```

#### Example 2. 

The first 10 objects, starting from position 2.

```
src stream="testdata" | limit 2, 10 
```

#### Example 3.

All objects starting from position 1.

```
src stream="testdata" | limit 1, ALL
```

***
### tail

The command returns the last n objects from the input collection. 

#### Syntax
```
| tail {limit}
```

#### Parameters

| Parameter Name   | Required/not required; Field type | Description |
| ----------------- | ----------------- | ---- |
| limit | Yes, int | Number of returned objects. |

#### Example 1. 

Retrieve the last two objects after sorting by fName (First Name) field.

```
src stream="testdata" | sort fName | tail 2
```

Result:
```json
[
	{
		"lName": "Copper ",
		"fName": "Olive",
		"PD": 0.1309446006188828,
		"ctry": "HU",
		"host": "www.facebook.com",
		"balance": 5651.48,
		"dep": "HR",
		"age": 40,
		"ts": 1675163747517
	},
	{
		"lName": "Burgundy",
		"fName": "Olive",
		"PD": 0.8857972263415672,
		"ctry": "PL",
		"host": "www.youtube.com",
		"balance": 2013.32,
		"dep": "IT",
		"age": 47,
		"ts": 1675163804504
	}
]
```

***
### set / add

The command adds or creates a new field in all records. 

**Set** adds a new field if the field with the specified name does not exist or changes the value of an existing field. 
**Add** always adds a new field with the specified name. If a field with the specified name already exists in the object, the add command does nothing. 

#### Syntax

```
| set fieldName={expression}[, … fieldNameN={expression}] 
| add fieldName={expression}[, … fieldNameN={expression}] 
```


#### Parameters

| Parameter Name | Required/not required; Field type | Description |
| --------------- | ----------------- | ---- |
| fieldName={expression} | Yes | New fields named "fieldName" having a value calculated with the "expression" expression . |



#### Example 1. 

Adding two new fields to objects.

Add the ```fullName = fName + " " + lName``` field and the ```agePlus10 = age + 10``` field and retrieve the first two objects.


```
src stream="testdata" | set fullName = concat(fName, " ", lName), aggPlus10 = add(age, 10) | limit 2
```

Result:
```json
[
	{
		"lName": "White",
		"fName": "Jake",
		"PD": 0.27245159724157366,
		"ctry": "US",
		"host": "www.linkedin.com",
		"balance": 3366.13,
		"dep": "HR",
		"age": 26,
		"ts": 1675164610825,
		"fullName": "Jake White",
		"agePlus10": 36
	},
	{
		"lName": "Magenta",
		"fName": "Jack",
		"PD": 0.2100865387760955,
		"ctry": "DE",
		"host": "www.facebook.com",
		"balance": 103.09,
		"dep": "HR",
		"age": 40,
		"ts": 1675163862053,
		"fullName": "Jack Magenta",
		"agePlus10": 50
	}
]
```

***
### top / rare

The command returns the {limit} of the most frequent (top)/rarest (rare) values of the expression. 

#### Syntax

```
| top {field} [by {field_name, [field_name1, ….]}] [limit=number] [others=true/false]  [maxBuckets=number]
 
| rare {field} [by {field_name, [field_name1, ….]}] [limit=number] [others=true/false] [maxBuckets=number]
```

#### Parameters

| Parameter Name | Required/not required; Field type | Description |
| --------------- | ----------------- | ---- |
| field | Yes, string | The name of the field from which values will be retrieved. |
| by | No, string | Grouping by fields. |
| limit | No, Number | Number of returned results. |
| others | No, Boolean | If set to true, the number of counts for the other values will be added to the results. |
| maxBuckets | No, Number | The number of buckets returned as a result. |



#### Example 1. 


Search for the names of the two departments that are the most frequent in the objects.


```
src stream="testdata" | top dep limit=2
```

Result:

```
[
  {
    "dep": "ADM",
    "_count": 390
  },
  {
    "dep": "IT",
    "_count": 350
  }
]
```

#### Example 2. 


Search for the names of the two departments that are the least frequent in the objects.


```
src stream="testdata" | rare dep limit=2
```


Result:

```
[
  {
    "dep": "HR",
    "_count": 250
  },
  {
    "dep": "IT",
    "_count": 350
  }
]
```

#### Example 3. 

For each value of the fName (Name) field, retrieve the two least frequent departments.

```
src stream="testdata" | rare dep by fName limit=2
```


Result:

```json
[
	{
		"fName": "Joe",
		"dep": "HR",
		"_count": 10
	},
	{
		"fName": "Joe",
		"dep": "IT",
		"_count": 10
	},
	{
		"fName": "Harry",
		"dep": "IT",
		"_count": 20
	},
	{
		"fName": "Harry",
		"dep": "HR",
		"_count": 30
	},
	{
		"fName": "James",
		"dep": "HR",
		"_count": 20
	},
	{
		"fName": "James",
		"dep": "IT",
		"_count": 30
	},
	{
		"fName": "Ethan",
		"dep": "IT",
		"_count": 10
	},
	{
		"fName": "Ethan",
		"dep": "HR",
		"_count": 40
	},
...
```

***
### fork


The command takes objects from the input collection and passes them for parallel processing by one or more pipelines. This is how parallel processing of object collections can be implemented. 


#### Syntax
```
| fork ({subPipe1}), ({subPipe2}) [, ... ({subPipeN})] 
```


#### Parameters

| Parameter Name | Required/not required; Field type | Description |
| --------------- | ----------------- | ---- |
| subPipe1..N     | Yes; nql expression | A pipeline for parallel execution. |





#### Example 1. Parallel execution of two streams.

```
src stream="testdata" | fork (set fullName=concat(fName, " ", lName) | limit 2), (aggr fieldsCount=sum(age) by fName,lName maxBuckets=2) 
```

Result:
```json
[
	{
		"lName": "White",
		"fName": "Jake",
		"PD": 0.27245159724157366,
		"ctry": "US",
		"host": "www.linkedin.com",
		"balance": 3366.13,
		"dep": "HR",
		"age": 26,
		"ts": 1675164610825,
		"fullName": "Jake White"
	},
	{
		"lName": "Magenta",
		"fName": "Jack",
		"PD": 0.2100865387760955,
		"ctry": "DE",
		"host": "www.facebook.com",
		"balance": 103.09,
		"dep": "HR",
		"age": 40,
		"ts": 1675163862053,
		"fullName": "Jack Magenta"
	},
	{
		"fieldsCount": 260,
		"_id": [
			"Jake",
			"White"
		]
	},
	{
		"fieldsCount": 400,
		"_id": [
			"Jack",

			"Magenta"
		]
	}
]
```

The result is a composite (union all) of the results from two pipelines.

***
### subpipe

The command is used to block processing until all parallel subPipes have executed. 

SubPipe rules:

- each must contain an `src` command and a `dst` command,
- if any of them ends in an error then the parent pipe is aborted and an error is returned.

#### Syntax
```
| subPipe ({subPipe1}), [, ... ({subPipeN})] 
```


#### Parameters

| Parameter Name | Required/not required; Field type | Description |
| -------------- | --------------------------------- | ----------- |



***
### sleep


The command is used to delay the execution of the next command in the pipeline.


#### Syntax

```
| sleep {delay}
```


#### Parameters

| Parameter Name | Required/not required; Field type | Description |
| --------------- | ----------------- | ---- |
| delay | Yes; Number | Delay in milliseconds of executing the next command in the pipeline. |

***
### unwind

The command unwinds the collection values for the {field} field. A new object is created for each value. The record remains unchanged if the {field} field is not a collection.


#### Syntax

```
| unwind {field} [includeEmpty=true/false] 
```


#### Parameters

| Parameter Name  | Required/not required; Field type | Description |
| --------------- | ----------------- | ---- |
| field           | Yes;  string | The name of the field from which values will be taken for unwinding. If the field is not a collection, the output object remains unchanged. |
| includeEmpty    | Yes;  Boolean | If true, it also unwinds empty collection items. |



#### Example 1. Unwinding of the array in the "docs" field to two objects.



```
src stream="testdata" | project +fName, +lName, +docs | unwind docs
```

Input data:

```
...
{"fName": "Jake","lName": "White","docs":["IDCard","Passport"]}
...
```

Result:

```json
[
...,
{"fName": "Jake","lName": "White","docs":"IDCard"},
{"fName": "Jake","lName": "White","docs","Passport"},
...
]
```

***
### fields

The command displays information about fields. It counts fields, unique values and collects the most common values.



#### Syntax

```
| fields [maxFields=number] [maxTuples=number ] [topCount=number ] [maxDistinctValuesPerField=number ] 
```



#### Parameters

| Parameter Name            | Required/not required; Field type | Description |
| ------------------------- | ----------------- | ---- |
| maxFields                 | No; int | Maximum number of fields processed by the command. |
| maxTuples                 | No; int | Maximum number of processed records (tuples). |
| maxDistinctValuesPerField | No; int | The maximum number of unique values that will be counted individually. |
| topCount                  | No; int | The number of most common values to show. |

***
### where


The command filters the input objects with the specified logical filter (logical_filter).


#### Syntax

```
| where {logical_filter}
```



#### Parameters

| Parameter Name | Required/not required; Field type | Description                                                  |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| logical_filter | Yes;  logical_expression          | A filter that is a Boolean expression. The expression must contain the operators described in the table below. |

**Operators**

| Logical operators | Example |
| ------------------ | -------- |
| AND  ($and)        | a=1 AND b=2|
| OR ($or)           | a=1 AND ( b=2 OR b=3) |
| NOT ($not)         | NOT a=1 AND NOT b=2 |


| Comparison operators | Example          |
| -------------------- | ----------------- |
| = ($eq)              | ctry="US" lub $eq(ctry,"US") |
| != ($neq)            | fName!="Jake" |
| > ($gt)              | age > 40 lub $gt(age, 40) |
| >= ($gte)            | age >= 40 lub $gte(age, 40) |
| < ($lt)              | age < 40 lub $lt(age, 40) |
| >= ($lte)            | age <= 40 lub $lte(age, 40) |
| $contains            | $contains(fName,"org") |
| $not_contains        | $not_contains(fName,"org") |
| $startsWith          | $contains(fName,"Ja") |
| $endsWith            | $contains(fName,"ke") |
| $isEmpty             | $isEmpty(fName) |
| $isNotEmpty          | $isNotEmpty(fName) |
| $isNull              | $isNull(fName) |
| $isNotNull           | $isNotNull(fName) |
| $in                  | $in(fName,["Jake", "George"]) |
| $notIn               | $notIn(fName,["Jake", "George"]) |
| ~= ($like)           | fName~="Ja?e*" |
| =/regexp/ ($regex)   | fName=/^Jac.|

If you use the operators "=","!=",">=",">","<=" and "<", there must be a constant value or a regular expression on the right side of the operator, for example `fName="John"` - right, `lName=/J.*n$/` - right,  `fName=lName` - wrong, `age>PD` - wrong.



#### Example 1

Select people with the name Jake or George and an age greater than 40 and not living in the country "US".

```
src stream="testdata" | where (fName="Jake" or fName="George") and age>40 and ctry!="US"
```


Result:
```json
[
	{
		"lName": "Burgundy",
		**"fName": "George",**
		"PD": 0.16417805586318624,
		**"ctry": "IE",**
		"host": "www.youtube.com",
		"balance": 2932.06,
		"dep": "ADM",
		**"age": 43,**
		"ts": 1675164422754
	},
	{
		"lName": "Inkjet",
		**"fName": "Jake",**
		"PD": 0.708725767372459,
		**"ctry": "HU",**
		"host": "www.google.com",
		"balance": 7645.02,
		"dep": "IT",
		**"age": 49,**
		"ts": 1675163960249
	},
	{
		"lName": "Lavender",
		**"fName": "George",**
		"PD": 0.2689487262832958,
		**"ctry": "IT",**
		"host": "www.linkedin.com",
		"balance": 6463.79,
		**"dep": "IT",**
		"age": 42,
		"ts": 1675163920281
	},
	{
		"lName": "Beige",
		**"fName": "Jake",**
		"PD": 0.8439732967760376,
		**"ctry": "IT",**
		"host": "www.linkedin.com",
		"balance": 9882.36,
		**"dep": "IT",**
		"age": 42,
		"ts": 1675164552379
	},
    ...
```

***
### aggr


Aggregation command. As a result of the aggregating function (accumulator) (see AggregatingFunctions) you receive a single result for the data set being a collection of objects or its subset. It is possible to use the aggregating functions in the aggr command on various fields, however it is not possible to combine aggregating functions with regular functions. For example, the  `src stream ="netflowByCountryAggr" | aggr mintimestamp=tsToStr(min(timestamp))` command which is supposed to retrieve the minimal (min) value of the timestamp field and immediately convert the result to text form (tsToStr), is incorrect and will not work. In this case, you can use the set command: `src stream ="netflowByCountryAggr" | aggr mintimestamp=min(timestamp) | set mintimestampStr=tsToStr(mintimestamp)`.


#### Syntax

```
| aggr {field_name}={aggregate_function(...)} [,{field_name2}={aggregate_function_namej},...] [ by {field_name_by}, [{field_name}, ...] ] [unwind={bool}] [maxBuckets={number}] 
```

#### Parameters

| Parameter Name     | Required/not required; Field type | Description                                                  |
| ------------------ | --------------------------------- | ------------------------------------------------------------ |
| field_name         | Yes; string                       | The name of the field whose values will be calculated by the given aggregation function. |
| aggregate_function | Yes; function                     | One of the aggregating functions described in the table with aggregating functions (AggregatingFunctions). |
| by field_name      | No; string                        | The name of the field(s) by which the data is grouped and returned as buckets. |
| unwind             | No; boolean                       | If true, the values of the aggregated fields will not be in the array, but will be unwinded to objects. |
| maxBuckets         | No; int                           | Maximum number of buckets for which aggregation is performed. |

#### Example 1.

Taking the maximum and minimum age of people in each department.

```
src stream="testdata" | aggr maxAge=max(age), minAge=min(age) by dep 
```

Result:
```json
[
	{
		"maxAge": 59,
		"minAge": 23,
		"_id": [
			"HR"
		]
	},
	{
		"maxAge": 56,
		"minAge": 21,
		"_id": [
			"ADM"
		]
	},
	{
		"maxAge": 60,
		"minAge": 20,
		"_id": [
			"IT"
		]
	}
]
```

The value of the grouping field "dep" is returned in an array in the "_id" field.

#### Example 2.

Taking the maximum and minimum age of people in each department.

Unlike Example 1, here there is an unwinding to the aggregation field rather than the `\_id` array.

```
src stream="testdata" | aggr maxAge=max(age), minAge=min(age) by dep unwind=true
```

Result:
```json
[
	{
		"maxAge": 59,
		"minAge": 23,
		"dep" : "HR"		
	},
	{
		"maxAge": 56,
		"minAge": 21,
		"dep" : "ADM"
	},
	{
		"maxAge": 60,
		"minAge": 20,
		"dep" : "IT"		
	}
]
```

The value of the grouping field "dep" is returned in an array in the "_id" field.



#### Example 3. 

Retrieving the maximum and minimum age of people in each department. The data aggregation will be performed for a maximum of two buckets.

```
src stream="testdata" | aggr maxAge=max(age), minAge=min(age) by dep maxBuckets=2
```

Result:
```json
[
	{
		"maxAge": 59,
		"minAge": 23,
		"_id": [
			"HR"
		]
	},
	{
		"maxAge": 56,
		"minAge": 21,
		"_id": [
			"ADM"
		]
	}
]
```



#### Example 3. 

Retrieving the number of balances (valuesCount) and the value of the highest balance (maxBalance) for each person.

```
src stream="testdata" | aggr valuesCount=count(balance), maxBalance=max(balance) by fName, lName
```

Result:
```json
[
	{		
		"_id": [
			"Jake",
			"White"
		],
		"maxBalance": 8139.64,
		"valuesCount": 10
	},
	{		
		"_id": [
			"Jack",
			"Magenta"
		],
		"maxBalance": 9841.06,
		"valuesCount": 10
	},
	{		
		"_id": [
			"Harry",
			"Watermelon"
		],
		"maxBalance": 8199.47,
		"valuesCount": 10
	},
            ...
```



***
### rangeAggr

Aggregating command. It returns the results for specified subsets of data defined using a range of values. 


```
| rangeAggr field1=aggregate_function(field2) on field5 [by field3[, field4]] ranges="1-5,5-10"  [bucketAlias={string}] [unwind={bool}] 
```

#### Parameters

| Parameter Name         | Required/not required; Field type | Description |
| ---------------------- | ----------------- | ---- |
| field1                 | Yes;  string | Name of the field to which the result will be assigned |
| aggregate_function     | Yes; function | One of the aggregating functions, accumulators for example: count,avg,dc etc.... |
| field2                 | Yes;  string | The field whose values will be aggregated |
| on field5              | Yes;  string | Field whose values are checked for belonging to ranges |
| ranges                 | Yes;  string | Ranges defined by a string of characters with the format: {from-to},{from-to}. Note: ranges on the left are inclusive and on the right are exclusive. |
| by {field3}[,{field4}] | No;   string | Values grouping field. |
| bucketAlias            | No;   string | Alias for the "bucket" field. |
| uwind                  | No;  boolean | Unwind values. |



#### Example 1. 

Retrieving the maximum balance (maxBalance) and the number of samples in the given range (valuesCount) for each person. Data for aggregation will be calculated and shown for two ranges (_bucket) of the `balance` field values: {0,5000) and {8000,10000).



```
src stream="testdata" | rangeAggr valuesCount=count(balance), maxBalance=max(balance) on balance by fName,lName ranges="0-5000,8000-10000"
```

Result:
```json
[
	{
		"valuesCount": 9,
		"_bucket": "0-5000",
		"maxBalance": 4683.53,
		"_id": [
			"Jake",
			"White"
		]
	},
	{
		"valuesCount": 4,
		"_bucket": "0-5000",
		"maxBalance": 2981.42,
		"_id": [
			"Jack",
			"Magenta"
		]
	},
	{
		"valuesCount": 3,
		"_bucket": "0-5000",
		"maxBalance": 4384.36,
		"_id": [
			"Harry",
			"Watermelon"
		]
	}
	...
	{
		"valuesCount": 3,
		"_bucket": "8000-10000",
		"maxBalance": 9241.08,
		"_id": [
			"Connor",
			"Amber"
		]
	},
	{
		"valuesCount": 4,
		"_bucket": "8000-10000",
		"maxBalance": 9926.31,
		"_id": [
			"Richard",
			"Carrot"
		]
	},
	{
		"valuesCount": 2,
		"_bucket": "8000-10000",
		"maxBalance": 9015.39,
		"_id": [
			"Justin",
			"Orange"
		]
	},
	{
		"valuesCount": 3,
		"_bucket": "8000-10000",
		"maxBalance": 8940.63,
		"_id": [
			"Jacob",
			"Turquoise"
		]
	}
	...
]
```

***
### splitAggr

The command performs several aggregations, with each subsequent aggregation being performed in the context of the previous one. 

#### Syntax

```
| splitAggr field1=funkcja_agregujaca(streamField1) [, ... fieldN=funkcja_agregujaca(streamFieldN)] ({subAggr1}), ({subAggr2}), [, ... ({aubAggr3})] [unwind={boolean}] 
```

#### Parameters

| Parameter Name | Required/not required; Field type | Description |
| --------------- | ----------------- | ---- |
| field1             | Yes;  string | Name of the field to which the result will be assigned |
| funkcja_agregująca | Yes; Funkcja | One of the aggregate functions, accumulators for example: count,avg,dc etc.... |
| streamField1       | Yes;  string | The field whose values will be aggregated |
| subAggr            | Yes;  string | Sub-aggregation. A minimum of two must be defined. |
| uwind              | Yes; boolean | Unwound values |



####Example 1. Average balance for a given country and department

In this example, the calculation of values uses two pipelines made with the fork command that return the same result. The first, using the splitAggr command, initially sums (performs an aggregation) the values of the "balance" field for a given country (ctry), 
and then on the result obtained, sums (performs an aggregation) the values of "balance" for departments. The result is stored in the "sumBytes0" field.
The second, using the aggr command, performs summing "at once" for the dimension: country + department.  The result is stored in the field "sumBytes2".



```
src stream="testdata" 
| fork (splitAggr sumBytes0=sum(balance) (aggr by ctry unwind=true) ,(aggr by dep unwind=true) unwind=true ),
       (aggr sumBytes2=sum(balance) by ctry, dep unwind=true )
| sort ctry,dep
```


Result:
```json
{
    "status": {
        "state": "FINISHED"
    },
    "total": 42,
    "data": [
        {
            "ctry": "DE",
            "sumBytes0": 666112.88,
            "dep": "ADM"
        },
        {
            "ctry": "DE",
            "dep": "ADM",
            "sumBytes2": 666112.88
        },
        {
            "ctry": "DE",
            "sumBytes0": 127414.63000000002,
            "dep": "HR"
        },
        {
            "ctry": "DE",
            "dep": "HR",
            "sumBytes2": 127414.63000000002
        },
        {
            "ctry": "DE",
            "sumBytes0": 264624.96,
            "dep": "IT"
        },
        {
            "ctry": "DE",
            "dep": "IT",
            "sumBytes2": 264624.96
        },
		...
	]
}	
```

***
### timeAggr


An command that aggregates data using an aggregating function (accumulator). Returns results for specific subsets of data defined as time periods. It is primarily used to create graphs where one of the axes corresponds to time.


#### Syntax
```
| timeAggr field1=funkcja_agregujaca(field2) [on field5] [by field3[, field4]] [interval={timespan}] [dir={dir}] [maxBuckets={number}] [bucketAlias={string}] [unwind={bool}]
```

#### Parameters

| Parameter Name | Required/not required; Field type | Description |
| --------------- | ----------------- | ---- |
| field1             | Yes;  string | Name of the field to which the result will be assigned. |
| funkcja_agregująca | Yes; function | One of the aggregate functions, accumulators for example: count,avg,dc etc... |
| filed2             | Yes;  string | The field whose values will be aggregated. |
| by field3 ,field4  | Yes;  string | Value grouping field(s). |
| on field5          | Yes;  string | The field from which time is taken for counting buckets, by default it is the timestamp field. |
| interval           | Yes;  string | The timespan for which values are to be calculated, e.g. 1d means a separate value for each day. |
| dir                | No;   string | Bucket sorting direction. Accepts "asc" or "desc" values. No sorting by default. |
| maxBuckets         | No;   int | Maximum number of buckets (default: 10 thousand). |
| bucketAlias        | No;   string | Alias for "_bucket" field. |
| unwind             | No;  boolean | If true then unwind the values in the "_id" field. |


#### 
#### Example 1. The average age and number of people on each day for which `PD` and `balance` data is assigned to.



```
src stream="testdata" | timeAggr  sredniaWieku=avg(age), liczbaOsob=count(age) on ts interval="1d" | set dateTime=tsToStr(_bucket) | sort _bucket
```

Result:
```json
[
	{
		"sredniaWieku": 39.5,
		"liczbaOsob": 30,
		"_bucket": 1672531200000,
		"dateTime": "2023-01-01 00:00:00.000"
	},
	{
		"sredniaWieku": 42.46153846153846,
		"liczbaOsob": 26,
		"_bucket": 1672617600000,
		"dateTime": "2023-01-02 00:00:00.000"
	},
	{
		"sredniaWieku": 43.28947368421053,
		"liczbaOsob": 38,
		"_bucket": 1672704000000,
		"dateTime": "2023-01-03 00:00:00.000"
	},
	{
		"sredniaWieku": 42.125,
		"liczbaOsob": 32,
		"_bucket": 1672790400000,
		"dateTime": "2023-01-04 00:00:00.000"
	},
	{
		"sredniaWieku": 39.121212121212128,
		"liczbaOsob": 33,
		"_bucket": 1672876800000,
		"dateTime": "2023-01-05 00:00:00.000"
	},
	{
		"sredniaWieku": 43.0,
		"liczbaOsob": 36,
		"_bucket": 1672963200000,
		"dateTime": "2023-01-06 00:00:00.000"
	},
	{
		"sredniaWieku": 40.97674418604651,
		"liczbaOsob": 43,
		"_bucket": 1673049600000,
		"dateTime": "2023-01-07 00:00:00.000"
	},
...
```


***
## Functions

***
### now

The now() function is used to retrieve the timestamp in the GMT+00 time zone at the time of the call.


#### Syntax

```
now() : long
```

|      |      |      |
| ---- | ---- | ---- |

#### Return value

The function returns the current timestamp given in milliseconds.
The type of the returned value is long.
The returned value is always in the GMT+00 time zone.


#### Example 1

| Example | Result |
| -------- | ----- |
| `now()`  | 1622653803000 (2 June 2021 17:10:03) |




***
### timestamp

The function calculates the timestamp for the given values of the year, month, day, hour, minute, and second.

#### Syntax

```
timestamp(year, month, day, hour, minute, second [, offset=int]) : long
```


#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| year            | Yes;  int | Year |
| month           | Yes;  int | Month |
| day             | Yes;  int | Day |
| hour            | Yes;  int | Hour |
| minute          | Yes;  int | Minutę |
| second          | Yes;  int | Second |
| offset          | Yes;  int | Time offset related to time zone. Note: offset/100 = hours, offset %100 = minutes. Accepts values in the range &lt;-1200,1400&gt;. |

#### Return value

The function returns a timestamp based on the date and time components passed in the arguments.
The type of the value returned by the function is long.
The resulting timestamp is a value in milliseconds.
If the offset parameter is specified, the result will be returned shifted by the specified interval based on the passed parameters.



#### Example 

| Example | Result |
| -------- | ----- |
| `timestamp(2021, 6, 2, 17, 10, 3)`  | 1622653803000 (Wednesday, 2 June 2021 19:10:03 GMT+02:00 DST) |
| `timestamp(2021, 6, 2, 18, 10, 3, offset=100) `  | 1622653803000 |
| `timestamp(2021, 6, 2, 16, 10, 3, offset=-100)`  | 1622653803000 |



***
### addYears

The function shifts the input timestamp by the number of years passed in the argument.

#### Syntax

```
addYears(long arg1, int arg2) : long
```


#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| arg1            | Yes;  long           | Timestamp to be shifted. |
| arg2            | Yes;  int            | The number of years by which the timestamp from arg1 will be shifted |


#### Return value

The function returns the timestamp from arg1 shifted by the number of years specified in arg2.  
The type of the value returned by the function is long.  
The resulting timestamp is a value in milliseconds.  
The number of years can be positive - addition or negative - subtraction of years.  


#### Example 1

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)


| Example | Result |
| -------- | ----- |
| `addYears(1623069203000, 1)`  | 1686141203000 (Monday, 7 June 2020 14:33:23 GMT+02:00 DST) |
| `addYears(1623069203000, -1)`  | 1559910803000  (Monday, 7 June 2022 14:33:23 GMT+02:00 DST) |



***
### addMonths

The function shifts the input timestamp by the number of months passed in the argument.

#### Syntax

```
addMonths(long arg1, int arg2) : long
```


#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| arg1            | Yes;  long           | Timestamp to be shifted. |
| arg2            | Yes;  int            | The number of months by which the timestamp from arg1 will be shifted |


#### Return value

The function returns the timestamp from arg1 offset by the number of months specified in arg2.  
The type of the value returned by the function is long.  
The resulting timestamp is a value in milliseconds.  
The number of months can be positive - addition or negative - subtraction of months   


#### Example 1

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)


| Example | Result |
| -------- | ----- |
| `addMonths(1623069203000, 2)`  | 1628339603000 (Saturday, 7 August 2021 14:33:23 GMT+02:00 DST) |
| `addMonths(1623069203000, -2)`  | 1559910803000  (Wednesday, 7 April 2019 14:33:23 GMT+02:00 DST) |




***
### addDays

The function shifts the input timestamp by the number of days passed in the argument.

#### Syntax

```
addDays(long arg1, int arg2) : long
```


#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| arg1            | Yes;  long            | Timestamp to be shifted. |
| arg2            | Yes;  int            | The number of days by which the timestamp from arg1 will be shifted |


#### Return value

The function returns the timestamp from arg1 shifted by the number of days specified in arg2.
The type of the value returned by the function is long.
The resulting timestamp is a value in milliseconds.
The number of days can be positive - addition or negative - subtraction of days.


#### Example 1

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)

| Example | Result |
| -------- | ----- |
| `addDays(1623069203000, 2)  `  | 1623242003000 |




***
### addHours

The function shifts the input timestamp by the number of hours passed in the argument.

#### Syntax

```
addHours(long arg1, int arg2) : long
```


#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| arg1            | Yes;  long | Timestamp to be shifted. |
| arg2            | Yes;  int | The number of hours by which the timestamp from arg1 will be shifted |


#### Return value

The function returns the timestamp from arg1 shifted by the number of hours specified in arg2.
The type of the value returned by the function is long.
The resulting timestamp is a value in milliseconds.
The number of hours can be positive - addition or negative - subtraction of hours.


#### Example 1

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)

| Example | Result |
| -------- | ----- |
| `addHours(1623069203000, 2)  `  | 1623242003000 |




***
### addMinutes

The function shifts the input timestamp by the number of minutes passed in the argument.

#### Syntax

```
addMinutes(long arg1, int arg2) : long
```


#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| arg1            | Yes;  long | Timestamp to be shifted. |
| arg2           | Yes;  int | The number of minutes by which the timestamp from arg1 will be shifted |


#### Return value

The function returns the timestamp from arg1 shifted by the number of minutes specified in arg2.
The type of the value returned by the function is long.
The resulting timestamp is a value in milliseconds.
The number of minutes can be positive - addition or negative - subtraction of minutes.


#### Example 1

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)


| Example | Result |
| -------- | ----- |
| `addMinutes(1623069203000, 2)  `  | 1623242003000 |





***
### addSeconds

The function shifts the input timestamp by the number of seconds passed in the argument.

#### Syntax

```
addSeconds(long arg1, int arg2) : long
```


#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| arg1            | Yes;  long | Timestamp to be shifted. |
| arg2            | Yes;  int | The number of seconds by which the timestamp from arg1 will be shifted |


#### Return value

The function returns the timestamp from arg1 shifted by the number of seconds specified in arg2.
The type of the value returned by the function is long.
The resulting timestamp is a value in milliseconds.
The number of seconds can be positive - adding or negative - subtracting seconds.


#### Example 1

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)

```
t = addSeconds(1623069203000, 2) 
```

Result: 

```
t = 1623242003000  
```

#### Example 2

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)


| Example | Result |
| -------- | ----- |
| `addSeconds(1623069203000, -2) `  | 1623242003000 |




***
### addMillis

The function shifts the input timestamp by the number of milliseconds passed in the argument.

#### Syntax

```
addMillis(long arg1, int arg2) : long
```


#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| arg1            | Yes;  long | Timestamp to be shifted. |
| arg2            | Yes;  int | The number of milliseconds by which the timestamp from arg1 will be shifted |


#### Return value

The function returns the timestamp from arg1 shifted by the number of milliseconds specified in arg2.
The type of the value returned by the function is long.
The resulting timestamp is a value in milliseconds.
The number of milliseconds can be positive - addition or negative - subtraction of milliseconds.


#### Example 1

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)


| Example | Result |
| -------- | ----- |
| `addMillis(1623069203000, 2)`  | 1623242003000 |
| `addMillis(1623069203000, -2) `  | 1623242003000 |



***
### getYear

The function retrieves the year from the timestamp passed in the argument.

#### Syntax

```
getYear(long arg1) : int
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| arg1            | Yes;  long | Timestamp in epoch format in milliseconds |


#### Return value

The function returns the year from the timestamp indicated in the argument.  
The type of the value returned by the function is int.  


#### Example 1

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)


| Example | Result |
| -------- | ----- |
| `getYear(1623069203000)`  | 2021 |




***
### getMonth

The function retrieves the month from the timestamp passed in the argument.

#### Syntax

```
getMonth(long arg1) : int
```

#### Parameters

| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| arg1            | Yes;  long | Timestamp in epoch format in milliseconds |


#### Return value

The function returns the month from the timestamp indicated in the argument.  
The type of the value returned by the function is int being the month number of the year (1 - January, 2 - February, 3 - March, etc...). 


#### Example 1

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)


| Example | Result |
| -------- | ----- |
| `getMonth(1623069203000)`  | 6 |



***
### getDay

The function retrieves the day of the month from the timestamp passed in the argument.

#### Syntax

```
getDay(long arg1) : int
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| arg1            | Yes;  long | Timestamp in epoch format in milliseconds |


#### Return value

The function returns the day of the month from the timestamp indicated in the argument.  
The type of the value returned by the function is int.  


#### Example 1

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)


| Example | Result |
| -------- | ----- |
| `getDay(1623069203000)`  | 7 |



***
### getDayOfWeek

The function retrieves the day of the week from the timestamp passed in the argument.

#### Syntax

```
getDayOfWeek(long timestamp) : int
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| arg1            | Yes;  long | Timestamp in epoch format in milliseconds |


#### Return value

The function returns the number of the day of the week from the timestamp specified in the argument.  
The returned value is of int type with the following values: 1 - Monday, 2 - Tuesday, .... , 7 - Sunday.


#### Example 1

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)


| Example | Result |
| -------- | ----- |
| `getDayOfWeek(1623069203000)`  | 1 |



***
### getHour

The function retrieves the hours of the day from the timestamp passed in the argument.

#### Syntax

```
getHour(long timestamp) : int
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| arg1            | Yes;  long | Timestamp in epoch format in milliseconds |


#### Return value

The function returns the time of day from the timestamp indicated in the argument.  
The type of the value returned by the function is int. 


#### Example 1

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)

| Example | Result |
| -------- | ----- |
| `getHour(1623069203000)`  | 14  |






***
### getMinute

The function retrieves the minutes from the timestamp passed in the argument.

#### Syntax

```
getMinute(long timestamp) : int
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description                               |
| -------------- | --------------------------------- | ----------------------------------------- |
| arg1           | Yes;  long                        | Timestamp in epoch format in milliseconds |


#### Return value

The function returns minutes from the timestamp specified in the argument.  
The type of the value returned by the function is int.  


#### Example 1

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)

| Example | Result |
| -------- | ----- |
| `getMinute(1623069203000)`  | 33  |




***
### getSecond

The function retrieves seconds from the timestamp passed in the argument

#### Syntax

```
getSecond(long timestamp) : int
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| arg1            | Yes;  long | Timestamp in epoch format in milliseconds |


#### Return value

The function returns seconds from the timestamp specified in the argument.  
The type of the value returned by the function is int.  


#### Example 1

For 1623069203000 (Monday, 7 June 2021 14:33:23 GMT+02:00 DST)

| Example | Result |
| -------- | ----- |
| `getSecond(1623069203000)`  | 23  |




***
### tsToStr

The function converts the timestamp in long format to text of the specified format.


#### Syntax

```
tsToStr(long arg0 [, format=string] [, zone=string]) : string
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description                                                  |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| arg1           | Yes;  long                        | Timestamp in epoch format in milliseconds                    |
| format         | No                                | Format string to which the timestamp will be converted. The default value is: "YYYY-MM-dd HH:mm:ss.SSS". |
| zone           | No                                | Time zone e.g.: +1, Poland, Europe/Warsaw, UTC. Description of possible formats: ZoneId (Java Platform SE 8 ) |


The function returns a String `datetime` representation in the format specified by kwarg `format=string` .  
The representation will be offset in relation to the input timestamp by the kwarg `zone=string`.  
If arg0 type different from long is passed, the function will return null. 


#### Example 1

For 1623253047000 (Wednesday, 9 June 2021 17:37:27 GMT+02:00 DST)


| Example | Result |
| -------- | ----- |
| `tsToStr(1623253047000)`                               | "2021-06-09 15:37:27.000"  |
| `tsToStr(1623253047000, format="YYYY/MM/dd-HH:mm:ss")` | "2021/06/09-15:37:27" |
| `tsToStr(1623253047000, zone="Poland")`                | "2021-06-09 17:37:27.000"  |
| `tsToStr("1623253047000", zone="Poland")`              |  null |




***
### tsParse


The function converts a textual representation of datetime to a timestamp in epoch format.

#### Syntax

```
tsParse(string arg0 [, format=string] [, zone=string]) : long
```

#### Parameters
| Parameter Name         | Required/not required; Field type | Description |
| ----------------------- | -------------------- | ---- |
| arg0   | Yes;  string   | Datetime text representation. |
| format | No;   string   | Format string used to interpret the passed timestamp. The default value is: "YYYY-MM-dd HH:mm:ss.SSS". |
| offset | No;   string   | Time zone e.g.: +1, Poland, Europe/Warsaw, UTC. Description of possible formats: ZoneId (Java Platform SE 8 ). |


#### Return value


The function returns a timestamp in epoch format of long type given in milliseconds.  
The datetime text passed in arg0 will be interpreted as if it were in the time zone described in offset.  
The returned result will always be in the GMT+00:00 zone.   
If a value other than string is passed to arg0, the function will return null. 


#### Example 


| Example | Result |
| -------- | ----- |
| `tsParse("2021-06-09 15:37:27.000")`    | 1623253047000  |
| `tsParse("2021/06/09-15:37:27", format="YYYY/MM/dd-HH:mm:ss")`  | 1623253047000  |
| `tsParse("2021-06-09 17:37:27.000", zone="Poland")` |1623253047000 |
| `1tsParse(1623253047000, zone="Poland")` | null |



***
### tsOffset

The function returns the timestamp offset specified in the argument.


#### Syntax

```
tsOffset(long arg0, int arg1) : long
```

#### Parameters
| Parameter Name  | Required/not required; Field type | Description |
| ---------------- | -------------------- | ---- |
| arg0 | Yes;  long | Timestamp epoch given in milliseconds (to be shifted). |
| arg1 | Yes;  int | Time offset in relation to the time zone. Offset/100 = hours, offset %100 = minutes. Accepts values in the range of <-1200,1400>. |


#### Return value

The function returns the timestamp offset value.  
The function returns a value in epoch format of long type with millisecond precision.  
If parameters of other types than expected are passed, the function will return null.  


#### Example 1

For 1623253047000 (Wednesday, 9 June 2021 17:37:27 GMT+02:00 DST)


| Example | Result |
| -------- | ----- |
| `tsOffset(1623253047000, 200)`    | 1623260247000  (Wednesday, 9 June 2021 19:37:27 GMT+02:00 DST)  |
| `tsOffset(1623260247000 , -200)`  | 1623253047000  (Wednesday, 9 June 2021 17:37:27 GMT+02:00 DST)  |
| `tsOffset(1623260247000 , -2200)` | null |



***
### sum


The function calculates the sum of num1 + num2 + ... + numN given in numeric value arguments. Non-numeric arguments are ignored.


#### Syntax

```
sum(number num1, number num2 [, number num3, ...object numN] [, type=string]) : number
```

#### Parameters
| Parameter Name    | Required/not required; Field type | Description |
| ------------------ | -------------------- | ---- |
| num1 | Yes;  number |  |
| num2 | Yes;  number |  |
| numN | No;   number | N-th argument of the function. |
| type | No;   number | Forces the casting of each argument (numeric) to the specified type. Possible values: "int", "long", "float", "double". Determines the type of the returned value. |


#### Return value

The function returns a value of Number type which is the result of adding all the arguments.  
If the "type" parameter is not specified, the type of the value will be the same as the first numeric argument.    
E.g.  `sum(null, "1", 1)`, the type returned will be int.  
If all arguments are not numeric, 0 will be returned.  




#### Example

| Example | Result |
| -------- | ----- |
| `sum(2, 6)`  | 8 (typ int)  |
| `sum(2, 6, type="long")`  | 8 (typ long)  |
| `sum(null, 1, "4", 2)`  | 3  |
| `sum(1.1, 6)`  | 7.1 (float) |
| `sum("1", "2")`  |0 - because none of the arguments are of number type (int, long, float,...))  |



***
### add

The function adds up the values specified in the arguments.



#### Syntax

```
add(number num1, number num2 [, type=string]) : number
```

#### Parameters
| Parameter Name    | Required/not required; Field type | Description |
| ------------------ | -------------------- | ---- |
| num1 | Yes;  number |  |
| num2 | Yes;  number |  |
| type | No;   number | Forces the casting of each argument (numeric) to the specified type. Possible values: "int", "long", "float", "double". Determines the type of the returned value. |


#### Return value

The function returns a value of Number type which is the result of adding arguments.  
The exact type is specified by the kwarg 'type', or when not specified, it is the type of the first argument.  
Alternatively, if an argument other than Number is specified, a null value will be returned.  
The function only accepts values of Number type. 
In case the kwarg 'type' does not specify the type to which arguments are to be cast, they will all be converted to the type specified in the first argument.  



#### Example

| Example | Result |
| -------- | ----- |
| `add(2, -6)`  | -4  |
| `add(2, -6 type="long")`  | -4 (typ long) |
| `add(2, -0.1d)`  | 2 (int, the function will return a value of 1.9d rounded up to 2 (int) because that is the type of the first argument (2).) |
| `add(2.0d, -0.1d)`  | 1.9 (double) |



***
### sub

The function subtracts the values specified in the arguments.


#### Syntax

```
sub(number num1, number num2 [, type=string]) : number
```

#### Parameters
| Parameter Name    | Required/not required; Field type | Description |
| ------------------ | -------------------- | ---- |
| num1 | Yes;  number |  |
| num2 | Yes;  number |  |
| type | No;   number | Forces the casting of each argument (numeric) to the specified type. Possible values: "int", "long", "float", "double". Determines the type of the returned value. |


#### Return value

The function returns a value of Number type, which is the result of subtracting the arguments in the order they are given.
The exact type is specified by the kwarg 'type', or when not specified, it is the type of the first argument.  
Alternatively, if an argument other than Number is specified, a null value will be returned.  


#### Example

| Example | Result |
| -------- | ----- |
| `sub(2, 6)`  | -4 |
| `sub(2, 6 type="long")`  | -4 (typ long) |



***
### mul

The function performs the multiplication of two given arguments.


#### Syntax

```
mul(number num1, number num2 [, type=string]) : number
```

#### Parameters
| Parameter Name    | Required/not required; Field type | Description |
| ------------------ | -------------------- | ---- |
| num1 | Yes;  number |  |
| num2 | Yes;  number |  |
| type | No;   number | Forces the casting of each argument (numeric) to the specified type. Possible values: "int", "long", "float", "double". Determines the type of the returned value. |


#### Return value

The function returns a value of Number type.  
When the kwarg 'type' does not specify the type to which arguments are to be cast, they will be converted based on the type of the first argument as follows :  
int → long  
long → long  
float → float  
double → double  
Alternatively, if an argument other than Number is specified, a null value will be returned. 



#### Example

| Example | Result |
| -------- | ----- |
| `mul(2, 6)`  | 12 |
| `mul(2, 2.1d)`  | 4 |
| `mul(2, 4.2d, type="double")`  | 8.4 |

***
### div

The function performs the operation of dividing <2:n> values given in the arguments.


#### Syntax

```
div(number num1, number num2) : double
```

#### Parameters
| Parameter Name    | Required/not required; Field type | Description |
| ------------------ | -------------------- | ---- |
| num1 | Yes;  number | dividend |
| num2 | Yes;  number | divisor |



#### Return value

The function returns the result of dividing the values specified in the arguments in the order they are given.   
The type of the returned value is double.   
If any of the arguments is 0, the function will return null.   
Alternatively, if an argument other than Number is given, it will also return null.  

 

#### Example

| Example | Result |
| -------- | ----- |
| `sub(10.5, 2)`  | 5.25 |



***
### floorDiv

The function divides without remainder the values given in the arguments.

#### Syntax

```
floorDiv(number num1, number num2) : long
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| num1 | Yes;  number | dividend |
| num2 | Yes;  number | divisor |



#### Return value

The function returns the result of dividing without remainder the values given in the arguments.  
The type of the returned value is long.  
If the divisor is 0, the function will return null.  
If an argument other than Number is given, a null value will be returned.  

 


#### Example

| Example | Result |
| -------- | ----- |
| `floorDiv(17, 2.5)`  | 6  |
| `floorDiv(17, "a")`  | null  |
| `floorDiv(17, 0)`  | null  |

***
### mod


The function calculates the remainder of one number divided by another. 


#### Syntax

```
mod(object num1, object num2) : long
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| num1 | Yes;  object |  |
| num2 | Yes;  object |  |


#### Return value


The function returns the remainder of dividing num1 argument by num2 argument.

The type of the returned value is long. 

If a value other than Number is specified in the arguments, it will return null.  



#### Example

| Example | Result |
| -------- | ----- |
| `mod(10, 6)`  | 4  |



***
### abs

The function calculates the absolute value for the given argument.


#### Syntax

```
abs(number num) : number
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| num1 | Yes;  number |  |


#### Return value

The function returns an absolute value for the specified argument with the same type.   
If an argument with a type different than Number is specified, it will return null.  



#### Example

| Example | Result |
| -------- | ----- |
| `abs(-4)`  | 4  |

***
### pow

The function calculates powers for specified arguments.


#### Syntax

```
pow(number num1, number num2) : double
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| num1 | Yes;  number | Power base. |
| num1 | Yes;  number | The power to which the base will be raised. |


#### Return value

The function returns the value of the first argument raised to a power whose value is specified in the second argument.   
The returned type is double.   
Alternatively, if a value other than Number is specified in the arguments, a null value is returned.   

 

#### Example

| Example | Result |
| -------- | ----- |
| `pow(2, 6)`  | 64  |



***
### sqrt

The function calculates the square root of the number specified in the argument.


#### Syntax

```
sqrt(number num) : double
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| num1 | Yes;  number |  |



#### Return value

The function returns the value of the square root of the number specified in the argument. 
The type of the returned value is double.
If a value other than Number is given in the argument, it will return null. 
If you specify a number value less than or equal to 0 - it will also return null.

  


#### Example

| Example | Result |
| -------- | ----- |
| `sqrt(2)`  | 4  |
| `sqrt(-2)` | null  |



***
### sqr

The function squares the number specified in the argument.


#### Syntax

```
sqr(number num) : double
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| num1 | Yes;  number |  |



#### Return value

The function returns the square of the number specified in the argument.  
The returned type is double.   
If you pass an argument with a type other than Number, the function will return null.   

 

#### Example

| Example | Result |
| -------- | ----- |
| `sqr(2)`  | 4.0 (double)  |
| `sqrt(-2)` | null  |

 

***
### floor

The function is used to round down the number passed in the argument to the integer part.


#### Syntax

```
floor(number num) : long
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| num1 | Yes;  number |  |



#### Return value

The function returns the rounded down numeric value of the parameter specified in the argument.   
It rounds down to an integer.   
If the specified parameter values are other than Number, the function will return null.



#### Example

| Example | Result |
| -------- | ----- |
| `floor(1.2)`  | 1  |
| `floor(3.54)` | 3  |



***
### ceil

The function rounds up the number passed in the argument.


#### Syntax

```
ceil(number num) : long
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| num1 | Yes;  number |  |



#### Return value

The function returns the rounded up numeric value of the parameter specified in the argument.   
It rounds up to an integer.  
If the specified parameter value is other than Number, the function will return null. 


#### Example

| Example | Result |
| -------- | ----- |
| `ceil(1.2)`  | 2  |
| `ceil(3.54)` | 4  |

***
### sign

The function checks whether the value in the argument is a positive, zero or negative value.


#### Syntax

```
sign(number num) : int
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| num1 | Yes;  number |  |



#### Return value

The function returns the following values of int type:  
-1 - the passed value is negative  
0 - the passed value is zero  
1 - the passed value is positive  
null - the passed value is not of numeric type  

  


#### Example

| Example | Result |
| -------- | ----- |
| sign(3)   |  1 |
| sign(-3) | -1  |
| sign("3")| null |

***
### rand

The function generates a random number in the range (0,1).


#### Syntax

```
rand() : double
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| -------------- | --------------------------------- | ----------- |


#### Return value

The function returns a pseudo-random value of double type in the range from 0 to 1.



#### Example

| Example | Result |
| -------- | ----- |
| `rand()`   | 0.5072899523834322 |

***
### randInt

The function returns an integer random number in the specified range. 

#### Syntax

```
randInt(int arg0, int arg1) : int
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| arg0 | Yes;  int | The beginning of the range |
| arg1 | Yes;  int | The end of the range |


#### Return value

The function returns a pseudo-random number of int type in the range <arg0,arg1>.

  

#### Example

| Example | Result |
| -------- | ----- |
| `randInt(1,5)`   | 3 |



***
### bitAnd

The function performs the "and" operation on numeric arguments. Non-numeric arguments are ignored.


#### Syntax

```
bitAnd(number num1, number num2 [, number num3, ...object numN]) : number
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| num1..N         | Yes;  number         | Number |


#### Return value

The function returns a value of number type which is the result of the "and" operation for all numeric arguments.   
If all arguments are not numeric, it will return null.  

  

#### Example

| Example | Result |
| -------- | ----- |
| `bitAnd(1, 5)`   | 3 |
| `bitAnd(5, "0")`  | 5 |
| `bitAnd("5", "5")` | null |



***
### bitOr

The function performs "or" operations on numeric arguments. Non-numeric arguments are ignored.


#### Syntax

```
bitOr(number num1, number num2 [, number num3, ...object numN]) : number
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | -------------------- | ---- |
| num1,...,numN   | Yes;  number         | Number |


#### Return value

The function returns a value of number type , which is the result of the "or" operation for all numeric arguments.   
If all arguments are not numeric, it will return null.  


#### Example

| Example | Result |
| -------- | ----- |
| `bitOr(1, 2)`   | 3 |
| `bitOr(1, "2"`  | 1 |
| `bitOr("1", "2")` | null |

***
### if

Conditional function if.

#### Syntax

```
if (condition : result1 , result2) 
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| condition       | Yes;  logical value | Logical condition for the selection of result 1. |
| result1    | Yes              | This result is returned if the result of the logical condition is true. |
| result2    | Yes                | This result is returned if the result of the logical condition is false. |


#### Return value

If the result of the "condition" condition  is "true" (true), the function will return the value of the "result1" expression, otherwise (false) - "result2".


#### Example 1

```
if (fName="Jack": "This is Jack", "This is not Jack") 
```

Result: 

If the value of the fName field is equal to "Jack":
```
"This is Jack"
```

If the value of the fName field is not equal to "Jack":
```
"This is not Jack"
```



***
### switch

The function returns the result depending on the condition.

#### Syntax

```
switch (variable, variable_value_1:result1, variable_value_2:result2, default_result)
```

#### Parameters
| Parameter Name              | Required/not required; Field type | Description |
| --------------------------- | --------------------- | ---- |
| variable                    | Yes;                  |  |
| variable_value_1:result1    | Yes;                  |  |
| variable_value_2:result2    | Yes;                  |  |
| default_result              | Yes;                  |  |

#### Return value

If the value of the variable argument is equal to:
-- variable_value_1 then the function returns "result1"
-- variable_value_2 then the function returns "result2"
-- different from 1 and 2, then the function returns "default_result"


#### Example 1

```
switch(ctry, "DE": "Germany", "IT": "Italy", "Other")
```

Result: 

If the value of the ctry field is equal to "DE":
```
"Germany"
```

If the value of the ctry field is equal to "IT":
```
"Italy"
```

If the value of the ctry field is not equal to "DE" and "IT"

```
"Other"
```



***
### concat

The function concatenates at least two values into one string.



#### Syntax

```
concat(object arg1 , object arg2 [, ... object argN] [, delimiter=string distinct=boolean limit=integer]) : string
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg1 | Yes; object |  |
| arg2 | Yes; object |  |
| argN | No; object | The function accepts N arguments. |
| delimiter | No; string | Separator of concatenated strings. Default value: "" |
| distinct | No; boolean | Merge only unique values. default value: false |
| limit | No; int | Limit of combined values. Default value: Integer.MAX_VALUE |


#### Return value


The function returns a String object which is a concatenation of the passed arguments in the order they are given.



#### Example 1

| Example | Result |
| -------- | ----- |
| `concat("abc", "-", "def")`                       | "abc-def" |
| `concat("1", "2", delimiter=";")`                 | "1;2" |
| `concat("1", 1, "2", distinct=true)`              | "12" |
| `concat("1", "2", "3", limit=2)`                  | "12" |
| `concat("1", 1, "2", "3", distinct=true limit=2)` | "12" |



***
### substring

The function cuts sequences of characters from the String object and creates a new object from them.

#### Syntax

```
substring(object arg, int num1 [, endId=num2]) : string
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg  | Yes;  object | Input object, on the basis of which a new object will be created. |
| num1 | Yes;  int  | Index of the character sequence from which the new object will start. The character located at the indicated index will be contained in the result. |
| num2 | No;   int  | The final index of the character sequence. The character located at the indicated index will not be included in the result. |


#### Return value

The function returns a new String that is a fragment of the input String object (or converted to String) based on the arguments indicating the index range.   
The function allows the use of negative indexes that point to an index counting from the end of the String.  
If an initial index higher than the final index is indicated, the function will return null.  
If indexes outside the range are indicated, the function will return null.  


| Example | Result |
| -------- | ----- |
| `substring("Cat is wild.", 4, endId=6)`   | "is" |
| `substring("Cat is wild.", 5, endId=4)`   | null |
| `substring("Cat is wild.", 12, 13)`       | null |


***
### left


The function cuts the beginning of the character sequence from the passed object.


#### Syntax

```
left(object arg, int num) : string
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg | Yes;  object | Input String object. |
| num | Yes;  int | String object cut index from the left. |


#### Return value

The function extracts and returns a `num` number of characters from a `arg` string (starting from left).

The function allows the use of negative `num` value, which point to the index counting from the end of the string.  

 

#### Example 1 

| Example  | Result |
| -------- | ----- |
| `left("Cat is wild.", 6)`   | "Cat is " |
| `left("Cat is wild.", -2)`  | "Cat is wil" |
| `left(512, 1)`              | "51" |




***
### right

The function extracts and returns a `num` number of characters from a `arg` string (starting from right).

#### Syntax

```
right(object arg, int num) : string
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg | Yes;  object | Input String object. |
| num | Yes;  int | Index of String object cut off from the right side |


#### Return value

The function returns a new String object based on the object passed in the arg argument, cutting it off at index num inclusive.  The right side of the String object is returned.  
The function allows the use of negative indexes, which indicate the index counting from the end of the string, where -1 indicates the last character.  

 

#### Example 1 

| Example | Result |
| -------- | ----- |
| `right("Cat is wild.", 5)`  | "wild." |
| `right(512, 1)`             | "12" |



***
### lower

The function replaces uppercase letters in a string with lowercase letters.

#### Syntax

```
lower(object arg) : string
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg | Yes;  object | Input String object |



#### Return value

The function returns the input string converted to lowercase.  
If a number type is passed, the corresponding text representation will be returned.  


| Example | Result |
| -------- | ----- |
| `lower("CAT is WILD.")`  | "car is wild" |





***
### upper

The function replaces lowercase letters in a string with uppercase letters.


#### Syntax

```
upper(object arg) : string
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg | Yes;  object | Input String object |



#### Return value

The function returns the input string converted to uppercase.  
If a number type is passed, the corresponding text representation will be returned.  


#### Example 1 

| Example | Result |
| -------- | ----- |
| `lower("CAT is WILD.")`  | "ALA MA KOTA" |




***
### replace

The function replaces a string of characters with another string of characters.



#### Syntax

```
replace(object arg, string str1, string str2 [, strat=string]) : string
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg   | Yes;  object | Input String object. |
| str1  | Yes;  string | The string to be found and replaced. |
| str2  | Yes;  string | The string that will be put in place of str1 |
| strat | No;   string | Replacement strategy. The available options are: "first", "last", "all". The default value is "first". |



#### Return value

The function returns a new String object that is a modification of the input object.  
If a number type is passed in arg, the corresponding text representation will be processed.  
If the str1 string is not found, the unprocessed text representation passed in arg will be returned.  



#### Example 1 

| Example | Result |
| -------- | ----- |
| `replace("Cat is wild.", "wild", "nice") `                       | "Cat is nice." |
| `replace("Cat is wild and wild", "wild", "nice", strat="last")` | "Cat is wild and nice." |



***
### trim

The function removes whitespace characters from the beginning and end of a string.



#### Syntax

```
trim(string arg) : string
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg   | Yes;  string | Input String object. |


#### Return value

The function returns a new String object, created from the input object without whitespace characters at the beginning and end of the string.  
If a value other than String is passed, the function will return null.   

 

#### Example 1 

| Example  | Result |
| -------- | ----- |
| `trim("Cat is wild.")`              | "Cat is wild." |
| `trim("    Cat is wild.        ")` | "Cat is wild." |



***
### startsWith

The function verifies if the object begins with the string passed in the next argument.


#### Syntax

```
startsWith(object arg1, object arg2) : boolean
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg1            | Yes;  object | Compared object. |
| arg2            | Yes;  object | The string that will be searched for at the beginning of arg1. |


#### Return value

The function returns true if the string from arg2 is the same as the string from the beginning of arg1.  
If a number type is passed in the arguments, the corresponding text representation will be processed.  

 

#### Example 1 

| Example | Result |
| -------- | ----- |
| `startsWith("Cat is wild.", "Cat")` | true |
| `startsWith("Cat is wild.", "Dog")` | false |
| `startsWith(512, "5")`             | true |



***
### endsWith

The function verifies if the object ends with the string passed in the next argument.


#### Syntax

```
endsWith(object arg1, object arg2) : boolean
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg1            | Yes;  object | Compared object. |
| arg2            | Yes;  object | The string that will be searched for at the beginning of arg1. |

#### Return value

The function returns true if the string from arg2 is the same as the string from the end of arg1.  
If a number type is passed in the arguments, the corresponding text representation will be processed.  

 

#### Example 1 

| Example  | Result |
| -------- | ----- |
| `endsWith("Cat is wild.", "wild.")` | true  |
| `endsWith("Cat is wild.", "is")`   | false |
| `endsWith(512, "2") `             | true |



***
### contains

The function checks if a specified string exists in the other string.



#### Syntax

```
contains(object arg1, object arg2 [, ignorecase=boolean]) : boolean
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg1            | Yes;  object | The string on which the check will be performed. |
| arg2            | Yes;  object | The string that will be searched for in arg1. |
| ignorecase      | No;   boolean | Flag - whether the check should be case sensitive |


#### Return value

The function returns true if the string from arg2 occurs inside the string of arg1 at least once.  
If a number type is passed in the arguments, the corresponding text representation will be processed.  

 

#### Example 1 

| Example | Result |
| -------- | ----- |
| `contains("Cat is wild.", "Cat")` | true |
| `contains("Cat is wild.", "Dog")` | false |
| `contains("Cat is wild.", "cat", ignorecase=true)` | true |
| `contains("512421", 241)`        | true |



***
### indexOf


The function searches for a substring in a string, and returns the position.


#### Syntax

```
indexOf(object arg1, object arg2 [, startIndex=int] [, ignoreCase=boolean]) : int
```

#### Parameters

| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg1            | Yes;  object | The object in which the character will be searched for |
| arg2            | Yes;  object | The character that will be searched for |
| startindex      | No;   int | The character string index from arg1 from which the search will be started. The default value is 0. The specified index also undergoes the search. |
| ignorecase      | No;   boolean | Flag stating if the comparison is supposed to take into consideration the character size. |


#### Return value

The function returns a number value of int type corresponding to the first character string index from `arg1` which is equal to the character passed in `arg2`.

If the character is not found, the function will return null.

In case of passing in number type arguments, a corresponding text representation will be processed.

#### Example 1  


| Example                                     | Result |
| ------------------------------------------- | ----- |
| `indexof("Cat is wild.", "C")`               | 0 |
| `indexof("Cat is wild.", "t")`               | 2 |
| `indexof("Cat is wild.", "i", startindex=6)` | 8 |
| `indexof("Cat is wild.", "c", ignorecase=true)` | 0 |
| `indexof("Cat is wild.", "b")`               | null |


#### Example 6

```
src stream="testdata" | fIndexOf1 = indexOf(fName, "A", startIndex=1 ignoreCase=true),fIndexOf2 = indexOf(fName, "A", ignoreCase=false) | limit 1
```

Result:
```json
{
	"lName": "White",
	"fName": "Jake",            
	"fIndexOf1": 1,
	"fIndexOf2": null
}
```



***
### strlen


The function returns the length of the text representation of the passed character string in the argument.


#### Syntax

```
strlen(object arg) : int
```

#### Parameters
| Parameter Name  | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg             | Yes;  object | |

#### Return value

The function returns the length of the text representation of the passed character string in the argument

In case of passing in number type arguments, a corresponding text representation will be processed. 

#### Example 1  

| Example               | Result |
| --------------------- | ----- |
| `len("Cat is wild.")` | 12 |
| `len(5)`              |  1 |



***
### regex


The function allows for usage of regular expressions. 
The function returns a logical value (boolean) of searching for a pattern (second parameter) in the text (first parameter). 
The function can also convert various non-string object types. When it does, it uses the toString() conversion.



#### Syntax

```
regex(object arg1, object arg2) : boolean
```

#### Parameters
| Parameter Name  | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg1            | Yes;  object          | searched text / field |
| arg2            | Yes;  object          | pattern, regular expression |

#### Return value

The function returns a true/false value that is the result of a search for a pattern in the text.



#### Example 1  


| Example             | Result |
| -------------------- | ----- |
| `regex("Postal code 02-120", "\\d{2}-\\d{3}") ` | true |
| `regex("automatic transmission", "auto(mat|bus)" )`  | true |



***
### like

The function mimics the database (SQL) function of the same name. It returns a logic value (boolean) which is the result of searching for a pattern in the searched text.



#### Syntax

```
like(textOrField, pattern) : boolean
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| textOrField     | Yes;  object | searched text / field |
| pattern         | Yes;  object | pattern, containing the characters: "*" (any string of characters) and "." (one character). |


#### Return value

The function returns the value true/false, which is the result of searching for a pattern in the text. 
The pattern can contain one or more characters: "*" (any string of characters) and "." (one character),



#### Example 1


| Example                                          | Result |
| ------------------------------------------------ | ------ |
| `like("*co*", "Sycope")`                         | true   |
| `like(".yco*", "Sycope")`                        | true   |
| `like("s.u*", "passus")`                         | false  |
| `like("s.u*", "ssus")`                           | true  |

***
### isIp

The function verifies if the passed object is a valid representation of an IPv4 or IPv6 address version.

#### Syntax

```
isIp(object arg0) : boolean
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description |
| --------------- | --------------------- | ---- |
| arg1            | Yes;  object | The passed parameter can be of String type, IpAddress or int[]. |


#### Return value

The function returns true if the object passed in the argument is a valid representation of an IPv4 or IPv6 address.


#### Example 1

| Example                  | Result |
| ------------------------- | ----- |
| `isIp("172.16.40.1")`     | true |
| `isIp("172.256.1.1")`     | false |
| `isIp("ffe0::1")`         | true |
| `isIp(int[]{1,2,3,4})`   | false |


***
### toIp


The function creates an IP object based on the passed text representation.



#### Syntax

```
toIp(string agr1 [, type=string]) : object
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description                                                  |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| arg1           | Yes;  string                      | Text that will be converted to an object representation of the IP address. |
| type           | No;   string                      | The type of the returned object. The available options are: Array and IpAddress. By default, it returns int[] (Array). |


#### Return value

The function returns an object representation of the IP address in the format specified by the kwarg type.   
The function returns an int[] object if the argument type is not specified.

 

#### Example 1


| Example                              | Result |
| ------------------------------------- | ----- |
| `toIp("172.16.40.1")`                 | int[]{2886739969} |
| `toIp("172.16.40.1", type=IpAddress)` | value of type IpAddress |
| `toIp("::1", type=Array)`             | int[]{0,0,0,1} |



***
### toMac

The function creates a MAC Address object based on the passed text representation.

#### Syntax

```
toMac(string arg1 [,type=string]) : object
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description                                                  |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| arg1           | Yes;  string                      | Text that will be converted to an object representation of the MAC address. Delimiters are allowed in the form of: ":" and "-" |
| type           | No;   string                      | The type of the returned object. The available options are: Array and MACAddress. By default, it returns a byte[] (Array). |


#### Return value

The function returns an object representation of the MAC address in the format specified by the kwarg type.  
The function returns a byte[] object if the argument type is not specified.  
If an incorrect representation of the MAC address is specified, the function will return null. 

 

#### Example 1

| Example                                      | Result |
| --------------------------------------------- | ----- |
| `toMac("01:02:03:FA:BD:CE")`                  | (byte[]) [1, 2, 3, -6, -67, -50] |
| `toMac("01-02-03-FA-BD-CE", type=MACAddress)` | value of type MACAddress |
| `toMac("01:02:03:FA:BD:CE", type=Array)`      | null |
| `toMac("01:02:03:FA:BD:FG")`                  | null |

***
### isMac

The function verifies if the passed object is a valid representation of the MAC address.


#### Syntax

```
isMac(object arg1) : boolean
```

#### Parameters
| Parameter Name | Required/not required; Field type | Description                                                  |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| arg1           | Yes;  boolean                     | The passed parameter can be of String type, MACAddress or byte[]. |


#### Return value

The function returns true if the object passed in the argument is a valid representation of the MAC address.




#### Example 1

| Example                                      | Result |
| --------------------------------------------- | ----- |
| `isMac("AA:BB:CC:DD:EE:FF")`                  | true |
| `isMac(byte[]{1, 2, 3, -6, -67, -50})`        | true |
| `isMac("FG:00:00:00:00:00")`                  | false |

 

***
### ipToStr

The function returns a text representation of the IP address.


#### Syntax

```
ipToStr(object arg1 [,short=boolean]) : string
```

#### Parameters
| Name            | Required, Type        | Description |
| --------------- | --------------------- | ---- |
| arg1            | yes, object            | IP address representation in int[], IpAddress or String format. |
| arg1            | no, boolean          | Flag that sets the shortened or full address record in IPv6. The default value is false. For IPv4, the value is ignored. |


#### Return value

The function returns a text representation of the IPv4 or IPv6 address passed in the argument.  
If an invalid IP address is passed, the function returns null.  



#### Example 1

| Example                                      | Result |
| --------------------------------------------- | ----- |
| `ipToStr(int[]{2886739969})`                  | 172.16.40.1 |
| `ipToStr(int[]{1})`                           | "0.0.0.1" |
| `ipToStr(int[]{0,0,0,1}, short=true) `        | "::1" |
| `ipToStr(int[]{1,2})`                         | null |



***
### macToStr

The function returns a text representation of the MAC address.


#### Syntax

```
macToStr(object arg1) : string
```

#### Parameters
| Name            | Required, Type        | Description |
| --------------- | --------------------- | ---- |
| arg1            | yes, object           | MAC address in String, byte[] or MACAddress format |


#### Return value

The function returns a text representation of the MAC address. Returns `null` if `arg1` has an invalid value/format.


#### Example

| Example | Result |
| --------------------------------------------- | ----- |
| `macToStr("01:02:03:FA:BD:CE")`               | "01:02:03:FA:BD:CE" | 
| `macToStr(byte[]{1, 2, 3, -6, -67, -50})`     | "01:02:03:FA:BD:CE" | 



***
### toSubnet

The function creates an IpSubnet object from a text representation passed in the `arg1` parameter.


#### Syntax

```
toSubnet(string arg1) : IpSubnet
```

#### Parameters
| Name            | Required, Type        | Description |
| --------------- | --------------------- | ---- |
| arg1            | yes, string           | Subnet mask in "ip/cidr" format. |


#### Return value

Returns an IpSubnet object created from a text representation. If `arg1` value is invalid the function will return null.


#### Example

| Example | Result |
| -------- | ----- |
| `toSubnet("172.16.40.0/24")` | IpSubnet value |



***
### isSubnet

The function verifies if the `arg1` IPv4 or IPv6 address is a valid representation of the net mask for version 4 or 6.


#### Syntax

```
isSubnet(object arg1) : boolean
```

#### Parameters
| Name            | Required, Type        | Description |
| --------------- | --------------------- | ---- |
| arg1            | yes, object            | The passed argument should be a correct representation of the subnet mask of String type or IpSubnet. |


#### Return value

Returns `true` if `arg1` IPv4 or IPv6 address is a valid representation of the net mask for version 4 or 6.

 

#### Example

| Example | Result |
| -------- | ----- |
| `isSubnet("172.16.40.0/24")` | true |
| `isSubnet("ffff::/129")` | false |



***
### inSubnet

The function checks if the `ip` address belongs to the `subnet` subnet mask.


#### Syntax

```
inSubnet(object ip, object subnet) : boolean
```

#### Parameters
| Name            | Required, Type        | Description |
| --------------- | --------------------- | ---- |
| ip              | yes, object           | The IPv4 ot IPv6 address in String, int[] or IpAddress format. |
| subnet          | yes, object           | The net mask in String or IpSubnet format. |


#### Return value

Returns `true` if the `ip` address belongs to the `subnet` subnet mask and both arguments have valid value.
Returns `false` if the `ip` address does not belong to the `subnet` subnet mask.
Returns `null` if one of the arguments has invalid value.



#### Example

| Example | Result |
| -------- | ----- |
| `inSubnet("172.16.40.1", "172.16.40.0/24") ` | true |
| `inSubnet("172.16.40.1", "172.16.30.0/24")` | false |
| `inSubnet("172.16.40.1", "aaa")` | null |

***
### subnetToStr

The function returns a text representation of the net mask.


#### Syntax

```
subnetToStr(object arg1) : string
```

#### Parameters
| Name            | Required, Type        | Description |
| --------------- | --------------------- | ---- |
| arg1            | yes, object | The IpSubnet object or text of a net mask. |




#### Return value

Returns a text representation of the net mask.
In case of IpSubnet type in the `arg` parameter, the function returns a `string` type.
In case of String type in the `arg` parameter, the function validates the value and returns a `string` type or returns null if the validation failed.



#### Example

| Example | Result |
| -------- | ----- |
| `subnetToStr(IpSubnet("172.16.40.0/24"))` | "172.16.40.0/24" |
| `subnetToStr("172.16.40.0/24")` | "172.16.40.0/24" |
| `subnetToStr("172.16.40.256/24")` | null |



***
### lookup

The function returns an `outputKey` field value of the first found object in the `lookupName` lookup which meets the criteria defined in the `input`.

Lookup elements are used for getting a data from external sources (file, database, DNS server etc.)

The data included in the lookups can be imagined as a list of records containing pairs of keys and values 
or as a table where the columns correspond to keys and the rows correspond to records.

In order to gain access to a specific value, the key (column) needs to be provided together with the criteria of record (row) 
selection in the form of pair: key, expected value

The lookup elements can also answer the question if a record with given criteria has any occurrence, and they do so without loading any values from them.

Please note that the function is an intermediate for the lookup and the returned value usually reflects the value returned by the same lookup ([L]). The function decides on the returned value [F] only in certain situations.



#### Syntax

```
lookup(string lookupName, string output, Map<string, object> input[,[default=string][defaultToKey=boolean][unwind=field]]) : object
```

#### Parameters
| Name            | Required, Type        | Description |
| --------------- | --------------------- | ---- |
| lookupName      | yes, string | Lookup name. |
| outputKey       | yes, string | Field name of an object (lookup row). |
| input           | yes, map    | Search criteria in Key-value collection format. |
| default         | no, string  | A value which is returned when no objects were found by the criteria. The parameter has a higher priority on DefaultKey parameter. |
| defaultToKey    | no, boolean  | If `true` then the function returns a key value in case if no objects were found. If `false`, the parameter is ignored. |
| unwind          | No;   string | It is used to handle input fields of Set/List type. The field name must be indicated in the declaration. The result of the function will be a list, in which each element will be the result of a lookup function set on consecutive list elements of the indicated field. |

#### Return value

The `outputKey` field value of the first object in the `lookupName` lookup found by criteria defined in `input`.


#### Example

This example presents a lookup named "geoIp1" which contains two columns, "ip" and "country".


| Example | Result |
| -------- | -----|
| `lookup("geoIp1", "country", {"ip": "212.77.98.8"})` | "PL" |
| `lookup("geoIp1", "country", {"ip": "127.0.0.1"})`   | null |
| `lookup("geoIp1", "country", {"ip": ipField})`       | country code or null |
| `lookup("snmpInterface", "if.speed", {"exporterIp": "172.16.40.1", "exporterInt": 9})` | 2000000000 |
| `lookup("noSuchLookup", "country", {"ip": ipField})`     | null |
| `lookup("geoIp1", "noSuchColumn", {"ip": ipField})`      | null |
| `lookup("geoIp1", "country", {"noSuchColumn": ipField})` | null |
| `lookup("groups", "name", {"ip": "172.16.0.1"}, default="brak wyniku")` | "private-group" |
| `lookup("groups", "name", {"ip": "1.2.3.4"}, default="brak wyniku")` | "no result" |
| `lookup("groups", "name", {"ip": "1.2.3.4"}, default="brak wyniku" defaultToKey=true)` | "no result" |
| `lookup("groups", "name", {"ip": "1.2.3.4"}, defaultToKey=true)` | "1.2.3.4" |
| `lookup("groups", "name", {"ip": ["1.2.3.4", "172.16.0.1"]}, defaultToKey=true unwind="ip")` | ["1.2.3.4", "private-group"] |
| `lookup("groups", "name", {"ip": ["1.2.3.4", "172.16.0.1"]}, unwind="ip")` | [null, "private-group"] |



#### General Example

For this example, a lookup called "books" with the following data will be used:

| author       | title | year  | ISBN  |
| ------------ | ------| ----- | ----- |
| Brian Goetz  | Java Concurrency in Practice | 2006 | 0321349606 |
| Joshua Bloch | Effective Java (3rd edition) | 2018 | 0134685991 |
| Scott Oaks   | Java Performance: The Definitive Guide | 2014 | 1449358457 |
| Scott Oaks   | Java Performance: In-depth Advice for Tuning and Programming Java 8, 11, and Beyond | 2020 | 1492056119 |



| Example  | Result |
| -------- | -------|
| lookup("books", "ISBN", {"author": "Gavin King"}) | null (no match) |
| lookup("books", "ISBN", {"author": "Scott Oaks"}) | 1449358457 (first match) |
| lookup("books", "ISBN", {"author": "Scott Oaks", "year": 2020}) |  1492056119  |
| lookupAll("books", "ISBN", {"author": "Gavin King"})  |  [] (no match)  |
| lookupAll("books", "ISBN", {"author": "Brian Goetz"})  |  [0134685991]  |
| lookupAll("books", "ISBN", {"author": "Scott Oaks"})  |  [1449358457, 1492056119]  |
| lookupKeyExists("books", {"author": "Gavin King"})  |  false  |
| lookupKeyExists("books", {"author": "Scott Oaks"})  |  true  |






***
### lookupAll


The function returns an `outputKey` field value of all objects in the `lookupName` lookup which meets the criteria defined in the `input`.


#### Syntax

```
lookupAll(string lookupName, string outputKey, Map<string, object> input[, default=string, defaultToKey=boolean]) : object
```

#### Parameters
| Name            | Required, Type        | Description |
| --------------- | --------------------- | ---- |
| lookupName    | yes, string | Lookup name. |
| outputKey     | yes, string | Field name of an object (lookup row). |
| input         | yes, map    | Search criteria in Key-value collection format. |
| default       | no, string  | A value which is returned when no objects were found by the criteria. The parameter has higher priority on the DefaultKey parameter. |
| defaultToKey  | no, boolean  | If `true` then function will return a key value in case if no objects were found. If `false`, the parameter is ignored. |

#### Return value


The `outputKey` field value of all objects in the `lookupName` lookup which meet the criteria defined in the `input`. The function returns a maximum of 1000 objects. If no objects were found, the function will return an empty value. If a lookup is turned off or does not exist, the function will return null.


#### Example 

This example presents a lookup named "geoIp1" which contains two columns, "ip" and "country".


| Example | Result |
| -------- | ----- |
| `lookupAll("geoIp1", "country", {"ip": "212.77.98.8"})` | ["PL"] |
| `lookupAll("geoIp1", "country", {"ip": "127.0.0.1"})`   | [] |
| `lookupAll("groups", "name", {"ip": "127.0.0.1"})`   | ["loopback", "private", "forbidden"] |
| `lookupAll("groups", "name", {"ip": "1.1.1.1"}, default="no results")`  | ["no results"] |
| `lookupAll("groups", "name", {"ip": "1.1.1.1"}, default="no results" defaultToKey=true)`   | ["no results"] |
| `lookupAll("groups", "name", {"ip": "1.1.1.1"}, defaultToKey=true)`   | ["1.1.1.1"] |

***
### lookupKeyExists

The function checks if an occurrence of an object in the `lookupName` lookup meets the `input` criteria.


#### syntax

```
lookupKeyExists(string lookupName, Map<string, object> input) : boolean
```

#### Parameters
| Name            | Required, Type        | Description |
| --------------- | --------------------- | ---- |
| lookupName      | yes, string | A lookup name. |
| input           | yes, map    | Search criteria in Key-value collection format. |


#### Return value

The function returns `true` if an object with given criteria has been found in the lookup, `false` if otherwise.
	
	
#### Example

This example presents a lookup named "geoIp1" which contains two columns, "ip" and "country".

| Example | Result |
| -------- | ----- |
| `lookupKeyExists("geoIp1", {"ip": "212.77.98.8"})`     | true |
| `lookupKeyExists("geoIp1", {"ip": "127.0.0.1"})`       | false |
| `lookupKeyExists("geoIp1", {"ip": ipField})`           | true |
| `lookupKeyExists("noSuchLookup", {"ip": ipField})`     | null |
| `lookupKeyExists("geoIp1", {"noSuchColumn": ipField})` | false |

***
### in

The function checks if an `arg0` value is in the `arg1` collection.

#### Syntax

```
in(object arg1, string arg2) : boolean
```

#### Parameters
| Name            | Required, Type | Description |
| --------------- | --------------------- | ---- |
| arg1            | yes, object           | A value |
| arg2            | yes, string           | Collection name.  |


#### Return value


Returns `true` if the `arg1` collection contains an `arg` value, `false` if otherwise.

#### Example 

| Example | Result |
| -------- | ----- |
| `in(1, [1,2,3])` | true |
| `in("mary", ["has", "cat", "mary"])` | true |
| `in("a", ["b", "c"])` | false |



***
### all

The function checks if an `arg0` collection is a subset of the `arg1` collection.


#### Syntax

```
all(string arg0, string arg1) : boolean
```

#### Parameters
| Name            | Required, Type | Description |
| --------------- | --------------------- | ---- |
| arg0 | yes, string | Collection name. |
| arg1 | yes, string | Collection name. |


#### Return value 

Returns `true` if the `arg0` collection is a subset of the `arg1` collection, `false` if otherwise.


#### Example

| Example | Result |
| -------- | ----- |
| `all(["a", "b"], ["a", "b", "c"])` | true |
| `all(["a", "d"], ["a", "b", "c"])` | false |

***
### any

The function checks if there are any common values in both collections.

#### Syntax

```
any(string arg0, string arg1) : boolean
```

#### Parameters
| Name            | Required, Type | Description |
| --------------- | --------------------- | ---- |
| arg0 | yes, string      | Collection name.  |
| arg1 | yes, string | Collection name.  |


#### Return value


Returns `true` if the collections passed in the function parameters do have common values, `false` if otherwise.


#### Example

| Example | Result |
| -------- | ----- |
| `any(["value1"], ["value2", "value3"])` | false |
| `any(["value2"], ["value2", "value3"])` | true |

***
### none

The function checks if there are no common values in both collections.


#### Syntax

```
none(string arg0, string arg1) : boolean
```

#### Parameters
| Name            | Required, Type | Description |
| --------------- | --------------------- | ---- |
| arg0 | yes, string     | Collection name.  |
| arg1 | yes, string | Collection name.  |


#### Return value

Returns `true` if the collections passed in the function parameters do not have any common values, `false` if otherwise.




#### Example

| Example | Result |
| -------- | ----- |
| `none(["value1"], ["value2", "value3"])` | true |
| `none(["value2"], ["value2", "value3"])` | false |

***
### len

The function returns the number of elements in a collection (array, list, set).


#### Syntax

```
len(collection arg0) : number
```

#### Parameters
| Name            | Required, Type | Description |
| --------------- | --------------------- | ---- |
| arg0 | Yes;  collection | Collection or table |


#### Return value

Returns the number of elements in the collection or null when the argument is not a collection.



#### Example 

| Example | Result |
| -------- | ----- |
| `len([1, "two", 3.0]) ` | 3 |
| `len("test")`           | null |



***
### valueAt


The function returns a value at the `index` index in the `arg1` collection.


#### Syntax

```
valueAt(string arg1, int index): object
```

#### Parameters
| Name            | Required, Type | Description |
| --------------- | -------------- | ---- |
| arg1            | yes, string    | Collection name.  |
| arg1            | yes, int       | Index  |


#### Return value

The function returns a value at the `index` position started from 0 in the `arg1` collection or null if an index is out of range or `arg1` is not a collection.


| Example | Result |
| -------- | ----- |
| `valueAt([1, "two", 3.0], 2)` | 3 |
| `valueAt([1, "two", 3.0], 3) )` | null |
| `valueAt("Feigenbauma const", 0) ` | null |

***
### hasKey

The function checks if the `map` contains a `key`. 

#### Syntax

```
hasKey(string key, map map): boolean
```

#### Parameters
| Name            | Required, Type     | Description |
| --------------- | --------------------- | ---- |
| key | Yes;  string | A key to test.   |
| map | Yes;  map | Collection (map) name. |


#### Return value

Returns `true` if a `key` exists in the keys set of the `map`, `false` if otherwise.


#### Example 1 


| Example | Result |
| -------- | ----- |
| `hasKey("a", {"a": 1})` | true |
| `hasKey("a", {"b": 1})` | false |
| `hasKey("a", {"a": null})` | true |
| `hasKey(null, {"a": 1})` | false |

***
### hasValue

The function checks if a `value` value exists in the `map`.

#### Syntax

```
hasValue(string value, map): boolean
```

#### Parameters
| Name            | Required, Type     | Description |
| --------------- | --------------------- | ---- |
| value | yes, string  | A value to test.  |
| map   | yes, map | Collection (map) name. |


#### Return value

Returns `true` if a `value` exists in the values set of the `map`, `false` if otherwise.


#### Example 1

| Example | Result |
| -------- | ----- |
| `hasValue(1, {"a": 1})` | true |
| `hasValue(2, {"a": 1})` | false |
| `hasValue(null, {"a": 1})` | false |
| `hasValue(null, {"a": null})` | true |

***
### get

The function returns a value from the `collection` at a given `index`.



#### Syntax

```
get(int index, collection) : object
```

#### Parameters
| Name            | Required, Type     | Description |
| --------------- | --------------------- | ---- |
| index           | yes, int | index  |
| collection      | yes        | Collector name (identifier).  |


#### Return value

The function returns a value from the `collection` at a given `index` or null if the index is out of range (index < 0 or index > collection length).


#### Example 1

| Example | Retult |
| -------- | ----- |
| `get(0, [10,20,30])` | 10 |
| `get(1, [10,20,30])` | 20 |
| `get(-1, [10,20,30])` | null |
| `get(4, [10,20,30])` | null |
| `get(0, [null,20,30])` | null |

***
### getValue

The function returns a value assigned to the `key` in the `map` map.


#### Syntax

```
getValue(string key, map): boolean
```

#### Parameters
| Name            | Required, Type      | Description |
| --------------- | ------------------- | ---- |
| key             | yes, string         | Key name  |
| collection      | yes, map            | A map contains key-value pairs. |


#### Return value

The function returns a value assigned to the key in the map or null if the key does not exists in the map.


#### Example 1

| Example | Result |
| -------- | ----- |
| `getValue("a", {"a": 1})`    | 1 |
| `getValue("b", {"a": 1})`    | null |
| `getValue("a", {"a": null})` | null |
| `getValue(null, {"a": 1})`   | null |

***
### anyMatchingNumber

The function checks if there is an occurrence of a `value` in the `collectorId` collection.

#### Syntax

```
anyMatchingNumber(string collectorId, long mask, long arg2): boolean 
```

#### Parameters
| Name            | Required, Type     | Description |
| --------------- | --------------------- | ---- |
| collectorId     | yes, string | Collector name (identifier).  |
| mask            | yes, long|  |
| arg2            | yes, long|  |


#### Return value

Returns `true` if there is at least one value in the collection that meets the requirement: (value & mask) == arg2 where (value & mask) is a result of AND bits operation.




***
### noMatchingNumber

The function checks if there is an occurrence of a `value` value in the `collectorId` collection.


#### Syntax

```
noMatchingNumber(string collectorId, long mask, long arg2): boolean 
```

#### Parameters
| Name            | Required, Type     | Description |
| --------------- | --------------------- | ---- |
| collectorId     | yes, collection | Collector name (identifier).  |
| mask            | yes, long       | Mask to calculate value to search for. |
| arg2            | yes, long       | A value to search. |


#### Return value

Returns `true` if there is no value in the collection that meets the requirement: (value & mask) == arg2 where (value & mask) is a result of AND bits operation.
The result is opposite to the anyMatchingNumber function (noMatchingNumber := NOT anyMatchingNumber).



***
### valInColl

The function checks if a `value` exists in the `fieldName` field in the `collectorId` collector.


#### Syntax

```
valInColl(object value, string collectorId, string fieldName [, maxCacheSize=<integer>]) : boolean
```

#### Parameters
| Name            | Required, Type     | Description |
| --------------- | --------------------- | ---- |
| value           | yes, object           | A value to be checked. |
| collectorId     | yes, string           | Collector name (identifier). |
| fieldName       | yes, string           | A field name in collector to be search for. |
| maxCacheSize    | no, int               | The max. number of results (objects) kept in the cache. The 0 value means that the cache is not used. Default: 0. |


#### Return value


#### Example 1

For the values in "coll1" collector: 

[{"field":1},{"field":2},{"field":3.0},{"field":null}]

| Example | Result |
| -------- | ----- |
| `valInColl(1, "coll1", "field")` | true |
| `valInColl(99, "coll1", "field")` | false |



***
### collExists

The function checks if a `collectorId` collector exists.


#### Syntax

```
collExists(string collectorId) : boolean
```

#### Parameters
| Name            | Required, Type     | Description |
| --------------- | --------------------- | ---- |
| collectorId     | yes, string           | Collector name (identifier).


#### Return value

Returns `true` if the collector exists, `false` if otherwise.



#### Example 


| Example | Result |
| -------- | ----- |
| collExists("hosts") | false |

***
### valColl

The function returns a value from the `input` field of an object found by the `input` criteria in the `collector Name` collector. The function can be used to join values from two or more collectors.


#### Syntax

```
valColl(String collectorName, String output, Map<String, Object> input [,default=String])
```

#### Parameters
| Name               | Required, Type     | Description |
| --------------- | --------------------- | ---- |
| collectorName   | yes, string           | Collector name |
| output          | yes, string           | Field name. |
| input           | yes, map              | A criteria in key-pair format. |
| default         | no, string            | A default value returned if no object was found by the given criteria. |


#### Return value

The function returns the value from the first object from the collector found by the criteria.


#### Example 1

In this example it is assumed that a "qwerty" collector is present with the following data:

```
[
  { "x": 1, "y": 10, "z": "a" }, 
  { "x": 1, "y": 20, "z": "b" }
]
```

| Example | Result |
| -------- | ----- |
| `valColl("qwerty", "y", {"x": 1})` | 10 |
| `valColl("qwerty", "y", {"x": 1, "z": "b"})` | 20 |
| `valColl("qwerty", "y", {"x": -1234567})` | null |
| `valColl("qwerty", "y", {"x": -1234567}, default=999)` | 999 |
| `valColl("qwerty", "noSuchColumn", {"x": 1})` | null |
| `valColl("qwerty", "noSuchColumn", {"x": 1}, default=999)` | 999 |

***
### join

The function joins values of a `field` into one string.


#### Syntax

```
join(field [, delimiter=string distinct=boolean limit=integer]) : string
```

#### Parameters
| Name               | Required, Type        | Description |
| --------------- | --------------------- | ---- |
| field           | yes, string | The field name whose values are to be joined. |
| delimiter       | no, string | The values delimiter. Default: "," |
| distinct        | no, boolean | true - join only unique values. Default: false |
| limit           | no, int     | The max. number of joined values. Default: Integer.MAX_VALUE |




#### Return value

The function returns a String object which is the concatenation of the values occurring in the passed field. The order in which the values occur is preserved.
The function returns the String that contains all concatenated values delimited by the `delimiter` value from the field. The order in which the values occur is preserved.


#### Example 1


| Example | Result |
| -------- | ----- |
| records { "x": 1 }, { "x": 2 }  <br />aggr joinX=**join(x)** |  {joinX: "1,2"} |
| records { "x": 1 }, { "x": null } <br />aggr joinX=**join(x)** |  {joinX: "1"} |
| records { "x": 1 }, { "x": 2 } <br />aggr joinX=**join(x, delimiter=":")** |  {joinX: "1:2"} |
| records { "x": 1 }, { "x": 2 } <br />aggr joinX=**join(x, limit=1)** |  {joinX: "1"} |
| records { "x": 1 }, { "x": 1 } <br />aggr joinX=**join(x, distinct=true)** |  {joinX: "1"} |
| records { "x": 1 }, { "x": 1}, { "x": 2 }, { "x": 3 }<br />aggr joinX=**join(x, distinct=true limit=2)** |  {joinX: "1,2"} |


#### Example 2

Join values form the `age` field for each person. The field has the same value of 56 in all objects.

```
src stream="testdata" | aggr fJoin = join(age) by fName, lName unwind=true | limit 1
```

Result:

```json
[
    {        
        "fJoin": "56,56,56,56,56,56,56,56,56,56"
    }
]

```



***
### dc

The function returns the number of unique values of a `field`.


#### Syntax

```
dc(field [, delimiter=string distinct=boolean limit=integer]) : number
```

#### Parameters
| Name               | Required, Type        | Description |
| ------------------ | --------------------- | ---- |
| field              | yes | Name of the field which values will be the aggregated. |
| normalSetPrecision | no  | Range 0-sparseSetPrecision. Default 14. |
| sparseSetPrecision | no  | Range 0-32; default is 25. |



#### Return value

The function returns the number of unique values in the `field` field. The returned value is an estimated result of HyperLogLog++ algorithm.  


#### Example 1

The task is to calculate a number of unique values of the `age` field for each person. The field contains the same value for every object belonging to a person, so the result is 1.


```
src stream="testdata" | aggr fDc = dc(age) by fName, lName unwind=true | limit 1
```

Result:

```json
[
    {        
        "fDc": 1
    }
]

```

#### Example 2

The task is to calculate a number of unique values of the `balance` field for each person. The field contains different values for every object belonging to a person, so the result is a number of objects for each person, 10.


```
src stream="testdata" | aggr fDc = dc(age) by fName, lName unwind=true | limit 1
```

Result:

```json
[
    {        
        "fDc": 10
    }
]

```



***
### prc

The function returns `k-th` value of 100-quantile (percentile) for each group defined by the "BY" clause of the "AGGR" command. 

#### Syntax

```
prc(field [, k=double]) : number
```

#### Parameters

| Name            | Required, Type        | Description |
| --------------- | --------------------- | ---- |
| field           | Yes | The field name used by the accumulative command. |
| k               | No;   double | k-th percentile value from range k in <0, 100>. The default value is 95.0. |



#### Return value

The result is usually a floating-point number.
To calculate a percentile value, the [T Digest](https://github.com/tdunning/t-digest) algorithm is used.


#### Example 1
| Example  | Result |
| -------- | ----- |
| records { "x": 1 }, { "x": 2 }, { "x": 1 }, { "x": 4 }, { "x": 6 }, { "x": 11 }<br />aggr percentile50=**prc(x, percentile=50.0)** | {percentile50: 4 } |
| records { "x": 1 }, { "x": 2 }, { "x": 1 }, { "x": 4 }, { "x": 6 }, { "x": 11 }<br />aggr percentileDefault=**prc(x)** | {percentileDefault: 11 } |
| records { "x": 1 }, { "x": 2 }, { "x": 1 }, { "x": 4 }, { "x": 6 }, { "x": 11 }<br />aggr percentile10=**prc(x, percentile=10.0)** | {percentile10: 1 } |

***
### prc95

The function returns the value of 95 of 100-quantile (percentile) for each group defined by the "BY" clause of the "AGGR" command. 


#### Syntax

```
prc95(field) : number
```

#### Parameters

| Name  | Required, Type | Description                                      |
| ----- | -------------- | ------------------------------------------------ |
| field | yes            | The field name used by the accumulative command. |



#### Return value

The result is usually a floating-point number.
The function returns 95 percentile value. To calculate the result value, the [T Digest](https://github.com/tdunning/t-digest) algorithm is used.


#### Example 1

| Example  | Result |
| -------- | ------ |
| records { "x": 1 }, { "x": 2 }, { "x": 1 }, { "x": 4 }, { "x": 6 }, { "x": 11 }<br />aggr percentile95=**prc95(x)** | result {percentile95: 11 } |
| records { "x": 1 }, { "x": 1}, { "x": 1 }, { "x": 4 }, { "x": 1 }, { "x": 1 }<br />aggr percentile95=**prc95(x)** | result {percentile95: 4} |



***
