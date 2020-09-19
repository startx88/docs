/**
 * Lexical enviornment
 * 1. Lexical enviornment is just anather way to taking about scopes.
 * 2. Scopes is defined by {}.
 * 3. Lexical environment can be nested {{}}
 *
 * 3 Types of lexical environment
 *  1. {this} block scope
 *  2. Global Scope <script>this</script>
 *  3. Function scope function abc(){this}
 *
 */

/**
 * What is an execution content in JS:
 * 1. Lexical Environment {Scope}
 * 2. Variable Environment
 * 3. this binding
 *
 * 1. When js engine execute the script, it creates execution contexts.
 * 2. Each execution context has two phase.
 *    a. creation phase.
 *    b. execution phase.
 *
 *
 * Default is global execution context:
 * Phase: Creation
 *    Window: global object
 *    this: window
 *
 * Function execution context: it crates when function is envoked.
 * Phase: Creation
 *    Global Object: arguments
 *    this: window
 *
 *
 * During the creation phase these below things happen.
 * 1. LexicalEnvironment component is created.
 * 2. VariableEnvironment component is created.
 *
 * Execution context can be conceptually represented as follow:
 * ExecutionContext = {
    LexicalEnvironment = <ref. to LexicalEnvironment in memory>,
    VariableEnvironment = <ref. to VariableEnvironment in  memory>,
  }

 * Lexical Environment:
    A lexical environment is a structure that holds identifier-variable mapping.
    note: identifier refers to the name of variables/functions

    Exmaple:

    var a = 20;
    var b = 40;
    function foo() {
      console.log('bar');
    }

    SO THE LEXICAL ENVIRONMENT FOR THE ABOVE SNIPPTS:
    lexicalEnvironment ={
      a:20,
      b:40,
      foo: <ref. to foo function>
    }

 * Each lexical environment has three components:
 * 1. Environment Record.
 * 2. Reference to the outer environment.
 * 3. this binding
 *
 *
 *
 */