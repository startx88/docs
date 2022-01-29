/**
 * LDAP Authentication:
 * Lightweight
 * Directory
 * Access
 * Protocol
 *
 * Relatively fase lookups
 * Centralized
 * Integrated with window
 *
 * Domain Component (DC):  top level of directory tree, each is a piece of the full domain.
 * Ex: DC=com.example.
 *
 * Organizational Unit (OU): like a folder for things. A logical structure.
 * Ex: OU=PLACE
 *
 * Security Group (SG): A type of group. Logical grouping of users.
 * Ex: CN=SecAdmins,OU=PLACE,DC=com.example
 *
 * Persons (DN, UPN, SAM, etc) : Human-person => lots of aliases here.
 * Ex: CN=kip,OU=PLACE,DC=com.example
 *
 *
 *
 *
 * Abbrv:                 Attribute:                    Description:                      Example:
 * DN                     distinguishedName             The full path to you object       CN=kip,CN=Users,DC=example, DC=com
 * UPN                    userPrincipalName             Username with domain name         kip@example.com
 * SAM                    sAMAccountName                The username                      kip
 * CN                     cn                            Common Names                      kip
 * ...                    memberOf                      Groups the user is a member of    CN=SecAdmins,OU=PLACE,DC=com.example, dc=com
 *
 *
 *
 * Qyuery Format:
 * <Base DN>?<Attributes to returns>?<Scopes>?<Filter>
 *
 * Atributes:           Descriptions:                                                      Example:
 * Base DN              This is the full path to the object  in the directory              CN=Users,DC=example, DC=com
 * Attributes to return Optional field. comma separated list of values.                    userPrincipalName,cn,mail
 * Scope                Tepth of the search. Three options default is "sub"                Base - Only the base, one - One below, no base, sub- Recursive lookup (default)
 * Filter               Return specific object based on attribute values                   userPricipalName=kip@gmail.com
 *
 * Example:
 * CN=Users, DC=example, DC=com?cn,mail,memberOf??userPrincipalName=kip@gmail.com
 *
 *
 *
 * AuthN vs AuthZ
 * 1. AuthN - Authentication
 *    Who are you?
 * 2. AuthZ - Authorization
 *    What are you allowed to do?
 *
 *
 * In Mongodb:
 * 1. security.ldap.userToDNMapping:
 *    a. Converts login into a distinguished for searching
 *    b. Array of documents containing 2 fields
 *       a. match
 *       b. ldapQuery || substitution
 *    c. [{match:"(,+)",ldapQuery:"<base>?<attributes>?<scope>?<filter>"}]
 *
 * 2. security.ldap.authz.queryTemplate:
 *    a. Query to run for authorization
 *    b. Results compared agains MongoDb roles @admin
 *
 *
 * 5 Easy Steps:
 *   a. Client logs in with Username.
 *   b. Username is converted via userToDNMapping.
 *   c. Run username against authorization qeury template.
 *   d. Check results from authorization query tempalte agains Mongodb roles @admin
 *   e. Access! (or not)
 *
 *
 *
 *
 *
 * Practice:
 * open mongo.conf or mongo.config
 *
 * add
 *  security:
 *    autorization: enabled
 *  ldap:
 *    enabled: true
 *
 * */