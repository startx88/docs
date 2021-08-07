/*******
 *  db.find.find().help() - show DBCursor help
 *  db.find.bulkWrite( operations, <optional params> ) - bulk execute write operations, optional parameters are: w, wtimeout, j
 *  db.find.count( query = {}, <optional params> ) - count the number of documents that matches the query, optional parameters are: limit, skip, hint, maxTimeMS
 *  db.find.countDocuments( query = {}, <optional params> ) - count the number of documents that matches the query, optional parameters are: limit, skip, hint, maxTimeMS
 *  db.find.estimatedDocumentCount( <optional params> ) - estimate the document count using collection metadata, optional parameters are: maxTimeMS
 *  db.find.convertToCapped(maxBytes) - calls {convertToCapped:'find', size:maxBytes}} command
 *  db.find.createIndex(keypattern[,options])
 *  db.find.createIndexes([keypatterns], <options>)
 *  db.find.dataSize()
 *  db.find.deleteOne( filter, <optional params> ) - delete first matching document, optional parameters are: w, wtimeout, j
 *  db.find.deleteMany( filter, <optional params> ) - delete all matching documents, optional parameters are: w, wtimeout, j
 *  db.find.distinct( key, query, <optional params> ) - e.g. db.find.distinct( 'x' ), optional parameters are: maxTimeMS
 *  db.find.drop() drop the collection
 *  db.find.dropIndex(index) - e.g. db.find.dropIndex( "indexName" ) or db.find.dropIndex( { "indexKey" : 1 } )
 *  db.find.dropIndexes()
 *  db.find.ensureIndex(keypattern[,options]) - DEPRECATED, use createIndex() instead
 *  db.find.explain().help() - show explain help
 *  db.find.reIndex()
 *  db.find.find([query],[fields]) - query is an optional query filter. fields is optional set of fields to return.
 *                                                e.g. db.find.find( {x:77} , {name:1, x:1} )
 *  db.find.find(...).count()
 *  db.find.find(...).limit(n)
 *  db.find.find(...).skip(n)
 *  db.find.find(...).sort(...)
 *  db.find.findOne([query], [fields], [options], [readConcern])
 *  db.find.findOneAndDelete( filter, <optional params> ) - delete first matching document, optional parameters are: projection, sort, maxTimeMS
 *  db.find.findOneAndReplace( filter, replacement, <optional params> ) - replace first matching document, optional parameters are: projection, sort, maxTimeMS, upsert, returnNewDocument
 *  db.find.findOneAndUpdate( filter, <update object or pipeline>, <optional params> ) - update first matching document, optional parameters are: projection, sort, maxTimeMS, upsert, returnNewDocument
 *  db.find.getDB() get DB object associated with collection
 *  db.find.getPlanCache() get query plan cache associated with collection
 *  db.find.getIndexes()
 *  db.find.insert(obj)
 *  db.find.insertOne( obj, <optional params> ) - insert a document, optional parameters are: w, wtimeout, j
 *  db.find.insertMany( [objects], <optional params> ) - insert multiple documents, optional parameters are: w, wtimeout, j
 *  db.find.mapReduce( mapFunction , reduceFunction , <optional params> )
 *  db.find.aggregate( [pipeline], <optional params> ) - performs an aggregation on a collection; returns a cursor
 *  db.find.remove(query)
 *  db.find.replaceOne( filter, replacement, <optional params> ) - replace the first matching document, optional parameters are: upsert, w, wtimeout, j
 *  db.find.renameCollection( newName , <dropTarget> ) renames the collection.
 *  db.find.runCommand( name , <options> ) runs a db command with the given name where the first param is the collection name
 *  db.find.save(obj)
 *  db.find.stats({scale: N, indexDetails: true/false, indexDetailsKey: <index key>, indexDetailsName: <index name>})
 *  db.find.storageSize() - includes free space allocated to this collection
 *  db.find.totalIndexSize() - size in bytes of all the indexes
 *  db.find.totalSize() - storage allocated for all data and indexes
 *  db.find.update( query, <update object or pipeline>[, upsert_bool, multi_bool] ) - instead of two flags, you can pass an object with fields: upsert, multi
 *  db.find.updateOne( filter, <update object or pipeline>, <optional params> ) - update the first matching document, optional parameters are: upsert, w, wtimeout, j, hint
 *  db.find.updateMany( filter, <update object or pipeline>, <optional params> ) - update all matching documents, optional parameters are: upsert, w, wtimeout, j, hint
 *  db.find.validate( <full> ) - SLOW
 *  db.find.getShardVersion() - only for use with sharding
 *  db.find.getShardDistribution() - prints statistics about data distribution in the cluster
 *  db.find.getSplitKeysForChunks( <maxChunkSize> ) - calculates split points over all chunks and returns splitter function
 *  db.find.getWriteConcern() - returns the write concern used for any operations on this collection, inherited from server/db if set
 *  db.find.setWriteConcern( <write concern doc> ) - sets the write concern for writes to the collection
 *  db.find.unsetWriteConcern( <write concern doc> ) - unsets the write concern for writes to the collection
        db.find.latencyStats() - display operation latency histograms for this collection
 * */