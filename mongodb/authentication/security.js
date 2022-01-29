/******
 * Mongodb Sucurity:
 *
 * 1. Authentication / Authorization.
 * 2. Transport Encryption.
 * 3. Encryption at rest
 * 4. Auditing
 * 5. Server & Network config and setup.
 * 6. Backup & Software updates.
 * 
 * 
 * 
 * Authentication / Authorization:
 *
 * 
 * 
 * 
 * Create user:
 * use admin
 * db.createUser({user:"paddy",pwd:"paddy",role:[{role:"userAdminAnyDatabase", db:"admin"}, "readWriteAnyDatabase"]})
 *
 * db.auth("paddy","paddy"); // return 1 if success
 *
 *
 * Build-in Roles:
 * 1. Database user
 *    a. read
 *    b. readWrite
 *
 * 2. Database admin:
 *    a. dbAdmin
 *    b. userAdmin
 *    c. dbOwner
 *
 * 3. All Database roles
 *    a. readAnyDatabase
 *    b. readWriteAnyDatabase
 *    c. userAdminAnyDatabase
 *    c. dbAdminAnyDatabase
 *
 * 4. Cluster admin
 *    a. clusterAdmin
 *    b. clusterManager
 *    c. hostManager
 *    d. clusterMonitor
 *
 * 5. Backup/ restore
 *    a. backup
 *    b. restore
 *
 * 6. Superuser
 *    a. dbOwner(admin)
 *    b. userAdmin(admin)
 *    c. userAdminAnyDatabase
 *       Root
 *
 *
 * Assigin roles to user and database.
 * 
 *
 * 
 * 
 * Re-start the mongodb instance wtih access ccontrol.
 * db.adminCommand({shutdown:1})
 *
 * 
 * shutdown the server:
 * mongo admin --port 27001 --eval 'db.shutdownServer()'
 * 
 * restart server:
 * mongod -f mongod.conf
 * 
 * 
 * 
 * Creating a global user administrator:
 *  use admin
 *  db.createUser({
 *    user: "globalAdminUser",
 *    pwd: "5xd49$4%0bef#6c&b*d",
 *    roles: [ {
 *      role: "userAdminAnyDatabase",
 *      db: "admin"
 *    } ]
 *  });
 * 
 * 
 * Creating a user administrator on the inventory database:
 *  use admin
 *  db.createUser({
 *    user: "inventoryAdminUser",
 *    pwd: "f46*5$2a3%ac&43f@17b",
 *    roles: [
 *      { role: "userAdmin", db: "inventory" }
 *    ]
 *  });
 * 
 * Creating a user without any privileges:
 *  use admin
 *  db.createUser({
 *    user: "inventoryAdminUser",
 *    pwd: "4lf12$@0af0e4*9#8af",
 *    roles: [ ]
 *  });
 * 
 * Granting a user the userAdmin privilege on the inventory database:
 * db.grantRolesToUser("inventoryAdminUser", [{ role: "userAdmin", db: "inventory" }])
 * 
 * 
 * 
 * userAdmin:
 *  This role grants the following privilege actions:
 *  a. changeCustomData
 *  b. changePassword
 *  c. createRole
 *  d. createUser
 *  e. dropRole
 *  f. dropUser
 *  g. grantRole
 *  h. revokeRole
 *  i. setAuthenticationRestriction
 *  j. viewRole
 *  k. viewUsers
 * 
 * create a user-defined role;
 * db.createRole(
 *   {
 *     role: "grantRevokeRolesAnyDatabase",
 *     privileges: [
 *       {
 *          resource: { db: "", collection: "" },
 *          actions: [ "grantRole", "revokeRole", "viewRole" ]
 *       }
 *     ],
 *    roles:[]
 *   }
 *  )
 * 
 * 
 * // check the logged in user
 * db.runCommand({connectionStatus:1})
 * 
 * 
 * 
 * Internal authentication:
 * Internal authentication verifies the identity of one Mongodb instance to another.
 * 
 * Replica set without inthernal authentication:
 *      instace 1 = instance 2 = instance 3 = instance 4
 * 
 * 
 *  * */

db.updateUser("sukku", { roles: ["read", { role: "read", db: "posts" }] })