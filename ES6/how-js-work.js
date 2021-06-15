/**
 * How js work:
 *
 */


/**
 * V8 Engine threads:
 * 1. Main thread : Fetch => Compile => Execute
 * 2. Compiler thread : Full-Codegen + Crankshaft
 * 3. Profiler thread : Monitors code and finds out "hot" sections.
 * 4. GC thread : Grarbage collection
 *
 *
 */

/**
 * JIT: just in compiler
 * Generate machine code during runtime, not ahead of time (AOT)
 */

/**
 * Optimizing compiler:
 * Re-compile "hot" functions with type infront from previous execution.
 *
 * De-optimized if type has changed
 *
 */

/**********
 * Graph:
 *
 * Javascript source code => Parser => AST => Baseline Compiler (Optimizing compiler + Optimize machine code ) => Machine Code
 */