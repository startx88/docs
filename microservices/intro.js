/**
 * What is a microservices:
 *
 *
 * Monolithic server
 * 1 Single codebase
 * request ==>
 *          Auth Middleware ==>
 *                          Router ==>
 *                                  feature a,
 *                                  feature b,
 *                                  feature c
 *                                          => Database
 *                                                  data
 *
 * A Monolith contains
 * 1. Routing
 * 2. Middleware
 * 3. Business Logic
 * 4. Database access
 *
 *
 *
 * A single microservice contains all the
 * 1. Routing
 * 2. Middleware
 * 3. Business Logic
 * 4. Database access
 * to implement one feature of an app
 *
 *
 *
 * Service A
 * Auth middleware => router => feature A => Database (A)
 *
 * Service B
 * Auth middleware => router => feature B => Database (B)
 *
 * Service C
 * Auth middleware => router => feature C => Database (C)
 *
 *
 *
 *
 * Note: Data management between services ( this is a very big problem of microservices )
 *
 * 1. Each service has itw own database.
 * 2. Services will never, ever reach into another services database.
 *
 * Why Database Per Service (patter Database-Per-Service)
 * 1. We want each service to run independently of other services.
 * 2. Database schema/structure might change unexpectedly.
 * 3. Some services might function more efficently with different types
 * of DB's (SQL vs NoSQL)
 *
 *
 *
 *
 * Big problem with data:
 *
 *
 *
 *
 * Communication between services:
 * We use below communication strategies
 * 1. Sync : for syncronous communication
 * 2. Async : for asynchronous communication
 *
 * 1. Sync: Services communicate with each other using direct request
 *      a. Conceptually easy to understand!
 *      b. Service D won't need database
 *      d. Introduces a dependency between services
 *      d. If any inter-servie request fails, the overall request fails
 *      e. The entier request is only as fast ast the slowest request.
 *      f. Can easily introduce webs of requests.
 *
 * 2. Async: Services communicate with each other using events
 *      a. Conceptually not easy to understand!
 *      b. Service D won't need database
 *      c. Introduces a dependency between services
 *      d. If any inter-servie events fails, the overall request fails or timeout
 *      e. The entier request is only as fast ast the slowest events.
 *      f. Can easily introduce webs of events.
 *
 *
 *
 *  Example:
 *  Service A  =>
 *  Servcie B  =>                       Event Bus
 *  Service C  =>
 *  Service D  =>
 *
 *  1.  Service emit an event with (type, payload)
 *      event({type:UserQuery, data:{name:'Pradeep'}})
 *  2. Goes to event bus
 *  2. event bus send it to another servcies
 *
 *
 * Pros and Cons of async communication:
 * Pros:
 * 1. Service D has zero dependencies on the other services
 * 2. Service D will be extremly fast.
 *
 * Cons:
 * 1. Data duplication.
 * 2. Harder to understand.
 */



