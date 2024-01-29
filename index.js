/**
 * MongoDB Query Operators
 * Representing commonly used MongoDB query operators.
 */
const _QueryOperators = {};

/**
 * MongoDB Query Operators
 * This object represents commonly used MongoDB query operators.
 * @typedef {Object} QueryOperators
 */

/**
 * Equals operator: $eq
 * Matches values that are equal to a specified value.
 * @example
 * const query = { age: QueryOperators.Equal, value: 25 };
 * // This query matches users with age equal to 25
 */
_QueryOperators.Equal = '$eq';

/**
 * Not Equals operator: $ne
 * Matches values that are not equal to a specified value.
 * @example
 * const query = { age: QueryOperators.NotEqual, value: 30 };
 * // This query matches users with age not equal to 30
 */
_QueryOperators.NotEqual = '$ne';

/**
 * Greater Than operator: $gt
 * Matches values that are greater than a specified value.
 * @example
 * const query = { age: QueryOperators.GreaterThan, value: 25 };
 * // This query matches users older than 25
 */
_QueryOperators.GreaterThan = '$gt';

/**
 * Greater Than or Equal To operator: $gte
 * Matches values that are greater than or equal to a specified value.
 * @example
 * const query = { age: QueryOperators.GreaterThanOrEqual, value: 25 };
 * // This query matches users aged 25 or older
 */
_QueryOperators.GreaterThanOrEqual = '$gte';

/**
 * Less Than operator: $lt
 * Matches values that are less than a specified value.
 * @example
 * const query = { age: QueryOperators.LessThan, value: 30 };
 * // This query matches users younger than 30
 */
_QueryOperators.LessThan = '$lt';

/**
 * Less Than or Equal To operator: $lte
 * Matches values that are less than or equal to a specified value.
 * @example
 * const query = { age: QueryOperators.LessThanOrEqual, value: 30 };
 * // This query matches users aged 30 or younger
 */
_QueryOperators.LessThanOrEqual = '$lte';

/**
 * In operator: $in
 * Matches any of the values specified in an array.
 * @example
 * const query = { status: QueryOperators.In, value: ["active", "inactive"] };
 * // This query matches users with "active" or "inactive" status
 */
_QueryOperators.In = '$in';

/**
 * Not In operator: $nin
 * Matches values that are not in the specified array.
 * @example
 * const query = { status: QueryOperators.NotIn, value: ["inactive"] };
 * // This query matches users not in "inactive" status
 */
_QueryOperators.NotIn = '$nin';

/**
 * Exists operator: $exists
 * Matches documents that have the specified field.
 * @example
 * const query = { age: QueryOperators.Exists, value: true };
 * // This query matches users with an "age" field
 */
_QueryOperators.Exists = '$exists';

/**
 * Type operator: $type
 * Matches documents where the value of a field has a specific BSON data type.
 * @example
 * const query = { age: QueryOperators.Type, value: "number" };
 * // This query matches users with "age" as a number
 */
_QueryOperators.Type = '$type';

/**
 * Modulus operator: $mod
 * Performs a modulo operation on the value of a field.
 * @example
 * const query = { age: QueryOperators.Modulus, value: [2, 1] };
 * // This query matches users with even ages
 */
_QueryOperators.Modulus = '$mod';

/**
 * Regular Expression operator: $regex
 * Matches documents where a field matches a regular expression pattern.
 * @example
 * const query = { name: QueryOperators.Regex, value: /^A/ };
 * // This query matches users with names starting with "A"
 */
_QueryOperators.Regex = '$regex';

/**
 * Text Search operator: $text
 * Performs a full-text search on a field.
 * @example
 * const query = { [QueryOperators.Text]: { $search: "Alice" } };
 * // This query searches for users with "Alice" in their names (requires text index)
 */
_QueryOperators.Text = '$text';


/**
 * Text operator: $text
 * Performs a full-text search on a field.
 * @example
 * const query = {
 *   [QueryOperators.Text]: {
 *     [QueryOperators.TextOperators.Search]: "Alice",         // The text to search for
 *     [QueryOperators.TextOperators.Language]: "en",          // Optional: The language for text search
 *     [QueryOperators.TextOperators.CaseSensitive]: true,     // Optional: Case sensitivity (true or false)
 *     [QueryOperators.TextOperators.DiacriticSensitive]: true // Optional: Diacritic sensitivity (true or false)
 *   }
 * };
 * // This query searches for users with "Alice" in their names (requires text index)
 */
_QueryOperators.TextOperators = {
    Search: '$search',
    Language: '$language',
    CaseSensitive: '$caseSensitive',
    DiacriticSensitive: '$diacriticSensitive'
};

/**
 * Where operator: $where
 * Matches documents that satisfy a JavaScript expression.
 * @example
 * const query = { [QueryOperators.Where]: "this.age > 25" };
 * // This query matches users with age greater than 25 using a JavaScript expression
 */
_QueryOperators.Where = '$where';

/**
 * Size operator: $size
 * Matches documents where an array field has a specific size.
 * @example
 * const query = { name: QueryOperators.Size, value: 5 };
 * // This query matches users with a name of exactly 5 characters
 */
_QueryOperators.Size = '$size';

/**
 * All Elements Match operator: $all
 * Matches documents where all elements in an array field match a specified condition.
 * @example
 * const query = { hobbies: QueryOperators.All, value: ["reading", "swimming"] };
 * // This query matches users with all specified hobbies
 */
_QueryOperators.All = '$all';

/**
 * Element Match operator: $elemMatch
 * Matches documents where at least one element in an array field matches a specified condition.
 * @example
 * const query = { hobbies: QueryOperators.ElemMatch, value: { [QueryOperators.Equal]: "swimming" } };
 * // This query matches users with "swimming" as one of their hobbies
 */
_QueryOperators.ElemMatch = '$elemMatch';

/**
 * Not operator: $not
 * Inverts the effect of a query expression.
 * @example
 * const query = { age: QueryOperators.Not, value: { [QueryOperators.GreaterThan]: 25 } };
 * // This query matches users with age not greater than 25
 */
_QueryOperators.Not = '$not';

/**
 * Nor operator: $nor
 * Joins query clauses with a logical NOR and selects the documents that fail all the query clauses.
 * @example
 * const query = {
 *   $nor: [
 *     { age: QueryOperators.LessThan, value: 25 },
 *     { age: QueryOperators.GreaterThan, value: 30 }
 *   ]
 * };
 * // This query matches users who are neither younger than 25 nor older than 30
 */
_QueryOperators.Nor = '$nor';

/**
 * Or operator: $or
 * Joins query clauses with a logical OR and selects the documents that satisfy at least one of the query clauses.
 * @example
 * const query = {
 *   $or: [
 *     { age: QueryOperators.Equal, value: 25 },
 *     { age: QueryOperators.Equal, value: 30 }
 *   ]
 * };
 * // This query matches users who are either aged 25 or aged 30
 */
_QueryOperators.Or = '$or';

/**
 * And operator: $and
 * Joins query clauses with a logical AND and selects the documents that satisfy all the query clauses.
 * @example
 * const query = {
 *   $and: [
 *     { age: QueryOperators.GreaterThanOrEqual, value: 22 },
 *     { status: QueryOperators.Equal, value: "active" }
 *   ]
 * };
 * // This query matches users who are aged 22 and have "active" status
 */
_QueryOperators.And = '$and';

/**
 * GeoWithin operator: $geoWithin
 * Matches documents that are within a specified geometry.
 * @example
 * const query = {
 *   location: {
 *     [QueryOperators.GeoWithin]: {
 *       [QueryOperators.Geometry]: {
 *         type: "Polygon",
 *         coordinates: [ /* Polygon coordinates * / ]
 *       }
 *     }
 *   }
 * };
 */
_QueryOperators.GeoWithin = '$geoWithin';

/**
 * GeoIntersects operator: $geoIntersects
 * Matches documents that intersect with a specified geometry.
 * @example
 * const query = {
 *   location: {
 *     [QueryOperators.GeoIntersects]: {
 *       [QueryOperators.Geometry]: {
 *         type: "Point",
 *         coordinates: [ /* Point coordinates * / ]
 *       }
 *     }
 *   }
 * };
 */
_QueryOperators.GeoIntersects = '$geoIntersects';

/**
 * Near operator: $near
 * Returns geospatial objects in proximity to a specified point.
 * @example
 * const query = {
 *   location: {
 *     $near: {
 *       [QueryOperators.Geometry]: {
 *         type: "Point",
 *         coordinates: [ /* Point coordinates * / ]
 *       },
 *       $maxDistance: 1000 // Maximum distance in meters
 *     }
 *   }
 * };
 */
_QueryOperators.Near = '$near';

/**
 * Near Sphere operator: $nearSphere
 * Returns geospatial objects in proximity to a specified point on a sphere.
 * @example
 * const query = {
 *   location: {
 *     $nearSphere: {
 *       [QueryOperators.Geometry]: {
 *         type: "Point",
 *         coordinates: [ /* Point coordinates * / ]
 *       },
 *       $maxDistance: 1000 // Maximum distance in radians
 *     }
 *   }
 * };
 */
_QueryOperators.NearSphere = '$nearSphere';

/**
 * Geometry operator: $geometry
 * Defines a geospatial shape for use with the $geoWithin and $geoIntersects operators.
 * @example
 * const geometry = {
 *   type: "Polygon",
 *   coordinates: [ /* Polygon coordinates * / ]
 * };
 */
_QueryOperators.Geometry = '$geometry';

/**
 * Center Sphere operator: $centerSphere
 * Defines a circle on a sphere for use with the $geoWithin and $geoIntersects operators.
 * @example
 * const circle = {
 *   center: [ /* Center coordinates * / ],
 *   radius: 1000 // Radius in radians
 * };
 */
_QueryOperators.CenterSphere = '$centerSphere';

/**
 * Box operator: $box
 * Defines a rectangle for use with the $geoWithin and $geoIntersects operators.
 * @example
 * const box = {
 *   coordinates: [
 *     [ /* Bottom-left coordinates * / ],
 *     [ /* Top-right coordinates * / ]
 *   ]
 * };
 */
/**
 * ...
 * (Previous operators and comments)
 */

/**
 * Box operator: $box
 * Defines a rectangle for use with the $geoWithin and $geoIntersects operators.
 * @example
 * const query = {
 *   location: {
 *     [QueryOperators.GeoWithin]: {
 *       [QueryOperators.Box]: [
 *         [10, 20], // Bottom-left corner coordinates
 *         [30, 40]  // Top-right corner coordinates
 *       ]
 *     }
 *   }
 * };
 * // This query matches locations within the specified rectangle (requires geospatial data)
 */
_QueryOperators.Box = '$box';

/**
 * Polygon operator: $polygon
 * Defines a polygon for use with the $geoWithin and $geoIntersects operators.
 * @example
 * const query = {
 *   location: {
 *     [QueryOperators.GeoWithin]: {
 *       [QueryOperators.Polygon]: [
 *         [0, 0],   // Vertex 1 coordinates
 *         [0, 10],  // Vertex 2 coordinates
 *         [10, 10]  // Vertex 3 coordinates
 *       ]
 *     }
 *   }
 * };
 * // This query matches locations within the specified polygon (requires geospatial data)
 */
_QueryOperators.Polygon = '$polygon';

/**
 * Unique Documents operator: $uniqueDocs
 * Specifies that the results of a geospatial query should include only one of each distinct document.
 * @example
 * const query = { age: QueryOperators.UniqueDocs, value: true };
 * // This query returns unique documents based on geospatial query results
 */
_QueryOperators.UniqueDocs = '$uniqueDocs';

/**
 * Comment operator: $comment
 * Adds a comment to a query to help with debugging or profiling.
 * @example
 * const query = {
 *   age: QueryOperators.Equal,
 *   value: 25,
 *   [QueryOperators.Comment]: "Find users with age equal to 25"
 * };
 * // This query adds a comment for documentation or profiling purposes
 */
_QueryOperators.Comment = '$comment';

export const QueryOperators = Object.freeze(_QueryOperators);
