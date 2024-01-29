/**
 * Collection of query operators for MongoDB queries.
 */
export type QueryOperators = {
    /**
     * - Equals operator: $eq - Matches values that are equal to a specified value.
     * <br/>Example:
     * <code><pre>const query = { age: QueryOperators.Equal, value: 25 };
     * // This query matches users with age equal to 25</pre></code>
     */
    Equal: string;
    /**
     * - Not Equals operator: $ne - Matches values that are not equal to a specified value.
     * <br/>Example:
     * <code><pre>const query = { age: QueryOperators.NotEqual, value: 30 };
     * // This query matches users with age not equal to 30</pre></code>
     */
    NotEqual: string;
    /**
     * - Greater Than operator: $gt - Matches values that are greater than a specified value.
     * <br/>Example:
     * <code><pre>const query = { age: QueryOperators.GreaterThan, value: 25 };
     * // This query matches users older than 25</pre></code>
     */
    GreaterThan: string;
    /**
     * - Greater Than or Equal To operator: $gte - Matches values that are greater than or equal to a specified value.
     * <br/>Example:
     * <code><pre>const query = { age: QueryOperators.GreaterThanOrEqual, value: 25 };
     * // This query matches users aged 25 or older</pre></code>
     */
    GreaterThanOrEqual: string;
    /**
     * - Less Than operator: $lt - Matches values that are less than a specified value.
     * <br/>Example:
     * <code><pre>const query = { age: QueryOperators.LessThan, value: 30 };
     * // This query matches users younger than 30</pre></code>
     */
    LessThan: string;
    /**
     * - Less Than or Equal To operator: $lte - Matches values that are less than or equal to a specified value.
     * <br/>Example:
     * <code><pre>const query = { age: QueryOperators.LessThanOrEqual, value: 30 };
     * // This query matches users aged 30 or younger</pre></code>
     */
    LessThanOrEqual: string;
    /**
     * - In operator: $in - Matches any of the values specified in an array.
     * <br/>Example:
     * <code><pre>const query = { status: QueryOperators.In, value: ["active", "inactive"] };
     * // This query matches users with "active" or "inactive" status</pre></code>
     */
    In: string;
    /**
     * - Not In operator: $nin - Matches values that are not in the specified array.
     * <br/>Example:
     * <code><pre>const query = { status: QueryOperators.NotIn, value: ["inactive"] };
     * // This query matches users not in "inactive" status</pre></code>
     */
    NotIn: string;
    /**
     * - Exists operator: $exists - Matches documents that have the specified field.
     * <br/>Example:
     * <code><pre>const query = { age: QueryOperators.Exists, value: true };
     * // This query matches users with an "age" field</pre></code>
     */
    Exists: string;
    /**
     * - Type operator: $type - Matches documents where the value of a field has a specific BSON data type.
     * <br/>Example:
     * <code><pre>const query = { age: QueryOperators.Type, value: "number" };
     * // This query matches users with "age" as a number</pre></code>
     */
    Type: string;
    /**
     * - Modulus operator: $mod - Performs a modulo operation on the value of a field.
     * <br/>Example:
     * <code><pre>const query = { age: QueryOperators.Modulus, value: [2, 1] };
     * // This query matches users with even ages</pre></code>
     */
    Modulus: string;
    /**
     * - Regular Expression operator: $regex - Matches documents where a field matches a regular expression pattern.
     * <br/>Example:
     * <code><pre>const query = { name: QueryOperators.Regex, value: /^A/ };
     * // This query matches users with names starting with "A"</pre></code>
     */
    Regex: string;
    /**
     * - Text Search operator: $text - Performs a full-text search on a field.
     * <br/>Example:
     * <code><pre>const query = { [QueryOperators.Text]: { $search: "Alice" } };
     * // This query searches for users with "Alice" in their names (requires text index)</pre></code>
     */
    Text: string;
    /**
     * - Text operator: $text - Performs a full-text search on a field.
     */
    TextOperators: {
        Search: string;
        Language: string;
        CaseSensitive: string;
        DiacriticSensitive: string;
    };
    /**
     * - Where operator: $where - Matches documents that satisfy a JavaScript expression.
     * <br/>Example:
     * <code><pre>const query = { [QueryOperators.Where]: "this.age > 25" };
     * // This query matches users with age greater than 25 using a JavaScript expression</pre></code>
     */
    Where: string;
    /**
     * - Size operator: $size - Matches documents where an array field has a specific size.
     * <br/>Example:
     * <code><pre>const query = { name: QueryOperators.Size, value: 5 };
     * // This query matches users with a name of exactly 5 characters</pre></code>
     */
    Size: string;
    /**
     * - All Elements Match operator: $all - Matches documents where all elements in an array field match a specified condition.
     * <br/>Example:
     * <code><pre>const query = { hobbies: QueryOperators.All, value: ["reading", "swimming"] };
     * // This query matches users with all specified hobbies</pre></code>
     */
    All: string;
    /**
     * - Element Match operator: $elemMatch - Matches documents where at least one element in an array field matches a specified condition.
     * <br/>Example:
     * <code><pre>const query = { hobbies: QueryOperators.ElemMatch, value: { [QueryOperators.Equal]: "swimming" } };
     * // This query matches users with "swimming" as one of their hobbies</pre></code>
     */
    ElemMatch: string;
    /**
     * - Not operator: $not - Inverts the effect of a query expression.
     * <br/>Example:
     * <code><pre>const query = { age: QueryOperators.Not, value: { [QueryOperators.GreaterThan]: 25 } };
     * // This query matches users with age not greater than 25</pre></code>
     */
    Not: string;
    /**
     * - Nor operator: $nor - Joins query clauses with a logical NOR and selects the documents that fail all the query clauses.
     * <br/>Example:
     * <code><pre>const query = {
     * [QueryOperators.Nor]: [
     * { age: QueryOperators.LessThan, value: 25 },
     * { age: QueryOperators.GreaterThan, value: 30 }
     * ]
     * };
     * // This query matches users who are neither younger than 25 nor older than 30</pre></code>
     */
    Nor: string;
    /**
     * - Or operator: $or - Joins query clauses with a logical OR and selects the documents that satisfy at least one of the query clauses.
     * <br/>Example:
     * <code><pre>const query = {
     * [QueryOperators.Or]: [
     * { age: QueryOperators.Equal, value: 25 },
     * { age: QueryOperators.Equal, value: 30 }
     * ]
     * };
     * // This query matches users who are either aged 25 or aged 30</pre></code>
     */
    Or: string;
    /**
     * - And operator: $and - Joins query clauses with a logical AND and selects the documents that satisfy all the query clauses.
     * <br/>Example:
     * <code><pre>const query = {
     * [QueryOperators.And]: [
     * { age: QueryOperators.GreaterThanOrEqual, value: 22 },
     * { status: QueryOperators.Equal, value: "active" }
     * ]
     * };
     * // This query matches users who are aged 22 and have "active" status</pre></code>
     */
    And: string;
    /**
     * - GeoWithin operator: $geoWithin - Matches documents that are within a specified geometry.
     * <br/>Example:
     * <code><pre>const query = {
     * location: {
     * [QueryOperators.GeoWithin]: {
     * [QueryOperators.Geometry]: {
     * type: "Polygon",
     * coordinates: [ // Polygon coordinates ]
     * }
     * }
     * }
     * };</pre></code>
     */
    GeoWithin: string;
    /**
     * - GeoIntersects operator: $geoIntersects - Matches documents that intersect with a specified geometry.
     * <br/>Example:
     * <code><pre>const query = {
     * location: {
     * [QueryOperators.GeoIntersects]: {
     * [QueryOperators.Geometry]: {
     * type: "Point",
     * coordinates: [ // Point coordinates ]
     * }
     * }
     * }
     * };</pre></code>
     */
    GeoIntersects: string;
    /**
     * - Near operator: $near - Returns geospatial objects in proximity to a specified point.
     * <br/>Example:
     * <code><pre>const query = {
     * location: {
     * $near: {
     * [QueryOperators.Geometry]: {
     * type: "Point",
     * coordinates: [ // Point coordinates ]
     * },
     * $maxDistance: 1000 // Maximum distance in meters
     * }
     * }
     * };</pre></code>
     */
    Near: string;
    /**
     * - Near Sphere operator: $nearSphere - Returns geospatial objects in proximity to a specified point on a sphere.
     * <br/>Example:
     * <code><pre>const query = {
     * location: {
     * [QueryOperators.NearSphere]: {
     * [QueryOperators.Geometry]: {
     * type: "Point",
     * coordinates: [ // Point coordinates ]
     * },
     * $maxDistance: 1000 // Maximum distance in radians
     * }
     * }
     * };</pre></code>
     */
    NearSphere: string;
    /**
     * - Geometry operator: $geometry - Defines a geospatial shape for use with the $geoWithin and $geoIntersects operators.
     * <br/>Example:
     * <code><pre>const geometry = {
     * type: "Polygon",
     * coordinates: [ // Polygon coordinates ]
     * };</pre></code>
     */
    Geometry: string;
    /**
     * - Center Sphere operator: $centerSphere - Defines a circle on a sphere for use with the $geoWithin and $geoIntersects operators.
     * <br/>Example:
     * <code><pre>const circle = {
     * center: [ // Center coordinates ],
     * radius: 1000 // Radius in radians
     * };</pre></code>
     */
    CenterSphere: string;
    /**
     * - Box operator: $box - Defines a rectangle for use with the $geoWithin and $geoIntersects operators.
     * <br/>Example:
     * <code><pre>const query = {
     * location: {
     * [QueryOperators.GeoWithin]: {
     * [QueryOperators.Box]: [
     * [10, 20], // Bottom-left corner coordinates
     * [30, 40]  // Top-right corner coordinates
     * ]
     * }
     * }
     * };
     * // This query matches locations within the specified rectangle (requires geospatial data)</pre></code>
     */
    Box: string;
    /**
     * - Polygon operator: $polygon - Defines a polygon for use with the $geoWithin and $geoIntersects operators.
     * <br/>Example:
     * <code><pre>const query = {
     * location: {
     * [QueryOperators.GeoWithin]: {
     * [QueryOperators.Polygon]: [
     * [0, 0],   // Vertex 1 coordinates
     * [0, 10],  // Vertex 2 coordinates
     * [10, 10]  // Vertex 3 coordinates
     * ]
     * }
     * }
     * };
     * // This query matches locations within the specified polygon (requires geospatial data)</pre></code>
     */
    Polygon: string;
    /**
     * - Unique Documents operator: $uniqueDocs - Specifies that the results of a geospatial query should include only one of each distinct document.
     * <br/>Example:
     * <code><pre>const query = { age: QueryOperators.UniqueDocs, value: true };
     * // This query returns unique documents based on geospatial query results</pre></code>
     */
    UniqueDocs: string;
    /**
     * - Comment operator: $comment - Adds a comment to a query to help with debugging or profiling.
     * <br/>Example:
     * <code><pre>const query = {
     * age: QueryOperators.Equal,
     * value: 25,
     * [QueryOperators.Comment]: "Find users with age equal to 25"
     * };
     * // This query adds a comment for documentation or profiling purposes</pre></code>
     */
    Comment: string;
};
/**
 * Collection of query operators for MongoDB queries.
 *
 * @typedef {Object} QueryOperators
 * @property {string} Equal - Equals operator: $eq - Matches values that are equal to a specified value.
 *   <br/>Example:
 *   <code><pre>const query = { age: QueryOperators.Equal, value: 25 };
 *   // This query matches users with age equal to 25</pre></code>
 * @property {string} NotEqual - Not Equals operator: $ne - Matches values that are not equal to a specified value.
 *   <br/>Example:
 *   <code><pre>const query = { age: QueryOperators.NotEqual, value: 30 };
 *   // This query matches users with age not equal to 30</pre></code>
 * @property {string} GreaterThan - Greater Than operator: $gt - Matches values that are greater than a specified value.
 *   <br/>Example:
 *   <code><pre>const query = { age: QueryOperators.GreaterThan, value: 25 };
 *   // This query matches users older than 25</pre></code>
 * @property {string} GreaterThanOrEqual - Greater Than or Equal To operator: $gte - Matches values that are greater than or equal to a specified value.
 *   <br/>Example:
 *   <code><pre>const query = { age: QueryOperators.GreaterThanOrEqual, value: 25 };
 *   // This query matches users aged 25 or older</pre></code>
 * @property {string} LessThan - Less Than operator: $lt - Matches values that are less than a specified value.
 *   <br/>Example:
 *   <code><pre>const query = { age: QueryOperators.LessThan, value: 30 };
 *   // This query matches users younger than 30</pre></code>
 * @property {string} LessThanOrEqual - Less Than or Equal To operator: $lte - Matches values that are less than or equal to a specified value.
 *   <br/>Example:
 *   <code><pre>const query = { age: QueryOperators.LessThanOrEqual, value: 30 };
 *   // This query matches users aged 30 or younger</pre></code>
 * @property {string} In - In operator: $in - Matches any of the values specified in an array.
 *   <br/>Example:
 *   <code><pre>const query = { status: QueryOperators.In, value: ["active", "inactive"] };
 *   // This query matches users with "active" or "inactive" status</pre></code>
 * @property {string} NotIn - Not In operator: $nin - Matches values that are not in the specified array.
 *   <br/>Example:
 *   <code><pre>const query = { status: QueryOperators.NotIn, value: ["inactive"] };
 *   // This query matches users not in "inactive" status</pre></code>
 * @property {string} Exists - Exists operator: $exists - Matches documents that have the specified field.
 *   <br/>Example:
 *   <code><pre>const query = { age: QueryOperators.Exists, value: true };
 *   // This query matches users with an "age" field</pre></code>
 * @property {string} Type - Type operator: $type - Matches documents where the value of a field has a specific BSON data type.
 *   <br/>Example:
 *   <code><pre>const query = { age: QueryOperators.Type, value: "number" };
 *   // This query matches users with "age" as a number</pre></code>
 * @property {string} Modulus - Modulus operator: $mod - Performs a modulo operation on the value of a field.
 *   <br/>Example:
 *   <code><pre>const query = { age: QueryOperators.Modulus, value: [2, 1] };
 *   // This query matches users with even ages</pre></code>
 * @property {string} Regex - Regular Expression operator: $regex - Matches documents where a field matches a regular expression pattern.
 *   <br/>Example:
 *   <code><pre>const query = { name: QueryOperators.Regex, value: /^A/ };
 *   // This query matches users with names starting with "A"</pre></code>
 * @property {string} Text - Text Search operator: $text - Performs a full-text search on a field.
 *   <br/>Example:
 *   <code><pre>const query = { [QueryOperators.Text]: { $search: "Alice" } };
 *   // This query searches for users with "Alice" in their names (requires text index)</pre></code>
 * @property {Object} TextOperators - Text operator: $text - Performs a full-text search on a field.
 * @property {string} TextOperators.Search - Search property for $text operator.
 * @property {string} TextOperators.Language - Language property for $text operator.
 * @property {string} TextOperators.CaseSensitive - CaseSensitive property for $text operator.
 * @property {string} TextOperators.DiacriticSensitive - DiacriticSensitive property for $text operator.
 * @property {string} Where - Where operator: $where - Matches documents that satisfy a JavaScript expression.
 *   <br/>Example:
 *   <code><pre>const query = { [QueryOperators.Where]: "this.age > 25" };
 *   // This query matches users with age greater than 25 using a JavaScript expression</pre></code>
 * @property {string} Size - Size operator: $size - Matches documents where an array field has a specific size.
 *   <br/>Example:
 *   <code><pre>const query = { name: QueryOperators.Size, value: 5 };
 *   // This query matches users with a name of exactly 5 characters</pre></code>
 * @property {string} All - All Elements Match operator: $all - Matches documents where all elements in an array field match a specified condition.
 *   <br/>Example:
 *   <code><pre>const query = { hobbies: QueryOperators.All, value: ["reading", "swimming"] };
 *   // This query matches users with all specified hobbies</pre></code>
 * @property {string} ElemMatch - Element Match operator: $elemMatch - Matches documents where at least one element in an array field matches a specified condition.
 *   <br/>Example:
 *   <code><pre>const query = { hobbies: QueryOperators.ElemMatch, value: { [QueryOperators.Equal]: "swimming" } };
 *   // This query matches users with "swimming" as one of their hobbies</pre></code>
 * @property {string} Not - Not operator: $not - Inverts the effect of a query expression.
 *   <br/>Example:
 *   <code><pre>const query = { age: QueryOperators.Not, value: { [QueryOperators.GreaterThan]: 25 } };
 *   // This query matches users with age not greater than 25</pre></code>
 * @property {string} Nor - Nor operator: $nor - Joins query clauses with a logical NOR and selects the documents that fail all the query clauses.
 *   <br/>Example:
 *   <code><pre>const query = {
 *   [QueryOperators.Nor]: [
 *     { age: QueryOperators.LessThan, value: 25 },
 *     { age: QueryOperators.GreaterThan, value: 30 }
 *   ]
 *   };
 *   // This query matches users who are neither younger than 25 nor older than 30</pre></code>
 * @property {string} Or - Or operator: $or - Joins query clauses with a logical OR and selects the documents that satisfy at least one of the query clauses.
 *   <br/>Example:
 *   <code><pre>const query = {
 *   [QueryOperators.Or]: [
 *     { age: QueryOperators.Equal, value: 25 },
 *     { age: QueryOperators.Equal, value: 30 }
 *   ]
 *   };
 *   // This query matches users who are either aged 25 or aged 30</pre></code>
 * @property {string} And - And operator: $and - Joins query clauses with a logical AND and selects the documents that satisfy all the query clauses.
 *   <br/>Example:
 *   <code><pre>const query = {
 *   [QueryOperators.And]: [
 *     { age: QueryOperators.GreaterThanOrEqual, value: 22 },
 *     { status: QueryOperators.Equal, value: "active" }
 *   ]
 *   };
 *   // This query matches users who are aged 22 and have "active" status</pre></code>
 * @property {string} GeoWithin - GeoWithin operator: $geoWithin - Matches documents that are within a specified geometry.
 *   <br/>Example:
 *   <code><pre>const query = {
 *   location: {
 *     [QueryOperators.GeoWithin]: {
 *       [QueryOperators.Geometry]: {
 *         type: "Polygon",
 *         coordinates: [ // Polygon coordinates ]
 *       }
 *     }
 *   }
 *   };</pre></code>
 * @property {string} GeoIntersects - GeoIntersects operator: $geoIntersects - Matches documents that intersect with a specified geometry.
 *   <br/>Example:
 *   <code><pre>const query = {
 *   location: {
 *     [QueryOperators.GeoIntersects]: {
 *       [QueryOperators.Geometry]: {
 *         type: "Point",
 *         coordinates: [ // Point coordinates ]
 *       }
 *     }
 *   }
 *   };</pre></code>
 * @property {string} Near - Near operator: $near - Returns geospatial objects in proximity to a specified point.
 *   <br/>Example:
 *   <code><pre>const query = {
 *   location: {
 *     $near: {
 *       [QueryOperators.Geometry]: {
 *         type: "Point",
 *         coordinates: [ // Point coordinates ]
 *       },
 *       $maxDistance: 1000 // Maximum distance in meters
 *     }
 *   }
 *   };</pre></code>
 * @property {string} NearSphere - Near Sphere operator: $nearSphere - Returns geospatial objects in proximity to a specified point on a sphere.
 *   <br/>Example:
 *   <code><pre>const query = {
 *   location: {
 *     [QueryOperators.NearSphere]: {
 *       [QueryOperators.Geometry]: {
 *         type: "Point",
 *         coordinates: [ // Point coordinates ]
 *       },
 *       $maxDistance: 1000 // Maximum distance in radians
 *     }
 *   }
 *   };</pre></code>
 * @property {string} Geometry - Geometry operator: $geometry - Defines a geospatial shape for use with the $geoWithin and $geoIntersects operators.
 *   <br/>Example:
 *   <code><pre>const geometry = {
 *   type: "Polygon",
 *   coordinates: [ // Polygon coordinates ]
 *   };</pre></code>
 * @property {string} CenterSphere - Center Sphere operator: $centerSphere - Defines a circle on a sphere for use with the $geoWithin and $geoIntersects operators.
 *   <br/>Example:
 *   <code><pre>const circle = {
 *   center: [ // Center coordinates ],
 *   radius: 1000 // Radius in radians
 *   };</pre></code>
 * @property {string} Box - Box operator: $box - Defines a rectangle for use with the $geoWithin and $geoIntersects operators.
 *   <br/>Example:
 *   <code><pre>const query = {
 *   location: {
 *     [QueryOperators.GeoWithin]: {
 *       [QueryOperators.Box]: [
 *         [10, 20], // Bottom-left corner coordinates
 *         [30, 40]  // Top-right corner coordinates
 *       ]
 *     }
 *   }
 *   };
 *   // This query matches locations within the specified rectangle (requires geospatial data)</pre></code>
 * @property {string} Polygon - Polygon operator: $polygon - Defines a polygon for use with the $geoWithin and $geoIntersects operators.
 *   <br/>Example:
 *   <code><pre>const query = {
 *   location: {
 *     [QueryOperators.GeoWithin]: {
 *       [QueryOperators.Polygon]: [
 *         [0, 0],   // Vertex 1 coordinates
 *         [0, 10],  // Vertex 2 coordinates
 *         [10, 10]  // Vertex 3 coordinates
 *       ]
 *     }
 *   }
 *   };
 *   // This query matches locations within the specified polygon (requires geospatial data)</pre></code>
 * @property {string} UniqueDocs - Unique Documents operator: $uniqueDocs - Specifies that the results of a geospatial query should include only one of each distinct document.
 *   <br/>Example:
 *   <code><pre>const query = { age: QueryOperators.UniqueDocs, value: true };
 *   // This query returns unique documents based on geospatial query results</pre></code>
 * @property {string} Comment - Comment operator: $comment - Adds a comment to a query to help with debugging or profiling.
 *   <br/>Example:
 *   <code><pre>const query = {
 *   age: QueryOperators.Equal,
 *   value: 25,
 *   [QueryOperators.Comment]: "Find users with age equal to 25"
 *   };
 *   // This query adds a comment for documentation or profiling purposes</pre></code>
 */
export const QueryOperators: Readonly<{
    Equal: "$eq";
    NotEqual: "$ne";
    GreaterThan: "$gt";
    GreaterThanOrEqual: "$gte";
    LessThan: "$lt";
    LessThanOrEqual: "$lte";
    In: "$in";
    NotIn: "$nin";
    Exists: "$exists";
    Type: "$type";
    Modulus: "$mod";
    Regex: "$regex";
    Text: "$text";
    TextOperators: {
        Search: string;
        Language: string;
        CaseSensitive: string;
        DiacriticSensitive: string;
    };
    Where: "$where";
    Size: "$size";
    All: "$all";
    ElemMatch: "$elemMatch";
    Not: "$not";
    Nor: "$nor";
    Or: "$or";
    And: "$and";
    GeoWithin: "$geoWithin";
    GeoIntersects: "$geoIntersects";
    Near: "$near";
    NearSphere: "$nearSphere";
    Geometry: "$geometry";
    CenterSphere: "$centerSphere";
    Box: "$box";
    Polygon: "$polygon";
    UniqueDocs: "$uniqueDocs";
    Comment: "$comment";
}>;
