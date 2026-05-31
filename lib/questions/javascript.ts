import { Question } from "../questions";

const javascriptQuestions: Question[] = [
  // ─── JS FUNDAMENTALS ──────────────────────────────────────────────────────
  {
    id: "js-1",
    question: "What is JavaScript?",
    answer:
      "JavaScript is a high-level, interpreted, dynamically typed, single-threaded programming language primarily used for web development. It runs in browsers and on servers (via Node.js). It supports multiple paradigms: object-oriented, functional, and procedural. JavaScript is the only language that runs natively in browsers, making it essential for client-side interactivity. Key characteristics: dynamic typing, prototype-based inheritance, first-class functions, and an event-driven, non-blocking execution model.",
    category: "JS Fundamentals",
    tags: ["javascript", "basics"],
  },
  {
    id: "js-2",
    question: "What is the difference between var, let, and const?",
    answer:
      "var: function-scoped (or global if outside a function), hoisted to the top of its scope with value undefined, can be redeclared and reassigned, no block scope. let: block-scoped (only lives inside the {} it was declared in), hoisted but NOT initialised (temporal dead zone — accessing before declaration throws ReferenceError), cannot be redeclared in the same scope, can be reassigned. const: block-scoped, same hoisting behaviour as let, cannot be redeclared or reassigned (the binding is constant), but objects/arrays it holds can still be mutated. Rule: always use const by default, use let when you need to reassign, never use var in modern code.",
    category: "JS Fundamentals",
    tags: ["javascript", "variables", "scope"],
  },
  {
    id: "js-3",
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's behaviour of moving declarations to the top of their scope during the compilation phase, before code executes. var declarations are hoisted and initialised with undefined — so you can reference a var before its line without an error (but get undefined). Function declarations are fully hoisted — you can call them before they appear in code. let and const are hoisted but not initialised — accessing them before declaration throws a ReferenceError (temporal dead zone). Function expressions (const fn = () => {}) are NOT hoisted — only the variable declaration is.",
    category: "JS Fundamentals",
    tags: ["javascript", "hoisting"],
  },
  {
    id: "js-4",
    question: "What is the temporal dead zone (TDZ)?",
    answer:
      "The temporal dead zone is the period between entering a block scope and the point where a let or const variable is declared and initialised. During the TDZ, the variable exists in scope (it is hoisted) but cannot be accessed — doing so throws a ReferenceError. Example: { console.log(x); // ReferenceError — TDZ let x = 5; console.log(x); // 5 }. The TDZ exists to prevent using variables before they're initialised, which was a common source of bugs with var.",
    category: "JS Fundamentals",
    tags: ["javascript", "tdz", "hoisting"],
  },
  {
    id: "js-5",
    question: "What is the difference between == and ===?",
    answer:
      "== (loose equality) compares values after type coercion — JavaScript converts types to make the comparison. 0 == '0' is true, null == undefined is true, false == 0 is true. === (strict equality) compares both value AND type without coercion — 0 === '0' is false, null === undefined is false. Always use === to avoid unexpected coercion bugs. The only common case for == is null == undefined when you want to check for both in one expression. null === null and undefined === undefined are both true.",
    category: "JS Fundamentals",
    tags: ["javascript", "equality", "coercion"],
  },
  {
    id: "js-6",
    question: "What are the data types in JavaScript?",
    answer:
      "Primitive types (immutable, stored by value): String, Number, Boolean, undefined, null, Symbol (ES6), BigInt (ES2020). Reference types (mutable, stored by reference): Object (includes plain objects, arrays, functions, Date, Map, Set, etc.). typeof null is 'object' — a historical bug. typeof function is 'function' though functions are objects. undefined means a variable is declared but not assigned. null is an intentional absence of value — it must be explicitly set. NaN (Not a Number) is of type Number and NaN !== NaN (use Number.isNaN() to check).",
    category: "JS Fundamentals",
    tags: ["javascript", "datatypes"],
  },
  {
    id: "js-7",
    question: "What is type coercion in JavaScript?",
    answer:
      "Type coercion is the automatic or implicit conversion of values from one type to another. Implicit coercion happens automatically: '5' + 3 = '53' (number coerced to string because + with string means concatenation), '5' - 3 = 2 (string coerced to number because - is arithmetic), Boolean('') = false, Boolean('hello') = true. Falsy values: false, 0, '', null, undefined, NaN, 0n. Everything else is truthy. Explicit coercion: Number('5'), String(5), Boolean(0), parseInt('42px'). Understanding coercion is essential for debugging unexpected JavaScript behaviour.",
    category: "JS Fundamentals",
    tags: ["javascript", "coercion"],
  },
  {
    id: "js-8",
    question: "What is the difference between null and undefined?",
    answer:
      "undefined: a variable has been declared but not assigned a value. It is the default value of uninitialised variables, function parameters not provided, and object properties that don't exist. It is also what functions return implicitly. null: an intentional, explicit absence of value — a programmer sets this to mean 'no value here'. Use null when you want to clear a value intentionally. typeof undefined === 'undefined', typeof null === 'object' (bug). null == undefined is true but null === undefined is false.",
    category: "JS Fundamentals",
    tags: ["javascript", "null", "undefined"],
  },
  {
    id: "js-9",
    question: "What is NaN? How do you check for it?",
    answer:
      "NaN (Not a Number) is a numeric value representing an invalid number result — like parseInt('hello') or 0/0 or Math.sqrt(-1). Paradoxically, typeof NaN === 'number'. The most confusing property: NaN !== NaN (NaN is not equal to itself). So you cannot check with value === NaN. Correct checks: Number.isNaN(value) — strict, only returns true if value IS NaN. isNaN(value) — converts value to number first, so isNaN('hello') is true (because Number('hello') is NaN) which is misleading. Always use Number.isNaN() for reliable checks.",
    category: "JS Fundamentals",
    tags: ["javascript", "nan"],
  },
  {
    id: "js-10",
    question: "What is the difference between primitive and reference types?",
    answer:
      "Primitives (string, number, boolean, null, undefined, symbol, bigint) are stored by value — when you assign or pass them, a copy is made. Changing one copy doesn't affect the other. Reference types (objects, arrays, functions) are stored by reference — the variable holds a memory address pointing to the data. Assigning copies the reference, not the data. Two variables can point to the same object. Example: const a = [1,2,3]; const b = a; b.push(4); console.log(a) → [1,2,3,4] — a and b point to the same array. To copy: const b = [...a] (shallow) or structuredClone(a) (deep).",
    category: "JS Fundamentals",
    tags: ["javascript", "primitives", "reference"],
  },

  // ─── FUNCTIONS & SCOPE ────────────────────────────────────────────────────
  {
    id: "js-11",
    question: "What are the different ways to define a function in JavaScript?",
    answer:
      "Function declaration: function greet() {} — hoisted fully, available before its line. Function expression: const greet = function() {} — not hoisted (only the variable declaration is). Arrow function: const greet = () => {} — shorter syntax, no own this, no arguments object, cannot be used as constructor. Named function expression: const greet = function myFn() {} — name only available inside the function. Method shorthand in objects: { greet() {} }. The most important differences are hoisting behaviour and how this is bound.",
    category: "Functions & Scope",
    tags: ["javascript", "functions"],
  },
  {
    id: "js-12",
    question: "What is scope in JavaScript?",
    answer:
      "Scope determines where variables are accessible. Global scope: variables declared outside any function/block — accessible everywhere. Function scope: variables declared with var inside a function — only accessible within that function. Block scope: variables declared with let/const inside {} — only accessible within that block. Lexical scope (static scope): inner functions have access to variables in their outer (parent) function's scope — scope is determined by where functions are written in code, not where they're called. JavaScript uses lexical scoping.",
    category: "Functions & Scope",
    tags: ["javascript", "scope"],
  },
  {
    id: "js-13",
    question: "What is the scope chain?",
    answer:
      "When JavaScript looks up a variable, it starts in the current scope, then looks outward to each containing scope, all the way to the global scope. This chain of scopes is the scope chain. If the variable isn't found in any scope, it throws a ReferenceError. Example: a function inside a function inside a module — the inner function can access variables from all containing scopes. This forms a chain: inner scope → outer function scope → module scope → global scope. Once found, the search stops.",
    category: "Functions & Scope",
    tags: ["javascript", "scope"],
  },
  {
    id: "js-14",
    question: "What is the difference between function scope and block scope?",
    answer:
      "Function scope (var): a variable declared with var is accessible anywhere within the function it was declared in, including inside nested blocks (if, for, while). var i inside a for loop leaks out of the loop. Block scope (let/const): a variable is only accessible within the specific {} block it was declared in. let i inside a for loop doesn't exist outside the loop. Block scope prevents accidental variable leaks and makes code more predictable. Always prefer let/const for block scoping.",
    category: "Functions & Scope",
    tags: ["javascript", "scope", "functions"],
  },
  {
    id: "js-15",
    question: "What is an IIFE (Immediately Invoked Function Expression)?",
    answer:
      "An IIFE is a function that is defined and immediately executed. Syntax: (function() { /* code */ })() or (() => { /* code */ })(). The outer parentheses make the function an expression instead of a declaration; the () at the end immediately invokes it. Purpose: create a private scope to avoid polluting the global namespace — variables inside the IIFE are not accessible outside. Widely used before ES modules and block scoping. Today, ES modules handle this naturally, but IIFEs still appear in legacy code and specific patterns like async IIFE: (async () => { await something(); })().",
    category: "Functions & Scope",
    tags: ["javascript", "iife", "functions"],
  },
  {
    id: "js-16",
    question: "What is a pure function?",
    answer:
      "A pure function always returns the same output for the same input (deterministic) and has no side effects — it doesn't modify external state, doesn't mutate its arguments, doesn't make API calls, doesn't log, doesn't interact with the DOM. Example: const add = (a, b) => a + b is pure. const addToList = (list, item) => { list.push(item); return list } is impure (mutates the argument). Pure functions are predictable, easy to test, and safe to memoize. They're the foundation of functional programming.",
    category: "Functions & Scope",
    tags: ["javascript", "functions", "functional"],
  },
  {
    id: "js-17",
    question: "What is a first-class function?",
    answer:
      "JavaScript treats functions as first-class citizens — they can be assigned to variables, passed as arguments to other functions, returned from functions, and stored in data structures. This enables higher-order functions, callbacks, closures, and functional programming patterns. Example: const fn = () => 'hello' (assigned to variable), setTimeout(fn, 1000) (passed as argument), function createMultiplier(n) { return x => x * n; } (returned from function). This is a core JavaScript feature that powers patterns like map, filter, reduce, and event listeners.",
    category: "Functions & Scope",
    tags: ["javascript", "functions"],
  },
  {
    id: "js-18",
    question: "What is a higher-order function?",
    answer:
      "A higher-order function either takes one or more functions as arguments or returns a function as its result. Built-in examples: array.map(fn), array.filter(fn), array.reduce(fn), setTimeout(fn, delay). Custom example: function withLogging(fn) { return (...args) => { console.log('calling'); return fn(...args); }; }. Higher-order functions enable code reuse, abstraction, and functional programming patterns like function composition, currying, and decorators. React's useCallback, useMemo, and HOC pattern are all based on higher-order functions.",
    category: "Functions & Scope",
    tags: ["javascript", "functions", "higher-order"],
  },

  // ─── CLOSURES ────────────────────────────────────────────────────────────
  {
    id: "js-19",
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that remembers the variables from its outer (enclosing) scope even after that outer function has returned. The function 'closes over' the variables it uses from its outer scope. Example: function makeCounter() { let count = 0; return () => ++count; } const counter = makeCounter(); counter() → 1; counter() → 2. The returned arrow function still has access to count even though makeCounter() finished executing. Closures are used for data privacy, factory functions, memoisation, and maintaining state in functional programming.",
    category: "Closures",
    tags: ["javascript", "closures"],
  },
  {
    id: "js-20",
    question: "What is a common closure bug with loops?",
    answer:
      "Classic bug: for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); } logs '3 3 3' not '0 1 2'. Because var is function-scoped, all three callbacks share the same i variable. By the time they run, the loop has finished and i is 3. Fixes: 1) Use let instead of var — let creates a new binding per iteration: for (let i = 0; i < 3; i++). 2) Use an IIFE to capture current i: setTimeout(((j) => () => console.log(j))(i), 100). 3) Use forEach instead of for loop. The let fix is the modern, clean solution.",
    category: "Closures",
    tags: ["javascript", "closures", "scope"],
  },
  {
    id: "js-21",
    question: "What are practical uses of closures?",
    answer:
      "1) Data privacy / encapsulation: expose only specific methods while hiding internal state (module pattern). 2) Factory functions: create configured functions — const multiply = n => x => x * n; const double = multiply(2). 3) Memoisation: cache results of expensive calls using a closed-over Map. 4) Partial application / currying: pre-fill some arguments of a function. 5) Event handlers with state: const makeHandler = (id) => () => handleClick(id) — each button gets its own handler with its own id closed in. 6) React hooks internally use closures — useState closes over the component's state.",
    category: "Closures",
    tags: ["javascript", "closures"],
  },

  // ─── THIS KEYWORD ─────────────────────────────────────────────────────────
  {
    id: "js-22",
    question: "What is the 'this' keyword in JavaScript?",
    answer:
      "this refers to the execution context — the object that a function is called on. Its value is determined at call time, not definition time (unlike closures). Rules: in global scope (non-strict): this is the window object. In strict mode global: this is undefined. In an object method: this is the object before the dot. In a constructor (new): this is the new object being created. In an arrow function: this is inherited from the enclosing lexical scope — arrow functions have no own this. With call/apply/bind: this is whatever you pass explicitly.",
    category: "This Keyword",
    tags: ["javascript", "this"],
  },
  {
    id: "js-23",
    question: "What is the difference between call, apply, and bind?",
    answer:
      "All three explicitly set the this context for a function. call: invokes the function immediately with a specified this and individual arguments: fn.call(obj, arg1, arg2). apply: invokes immediately with this and arguments as an array: fn.apply(obj, [arg1, arg2]). bind: does NOT invoke — returns a NEW function with this permanently bound: const bound = fn.bind(obj); bound(arg1). Memory aid: Call = Comma (individual args), Apply = Array. Bind = returns a Bound function. Use bind for event handlers and callbacks where you need to preserve this.",
    category: "This Keyword",
    tags: ["javascript", "this", "call", "apply", "bind"],
  },
  {
    id: "js-24",
    question: "Why do arrow functions not have their own 'this'?",
    answer:
      "Arrow functions were designed to solve the common problem of losing this context in callbacks. A regular function's this changes depending on how it's called. An arrow function captures this from the surrounding lexical scope at definition time and never changes it. Example: class Timer { start() { setInterval(() => { this.tick(); }, 1000); } }. Using a regular function inside setInterval would lose the class's this. The arrow function captures the class instance's this. This is why arrow functions cannot be used as constructors or object methods when you need dynamic this.",
    category: "This Keyword",
    tags: ["javascript", "this", "arrow-functions"],
  },

  // ─── PROTOTYPES & OOP ─────────────────────────────────────────────────────
  {
    id: "js-25",
    question: "What is prototypal inheritance in JavaScript?",
    answer:
      "Every JavaScript object has an internal [[Prototype]] link to another object (its prototype). When you access a property on an object, JavaScript first checks the object itself, then its prototype, then the prototype's prototype — up the chain until null. This chain is the prototype chain. Objects inherit properties and methods from their prototype. Example: all arrays inherit from Array.prototype (which has map, filter, etc.), which inherits from Object.prototype (which has toString, hasOwnProperty, etc.). This is different from class-based inheritance — it's object-to-object delegation.",
    category: "Prototypes & OOP",
    tags: ["javascript", "prototypes", "inheritance"],
  },
  {
    id: "js-26",
    question: "What is the prototype chain?",
    answer:
      "The prototype chain is the series of linked objects that JavaScript traverses when looking up a property. myArray → Array.prototype → Object.prototype → null. If you call myArray.toString(), JavaScript: 1) checks myArray — not found. 2) checks Array.prototype — not found. 3) checks Object.prototype — found! Returns Object.prototype.toString. This chain lookup is how inheritance works in JavaScript. __proto__ accesses the prototype (deprecated, use Object.getPrototypeOf()). Performance note: deep prototype chains slow down property lookups.",
    category: "Prototypes & OOP",
    tags: ["javascript", "prototypes"],
  },
  {
    id: "js-27",
    question: "What are ES6 Classes in JavaScript?",
    answer:
      "ES6 classes are syntactic sugar over JavaScript's prototype-based inheritance — they don't introduce a new inheritance model, just a cleaner syntax. class Animal { constructor(name) { this.name = name; } speak() { return `${this.name} speaks`; } }. Methods defined in the class body are added to the prototype. class Dog extends Animal { speak() { return `${this.name} barks`; } } — extends sets up prototype chain, super() calls parent constructor. Under the hood, this is equivalent to function constructors and prototype assignments, just much more readable.",
    category: "Prototypes & OOP",
    tags: ["javascript", "classes", "oop"],
  },
  {
    id: "js-28",
    question: "What are the 4 pillars of OOP in JavaScript?",
    answer:
      "Encapsulation: bundling data and methods that operate on it, hiding internal details. In JS: classes with private fields using # prefix (class Person { #age; }), or closures. Abstraction: exposing only essential features, hiding complexity. In JS: public interface via methods, private implementation. Inheritance: classes extend other classes to reuse code. In JS: class Dog extends Animal — Dog inherits Animal's methods via prototype chain. Polymorphism: same method name, different behaviour in different classes. In JS: method overriding in subclasses — Dog and Cat both have speak() but with different implementations.",
    category: "Prototypes & OOP",
    tags: ["javascript", "oop"],
  },
  {
    id: "js-29",
    question: "What are private class fields in JavaScript?",
    answer:
      "Private class fields are declared with a # prefix and are only accessible within the class body — they cannot be read or written from outside. class BankAccount { #balance = 0; deposit(amount) { this.#balance += amount; } getBalance() { return this.#balance; } }. Outside the class, account.#balance throws a SyntaxError. This is true encapsulation — unlike the older convention of _balance (just a naming convention, not enforced). Private methods also work: #validateAmount(n) {}. Supported in all modern browsers and Node.js 12+.",
    category: "Prototypes & OOP",
    tags: ["javascript", "oop", "classes", "private"],
  },
  {
    id: "js-30",
    question: "What is the difference between Object.create() and new?",
    answer:
      "new Constructor(): calls the constructor function, creates an object whose prototype is Constructor.prototype, executes the constructor with this set to the new object, returns the object. Object.create(proto): creates a new object with proto as its prototype, does NOT call any constructor function, allows setting prototype directly. Object.create(null) creates an object with no prototype at all — useful for pure hash maps without inherited properties. Object.create(Animal.prototype) creates an object that inherits Animal's methods without calling Animal's constructor.",
    category: "Prototypes & OOP",
    tags: ["javascript", "prototypes", "oop"],
  },

  // ─── ARRAYS & OBJECTS ────────────────────────────────────────────────────
  {
    id: "js-31",
    question: "What is the difference between map, filter, and reduce?",
    answer:
      "map: transforms each element, returns a new array of the same length. [1,2,3].map(x => x * 2) → [2,4,6]. filter: returns a new array with only elements that pass a test. [1,2,3,4].filter(x => x % 2 === 0) → [2,4]. reduce: reduces the array to a single value by accumulating. [1,2,3,4].reduce((acc, x) => acc + x, 0) → 10. All three are pure, return new arrays (don't mutate), and take a callback. Chain them: [1,2,3,4,5].filter(x => x % 2 === 0).map(x => x * 10) → [20, 40]. reduce can implement any transformation — it is the most powerful.",
    category: "Arrays & Objects",
    tags: ["javascript", "arrays", "functional"],
  },
  {
    id: "js-32",
    question: "What is the difference between forEach and map?",
    answer:
      "forEach: iterates over an array and executes a callback for side effects — it always returns undefined and cannot be chained. Use when you don't need a new array (logging, DOM manipulation). map: iterates and transforms — returns a NEW array with the results of the callback. Use when you need a transformed array. const doubles = [1,2,3].map(x => x * 2). You cannot break out of either (use for...of with break if you need early exit). forEach does not return a value, so arr.forEach(...).filter(...) would throw an error.",
    category: "Arrays & Objects",
    tags: ["javascript", "arrays"],
  },
  {
    id: "js-33",
    question: "What is the spread operator and rest parameter?",
    answer:
      "Spread (...) expands an iterable into individual elements: [...arr1, ...arr2] (merge arrays), {...obj1, ...obj2} (merge objects), fn(...args) (spread array as function arguments). Rest (...) collects multiple elements into an array — used in function parameters: function sum(...nums) { return nums.reduce((a,b) => a+b, 0); }. Same syntax, opposite purposes: spread expands, rest collects. Spread creates shallow copies — nested objects still share references. {...user, name: 'New'} creates a new object with all user properties but with name overridden.",
    category: "Arrays & Objects",
    tags: ["javascript", "spread", "rest", "es6"],
  },
  {
    id: "js-34",
    question: "What is destructuring in JavaScript?",
    answer:
      "Destructuring extracts values from arrays or properties from objects into distinct variables. Array: const [first, second, ...rest] = [1, 2, 3, 4]. Object: const { name, age, address: { city } } = user. Default values: const { name = 'Anonymous' } = user. Rename while destructuring: const { name: userName } = user. Function parameter destructuring: function greet({ name, age }) {}. Swap variables: [a, b] = [b, a]. Used heavily in React (useState, useContext, props destructuring), Node.js module imports, and API responses.",
    category: "Arrays & Objects",
    tags: ["javascript", "destructuring", "es6"],
  },
  {
    id: "js-35",
    question: "What is the difference between shallow copy and deep copy?",
    answer:
      "Shallow copy creates a new top-level object but nested objects/arrays are still shared references. Methods: { ...obj }, Object.assign({}, obj), [...arr]. const copy = { ...user } — copy.address and user.address still point to the same object. Deep copy creates a completely independent clone with no shared references. Methods: structuredClone(obj) (modern, built-in, handles Date/Map/Set), JSON.parse(JSON.stringify(obj)) (loses functions, Date, undefined, circular refs), or lodash _.cloneDeep(). Use deep copy when you need to modify nested data without affecting the original.",
    category: "Arrays & Objects",
    tags: ["javascript", "objects", "copy"],
  },
  {
    id: "js-36",
    question: "What are the useful array methods in JavaScript?",
    answer:
      "Transformation: map (transform each), filter (keep matching), reduce (accumulate), flatMap (map + flatten). Search: find (first matching element), findIndex (index of first match), some (any match?), every (all match?), includes (contains value?), indexOf (index of value). Mutation (modify original): push/pop (end), shift/unshift (start), splice (insert/remove at index), sort, reverse. Non-mutating: slice (extract portion), concat (merge), flat (flatten nested). Iteration: forEach, entries, keys, values. Sorting: sort with comparator: arr.sort((a,b) => a-b) for ascending numbers.",
    category: "Arrays & Objects",
    tags: ["javascript", "arrays"],
  },
  {
    id: "js-37",
    question:
      "What is the difference between Object.keys, Object.values, and Object.entries?",
    answer:
      "All three iterate over an object's own enumerable properties. Object.keys(obj) returns an array of property names. Object.values(obj) returns an array of property values. Object.entries(obj) returns an array of [key, value] pairs. Example: const user = { name: 'Ashish', age: 24 }. Object.keys(user) → ['name', 'age']. Object.values(user) → ['Ashish', 24]. Object.entries(user) → [['name','Ashish'], ['age',24]]. Useful for: iterating with forEach/map, converting object to Map (new Map(Object.entries(obj))), and checking if object is empty (Object.keys(obj).length === 0).",
    category: "Arrays & Objects",
    tags: ["javascript", "objects"],
  },
  {
    id: "js-38",
    question: "What is optional chaining (?.) in JavaScript?",
    answer:
      "Optional chaining allows you to safely access nested object properties without checking for null or undefined at each level. Instead of: user && user.address && user.address.city, you write: user?.address?.city. If any part is null or undefined, the expression short-circuits and returns undefined instead of throwing a TypeError. Works with: property access (obj?.prop), bracket notation (obj?.[key]), method calls (obj?.method()), and arrays (arr?.[0]). Combine with nullish coalescing: user?.address?.city ?? 'Unknown'.",
    category: "Arrays & Objects",
    tags: ["javascript", "optional-chaining", "es2020"],
  },
  {
    id: "js-39",
    question: "What is the nullish coalescing operator (??) in JavaScript?",
    answer:
      "The nullish coalescing operator (??) returns the right-hand side value only when the left-hand side is null or undefined — not for other falsy values. const name = user.name ?? 'Anonymous' — if user.name is null or undefined, use 'Anonymous'. Difference from ||: the OR operator returns the right side for any falsy value (0, '', false, null, undefined). This matters: const count = data.count ?? 0 — if count is 0, ?? preserves it. data.count || 0 would replace 0 with 0 too, but data.count || 5 would replace 0 with 5 (wrong!). Use ?? when 0, '', or false are valid values.",
    category: "Arrays & Objects",
    tags: ["javascript", "nullish-coalescing"],
  },

  // ─── ASYNC JAVASCRIPT ────────────────────────────────────────────────────
  {
    id: "js-40",
    question: "What is the call stack in JavaScript?",
    answer:
      "The call stack is a data structure tracking function execution. When a function is called, a frame is pushed onto the stack. When it returns, the frame is popped. JavaScript has one call stack (single-threaded). If the stack grows too deep (infinite recursion), you get a 'Maximum call stack size exceeded' error. The stack must be empty before the event loop can pick up queued callbacks. This is why blocking the call stack (long synchronous loops, heavy computation) freezes the entire application — no callbacks, events, or renders can run.",
    category: "Async JavaScript",
    tags: ["javascript", "callstack", "async"],
  },
  {
    id: "js-41",
    question: "What are callbacks in JavaScript?",
    answer:
      "A callback is a function passed as an argument to another function, to be called later when an operation completes. Example: fs.readFile('file.txt', (err, data) => { ... }). Callbacks are the original async pattern in JavaScript. Callback hell (pyramid of doom): deeply nested callbacks for sequential async operations become unreadable and hard to maintain. Fixed by Promises and async/await. Callbacks are still used in event listeners (addEventListener), array methods (map, filter), and low-level Node.js APIs.",
    category: "Async JavaScript",
    tags: ["javascript", "callbacks", "async"],
  },
  {
    id: "js-42",
    question: "What are Promises in JavaScript?",
    answer:
      "A Promise represents a value that will be available in the future. It has three states: Pending (initial, neither fulfilled nor rejected), Fulfilled (completed with a value), Rejected (failed with a reason). Create: new Promise((resolve, reject) => { /* async work */ resolve(value) or reject(error) }). Consume: promise.then(value => {}).catch(err => {}).finally(() => {}). Once settled, a promise's state never changes. Promises are chainable — .then() returns a new Promise. Promise.all, Promise.allSettled, Promise.race, Promise.any handle multiple promises.",
    category: "Async JavaScript",
    tags: ["javascript", "promises", "async"],
  },
  {
    id: "js-43",
    question: "What is async/await?",
    answer:
      "async/await is syntactic sugar over Promises that makes async code look and behave like synchronous code. async makes a function return a Promise. await pauses execution inside the async function until the Promise resolves. const data = await fetchUser(id) — waits for the Promise, then assigns the resolved value. Error handling with try/catch instead of .catch(). await only works inside async functions. Under the hood, the JavaScript engine transpiles async/await to promise chains. Benefits: more readable, easier error handling, easier debugging (proper stack traces).",
    category: "Async JavaScript",
    tags: ["javascript", "async-await", "promises"],
  },
  {
    id: "js-44",
    question:
      "What is Promise.all vs Promise.allSettled vs Promise.race vs Promise.any?",
    answer:
      "Promise.all(promises): resolves when ALL resolve, returns array of results. Rejects immediately if ANY rejects. Use when all operations must succeed. Promise.allSettled(promises): waits for ALL to settle (resolve or reject), returns array of { status, value/reason }. Use when you want all results regardless of failure. Promise.race(promises): resolves or rejects as soon as the FIRST promise settles. Use for timeouts. Promise.any(promises): resolves when the FIRST succeeds, rejects only if ALL reject. Use when you want any one success (e.g. try multiple servers).",
    category: "Async JavaScript",
    tags: ["javascript", "promises"],
  },
  {
    id: "js-45",
    question: "What is the event loop in JavaScript?",
    answer:
      "The event loop continuously monitors the call stack and callback queues. When the call stack is empty, it pushes the next callback from the queue onto the stack. Two queues: microtask queue (Promises, queueMicrotask, MutationObserver) — has higher priority, drains completely before moving on. Macrotask queue (setTimeout, setInterval, setImmediate, I/O callbacks) — one task processed per event loop iteration. Order: synchronous code → microtasks (drain all) → one macrotask → microtasks again (drain all) → repeat. This is why Promise.then fires before setTimeout even with 0 delay.",
    category: "Async JavaScript",
    tags: ["javascript", "event-loop", "async"],
  },
  {
    id: "js-46",
    question: "What is debouncing in JavaScript?",
    answer:
      "Debouncing delays invoking a function until after a specified wait time has passed since the last call. If the function is called again before the wait expires, the timer resets. Use case: search input — don't fire an API call on every keystroke; wait until the user stops typing for 300ms. Implementation: function debounce(fn, delay) { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; }. The function fires once after the last call in a burst. Contrast with throttle (fires at regular intervals regardless of calls).",
    category: "Async JavaScript",
    tags: ["javascript", "debounce", "performance"],
  },
  {
    id: "js-47",
    question: "What is throttling in JavaScript?",
    answer:
      "Throttling ensures a function is called at most once per specified time interval, no matter how many times it's triggered. Use case: scroll/resize events — limit an expensive handler to fire at most once per 100ms. Implementation: function throttle(fn, limit) { let inThrottle; return (...args) => { if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => inThrottle = false, limit); } }; }. Key difference from debounce: throttle fires at regular intervals during continuous input; debounce fires once after input stops. Use throttle for scroll/resize, debounce for search inputs.",
    category: "Async JavaScript",
    tags: ["javascript", "throttle", "performance"],
  },
  {
    id: "js-48",
    question: "What is the difference between setTimeout and setInterval?",
    answer:
      "setTimeout(fn, delay) calls fn once after delay milliseconds. setInterval(fn, interval) calls fn repeatedly every interval milliseconds until cleared. clearTimeout(id) and clearInterval(id) cancel them using the ID they return. Important: the delay is a minimum, not a guarantee — if the call stack is busy, the callback waits. setInterval with 0ms doesn't fire 1000 times per second — it is limited by event loop processing time. For repeated reliable timing, prefer recursive setTimeout (schedule next call at end of callback) over setInterval, which doesn't account for execution time.",
    category: "Async JavaScript",
    tags: ["javascript", "timers", "async"],
  },

  // ─── ES6+ FEATURES ────────────────────────────────────────────────────────
  {
    id: "js-49",
    question: "What are template literals?",
    answer:
      "Template literals use backticks (``) and allow: string interpolation with ${expression}, multi-line strings without \\n, and tagged templates. Examples: const msg = `Hello, ${user.name}! You have ${count} messages.`. Multi-line: const html = `<div> <p>${text}</p> </div>`. Tagged templates: a function can process a template literal — used in libraries like styled-components (css`color: ${color}`) and SQL query builders for sanitisation. Expressions inside ${} can be any JavaScript — function calls, ternaries, arithmetic.",
    category: "ES6+ Features",
    tags: ["javascript", "es6", "template-literals"],
  },
  {
    id: "js-50",
    question: "What are Map and Set in JavaScript?",
    answer:
      "Map: a key-value collection where keys can be any type (unlike plain objects where keys are always strings/symbols). Maintains insertion order. Methods: set(key, val), get(key), has(key), delete(key), size, forEach, for...of. Better than objects for: non-string keys, frequent additions/removals, known size. Set: a collection of unique values — duplicates are automatically ignored. Methods: add(val), has(val), delete(val), size, forEach. Use case: remove duplicates from array: [...new Set(array)]. WeakMap and WeakSet hold weak references (keys/values can be garbage collected).",
    category: "ES6+ Features",
    tags: ["javascript", "map", "set", "es6"],
  },
  {
    id: "js-51",
    question: "What are Symbols in JavaScript?",
    answer:
      "Symbol is a primitive type that creates unique, immutable identifiers. const id = Symbol('description') — every Symbol is unique, even with the same description. Symbol() !== Symbol(). Useful for: creating unique object property keys that won't conflict with other keys or be accidentally overridden — const ID = Symbol('id'); obj[ID] = 123. Symbols are not enumerable in for...in loops or Object.keys(). Symbol.iterator, Symbol.toPrimitive are well-known built-in symbols that define object behaviour. Rarely needed in everyday code but important for library authors.",
    category: "ES6+ Features",
    tags: ["javascript", "symbol", "es6"],
  },
  {
    id: "js-52",
    question: "What are generators in JavaScript?",
    answer:
      "Generators are functions that can pause and resume execution, yielding values lazily. Declared with function*. yield pauses the function and returns a value. next() resumes it. function* count() { yield 1; yield 2; yield 3; } const gen = count(); gen.next() → { value: 1, done: false }. Generators are iterables — usable in for...of loops. Use cases: lazy evaluation (generate values on demand without storing all in memory), infinite sequences, custom iterators, async control flow (older pattern before async/await, used in Redux Saga). Generator functions return an iterator object.",
    category: "ES6+ Features",
    tags: ["javascript", "generators", "es6"],
  },
  {
    id: "js-53",
    question: "What is currying in JavaScript?",
    answer:
      "Currying transforms a function with multiple arguments into a sequence of functions, each taking one argument. Instead of add(a, b, c), curried: a => b => c => a + b + c. Use: const add5 = curriedAdd(5); add5(3) → 8. Benefits: partial application (pre-fill some arguments), function composition, reusable specialised functions. Example: const multiply = a => b => a * b; const double = multiply(2); const triple = multiply(3); [1,2,3].map(double) → [2,4,6]. Lodash's _.curry() auto-curries any function. Used in functional programming and React patterns.",
    category: "ES6+ Features",
    tags: ["javascript", "currying", "functional"],
  },
  {
    id: "js-54",
    question: "What is function composition?",
    answer:
      "Function composition combines multiple functions into one, where the output of each function becomes the input of the next. const compose = (...fns) => x => fns.reduceRight((v, fn) => fn(v), x). Right-to-left: compose(add1, double)(5) = add1(double(5)) = add1(10) = 11. Pipe is left-to-right: pipe(double, add1)(5) = add1(double(5)) = 11. Composition promotes building complex logic from small, testable, pure functions. Lodash/ramda provide compose and pipe utilities. Core concept in functional programming.",
    category: "ES6+ Features",
    tags: ["javascript", "composition", "functional"],
  },
  {
    id: "js-55",
    question: "What are WeakMap and WeakRef in JavaScript?",
    answer:
      "WeakMap: a Map where keys must be objects and are held weakly — if no other references to the key exist, it can be garbage collected (and the entry disappears). Cannot be iterated (no size, no forEach). Use case: storing private data associated with objects without preventing garbage collection. WeakRef (ES2021): holds a weak reference to an object — access it with ref.deref() (returns undefined if garbage collected). FinalizationRegistry allows running a callback when an object is garbage collected. These are advanced memory management tools rarely needed in typical application code.",
    category: "ES6+ Features",
    tags: ["javascript", "weakmap", "memory"],
  },

  // ─── ERROR HANDLING ───────────────────────────────────────────────────────
  {
    id: "js-56",
    question: "What is error handling in JavaScript?",
    answer:
      "try/catch/finally: wrap risky code in try, catch the error in catch, run cleanup in finally (always runs). throw can throw any value but best practice is throwing Error instances: throw new Error('message'). Error types: Error (generic), TypeError (wrong type), ReferenceError (undefined variable), SyntaxError (invalid syntax), RangeError (value out of range). Custom errors: class ValidationError extends Error { constructor(msg) { super(msg); this.name = 'ValidationError'; } }. In async code, wrap await calls in try/catch or use .catch() on promises. Unhandled rejections should be caught with process.on('unhandledRejection') in Node.js.",
    category: "Error Handling",
    tags: ["javascript", "errors"],
  },
  {
    id: "js-57",
    question:
      "What is the difference between throw and return in error handling?",
    answer:
      "return ends a function and provides a value to the caller — execution continues normally. throw ends the current execution context and propagates up the call stack until a catch block handles it. If not caught, it becomes an unhandled exception. Throwing an error from deep in nested functions is simpler than returning error objects through every layer. Use throw for: exceptional conditions, invalid states, contract violations, and errors that callers must explicitly handle. Use return for: expected, recoverable outcomes that are part of normal flow.",
    category: "Error Handling",
    tags: ["javascript", "errors"],
  },

  // ─── DESIGN PATTERNS ──────────────────────────────────────────────────────
  {
    id: "js-58",
    question: "What is the Singleton pattern in JavaScript?",
    answer:
      "Singleton ensures only one instance of an object exists. Simple implementation: let instance; class Database { constructor() { if (instance) return instance; instance = this; } }. Modern ES module approach: export a single instantiated object — since modules are cached, every import gets the same instance. const db = { connect() {}, query() {} }; export default db. Use cases: database connections, configuration, logger, app state. Singletons can make testing hard (shared state) — consider dependency injection as an alternative.",
    category: "Design Patterns",
    tags: ["javascript", "design-patterns", "singleton"],
  },
  {
    id: "js-59",
    question: "What is the Observer pattern in JavaScript?",
    answer:
      "Observer defines a one-to-many dependency — when one object changes, all dependents are notified. EventEmitter in Node.js is observer. In the browser, addEventListener. Custom implementation: class EventBus { #listeners = {}; on(event, fn) { (this.#listeners[event] ??= []).push(fn); } emit(event, data) { this.#listeners[event]?.forEach(fn => fn(data)); } off(event, fn) { this.#listeners[event] = this.#listeners[event]?.filter(f => f !== fn); } }. Used in: DOM events, Node.js EventEmitter, RxJS Observables, state management systems. React's useEffect is conceptually based on observation.",
    category: "Design Patterns",
    tags: ["javascript", "design-patterns", "observer"],
  },
  {
    id: "js-60",
    question: "What is the Module pattern in JavaScript?",
    answer:
      "The Module pattern uses closures to create private state and expose a public API. Pre-ES-modules approach: const Counter = (() => { let count = 0; return { increment: () => ++count, decrement: () => --count, value: () => count }; })(); Counter.count is undefined (private), Counter.increment() works (public). Today, ES modules (import/export) are the standard module pattern — each file is a module with its own scope. Named exports expose the public API, unexported code remains private to the module file.",
    category: "Design Patterns",
    tags: ["javascript", "design-patterns", "module"],
  },
  {
    id: "js-61",
    question: "What is memoisation in JavaScript?",
    answer:
      "Memoisation caches the results of function calls so repeated calls with the same arguments return instantly. Implementation: function memoize(fn) { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); if (cache.has(key)) return cache.get(key); const result = fn(...args); cache.set(key, result); return result; }; }. const memoFib = memoize(fibonacci). Use for: expensive pure functions called repeatedly with same inputs. Trade-off: memory for speed. React's useMemo and useCallback are memoisation. React.memo memoises component renders. Lodash provides _.memoize().",
    category: "Design Patterns",
    tags: ["javascript", "memoization", "performance"],
  },

  // ─── TYPESCRIPT BASICS ────────────────────────────────────────────────────
  {
    id: "ts-1",
    question: "What is TypeScript?",
    answer:
      "TypeScript is a strongly typed superset of JavaScript developed by Microsoft. It adds optional static type checking, interfaces, generics, enums, and other features on top of JavaScript. TypeScript code is compiled (transpiled) to JavaScript — browsers and Node.js run the compiled JS, not TypeScript directly. Benefits: catch type errors at compile time before runtime, better IDE autocomplete and IntelliSense, self-documenting code, safer refactoring, better team collaboration. TypeScript is opt-in — you can gradually add types to existing JavaScript.",
    category: "TypeScript Basics",
    tags: ["typescript", "basics"],
  },
  {
    id: "ts-2",
    question: "What are the basic types in TypeScript?",
    answer:
      "Primitive: string, number, boolean, null, undefined, symbol, bigint. Special: any (opt out of type checking — avoid), unknown (type-safe alternative to any, must check type before use), never (a value that never occurs — exhaustive checks, functions that always throw), void (function returns nothing). Arrays: number[] or Array<number>. Tuple: [string, number] (fixed length, known types at each position). Object: { name: string; age: number }. Literal types: 'left' | 'right' (only those specific values). Union: string | number. Intersection: TypeA & TypeB.",
    category: "TypeScript Basics",
    tags: ["typescript", "types"],
  },
  {
    id: "ts-3",
    question:
      "What is the difference between interface and type in TypeScript?",
    answer:
      "Both define object shapes. interface: can be extended (interface Admin extends User {}), can be implemented by classes, supports declaration merging (two interfaces with the same name merge). type: more flexible — can define unions, intersections, mapped types, conditional types, primitives. type Role = 'admin' | 'user'; type ID = string | number. Key rule of thumb: use interface for object shapes and class contracts (especially in libraries), use type for everything else — unions, intersections, utility types, complex generics. In practice, interfaces and types are mostly interchangeable for simple object shapes.",
    category: "TypeScript Basics",
    tags: ["typescript", "interface", "type"],
  },
  {
    id: "ts-4",
    question: "What are generics in TypeScript?",
    answer:
      "Generics allow you to write reusable, type-safe code that works with different types — like type parameters for functions, interfaces, and classes. function identity<T>(arg: T): T { return arg; } — T is the type variable, inferred from usage. function getFirst<T>(arr: T[]): T { return arr[0]; }. Interface generic: interface ApiResponse<T> { data: T; status: number; }. UseState in React is generic: useState<User | null>(null). Constraints: <T extends object> limits T to object types. Generics replace any while preserving type safety — key for reusable utility functions and data structures.",
    category: "TypeScript Basics",
    tags: ["typescript", "generics"],
  },
  {
    id: "ts-5",
    question: "What is the difference between any and unknown in TypeScript?",
    answer:
      "any completely opts out of type checking — you can do anything with an any value and TypeScript won't complain. It's an escape hatch but defeats the purpose of TypeScript. unknown is the type-safe alternative — you can assign any value to unknown, but you must narrow the type (check it) before doing anything with it. if (typeof value === 'string') { value.toUpperCase(); } — only works after the check. Use unknown when you genuinely don't know the type (API responses, user input) and handle it safely. Use any only when migrating JavaScript or as a last resort.",
    category: "TypeScript Basics",
    tags: ["typescript", "any", "unknown"],
  },
  {
    id: "ts-6",
    question: "What is type narrowing in TypeScript?",
    answer:
      "Type narrowing is the process of refining a broader type to a more specific type within a block of code. TypeScript understands control flow. Methods: typeof checks (typeof x === 'string'), instanceof (x instanceof Date), in operator ('name' in obj), equality checks (x === null), truthiness checks (if (x) { /* x is not null/undefined */ }), custom type guards (function isUser(x: any): x is User { return 'name' in x; }). After narrowing, TypeScript knows the specific type inside that block and provides correct autocomplete and type safety.",
    category: "TypeScript Basics",
    tags: ["typescript", "narrowing"],
  },
  {
    id: "ts-7",
    question: "What are enums in TypeScript?",
    answer:
      "Enums define a set of named constants. Numeric enum: enum Direction { Up, Down, Left, Right } — values are 0, 1, 2, 3 by default. String enum: enum Status { Active = 'ACTIVE', Inactive = 'INACTIVE' } — more readable, recommended over numeric. const enum: inlined at compile time (no runtime object created, smaller bundle). Usage: function move(dir: Direction) {} — move(Direction.Up). Pros: readable constants, type safety, autocomplete. Cons: string enums are verbose, const enums have limitations. Alternative: use as const objects for string enums without runtime overhead.",
    category: "TypeScript Basics",
    tags: ["typescript", "enums"],
  },
  {
    id: "ts-8",
    question: "What are union and intersection types in TypeScript?",
    answer:
      "Union type (|): a value can be one of several types. type Result = string | number | null — valid for any of those types. Use discriminated unions for complex branching: type Shape = { kind: 'circle'; radius: number } | { kind: 'rect'; width: number; height: number }. Intersection type (&): a value must satisfy ALL types simultaneously — it has all properties of both. type AdminUser = User & Admin — must have all User AND all Admin properties. Useful for combining types: type WithTimestamps<T> = T & { createdAt: Date; updatedAt: Date }.",
    category: "TypeScript Basics",
    tags: ["typescript", "union", "intersection"],
  },
  {
    id: "ts-9",
    question: "What are optional and readonly properties in TypeScript?",
    answer:
      "Optional (?): marks a property as not required. interface User { name: string; email?: string; } — email may be undefined. When accessing, TypeScript will warn you to handle the undefined case. Readonly: marks a property as immutable after initialisation. interface Config { readonly apiUrl: string; } — config.apiUrl = 'new' throws a compile error. Readonly<T> is a utility type that makes all properties of T readonly. ReadonlyArray<T> makes an array immutable. Use readonly for values that should never change after creation: config, constants, IDs.",
    category: "TypeScript Basics",
    tags: ["typescript", "optional", "readonly"],
  },

  // ─── TYPESCRIPT ADVANCED ──────────────────────────────────────────────────
  {
    id: "ts-10",
    question: "What are utility types in TypeScript?",
    answer:
      "Utility types transform existing types. Most used: Partial<T> — makes all properties optional (great for update payloads). Required<T> — makes all properties required. Readonly<T> — makes all properties readonly. Pick<T, K> — picks a subset of properties: Pick<User, 'name' | 'email'>. Omit<T, K> — removes specified properties: Omit<User, 'password'>. Record<K, V> — creates an object type with keys K and values V: Record<string, number>. Exclude<T, U> — removes types from union. Extract<T, U> — keeps only matching types. ReturnType<T> — extracts the return type of a function. Parameters<T> — extracts parameter types as a tuple.",
    category: "TypeScript Advanced",
    tags: ["typescript", "utility-types"],
  },
  {
    id: "ts-11",
    question: "What are mapped types in TypeScript?",
    answer:
      "Mapped types create new types by iterating over properties of an existing type. Syntax: type Optional<T> = { [K in keyof T]?: T[K] } — same as Partial<T>. type Nullable<T> = { [K in keyof T]: T[K] | null }. type Stringify<T> = { [K in keyof T]: string }. The in keyof T iterates over property keys, T[K] gets the type of each property. You can add modifiers (? for optional, readonly) or remove them (-? removes optional, -readonly makes mutable). Mapped types are how TypeScript's built-in utility types (Partial, Required, Readonly) are implemented.",
    category: "TypeScript Advanced",
    tags: ["typescript", "mapped-types"],
  },
  {
    id: "ts-12",
    question: "What are conditional types in TypeScript?",
    answer:
      "Conditional types choose between types based on a condition: T extends U ? X : Y — if T is assignable to U, the type is X; otherwise Y. Example: type IsString<T> = T extends string ? 'yes' : 'no'. type Flatten<T> = T extends Array<infer U> ? U : T — if T is an array, return element type, otherwise T. The infer keyword extracts types within the condition. Used in: NonNullable<T> = T extends null | undefined ? never : T, ReturnType<T> = T extends (...args: any) => infer R ? R : never. Conditional types enable very powerful type-level programming.",
    category: "TypeScript Advanced",
    tags: ["typescript", "conditional-types"],
  },
  {
    id: "ts-13",
    question: "What is the infer keyword in TypeScript?",
    answer:
      "infer is used inside conditional types to capture and extract a type from another type. It declares a type variable within the extends clause. type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never — if T is a function, R is inferred as its return type. type FirstArg<T> = T extends (first: infer F, ...rest: any[]) => any ? F : never. type UnwrapPromise<T> = T extends Promise<infer U> ? U : T. infer is only valid inside the extends condition of a conditional type. It is the basis for powerful utility types like ReturnType, Parameters, InstanceType, and Awaited.",
    category: "TypeScript Advanced",
    tags: ["typescript", "infer", "conditional-types"],
  },
  {
    id: "ts-14",
    question: "What is declaration merging in TypeScript?",
    answer:
      "Declaration merging means TypeScript merges multiple declarations with the same name. Interface merging: two interface declarations with the same name are merged into one — both sets of properties are combined. Useful for augmenting third-party library types: declare module 'express' { interface Request { user?: User; } }. Module augmentation allows adding properties to existing modules. Namespace merging with functions/classes allows adding static members. Only interfaces support declaration merging — type aliases do not. This is why libraries often use interfaces for their public APIs.",
    category: "TypeScript Advanced",
    tags: ["typescript", "declaration-merging"],
  },
  {
    id: "ts-15",
    question: "What is the difference between type assertion and type casting?",
    answer:
      "TypeScript doesn't have runtime type casting (like C# or Java). Type assertion (as keyword) tells the TypeScript compiler 'trust me, I know the type'. const canvas = document.getElementById('canvas') as HTMLCanvasElement. This is compile-time only — no runtime effect, no actual conversion. You can also use angle bracket syntax: <HTMLCanvasElement>element (not in JSX). Assertions can be wrong — if you assert incorrectly, you get runtime errors. Use type guards for safe narrowing instead. Double assertion (value as unknown as TargetType) bypasses strict checks — a code smell requiring justification.",
    category: "TypeScript Advanced",
    tags: ["typescript", "type-assertion"],
  },
  {
    id: "ts-16",
    question: "What is a type guard in TypeScript?",
    answer:
      "A type guard is a runtime check that narrows a type within a conditional block. Built-in: typeof, instanceof, in operator. Custom type guard — a function with a return type predicate: function isUser(obj: any): obj is User { return typeof obj.name === 'string' && typeof obj.email === 'string'; }. The return type 'obj is User' tells TypeScript that inside an if (isUser(x)) block, x is of type User. Type guards give you runtime safety while also helping TypeScript understand the type in that scope. Used extensively in discriminated unions.",
    category: "TypeScript Advanced",
    tags: ["typescript", "type-guards"],
  },
  {
    id: "ts-17",
    question: "What is the satisfies operator in TypeScript?",
    answer:
      "The satisfies operator (TypeScript 4.9+) validates that a value conforms to a type without widening the type. const palette = { red: [255, 0, 0], green: '#00ff00' } satisfies Record<string, string | number[]>. Unlike a type annotation (const palette: Record<string, ...>), satisfies preserves the literal type — TypeScript still knows palette.red is number[] (not string | number[]) and palette.green is string. Use satisfies when you want type checking but also want TypeScript to infer the narrowest possible type for downstream use.",
    category: "TypeScript Advanced",
    tags: ["typescript", "satisfies"],
  },
  {
    id: "ts-18",
    question: "What are decorators in TypeScript?",
    answer:
      "Decorators are a stage-3 JavaScript proposal supported in TypeScript. They are functions that modify classes, methods, properties, or parameters using @ syntax. @sealed class MyClass {} — the sealed decorator runs at class definition time and can modify the class. Used heavily in Angular and NestJS. Class decorator: receives the constructor. Method decorator: receives target, property key, descriptor. Property decorator: receives target, property key. Enable with 'experimentalDecorators: true' in tsconfig. Decorators can add logging, validation, dependency injection, and metadata to classes without modifying their source.",
    category: "TypeScript Advanced",
    tags: ["typescript", "decorators"],
  },
  {
    id: "ts-19",
    question: "What is tsconfig.json?",
    answer:
      "tsconfig.json configures the TypeScript compiler. Key options: target (output JS version — 'ES2020', 'ESNext'), module (module system — 'commonjs', 'ESNext'), strict (enables all strict checks — always set to true), outDir (where compiled JS goes), rootDir (source directory), include/exclude (which files to compile), lib (built-in type definitions to include — 'DOM', 'ES2020'), paths (module path aliases), baseUrl, sourceMap (generates .map files for debugging). The strict flag enables: strictNullChecks (null/undefined are not assignable to other types), noImplicitAny, strictFunctionTypes, and more. Always enable strict: true.",
    category: "TypeScript Advanced",
    tags: ["typescript", "tsconfig", "configuration"],
  },
  {
    id: "ts-20",
    question: "What is strict mode in TypeScript?",
    answer:
      "Enabling strict: true in tsconfig.json turns on a set of type-checking flags: strictNullChecks — null and undefined are not assignable to other types (catches null pointer errors), noImplicitAny — error when TypeScript can't infer a type (must annotate explicitly), strictFunctionTypes — stricter checking on function parameter types, strictBindCallApply — type-checks call/apply/bind, strictPropertyInitialization — class properties must be initialised in constructor, noImplicitThis — error when this has implicit any type. Always enable strict: true from the start of a project — adding it later to an existing project requires fixing many errors.",
    category: "TypeScript Advanced",
    tags: ["typescript", "strict"],
  },
  {
    id: "ts-21",
    question:
      "What is the difference between interface extending and type intersection?",
    answer:
      "Both combine types but with subtle differences. Interface extending: interface AdminUser extends User, Admin {} — creates a new named interface, checks for conflicting property types (error if same property has incompatible types). Type intersection: type AdminUser = User & Admin — if both have a property with incompatible types, the result is never (making it impossible to use). Extending is checked and reported clearly. Intersection fails silently at the type level. For combining object types, extending is often clearer and provides better error messages.",
    category: "TypeScript Advanced",
    tags: ["typescript", "interface", "intersection"],
  },
  {
    id: "ts-22",
    question: "How do you type async functions in TypeScript?",
    answer:
      "Async functions always return a Promise. Type the return as Promise<T>: async function fetchUser(id: string): Promise<User> { const res = await api.get(`/users/${id}`); return res.data; }. For functions that return void: async function logData(): Promise<void>. For arrow functions: const fetchUser = async (id: string): Promise<User> => { ... }. TypeScript infers the return type automatically from what you return, but explicit typing is clearer and catches mismatches. Error handling: wrap in try/catch — the catch block receives error as unknown in strict TypeScript (must assert: error as Error).",
    category: "TypeScript Advanced",
    tags: ["typescript", "async", "promises"],
  },
  {
    id: "ts-23",
    question: "What are template literal types in TypeScript?",
    answer:
      "Template literal types use backtick syntax to create string types by combining other types. type EventName = `on${string}` — matches 'onClick', 'onHover', etc. type PropEventSource<T> = { on<K extends string & keyof T>(event: `${K}Changed`, fn: (v: T[K]) => void): void }. Combine with unions: type Direction = 'top' | 'bottom'; type Margin = `margin-${Direction}` = 'margin-top' | 'margin-bottom'. Uppercase<T>, Lowercase<T>, Capitalize<T>, Uncapitalize<T> are built-in template literal utilities. Template literal types enable strongly-typed string manipulation at the type level.",
    category: "TypeScript Advanced",
    tags: ["typescript", "template-literal-types"],
  },
];

export default javascriptQuestions;
