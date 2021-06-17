(function (global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("PFile require a document object")
      }
    }

  } else {
    factory(global)
  }
})(window, (f) => { console.log(f) });