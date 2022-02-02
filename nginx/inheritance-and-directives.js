/******
 * There are three types of directives:
 * 1. Standard directives
 * 2. Array directives
 * 3. Action directives
 * 
 * ==========================
 * 1. Array directives:
 *    a. Can be specified multiple times without overriding a previous setting.
 *    b. Gets inherited by all child contexts.
 *    c. Child context can override inheritance by re-declaring directive.
 * 
 * Ex: 
 *    a. access_log /var/log/nginx/access.log;
 *    b. access_log /var/log/nginx/custom.log.gz custom_format;
 * 
 * 
 * ==========================
 * 2. Standard directives:
 *    a. Can only be declared once. A second declaration overrides the first.
 *    b. Gets inherited by all child contexts.
 *    c. Child context can override inheritance by re-declaring directive.
 * 
 * Ex:
 *    a. access_log off; // completely overrides inheritance from parent.
 * 
 * ==========================
 * 3. Action directives:
 *    a. Invokes an action such as rewrit or redirect.
 *    b. Inheritance does not apply as the request is either stopped (redirect/response) or re-evaluted (rewrite)
 * 
 * Ex: 
 *    location /secure {
 *      return 403 "You do not have permission to view this.";
 *    }
 */