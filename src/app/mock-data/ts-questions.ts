export const tsTest = {
  name: "TypeScript",
  questions: [
    {
      question: "What is TypeScript?",
      options: [
        { text: "A superset of JavaScript", correct: true },
        { text: "A programming language", correct: false },
        { text: "A database management system", correct: false },
      ],
    },
    {
      question: "What are the benefits of using TypeScript?",
      options: [
        { text: "Type safety", correct: true },
        { text: "Improved tooling support", correct: true },
        { text: "Faster execution speed", correct: false },
      ],
    },
    {
      question: "What is a type annotation in TypeScript?",
      options: [
        { text: "A comment describing the type of a variable", correct: false },
        {
          text: "A way to specify the type of a variable or parameter",
          correct: true,
        },
        { text: "A built-in data type in TypeScript", correct: false },
      ],
      multipleOptions: false,
    },
    {
      question: "What is a type assertion in TypeScript?",
      options: [
        {
          text: "A way to force a variable to have a specific type",
          correct: true,
        },
        { text: "A way to create custom types", correct: false },
        {
          text: "A way to convert one type to another implicitly",
          correct: false,
        },
      ],
      multipleOptions: false,
    },
    //   {
    //     question: "What is a generic in TypeScript?",
    //     options: [
    //       {
    //         text: "A way to create reusable components with types that can vary",
    //         correct: true,
    //       },
    //       {
    //         text: "A built-in data type for handling collections of items",
    //         correct: false,
    //       },
    //       { text: "A type of error in TypeScript", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is the 'never' type in TypeScript?",
    //     options: [
    //       {
    //         text: "A type representing a value that will never occur",
    //         correct: true,
    //       },
    //       { text: "A type representing an error", correct: false },
    //       { text: "A type representing an infinite loop", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is the 'unknown' type in TypeScript?",
    //     options: [
    //       { text: "A type representing any possible value", correct: false },
    //       {
    //         text: "A type representing a value whose type is not known at compile time",
    //         correct: true,
    //       },
    //       { text: "A type representing a nullable value", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is the 'readonly' modifier in TypeScript?",
    //     options: [
    //       {
    //         text: "A way to make a property or variable read-only",
    //         correct: true,
    //       },
    //       { text: "A way to define a constant", correct: false },
    //       {
    //         text: "A way to prevent a variable from being accessed outside its scope",
    //         correct: false,
    //       },
    //     ],
    //   },
    //   {
    //     question: "What is a 'tuple' in TypeScript?",
    //     options: [
    //       {
    //         text: "A data structure that represents a collection of elements",
    //         correct: false,
    //       },
    //       {
    //         text: "An array-like structure with a fixed number of elements and specific types for each element",
    //         correct: true,
    //       },
    //       { text: "A way to define custom types", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is a 'namespace' in TypeScript?",
    //     options: [
    //       { text: "A way to organize code into logical groups", correct: true },
    //       { text: "A way to define global variables", correct: false },
    //       { text: "A way to define custom data types", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is an 'enum' in TypeScript?",
    //     options: [
    //       { text: "A way to define a set of named constants", correct: true },
    //       { text: "A way to define generic types", correct: false },
    //       { text: "A way to define custom error messages", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is a 'module' in TypeScript?",
    //     options: [
    //       { text: "A file containing TypeScript code", correct: false },
    //       { text: "A way to organize code into reusable units", correct: true },
    //       { text: "A built-in TypeScript function", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is the 'as' keyword used for in TypeScript?",
    //     options: [
    //       { text: "To define an interface", correct: false },
    //       { text: "To specify a type assertion", correct: true },
    //       { text: "To create a new instance of a class", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is a 'type guard' in TypeScript?",
    //     options: [
    //       { text: "A way to define custom data types", correct: false },
    //       {
    //         text: "A way to narrow down the type of a variable within a conditional block",
    //         correct: true,
    //       },
    //       {
    //         text: "A way to convert one type to another implicitly",
    //         correct: false,
    //       },
    //     ],
    //   },
    //   {
    //     question: "What is a 'declaration merging' in TypeScript?",
    //     options: [
    //       {
    //         text: "A way to combine multiple variable declarations into a single declaration",
    //         correct: false,
    //       },
    //       {
    //         text: "A way to automatically merge the properties of multiple interfaces with the same name into a single interface",
    //         correct: true,
    //       },
    //       {
    //         text: "A way to merge multiple function declarations into a single function",
    //         correct: false,
    //       },
    //     ],
    //   },
    //   {
    //     question: "What is a 'declaration file' in TypeScript?",
    //     options: [
    //       {
    //         text: "A file containing only type definitions without any executable code",
    //         correct: true,
    //       },
    //       {
    //         text: "A file containing executable TypeScript code",
    //         correct: false,
    //       },
    //       { text: "A file containing documentation comments", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is a 'tsconfig.json' file in TypeScript?",
    //     options: [
    //       {
    //         text: "A configuration file that specifies options for the TypeScript compiler",
    //         correct: true,
    //       },
    //       { text: "A file containing TypeScript code", correct: false },
    //       { text: "A file containing type definitions", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is a 'compiler option' in TypeScript?",
    //     options: [
    //       {
    //         text: "An option that specifies the behavior of the TypeScript compiler",
    //         correct: true,
    //       },
    //       {
    //         text: "An option that specifies the version of TypeScript",
    //         correct: false,
    //       },
    //       {
    //         text: "An option that specifies the output directory for compiled JavaScript files",
    //         correct: false,
    //       },
    //     ],
    //   },
    //   {
    //     question: "What is a 'decorator' in TypeScript?",
    //     options: [
    //       {
    //         text: "A special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter",
    //         correct: true,
    //       },
    //       { text: "A built-in TypeScript function", correct: false },
    //       { text: "A way to define custom data types", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is a 'transpiler'?",
    //     options: [
    //       {
    //         text: "A tool that converts TypeScript code into JavaScript code",
    //         correct: true,
    //       },
    //       {
    //         text: "A tool that converts JavaScript code into TypeScript code",
    //         correct: false,
    //       },
    //       { text: "A tool that optimizes JavaScript code", correct: false },
    //     ],
    //   },
    //   {
    //     question:
    //       "What is the purpose of the 'include' property in tsconfig.json?",
    //     options: [
    //       {
    //         text: "To specify the files to be included in the compilation process",
    //         correct: true,
    //       },
    //       {
    //         text: "To specify the output directory for compiled JavaScript files",
    //         correct: false,
    //       },
    //       {
    //         text: "To specify the version of TypeScript to be used",
    //         correct: false,
    //       },
    //     ],
    //   },
    //   {
    //     question:
    //       "What is the purpose of the 'exclude' property in tsconfig.json?",
    //     options: [
    //       {
    //         text: "To specify the files to be excluded from the compilation process",
    //         correct: true,
    //       },
    //       {
    //         text: "To specify the files to be included in the compilation process",
    //         correct: false,
    //       },
    //       {
    //         text: "To specify the output directory for compiled JavaScript files",
    //         correct: false,
    //       },
    //     ],
    //   },
    //   {
    //     question: "What is the 'any' type in TypeScript?",
    //     options: [
    //       { text: "A type representing any possible value", correct: true },
    //       { text: "A type representing a nullable value", correct: false },
    //       {
    //         text: "A type representing a value whose type is not known at compile time",
    //         correct: false,
    //       },
    //     ],
    //   },
    //   {
    //     question: "What is the 'void' type in TypeScript?",
    //     options: [
    //       { text: "A type representing any possible value", correct: false },
    //       { text: "A type representing no value", correct: true },
    //       { text: "A type representing a nullable value", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is the 'never' type in TypeScript?",
    //     options: [
    //       {
    //         text: "A type representing a value that will never occur",
    //         correct: true,
    //       },
    //       { text: "A type representing an error", correct: false },
    //       { text: "A type representing an infinite loop", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is a 'namespace' in TypeScript?",
    //     options: [
    //       { text: "A way to organize code into logical groups", correct: true },
    //       { text: "A way to define global variables", correct: false },
    //       { text: "A way to define custom data types", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is an 'interface' in TypeScript?",
    //     options: [
    //       {
    //         text: "A way to define object types and specify contracts for objects in TypeScript",
    //         correct: true,
    //       },
    //       { text: "A way to define custom data types", correct: false },
    //       { text: "A way to define global variables", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is an 'abstract class' in TypeScript?",
    //     options: [
    //       {
    //         text: "A class that cannot be instantiated directly and is used as a base class for other classes",
    //         correct: true,
    //       },
    //       { text: "A class that has a constructor", correct: false },
    //       { text: "A class that cannot be extended", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is a 'module' in TypeScript?",
    //     options: [
    //       { text: "A way to organize code into reusable units", correct: true },
    //       { text: "A file containing TypeScript code", correct: false },
    //       { text: "A built-in TypeScript function", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is an 'enum' in TypeScript?",
    //     options: [
    //       { text: "A way to define a set of named constants", correct: true },
    //       { text: "A way to define generic types", correct: false },
    //       { text: "A way to define custom error messages", correct: false },
    //     ],
    //   },
    //   {
    //     question: "What is a 'declaration file' in TypeScript?",
    //     options: [
    //       {
    //         text: "A file containing only type definitions without any executable code",
    //         correct: true,
    //       },
    //       {
    //         text: "A file containing executable TypeScript code",
    //         correct: false,
    //       },
    //       { text: "A file containing documentation comments", correct: false },
    //     ],
    //   },
  ],
};
