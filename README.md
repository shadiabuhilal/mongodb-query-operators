# mongodb-query-operators
![Build Status](https://github.com/shadiabuhilal/mongodb-query-operators/actions/workflows/push-workflows.yml/badge.svg)

MongoDB query operators helper

https://shadiabuhilal.github.io/mongodb-query-operators/

-----------

## Usage

### import mongodb-query-operators
```js
import { QueryOperators } from 'mongodb-query-operators';
```

Or

### require mongodb-query-operators
```js
const { QueryOperators } = require('mongodb-query-operators');
```

---

### Available Query Operations
Support query operations that used in MongoDB.

| Variable                                          | Operator              | Description                            |
|---------------------------------------------------|-----------------------|----------------------------------------|
| QueryOperators.LessThan                           | `$lt`                 | Less than                              |
| QueryOperators.LessThanOrEqual                    | `$lte`                | Less than or equal to                  |
| QueryOperators.Equal                              | `$eq`                 | Equal to                               |
| QueryOperators.NotEqual                           | `$ne`                 | Not equal to                           |
| QueryOperators.GreaterThan                        | `$gt`                 | Greater than                           |
| QueryOperators.GreaterThanOrEqual                 | `$gte`                | Greater than or equal to               |
| QueryOperators.In                                 | `$in`                 | In                                     |
| QueryOperators.NotIn                              | `$nin`                | Not In                                 |
| QueryOperators.Exists                             | `$exists`             | Exists                                 |
| QueryOperators.Type                               | `$type`               | Type                                   |
| QueryOperators.Modulus                            | `$mod`                | Modulus                                |
| QueryOperators.Regex                              | `$regex`              | Regular Expression                     |
| QueryOperators.Text                               | `$text`               | Text Search                            |
| QueryOperators.TextOperators.Search               | `$search`             | Text Search - Search                   |
| QueryOperators.TextOperators.Language             | `$language`           | Text Search - Language                 |
| QueryOperators.TextOperators.CaseSensitive        | `$caseSensitive`      | Text Search - Case Sensitive           |
| QueryOperators.TextOperators.DiacriticSensitive   | `$diacriticSensitive` | Text Search - Diacritic Sensitive      |
| QueryOperators.Where                              | `$where`              | Where                                  |
| QueryOperators.Size                               | `$size`               | Size                                   |
| QueryOperators.All                                | `$all`                | All Elements Match                     |
| QueryOperators.ElemMatch                          | `$elemMatch`          | Element Match                          |
| QueryOperators.Not                                | `$not`                | Not                                    |
| QueryOperators.Nor                                | `$nor`                | Nor                                    |
| QueryOperators.Or                                 | `$or`                 | Or                                     |
| QueryOperators.And                                | `$and`                | And                                    |
| QueryOperators.GeoWithin                          | `$geoWithin`          | GeoWithin                              |
| QueryOperators.GeoIntersects                      | `$geoIntersects`      | GeoIntersects                          |
| QueryOperators.Near                               | `$near`               | Near                                   |
| QueryOperators.NearSphere                         | `$nearSphere`         | Near Sphere                            |
| QueryOperators.Geometry                           | `$geometry`           | Geometry                               |
| QueryOperators.CenterSphere                       | `$centerSphere`       | Center Sphere                          |
| QueryOperators.Box                                | `$box`                | Box                                    |
| QueryOperators.Polygon                            | `$polygon`            | Polygon                                |
| QueryOperators.UniqueDocs                         | `$uniqueDocs`         | Unique Documents                       |
| QueryOperators.Comment                            | `$comment`            | Comment                                |

[MongoDB query operations doc](https://www.mongodb.com/docs/manual/reference/operator/query/).
