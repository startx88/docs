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
 * Environment record:
 * 1. It is a specification of type.
 * 2. Used to define the association of identifiers to specific variable and functions base upon the lexical nesting structure.
 * 3. Each time code is evaluted, a new environment record is created to record the identifier bindings that are created by that code.
 *
 * * Every environment record has a [[OuterEnv]] field, which is either null or a reference to an outer environment record.
 * * Environment Records are purely specification mechanisms.
 *
 * The Environment Record Type Hierarchy
 * 1. Declarative Environment Record.
 *    1. Function environment record.
 *    2. Module environment record.
 * 2. Object Environment Record.
 * 3. Global Environment Record.
 *
 * Ex: you can thought it as a simple object-oriented hierarchy where environment record is an abstract class with 3 concrete subclass.
 *
 * 1. Declarative environment record:
 *    A declarative environment record is used to define the effect of ECMAScript language syntactic element such as FunctionDeclaration, VariableDeclaration or Catch clause that
 *    directly associated identifiers binding.
 *
 *    a. A function environment record corresponding to the invocation of an ECMA function object, and contain binding for the top level declaratinon.
 *       it may established a new this binding.
 *       it may also capture the state necessary to support super method invocation.
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