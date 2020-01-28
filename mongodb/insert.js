/**
 * Insert documnet in mongodb:
 */

/**
 * Insert order:
 */

/**
 * writeConcern: All the write operation
 *
 * client (eg. Shell) ----> MongoDB Server(mongod) ----> Storage Engine
 *
 * Storage Engine: it is responsible to writing data on disk and alos managin in memory.
 * you write it up first in memory ( its is faster then working with disk ) later it store data on disk.
 *
 *                  Memory
 * Storage Engine -----|------ Journal ("Todos")
 *                  Data on Disk ----|
 *
 * insertOne() ---> { w: 1, j: undefined}
 * { w: <value>, j: <boolean>, wtimeout: <number> }
 * w: write : Number value default is 1
 * j: journal : boolean value default is undefined
 * wtimeout : 200
 */

/**
 * What is Automicity?: atomicity of any write operation
 */

/**
 * mongoimport: use to insert bulk data in the database
 * mongoimport document.json -d database -c collection --drop --jsonArray
 */
