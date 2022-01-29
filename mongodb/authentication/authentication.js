/**
 * Authentication:
 * Authentication is the process of verifying the identity of a client.
 *
 * 1. Authentication methods:
 *    a. use mongo or mongosh -> mongo/mongosh -u <username> -p <password> --authenticationDatabase <db>
 *    b. connnect first to mongo or mongosh instance and select database then run db.auth(username, password)
 *
 * 2. Authentication mechanism:
 *    Mongodb support multiple authentication mechanisms.
 *    1. SCRAM - Salted Challenge Response Authentication Mechanism. (Default)
 *    2. x.509 - X.509 Certificate Authentication.
 *
 *    MongoDB Enterprise:
 *    1. LDAP (Lightweight Directory Access Protocol) - proxy authentication.
 *    2. Kerberos -
 *
 * 3. Internal Authentication:
 *    In addition to verifying the identity of a client, MongoDB can require members of replica sets and s
 *    harded clusters to authenticate their membership to their respective replica set or sharded cluster.
 *
 *    1. You can require that members of replica sets and sharded clusters authenticate to each other.
 *    2. the internal authentication of the members, MongoDB can use either keyfiles or x.509 certificates.
 *
 *    Keyfiles:
 *    Keyfiles use SCRAM challenge and response authentication mechanism where the keyfiles contain the shared password for the members.
 *      Key Requirements:
 *      1. A key's length must be between 6 and 1024 characters.
 *      2. Only contain characters in the base64 set
 *      Ex:
 *      echo -e "mysecretkey" > key1
 *      echo -e "my secret key" > key1
 *      echo -e "my secret key\n" > key2
 *      echo -e "my    secret    key" > key3
 *      echo -e "my\r\nsecret\r\nkey\r\n" > key4
 *
 *
 * Enable Access Control:
 * Enabling access control on a MongoDB deployment enforces authentication, requiring users to identify themselves.
 *
 *  User administrator:
 *  With access control enabled, ensure you have a user with userAdmin or userAdminAnyDatabase role in the admin database.
 *  This user can administrate user and roles such as: create users, grant or revoke roles from users, and create or modify customs roles.
 *   use admin
 *   db.createUser(
 *     {
 *       user: "myUserAdmin",
 *       pwd: passwordPrompt(), // or cleartext password
 *       roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
 *     }
 *   )
 *
 *  then shutdown mongo server.
 *  open mongo.cfg or mongo.conf file
 *  and add
 *    security:
 *      authorization: enabled
 *
 * then restart mongo server.
 *
 *
 * User:
 * db.createUser() - command use to create user.
 *
 * rolesInfo:
 * Return inheritance and privileges information for specified roles, including both user-defined roles and built-in roles.
 * syntax:
 *  {
 *    rolesInfo:{role:"dbAdmin",db:"admin"},
 *    showPrivileges:true,
 *    showBuiltinRoles:true,
 *    comment:<any>
 * }
 * db.runCommand( { rolesInfo: { role: "dbAdmin", db: "admin" }, "showPrivileges":true, showBuiltinRoles:true } )
 *
 *
 *
 * */