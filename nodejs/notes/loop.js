/**
 * How event loop works:
 *
 */


// node myFile.js
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

myfile.runContens(); // there is no myFile and runContent, we are just pretending


function shouldContinute() {

  // Check one:   Any pending setTimeout, setInterval and setImmediate?
  // Check two:   Any pending OS task? (like server listening to port)
  // Check three: Any pending long running operations? (like fs module) 
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// Entire body executes in one 'tick'
while (shouldContinute) {
  // 1) Node looks at pendingTImers and sees if any functions
  // are ready to be called. setTimeout, setInterval


  // 2) Node looks at pendingOsTask and pendingOperations
  // are call relevent callbacks.


  // 3) Pause execution. Continue when...
  // - a new pendingOSTask is done
  // - b new pendingOperation is done
  // - c timer is about to complete


  // 4) Look as pendingTimers. Call any setImmediate


  // 5) handle any 'close' events
}




 // exit back to terminal