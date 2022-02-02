/**
 * What is nginx
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
 *10.  
 */
