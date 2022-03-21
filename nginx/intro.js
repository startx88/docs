/**
 * What is nginx:
 * ------------------------------
 * Nginx is more than a web server. 
 * Nginx is one of the most popular web server available in the industry.
 * Nginx was written specifically to address the performance limitations of Apache Web Servers. (c10k problem)
 * 
 * 
 * What is a web server:
 * ------------------------------
 * The term web server can refer to hardware or software, or both of them working together.
 * To publish a website, you need either a static or a dynamic web server..
 * A Web server is a program that uses http(Hypertext transfer protocol) to serve the files that form web pages to users, in response to their requests.
 * 
 * There are many popular web servers.
 * a. Apache
 * b. Nginx
 * c. IIS
 * 
 * Nginx vs Apache:
 * ------------------------------
 * 
 * 
 * 
 * Programmable:
 *  Nginx was designed by developers for developers. Feature rich and exensible with dynamic module and nginx js.
 * 
 * Automatable:
 *  Automation is trivial with nginx, nginx config are simple flat files, easily templated and deployed using DevOps tools.
 * 
 * Portable:
 *  Nginx fits on a floppy disk!, Deploy on Bare metal virtual machine, cloude environments and containers.
 * 
 * Manageable:
 *  Nginx as a lightweight dataplane can be managed using prefered tool, on Nginx controller for monitoring, analytics and configuration management.
 * 
 * Flexible:
 *  (re)size NGINX vertically or horizontal in a multi-tenant or per-application architecture.
 * 
 * 
 * 
 * Features:
 * 1. Load balancer
 * 2. Web Server
 * 3. Content cache
 * 4. Security controls
 * 5. Web application firewall
 * 6. Dynamic modules
 * 7. Monitoring
 * 10. High Availability
 * 11. Kuberneties ingress controller
 * 12. Programmability
 * 13. Streaming Media
 * 14. API Gateway
 * 
 * 
 * NGINX and NGINX Plus are similar to other services in that they use a text-based configuration file written in a particular format.
 * by default file name is "Nginx.conf" and for NGINX Plus is placed in the /etc/nginx directory.
 * For the nginx open source, the location depends on the packages system used to install nginx and the OS.
 * It is typically one of 
 * 1. /usr/local/nginx/conf
 * 2. /etc/nginx
 * 3. /usr/local/etc/nginx
 * 
 * 
 * 
 * Directives:
 * ----------------------------------------------
 * The configuration file consists of directives and their parameters. simple (single-line) directives each end with semicolon.
 * Other directives act as containers that group together related directives, enclosing them in curly braces {} these are often referred to as blocks.
 * 
 * Ex:
 *  user                nobody;
 *  error_log           logs/error.log notice;
 *  worker_processes    1;
 * 
 * 
 * Feature-Specific Configuration Files:
 * ----------------------------------------------
 * To make the configuration easier to maintain, we recommonded that you split it into as set of feature-specific files
 * stored in the /etx/nginx/conf.d directory and use the include directive in the main nginx.conf.
 * 
 * Ex:
 *  include         conf.d/http;
 *  include         conf.d/stream;
 *  include         conf.d/exchange-enhanced;
 * 
 * 
 * Contexts:
 * -----------------------------------------------
 * a few top-level directives, referred to as contexts, group together the directives that apply to different traffic types:
 * 1. events:   General connection proccessing
 * 2. http:     HTTP traffic
 * 3. mail:     Mail traffic
 * 4. stream:   TCP and UDP traffic
 * 
 * 
 */


/**
 * ================================
 *             MODULES
 * ================================
 * 
 * 
 * 
 * 
 * Compress responses with gzip
 * The ngx_http_gzip_module module is a filter that compresses responses using gzip method. 
 * this often helps to reduce the size of transmitted data by half or even more.
 * 
 * Syntax: context http,server and location
 * 1. gzip                            on|off  => default off 
 * 
 * 2. gzip_types                      MIME type (* matches any mime types)
 *    Enables gzipping of responses for the specified MIME types in addition to “text/html”.
 * 
 * 3. gzip_min_length                 length  => default 20
 *    Sets the minimum length of a response that will be gzipped. The length is determined only from the “Content-Length” response header field.
 * 
 * 4. gzip_http_version               1.0 | 1.1  => default 1.0
 *    Sets the minimum HTTP version of a request required to compress a response.
 * 
 * 5. gzip_comp_level                 1 to 9 => default 1
 *    Sets a gzip compression level of a response. Acceptable values are in the range from 1 to 9.
 * 
 * 6. gzip_buffers                    number size => default 32 4k|16 8k
 *    number and size of buffers used to compress a response. by default the buffer size is equal o on memory page, this is either 4k or 8k depending on a platform.
 * 
 * 7. gzip_diable                     regexp
 * 
 * 8. gzip_proxied                    off | expired | no-cache | no-store | private | no_last_modified | no_etag | auth | any ...;
 *    Enables or disables gzipping of responses for proxied requests depending on the request and response. 
 *    The fact that the request is proxied is determined by the presence of the “Via” request header field. 
 *    
 *    - off
 *        disables compression for all proxied requests, ignoring other parameters;
 *    - expired
 *        enables compression if a response header includes the “Expires” field with a value that disables caching;
 *    - no-cache
 *       enables compression if a response header includes the “Cache-Control” field with the “no-cache” parameter;
 *    - no-store
 *       enables compression if a response header includes the “Cache-Control” field with the “no-store” parameter;
 *    - private
 *       enables compression if a response header includes the “Cache-Control” field with the “private” parameter;
 *    - no_last_modified
 *       enables compression if a response header does not include the “Last-Modified” field;
 *    - no_etag
 *       enables compression if a response header does not include the “ETag” field;
 *    - auth
 *       enables compression if a request header includes the “Authorization” field;
 *    - any
 *     enables compression for all proxied requests.
 * 
 * 
 * Example:
 * gzip on;  // http,server,location context
 * gzip_types text/css text/html text/javascript etc.
 * 
 * or you can use array syntax;
 * gzip_types text/css;
 * gzip_types text/javascript;
 * gzip_types text/html;
 * 
 * 
 * 
 * 
 * 
 * FasCGI Cache module:
 * The ngx_http_fastcgi_module module allows passing request to FastCGI server.
 * 
 * Syntax:
 * 1. fastcgi_bind                      address [transparent] | off; ex: fastcgi_bind $remote_addr transparent;
 *    Makes outgoing connections to a FastCGI server originate from the specified local IP address with an optional port 
 * 
 * 2. fastcgi_buffer_size               size, Default:	fastcgi_buffer_size 4k|8k;
 *    Sets the size of the buffer used for reading the first part of the response received from the FastCGI server.
 * 
 * 3. fastcgi_buffering                 on | off;
 *    Enables or disables buffering of responses from the FastCGI server.
 *    When buffering is enabled, nginx receives a response from the FastCGI server as soon as possible, saving it into the buffers set by the fastcgi_buffer_size and fastcgi_buffers directives. If the whole response does not fit into memory, a part of it can be saved to a temporary file on the disk. Writing to temporary files is controlled by the fastcgi_max_temp_file_size and fastcgi_temp_file_write_size directives.
 * 
 * 4. fastcgi_cache_path                path [levels=levels] [use_temp_path=on|off] keys_zone=name:size [inactive=time] [max_size=size] [min_free=size] [manager_files=number] [manager_sleep=time] [manager_threshold=time] [loader_files=number] [loader_sleep=time] [loader_threshold=time] [purger=on|off] [purger_files=number] [purger_sleep=time] [purger_threshold=time];
 *    Sets the path and other parameters of a cache. Cache data are stored in files. Both the key and file name in a cache are a result of applying the MD5 function to the proxied URL. The levels parameter defines hierarchy levels of a cache: from 1 to 3, each level accepts values 1 or 2. 
 *    ex: fastcgi_cache_path /tmp/fast_cache levels=1:2 keys_zone=ZONE_1:10m inactive=60m
 * 
 * 5. fastcgi_cache_key                 string
 *    Defines a key for caching, for example
 *    ex: fastcgi_cache_key "$scheme$request_method$host$request_uri";
 * 
 * 6. fastcgi_cache_lock                on | off;
 *    When enabled, only one request at a time will be allowed to populate a new cache element identified according to the fastcgi_cache_key 
 * 
 * 7. fastcgi_cache_lock_age            time, default fastcgi_cache_lock_age 5s;
 *    If the last request passed to the FastCGI server for populating a new cache element has not completed for the specified time, one more request may be passed to the FastCGI server.
 * 
 * 8. fastcgi_cache_lock_timeout        time, default fastcgi_cache_lock_age 5s;
 *    Sets a timeout for fastcgi_cache_lock. When the time expires, the request will be passed to the FastCGI server, however, the response will not be cached.
 * 
 * 9. fastcgi_cache_methods             GET | HEAD | POST ...; default fastcgi_cache_methods GET HEAD;
 *    If the client request method is listed in this directive then the response will be cached. “GET” and “HEAD” methods are always added to the list, though it is recommended to specify them explicitly.
 * 
 * 10. fastcgi_cache                     zone | off; Default:	fastcgi_cache off;
 *    Defines a shared memory zone used for caching   
 * 
 * 11. fastcgi_cache_bypass              string 
 *     Defines conditions under which the response will not be taken from a cache. If at least one value of the string parameters is not empty and is not equal to “0” then the response will not be taken from the cach 
 *    ex: 
 *      fastcgi_cache_bypass $cookie_nocache $arg_nocache$arg_comment;
 *      fastcgi_cache_bypass $http_pragma    $http_authorization;
 * 
 * 12. fastcgi_cache_valid               [code ...] time
 *     Sets caching time for different response codes. For example, the following directives
 *     ex:  fastcgi_cache_valid 200 302 10m;
 * 
 * 13. fastcgi_no_cache                  string 
 *     ex: fastcgi_no_cache              1
 * 
 * 
 * 
 * HTTP2: https://www.nginx.com/blog/nginx-1-13-9-http2-server-push/
 * 1. http2 is a binary protocol and where http is textual protocol.
 * 2. Compressed header
 * 3. Persistent Connections
 * 4. Multiplex Streaming
 * 5. Server push
 * 
 * 
 * configuration:
 * server {
    # Ensure that HTTP/2 is enabled for the server        
    listen 443 ssl http2;

    ssl_certificate ssl/certificate.pem;
    ssl_certificate_key ssl/key.pem;

    root /var/www/html;

    # whenever a client requests demo.html, also push
    # /style.css, /image1.jpg and /image2.jpg
    location = /demo.html {
        http2_push /style.css;
        http2_push /image1.jpg;
        http2_push /image2.jpg;
    }
}
 */
