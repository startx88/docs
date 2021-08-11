/******
 * What is geospatial data in mongodb:
 * MongoDB supports geoJSON object.
 * To specify GeoJSON data, use an embedded document.
 *
 * a field named "type" that specifies the GeoJSON Object type.
 * a field named "coordinates" that specifies the GeoJSON coordinates.
 *
 * 1. Valid lontitude:
 *    Valid longitude values are between -180 and 180, both inclusive.
 * 2. Valid lontitude:
 *    Valid latitude values are between -90 and 90, both inclusive.
 *
 *
 * Syntax:
 * location: {type:"Point", coordinates:[longitude, latitude]}
 *
 *
 * MongoDB geospatial queries on GeoJSON objects calculate on a sphere.
 * MongoDB uses the WGS84 reference system for geospatial queries on GeoJSON objects.
 *
 * Type:
 *  1. Point: { type: "Point", coordinates: [ 40, 5 ] }
 *  2. LineString: { type: "LineString", coordinates: [ [ 40, 5 ], [ 20, 10 ] ]
 *  3. Polygon: { type: "Polygon", coordinates: [ [ [ 40, 5 ], [ 20, 10 ], [ 20, 5 ] ] ]
 *  4. MultiPoint: { type: "MultiPoint", coordinates: [ [ 40, 5 ], [ 20, 10 ] ]
 *  5. MultiLineString: { type: "MultiLineString", coordinates: [ [ [ 40, 5 ], [ 20, 10 ] ], [ [ 40, 5 ], [ 20, 10 ] ] ]
 *  6. MultiPolygon: { type: "MultiPolygon", coordinates: [ [ [ [ 40, 5 ], [ 20, 10 ], [ 20, 5 ] ] ], [ [ [ 40, 5 ], [ 20, 10 ], [ 20, 5 ] ] ] ]
 *  7. GeometryCollection: { type: "GeometryCollection", geometries: [ { type: "Point", coordinates: [ 40, 5 ] }, { type: "LineString", coordinates: [ [ 40, 5 ], [ 20, 10 ] ] } ]
 *
 *
 *
 * Example:
 * db.places.insertOne({name:"Arihant areden", location:{type: "Point", coordinates: [ 28.5787008,77.4407464 ] } }) // [longitude, latitude],
 *
 * Add index:
 * db.places.createIndex({location:"2dsphere"})
 * 28.60460014099578, 77.42719941842088
 * search query:
 * db.places.find({location:{$near:{$geometry:{type:"Point", coordinates:[28.5787008,77.4407464]}}}})
 *
 * */

