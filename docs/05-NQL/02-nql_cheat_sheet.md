# NQL CheatSheet

## Commands

**Time & Streams**

| Command name         | Syntax                                                       | Description                                                  | Example                                                      |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **source** (**src**) | src stream={string} [startTime={timespan} endTime={timespan}] | Generates a collection of objects from the given source.     | src stream="alerts"                                          |
| **dst**              | dst {collectorName}                                          | Saves the result to a new collector with the given name.     | src stream="alerts"  \| limit 1000 \| dst "collector1"       |
| **collector (coll)** | coll {id} [bunchSize={liczba}]                               | Feeds the NQL with objects from a collector with the given ID. | src stream="alerts" \| set fullName=concat("alertName", " ", "alertSeverity") \| limit 1000 \| dst "collector1" |
| **records**          | records {tuple0} [, ... {tupleN}]                            | Generates a collection of objects to be passed to the output. | records {"fName":"Jake","dep":"IT"},{"fName":"Jack","dep":"ADM"},{"fName":"Harry","dep":"ADM"},{"fName":"Jacob","dep":"IT"} |

### Common commands

| Command name | Syntax                                                       | Description                                                  | Example                                                      |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **sort**     | sort {field1} [asc/desc] [,… {fieldN} [asc/desc]] [limit={number}] [outLimit={number}] | Sorts the collection of objects based on the value of a field. The sorting is performed for a maximum number of records specified in the `limit` parameter. | src stream="netflow" \| sort timestamp desc                  |
| **project**  | project +{fieldName} as alias / -{fieldName},...             | Selects the fields of an object that will be passed to the output and/or changes the field names. | src stream="netflow" \| project +clientIp, +serverIp         |
| **limit**    | limit [{offset},] {limit}                                    | Truncates the output collection to a specified number of objects. Returns the first {limit} starting from position {offset}. | src stream="netflow" \| limit 1                              |
| **tail**     | tail {limit}                                                 | Returns the last `n` objects from the input collection.      | src stream="netflow" \| sort timestamp desc \| tail 2        |
| **set/add**  | set {field}={expression}[, … {fieldN}={expression}]<br/> / add fieldName={expression}[, … fieldNameN={expression}] | Adds or creates a new field in all records. The `set` command updates the value of an existing field if a field with the given name already exists, while the `add` command always adds a new field. | src stream="netflow" \| set streamNameWithClientIp = concat(_stream,"-",clientIp) \| project +_stream, +clientIp, +streamNameWithClientIp |
| **top/rare** | top {field} [by {field_name}, [{field_name1},…]] [limit={number}] [others=true/false] [maxBuckets={number}] <br />/ rare {field} [by {field_name, [field_name1, ….]}] [limit={number}] [others=true/false] [maxBuckets={number}] | Returns the {limit} most frequent top/rare values of the expression. | src stream="netflow" \|  top clientIp limit=2                |
| **fork**     | fork ({subPipe1}), ({subPipe2}) [, ... ({subPipeN})]         | Takes objects from the input collection and sends them to a parallel pipeline. | src stream="netflow" \| fork (aggr clientIpCount = count(clientIpCount)), (aggr maxTimeStamp = max(timestamp)) |
| **subpipe**  | subpipe ({subPipe})                                          | Defines a sub-pipeline that will be executed on each object of the input collection. | src stream="netflow" \| subpipe (src stream="netflow" \| aggr clientIpCount = count(clientIpCount) \| dst "collector2") |
| **where**    | where {logical_filter}                                       | An FA command that filters input objects with the specified logical filter. | src stream="netflow" \| where clientIp="172.16.10.11" or serverIp="172.16.10.11" |
| **sleep**    | sleep {delay}                                                | The command is used to delay the execution of the next command in the pipeline. | src stream="netflow" \| sort clientIp desc \| sleep 10 \| sort clientIp |
| **unwind**   | unwind {field} [includeEmpty=true/false]                     | The command unwinds the collection values for the {field} field. A new object is created for each value. The record remains unchanged if the {field} is not a collection. | src stream="netflow" \| unwind exporterIps                   |
| **fields**   | fields [maxFields={number}] [maxTuples={number} ] [topCount={number} ] [maxDistinctValuesPerField={number} ] | The command is used to display information about fields. It counts fields, unique values and collects the most common values. | src stream="netflow" \| fields maxFields=10                  |

### Agregations

| Command name  | Syntax                                                       | Description                                                  | Example                                                      |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **aggr**      | aggr {field}={aggregation_function}(...) [,{fieldN}={aggregation_functionN},...] [by {grouping_field}[, {grouping_field}, ...]] [unwind=true/false] [maxBuckets={number}] | Aggregates data using an aggregation function, producing a single result for a collection of objects or its subset. Multiple aggregation functions can be used with the `aggr` command on several fields, but regular functions cannot be combined. | src stream="netflow" \| aggr maxTimeStamp = max(timestamp) by clientIp unwind=true |
| **rangeAggr** | rangeAggr {field}={aggregation_function}({field}) [on {field}] [by {field}[, {field}]] ranges="1-5,5-10" [bucketAlias={string}] [unwind=true/false] | Aggregates data for specified subsets defined by a range of values. | src stream="netflow" \| rangeAggr valuesCount=count(clientBytes), maxBalance=max(clientBytes) on clientBytes by clientIp ranges="0-5000,8000-10000" |
| **splitAggr** | splitAggr {field}={aggregation_function}({streamField}) [, ... {fieldN}={aggregation_functionN}({streamFieldN})] ({subAggr1}), ({subAggr2}), [, ... ({subAggrN})] [unwind=true/false] | Performs multiple aggregations, where each subsequent one is performed in the context of the previous one. | src stream="netflow" \| splitAggr sumBytes0=sum(clientBytes) (aggr by clientIp unwind=true),(aggr by serverIp unwind=true)) |
| **timeAggr**  | timeAggr {field}={aggregation_function}({field}) [on {field}] [by {field}[, {field}]] [interval={timespan}] [dir={dir}] [maxBuckets={number}] [bucketAlias={string}] [unwind=true/false] | An operator that aggregates data using an aggregate(accumulator) function. <br/>Returns results for specific subsets of data defined as time periods. <br/>It is primarily used to create graphs where one of the axes corresponds to time. | src stream="netflow" \| timeAggr avgClientBytes=avg(clientBytes), cntClientBytes=count(clientBytes) on timestamp interval="1d" \| set dateTime=tsToStr(_bucket) \| sort _bucket |

---

## Functions

### Dates and times functions

| Function name                                                | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **now**() : long                                             | Creates a timestamp in GMT+00 time zone from the time of the call | records {"n":"0"} \|  set funResult = now() \| set funResultStr=tsToStr(funResult) \| project +funResult, +funResultStr \| limit 1 |
| **timestamp**(int yy, int mm, int dd, int hh24, int mi, int sec [, offset={int}]) : long | Calculates the timestamp for the given values of year, month, day, hour, minute and second. | records {"n":"0"} \|  set funResult = timestamp(1995,10,13,12,15,20) \| set funResultStr=tsToStr(funResult) \| project +funResult, +funResultStr \| limit 1 |
| **addMonths**(long ts, int  n) : long                        | Adds n months to the ts timestamp.                           | records {"n":"0"} \|  set funResult = addMonths(now(),1) \| set funResultStr=tsToStr(funResult) \| project +funResult, +funResultStr \| limit 1 |
| **addYears**(long ts, int n)  : long                         | Adds n years to the ts timestamp.                            | records {"n":"0"} \|  set funResult = addYears(now(),1) \| set funResultStr=tsToStr(funResult) \| project +funResult, +funResultStr \| limit 1 |
| **addDays**(long ts, int n)  : long                          | Adds n days to the ts timestamp.                             | records {"n":"0"} \|  set funResult = addDays(now(),1) \| set funResultStr=tsToStr(funResult) \| project +funResult, +funResultStr \| limit 1 |
| **addHours**(long ts, int n)  : long                         | Adds n hours to the ts timestamp.                            | records {"n":"0"} \|  set funResult = addHours(now(),1) \| set funResultStr=tsToStr(funResult) \| project +funResult, +funResultStr \| limit 1 |
| **addMinutes**(long arg1, int arg2) : long                   | Adds n minutes to the ts timestamp.                          | records {"n":"0"} \|  set funResult = addMinutes(now(),1) \| set funResultStr=tsToStr(funResult) \| project +funResult, +funResultStr \| limit 1 |
| **addSeconds**(long arg1, int arg2) : long                   | Adds n seconds to the ts timestamp.                          | records {"n":"0"} \|  set funResult = addSeconds(now(),1) \| set funResultStr=tsToStr(funResult) \| project +funResult, +funResultStr \| limit 1 |
| **addMillis**(long arg1, int  arg2) : long                   | Adds n milliseconds to the ts timestamp.                     | records {"n":"0"} \|  set funResult = addMillis(now(),1000) \| set funResultStr=tsToStr(funResult) \| project +funResult, +funResultStr \| limit 1 |
| **getYear**(long arg1) : int                                 | Returns the year from the given ts timestamp.                | records {"n":"0"} \|  set funResult = getYear(now())  \| project +funResult \| limit 1 |
| **getMonth**(long arg1) :  int                               | Returns the month from the given ts timestamp.               | records {"n":"0"} \|  set funResult = getMonth(now())  \| project +funResult \| limit 1 |
| **getDay**(long arg1) : int                                  | Returns the number of the day of the month from the given ts timestamp. | records {"n":"0"} \|  set funResult = getDay(now())  \| project +funResult \| limit 1 |
| **getDayOfWeek**(long timestamp) : int                       | Returns the number of the day of the week from the given ts timestamp. | records {"n":"0"} \|  set funResult = getDayOfWeek(now())  \| project +funResult \| limit 1 |
| **getHour**(long timestamp)  : int                           | Returns the hour from the given ts timestamp.                | records {"n":"0"} \|  set funResult = getHour(now())  \| project +funResult \| limit 1 |
| **getMinute**(long timestamp) : int                          | Returns the minute from the given ts timestamp.              | records {"n":"0"} \|  set funResult = getMinute(now())  \| project +funResult \| limit 1 |
| **getSecond**(long timestamp) : int                          | Returns the second from the given ts timestamp.              | records {"n":"0"} \|  set funResult = getSecond(now())  \| project +funResult \| limit 1 |
| **tsToStr**(long arg [, format={string}] [, zone={string}]) : string | Returns the ts timestamp as a formatted date.                | records {"n":"0"} \|  set funResult = now() \| set funResultStr=tsToStr(funResult) \| project +funResultStr \| limit 1 |
| **tsParse**(string arg [, format={string}] [, zone={string}]) : long | For the given arg (formatted date and time), returns the timestamp value. | records {"n":"0"} \|  set funResult = tsParse("2021-06-09 15:12:10", format="yyyy-MM-dd HH:mm:ss" zone="Poland")  \| set funResultStr=tsToStr(funResult) \| project +funResult, +funResultStr \| limit 1 |
| **tsOffset**(long ts, int n)  : long                         | Returns the ts timestamp offset by n.                        | records {"n":"0"} \|  set funResult = tsOffset(now(),10) \| set funResultStr=tsToStr(funResult) \| project +funResult, +funResultStr \| limit 1 |

---

### Mathematical functions

| Function name                                                | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **sum**(number n1, number n2 [,nN] [, type={string}]: number | Returns the result of the sum: n1, n2 + ... + nN             | records {"n":"0"} \| set funResult = sum(1,2,3,4) \| project +funResult \| limit 1 |
| **add**(number n1, number n2 [, type={string}]): number      | Returns the result of the sum: n1 + n2                       | records {"n":"0"} \| set funResult = add(1,2) \| project +funResult \| limit 1 |
| **sub**(number n1, number n2 [, type={string}]): number      | Returns the result of the subtraction: n1 -  n2              | records {"n":"0"} \| set funResult = sub(1,2) \| project +funResult \| limit 1 |
| **mul**(number n1, number n2 [, type={string}]): number      | Returns the result of the multiplication: n1 * n2            | records {"n":"0"} \| set funResult = mul(1,2) \| project +funResult \| limit 1 |
| **div**(number n1, number n2) : double                       | Returns the result of the division: n1 / n2                  | records {"n":"0"} \| set funResult = div(1,2) \| project +funResult \| limit 1 |
| **floorDiv**(number n1, number n2): long                     | Returns the result of the division: n1 / n2  without remainders. | records {"n":"0"} \| set funResult = floorDiv(1,2) \| project +funResult \| limit 1 |
| **mod**(number n1, number n2): long                          | Returns the result of the remainder of the division: n1 / n2. | records {"n":"0"} \| set funResult = mod(1,2) \| project +funResult \| limit 1 |
| **abs**(number n) : number                                   | Returns the base value of n.                                 | records {"n":"0"} \| set funResult = abs(-2) \| project +funResult \| limit 1 |
| **pow**(number n1, n2):  double                              | Returns the result of the multiplication: n1 * n2.           | records {"n":"0"} \| set funResult = pow(2,2) \| project +funResult \| limit 1 |
| **sqrt**(number n) :  double                                 | Returns the square root of the number n.                     | records {"n":"0"} \| set funResult = sqrt(4) \| project +funResult \| limit 1 |
| **sqr**(number n) : double                                   | Returns the square of the number n.                          | records {"n":"0"} \| set funResult = sqr(4) \| project +funResult \| limit 1 |
| **floor**(number n) : long                                   | Returns the number n rounded down to the nearest integer.    | records {"n":"0"} \| set funResult = floor(10.23) \| project +funResult \| limit 1 |
| **ceil**(number n) : long                                    | Returns the number n rounded up to the nearest integer.      | records {"n":"0"} \| set funResult = ceil(10.23) \| project +funResult \| limit 1 |
| **sign**(number n) : int                                     | Returns -1 for `n<0`, 0 for `n=0` and 1  for `n>0`.          | records {"n":"0"} \| set funResult = sign(-123) \| project +funResult \| limit 1 |
| **rand**() : double                                          | Returns a random number in the range (0,1).                  | records {"n":"0"} \| set funResult = rand() \| project +funResult \| limit 1 |
| **randInt**(int from, int  to) : int                         | Returns a random integer in the given range (from, to).      | records {"n":"0"} \| set funResult = randInt(10,100) \| project +funResult \| limit 1 |
| **bitAnd**(number n1,  number n2 [, number nN]): number :    | Returns the result of the `AND` bit operation on the arguments | records {"n":"0"} \| set funResult = bitAnd(255,3) \| project +funResult \| limit 1 |
| **bitOr**(number n1,  number n2 [, number nN]): number :     | Returns the result of the `OR` bit operation on the arguments | records {"n":"0"} \| set funResult = bitOr(1,2) \| project +funResult \| limit 1 |

---

### Conditional functions

| Function name                                                | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **if**(string condition : object result1, object result2)    | If `condition` is true, it returns `result1`, otherwise returns `result2`. | records {"fName":"Jake","dep":"IT"},{"fName":"Jack","dep":"ADM"},{"fName":"Harry","dep":"ADM"} \|  set funResult = if( fName="Jake":"This is Jake","This is not Jake") \| project +fName, +funResult \| limit 10 |
| **switch**(field_name,  "1": object result1, "2": object result2, object default_result) | If the value of the `field_name` is `1`, the function returns the `result1`. If `2`, it returns the `result2`. If none of the given values, the function returns the `defaultResult`. | records {"fName":"Jake","dep":"IT"},{"fName":"Jack","dep":"ADM"},{"fName":"Harry","dep":"ADM"} \|  set funResult = switch( fName, "Jake":"This is Jake", "Harry":"This is Harry","This is not Jake") \| project +fName, +funResult \| limit 10 |

---

### String fuctions

| Function name                                                | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **concat**(string arg1, string arg2 [,string argN] [,delimiter={string} distinct=true/false limit={int}]) : string | Returns the concatenated strings `arg1, arg2, ..., argN`     | records {"n":"0"} \|  set funResult = concat("This","-","is","-","Jake") \| project +funResult \| limit 1 |
| **substring**(string arg, int n1 [, endId=n2]) : string      | Cuts the sequence of characters on positions `n1` to `n2`.   | records {"n":"0"} \|  set funResult = substring("This is Jake", 5, endId=7) \| project +funResult \| limit 1 |
| **left**(string arg, int n) : string                         | Returns the initial sequence of characters from `arg` of length `n`. | records {"n":"0"} \|  set funResult = left("This is Jake", 5) \| project +funResult \| limit 1 |
| **right**(string arg, int n) : string                        | Returns the final sequence of characters from `arg `of length `n`. | records {"n":"0"} \|  set funResult = right("This is Jake", 5) \| project +funResult \| limit 1 |
| **lower**(string arg) : string                               | Returns the given `arg` text in which all uppercase characters are converted to lowercase. | records {"n":"0"} \|  set funResult = lower("This is Jake") \| project +funResult \| limit 1 |
| **upper**(string arg) : string                               | Returns the given `arg` text in which all lowercase characters are converted to uppercase. | records {"n":"0"} \|  set funResult = upper("This is Jake") \| project +funResult \| limit 1 |
| **replace**(string arg, string str1, string str2 [, strat=first/last/all]) :  string | Returns the given `arg` text in which `str1` strings are converted to `str2` | records {"n":"0"} \|  set funResult = replace("This is Jake", "Jake", "Harry") \| project +funResult \| limit 1 |
| **trim**(string arg) : string                                | Returns `arg` text without "white" characters at the beginning and the end. | records {"n":"0"} \|  set funResult = trim("     This is Jake     ") \| project +funResult \| limit 1 |
| **startsWith**(string arg1, string arg2) : boolean           | Returns true if the given `arg1` text starts with the string `arg2`. | records {"n":"0"} \|  set funResult = startsWith("This is Jake" , "This") \| project +funResult \| limit 1 |
| **endsWith**(string arg1, string arg2) : boolean             | Returns true if the given `arg1` text ends with the string `arg2`. | records {"n":"0"} \|  set funResult = endsWith("This is Jake" , "Jake") \| project +funResult \| limit 1 |
| **contains**(string arg1, string arg2 [, ignorecase=true/false]) : boolean | Returns true if `arg1` contains the string `arg2`.           | records {"n":"0"} \|  set funResult = contains("This is Jake" , "is") \| project +funResult \| limit 1 |
| **indexOf**(string arg1, char arg2 [, start_index={int}] [, ignore_case=true/false]) : int | Returns the position on which the `arg2` character is in `arg1`. | records {"n":"0"} \|  set funResult = indexOf("This is Jake" , "is" ) \| project +funResult \| limit 1 |
| **strlen**(string arg) : int                                 | Returns the length of the string of `arg1` characters.       | records {"n":"0"} \|  set funResult = strlen("This is Jake") \| project +funResult \| limit 1 |
| **regex**(string text, string pattern) : boolean             | Returns true if the given `text` contains the regular expression `pattern`. | records {"n":"0"} \|  set funResult = regex("This is Jake", "^.*is.*$") \| project +funResult \| limit 1 |
| **like**(string text, string pattern) : boolean              | Returns true if the given `text` contains a `pattern`.       | records {"n":"0"} \|  set funResult = like("This is Jake", "*is*Jak?") \| project +funResult \| limit 1 |

---

### Aggregator (Acumulator) functions

| Function name                        | Description                                                                       | Example                                                      |
| ------------------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **count**(field_name)                 | The number of objects found in a group.                                          | src stream="netflow" \| aggr clientIpCount = count(clientIp) by protocol unwind=true |
| **sum**(field_name)                   | The sum of the `field_name` values in all objects found in a group.              | src stream="netflow" \| aggr clientBytesSum = sum(clientBytes) by protocol unwind=true |
| **avg**(field_name)                   | The average of the `field_name` values in all objects found in a group.          | src stream="netflow" \| aggr clientBytesAvg = avg(clientBytes) by protocol unwind=true |
| **min**(field_name)                   | The lowest of the `field_name` values in all objects found in a group.           | src stream="netflow" \| aggr clientBytesMin = min(clientBytes) by protocol unwind=true |
| **max**(field_name)                   | The highest of the `field_name` values in all objects found in a group.          | src stream="netflow" \| aggr clientBytesMax = max(clientBytes) by protocol unwind=true |
| **first**(field_name)                 | The first value of the `field_name` in all objects found in a group.              | src stream="netflow" \| aggr clientBytesFisrt = first(clientBytes) by protocol unwind=true |
| **last**(field_name)                  | The last value of the `field_name` in all objects found in a group.              | src stream="netflow" \| aggr clientBytesLast = last(clientBytes) by protocol unwind=true |
| **dc**(field_name)                    | The number of unique values of the `field_name` in all objects found in a group. | src stream="netflow" \| aggr clientBytesDc = dc(clientBytes) by clientIp unwind=true |
| **join**(field_name)                  | The blend of values of the `field_name` values in all objects found in a group.   | src stream="netflow" \| aggr clientIps = join(clientIp) by protocol unwind=true |
| **prc**(field_name [, percentile={double}]) | The percentile/100  order quantile for each unique key defined by the `BY` clause of the `AGGR`  command group. | src stream="netflow" \| aggr clientBytesPrc = prc(clientBytes) by clientIp unwind=true |
| **prc95**(field_name)                       | The quantile of 95/100  for each unique key defined by the `BY` clause of the `AGGR` command group.             | src stream="netflow" \| aggr clientBytesPrc = prc95(clientBytes) by clientIp unwind=true |

**Note**: The aggregation functions cannot be combined with ordinary functions in aggregations. For example, the command `src stream ="netflowByCountryAggr" | aggr mintimestamp=tsToStr(min(timestamp))`, in which you want to retrieve the minimum (min) value of the timestamp field and immediately convert the result to text form (`tsToStr`), will not work. Instead, you can use the set command: `src stream ="netflowByCountryAggr" | aggr mintimestamp=min(timestamp) | set mintimestampStr=tsToStr(mintimestamp)`.

---

### Network object functions 

| Function name                                        | Description                                                  | Example                                                      |
| ---------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **isIp**(object arg) : boolean                       | Returns true if `arg0` is a valid IPv4 or IPv6 address.      | records {"n":"0"} \|  set funResult = isIp("172.16.60.143") \| project +funResult \| limit 1 |
| **isIp4**(object arg) : boolean                      | Returns true if `arg0` is a valid IPv4 address.              | records {"n":"0"} \|  set funResult = isIp4("172.16.60.143") \| project +funResult \| limit 1 |
| **isIp6**(object arg) : boolean                      | Returns true if `arg0` is a valid IPv6 address.              | records {"n":"0"} \|  set funResult = isIp6("2001:db8:3333:4444:5555:6666:1.2.3.4") \| project +funResult \| limit 1 |
| **isIpLoopback**(object arg) : boolean               | Returns true if `arg0` is a valid "loopback" address.        | records {"n":"0"} \|  set funResult = isIpLoopback("172.16.60.143") \| project +funResult \| limit 1 |
| **isIpMulticast**(object arg) : boolean              | Returns true if `arg0` is a valid IP multicast address.      | records {"n":"0"} \|  set funResult = isIpMulticast("172.16.60.143") \| project +funResult \| limit 1 |
| **isIpPrivate**(object arg) : boolean                | Returns true if `arg0` is a valid private address.           | records {"n":"0"} \|  set funResult = isIpPrivate("172.16.60.143") \| project +funResult \| limit 1 |
| **toMac**(string arg [,type={string}]) : object      | Based on the text representation of the MAC address, returns the MAC address type. | records {"n":"0"} \|  set funResult = toMac("00:00:5e:00:53:af") \| project +funResult \| limit 1 |
| **isMac**(object arg) : boolean                      | Returns true if `arg0` is a valid MAC address.               | records {"n":"0"} \|  set funResult = isMac("00:00:5e:00:53:af") \| project +funResult \| limit 1 |
| **ipToStr**(object arg [,short=true/false]) : string | Returns a textual representation of the IP address.          | records {"n":"0"} \|  set funResultIp = toIp("172.16.60.143") \| set funResultIpStr = ipToStr(funResultIp) \| project +funResultIp \| limit 1 |
| **macToStr**(object arg) : string                    | Returns a textual representation of MAC address.             | records {"n":"0"} \|  set funResultMac = toMac("00:00:5e:00:53:af") \| set funResultMacStr = macToStr(funResultMac) \| project +funResultMacStr \| limit 1 |
| **toSubnet**(string arg) : IpSubnet                  | Returns an object of IbSubnet type based on the text representation of `arg1`. | records {"n":"0"} \|  set funResult = toSubnet("172.16.60.143") \| project +funResult \| limit 1 |
| **isSubnet**(object arg) : boolean                   | Returns true if the passed `arg1` is a valid representation of the subnet mask for IP version 4 or 6. | records {"n":"0"} \|  set funResult = isSubnet("172.16.60.143") \| project +funResult \| limit 1 |
| **inSubnet**(object ip, object subnet) : boolean     | Returns true if the passed IP address belongs to the indicated subnet mask. | records {"n":"0"} \|  set funResult = inSubnet("172.16.60.143", "172.16.40.0/24") \| project +funResult \| limit 1 |
| **subnetToStr**(object arg) : string                 | Returns a textual representation of the subnet mask.         | records {"n":"0"} \|  set funResult = subnetToStr("172.16.40.0/24") \| project +funResult \| limit 1 |

---

###  Lookup functions

| Function name                                                | Description                                                    | Example        |
| ------------------------------------------------------------ | -------------------------------------------------------------- | ------------------------------------------------------------ |
| **lookup**(string lookupName, string outputKey, map<string, object> input[, default={string} unwind={string}]) : object       | Function returns an `outputKey` field value of the first found object in the `lookupName` lookup which meets the criteria defined in `input`. | src stream="alerts" \| set nameByPort=lookup("names-app", "name", {"port": "80"}) \| project +nameByPort \| limit 1 |
| **lookupAll**(string lookupName, string outputKey, map<string, object> input[, noresult={string},  unwind={string}]) : object | Function returns an `outputKey` field value of all objects in the `lookupName` lookup which meet the criteria defined in `input`. | src stream="alerts" \| set portsByName=lookupAll("names-app", "port", {"name": "NETBIOS"}) \| project +portsByName \| limit 1 |
| **lookupKeyExists**(string lookupName,  map<string, object> input) : boolean | Function checks an occurrence of an object in the `lookupName` lookup which meets the `input` criteria. | src stream="alerts" \| set portExists=lookupKeyExists("names-app", {"port": "80"}) \| project +portExists \| limit 1 |

---

### Collection functions

| Function name                                                | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **in**(object arg1, collection arg2) : boolean               | Returns true if the `arg1` object or number is in the `arg2` collection. | records {"n":"0"} \|  set funResult = in("John", ["his", "name", "is" ,"John"]) \| project +funResult \| limit 1 |
| **all**(object arg0, collection arg1) : boolean              | Returns true if `arg0` (collections or array) is a subset of `arg2` (array or list). | records {"n":"0"} \|  set funResult = all(["a", "b"], ["a", "b", "c"]) \| project +funResult \| limit 1 |
| **any**(object arg0, collection arg1) : boolean              | Returns true if `arg1` and `arg2` (collections or array) have common elements. | records {"n":"0"} \|  set funResult = any(["value1"], ["value2", "value3"]) \| project +funResult \| limit 1 |
| **none**(object arg0, collection arg1) : boolean             | Returns true if `arg1` and `arg2` (collections or array) have no common elements. | records {"n":"0"} \|  set funResult = none(["value1"], ["value2", "value3"])	 \| project +funResult \| limit 1 |
| **len**(collection arg0) : number                            | Returns the number of elements in a collection (array, list, set). | records {"n":"0"} \|  set funResult = len([1, "two", 3.0])  \| project +funResult \| limit 1 |
| **valueAt**(collection arg1, int index) : object             | Returns the value from the collection at the specified index. | records {"n":"0"} \|  set funResult = valueAt([1, "two", 3.0], 2) \| project +funResult \| limit 1 |
| **hasKey**(string key, map map) : boolean                    | Returns true if key exists in the `map` map.                 | records {"n":"0"} \|  set funResult = hasKey("a", {"a": 1}) \| project +funResult \| limit 1 |
| **hasValue**(string val, map) : boolean                      | Returns true if the `val` value exists in the `map` map.     | records {"n":"0"} \|  set funResult = hasValue(1, {"a": 1}) \| project +funResult \| limit 1 |
| **get**(int arg1, collection arg2) : object                  | Returns the value of an element in the `arg1` collection for a given `arg1` index. | records {"n":"0"} \|  set funResult = get(1, [10,20,30]) \| project +funResult \| limit 1 |
| **getValue**(string arg1, map arg2) : boolean                | Returns the value of the element in the  `arg2` map after the `arg1` key. | records {"n":"0"} \|  set funResult = getValue("a", {"a": 1}) \| project +funResult \| limit 1 |
| **anyMatchingNumber**(collection arg1, long mask, long arg2) : boolean | Returns true if there is at least one `x`  value in the `arg1` collection that meets the condition `(x & mask) == arg2`,  where` (x & mask)` is the result of an `AND` operation on the bits. | records {"n":0} \| set funResult = anyMatchingNumber([1,2,3], 1, 1) \| project +funResult |
| **noMatchingNumber**(collection arg1, long mask, long arg2) : boolean | Returns the opposite value (`NOT`) to the  result of `anyMatchingNumber(arg1, mask, arg2)`. | records {"n":0} \| set funResult = noMatchingNumber([1,2,3], 1, 1) \| project +funResult |

---

### Collector functions

| Function name                                                | Description                                                  | Example*                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **valInColl**(object value, string collector, string field_name [, maxCacheSize={int}]) : boolean | Returns true if the value exists in the `collector` in the given `field_name`. | records {"n":"0"} \|  set funResult = valInColl("Medium", "collectorNo1", "alertSeverity") |
| **collExists**(string collector) : boolean                   | Returns true if a collector with the given `collector` exists. | records {"n":"0"} \|  set funResult = collExists("collectorNo1") |
| **valColl**(string collector, string output, Map<String, Object> input [,default={string}]) | The function returns the value from `collector` according to the set input matching the criteria and the set output field/column. | records {"n":"0"} \|  set funResult = valColl("collectorNo1", "alertName", {"id": "61ed6f62-dc45fb9a-e1c8b7f1"}) |

*Examples assume existing of a collector "collectorNo1" created by the command: `src stream="alerts" | limit 1000 | dst "collectorNo1"`

---

### Operators

| Logical operators | Example |
| ------------------ | -------- |
| **AND** or **and** |src stream="alerts" \|where $eq(alertSeverity,"Medium") AND alertFlagThresholdLevel="Crirical"|
| **OR** or **or** |src stream="alerts" \|where eq(alertSeverity,"Medium") OR eq(alertSeverity,"Hight")|
| **NOT** or **not**         | src stream="alerts" \| where not alertSeverity="Medium" |

| Comparison operators or function   | Description                          | Example          |
| ---------------------------------- | -------------------------------------| ----------------- |
| **=** or **eq** |(Equal) Checks if two values are equal. Returns true if they are and false otherwise.|src stream="alerts" \|where eq(alertSeverity,"Medium")|
| **!=** or **neq**                 | (Not Equal) Checks if two values are not equal. Returns true if they are not equal and false otherwise. | src stream="alerts" \| where alertSeverity != "Medium" |
| **>** or **gt**                   | (Greater Than) Checks if the first value is greater than the second value. Returns true if it is and false otherwise. | src stream="alerts" \| where _avgClientBitsPerSecond > 9000 |
| **>=** or **gte**  |(Greater Than or Equal To) Checks if the first value is greater than or equal to the second value. Returns true if it is and false otherwise.|src stream="alerts" \|where gte(_avgClientBitsPerSecond,1000)|
| **<** or **lt**                   | (Less Than) Checks if the first value is lower than the second value. Returns true if it is and false otherwise. | src stream="alerts" \| where _avgClientBitsPerSecond < 1000 |
| **>=** or **lte**                 | (Less Than or Equal To) Checks if the first value is lower than or equal to the second value. Returns true if it is and false otherwise. | src stream="alerts" \| where _avgClientBitsPerSecond >= 1000 |
| **contains**(arg1,arg2)  |Returns true if `arg1` contains the string `arg2`.|src stream="alerts" \|where contains(alertFlagThresholdLevel, "Critic")|
| **not_contains**(arg1,arg2) |Returns true if `arg1` does not contain the string `arg2`.|rc stream="alerts" \|where not_contains(alertName, "Test")|
| **startsWith**(arg1,arg2) |Returns true if `arg1` starts with the `arg2` string.|src stream="alerts" \|where startsWith(alertRuleType, "Vis")|
| **endsWith**(arg1,arg2) |Returns true if `arg1` ends with the `arg2` string.|src stream="alerts" \|where endsWith(alertRuleType, "ity")|
| **isEmpty**(arg1) |Returns true if `arg1` is empty.|src stream="alerts" \|where isEmpty(alertRuleType)|
| **isNotEmpty**(arg1) |Returns true if `arg1` is not empty.|src stream="alerts" \|where $isNotEmpty(alertRuleType)|
| **in**(arg1,arg2) |Returns true if `arg1` is in the `arg2` collection.| src stream="alerts" \| where $in(alertFlagThresholdLevel, ["Crirical", "Minor"]) |
| **notIn**(arg1,arg2)  |Returns true if `arg1` is not in the `arg2` collection.|src stream="alerts" \|where notIn(alertFlagThresholdLevel, ["Crirical", "Minor"])|
| **~=** or **like**(arg1,arg2) | Returns true if `arg1` matches the `arg2` pattern.| src stream="alerts" \| where alertFlagThresholdLevel~="Critic*" |
| **=/regexp/** or **regex**(arg1,arg2)  | Returns true if `arg1` contains the `arg2` regular expression pattern.|src stream="alerts" \| where alertFlagThresholdLevel=/Critic.*/ |



























