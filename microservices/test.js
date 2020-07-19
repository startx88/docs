/**
 * Whats the scope of our tests:
 * 1. Test a single fiece of code in isolation.
 *    ex: single middleware
 * 2. Test how different pieces of code work together
 *    ex: Request flowing through multiple middlewares to a request handler
 * 3. Test how different components work together
 *    ex: Make request to service, ensure write to database was completed
 * 4. Test how different services work together
 *    ex: Creating a payment at payments service should effect the orders service
 *
 *
 *
 *
 * Diagram
 *
 * Kubernetes ------------------------------------------------------------------------------------------------------------------------------
 *
 *                                              Auth Service
 *                           ------------------------------------------------------
 *                              Middleware          Route Handlers      Models
 *                              requireAuth         Signup              User
 *                              currentUser         Signin                              MongoDB for auth service
 *                                                  Signout
 *                                                  currentUser
 *                           -------------------------------------------------------
 *                                                                                                                              Event Bus
 *     Ingress-Nginx --
 *                           Order Service                                              MongoDB for Order service
 *
 *                           TIcketing Service                                          MongoDB for Ticket service
 *
 *                           Payments Service                                           MongoDB for Payment service
 *
 * ------------------------------------------------------------------------------------------------------------------------------------------
 *
 *
 *
 *
 *
 */