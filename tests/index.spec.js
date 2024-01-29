/* globals describe, it */
import expect from 'expect.js';
import { QueryOperators } from '../index.js';

describe('mongodb-query-operators util', () => {
    it('should has all keys and values', () => {
        expect(QueryOperators).to.eql({
            All: '$all',
            And: '$and',
            Box: '$box',
            CenterSphere: '$centerSphere',
            Comment: '$comment',
            ElemMatch: '$elemMatch',
            Equal: '$eq',
            Exists: '$exists',
            GeoIntersects: '$geoIntersects',
            GeoWithin: '$geoWithin',
            Geometry: '$geometry',
            GreaterThan: '$gt',
            GreaterThanOrEqual: '$gte',
            In: '$in',
            LessThan: '$lt',
            LessThanOrEqual: '$lte',
            Modulus: '$mod',
            Near: '$near',
            NearSphere: '$nearSphere',
            Nor: '$nor',
            Not: '$not',
            NotEqual: '$ne',
            NotIn: '$nin',
            Or: '$or',
            Polygon: '$polygon',
            Regex: '$regex',
            Size: '$size',
            Text: '$text',
            TextOperators: {
                CaseSensitive: '$caseSensitive',
                DiacriticSensitive: '$diacriticSensitive',
                Language: '$language',
                Search: '$search'
            },
            Type: '$type',
            UniqueDocs: '$uniqueDocs',
            Where: '$where'
        });
    });
});
