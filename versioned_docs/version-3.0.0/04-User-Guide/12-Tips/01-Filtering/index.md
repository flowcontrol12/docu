---
addressMatch: docsKey=simpleFilters
---

# Filtering

By using a single Filter you can also create more advanced filtration with the use of operators listed in the table below.

| Syntax            | Description                                                  | Example                                                      |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `abc`;`*abc*`     | The search string is compared to every word in the field value, disregarding case sensitivity. | ![image-20231013125450803](assets/image-20231013125450803.png)![image-20231013111842517](assets/image-20231013111842517.png) |
| `abc*`            | The search string is matched by any string that begins with an `abc` string and is followed by zero or more characters of any type. | ![image-20231013112455093](assets/image-20231013112455093.png) |
| `*abc`            | The search string is matched by any string that ends with an `abc` string and is preceded by zero or more characters of any kind. | ![image-20231013112156678](assets/image-20231013112156678.png) |
| `"abc"`           | The search string is matched by a string including only the exact word or phrase enclosed within the quotation marks. | ![image-20231013133549626](assets/image-20231013133549626.png) |
| `>value`          | For numeric fields, the search string returns all records with a value greater than the specified `value`. | ![image-20231013125730484](assets/image-20231013125730484.png) |
| `>=value`         | For numeric fields, the search string returns all records with a value equal to or greater than the specified `value`. | ![image-20231013125821160](assets/image-20231013125821160.png) |
| `<value`          | For numeric fields, the search string returns all records with a value lower than the specified `value`. | ![image-20231013130157932](assets/image-20231013130157932.png) |
| `<=value`         | For numeric fields, the search string returns all records with a value equal to or lower than the specified `value`. | ![image-20231013130106462](assets/image-20231013130106462.png) |
| `>date`           | For numeric fields, the search string returns all date records with a value greater than the specified `data`. | ![image-20231013132639792](assets/image-20231013132639792.png) |
| `>=date`          | For numeric fields, the search string returns all date records with a value equal to or greater than the specified `data`. | ![image-20231013155146569](assets/image-20231013155146569.png) |
| `<date`           | For numeric fields, the search string returns all date records with a value lower than the specified `data`. | ![image-20231013132852776](assets/image-20231013132852776.png) |
| `<=date`          | For numeric fields, the search string returns all date records with a value equal to or lower than the specified `data`. | ![image-20231013155042381](assets/image-20231013155042381.png) |
| `<value1 >value2` | Combination of two values in one search. For numeric fields, the search string returns all records with a value lower than the specified `value1` **and** greater than `value2`. It works analogously for the other operators and their combinations (`<=;>=`) | ![image-20231013133300429](assets/image-20231013133300429.png) |
| `<date1 >date2`   | Combination of two date values in one search. For data value fields, the search string returns all records with a date value lower than the specified `date1` **and** greater than `date2`. It works analogously for the other operators and their combinations (`<=;>=`), | ![image-20231013155611369](assets/image-20231013155611369.png) |