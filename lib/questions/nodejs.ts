import { Question } from "../questions";

const nodeBackendQuestions: Question[] = [
  {
    id: "nodejs-1",
    question: "What is Node.js?",
    answer:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript to write server-side code, enabling full-stack development with a single language.",
    category: "Fundamentals",
    tags: ["nodejs", "basics"],
  },
  {
    id: "nodejs-2",
    question: "Difference between Node.js and JavaScript?",
    answer:
      "JavaScript is a programming language, while Node.js is a runtime environment that executes JavaScript outside the browser. JavaScript runs in browsers, Node.js runs on servers.",
    category: "Fundamentals",
    tags: ["nodejs", "javascript"],
  },
  {
    id: "nodejs-3",
    question: "Is Node.js single-threaded?",
    answer:
      "Node.js is single-threaded for JavaScript execution, but it uses multiple threads internally through libuv for I/O operations. This allows it to handle many concurrent connections efficiently.",
    category: "Fundamentals",
    tags: ["nodejs", "threading"],
  },
  {
    id: "nodejs-4",
    question: "What is non-blocking I/O?",
    answer:
      "Non-blocking I/O means operations don't wait for completion. Instead of blocking execution, Node.js continues to next code and handles the result when ready via callbacks, promises, or async/await.",
    category: "Fundamentals",
    tags: ["nodejs", "io"],
  },
  {
    id: "nodejs-5",
    question: "What is the V8 engine?",
    answer:
      "V8 is Google's open-source JavaScript engine that compiles JavaScript to native machine code. It powers Chrome and Node.js, providing high-performance JavaScript execution.",
    category: "Fundamentals",
    tags: ["nodejs", "v8"],
  },
  {
    id: "nodejs-6",
    question: "What is libuv and what does it do?",
    answer:
      "libuv is a C library that handles asynchronous I/O, event loop implementation, and platform abstractions. It enables Node.js to perform non-blocking I/O operations across different operating systems.",
    category: "Fundamentals",
    tags: ["nodejs", "libuv"],
  },
  {
    id: "nodejs-7",
    question: "Advantages of Node.js?",
    answer:
      "Single-threaded, event-driven, non-blocking I/O, fast performance, npm ecosystem, JavaScript everywhere, scalable, lightweight, and great for real-time applications.",
    category: "Fundamentals",
    tags: ["nodejs", "advantages"],
  },
  {
    id: "nodejs-8",
    question: "Disadvantages of Node.js?",
    answer:
      "Not ideal for heavy computational tasks, larger memory footprint than some alternatives, callback hell/pyramid of doom, unstable package ecosystem, and less suitable for traditional CPU-intensive operations.",
    category: "Fundamentals",
    tags: ["nodejs", "disadvantages"],
  },
  {
    id: "nodejs-9",
    question: "When should you NOT use Node.js?",
    answer:
      "For CPU-heavy calculations, graphics processing, machine learning tasks, or applications requiring blocking operations. Node.js shines with I/O-bound tasks, not compute-bound ones.",
    category: "Fundamentals",
    tags: ["nodejs", "use-cases"],
  },
  {
    id: "nodejs-10",
    question: "What is the REPL in Node.js?",
    answer:
      "REPL stands for Read-Eval-Print Loop. It's an interactive JavaScript shell that allows you to execute JavaScript code directly in the terminal and see immediate results.",
    category: "Fundamentals",
    tags: ["nodejs", "repl"],
  },
  {
    id: "nodejs-11",
    question: "What is the process object in Node.js?",
    answer:
      "The process object is a global object containing information and control over the Node.js process. It provides access to environment variables, arguments, exit codes, and allows listening to process events.",
    category: "Fundamentals",
    tags: ["nodejs", "process"],
  },
  {
    id: "nodejs-12",
    question: "What is process.env?",
    answer:
      "process.env is an object containing environment variables passed to Node.js. It's commonly used to store sensitive information like API keys, database credentials, and configuration values.",
    category: "Fundamentals",
    tags: ["nodejs", "env"],
  },
  {
    id: "nodejs-13",
    question: "Difference between process.exit(0) and process.exit(1)?",
    answer:
      "process.exit(0) indicates successful termination with exit code 0, while process.exit(1) indicates failure with exit code 1. Exit codes signal to the operating system whether the process succeeded or failed.",
    category: "Fundamentals",
    tags: ["nodejs", "exit"],
  },
  {
    id: "nodejs-14",
    question: "What is the event loop in Node.js?",
    answer:
      "The event loop is the core of Node.js. It checks for events/callbacks and executes them in phases: timers, pending callbacks, idle/prepare, poll, check, and close callbacks. It enables async programming.",
    category: "Event Loop & Async",
    tags: ["nodejs", "eventloop"],
  },
  {
    id: "nodejs-15",
    question: "What are the 6 phases of the event loop?",
    answer:
      "1. Timers (setTimeout/setInterval), 2. Pending callbacks (I/O errors), 3. Idle/Prepare, 4. Poll (I/O callbacks), 5. Check (setImmediate), 6. Close callbacks. They execute in order each iteration.",
    category: "Event Loop & Async",
    tags: ["nodejs", "eventloop"],
  },
  {
    id: "nodejs-16",
    question:
      "process.nextTick vs setImmediate vs setTimeout(fn,0) — order of execution?",
    answer:
      "process.nextTick executes first (microtask queue), then setImmediate (check phase), then setTimeout(fn,0) (timers phase). Order: nextTick > Promise > setImmediate > setTimeout.",
    category: "Event Loop & Async",
    tags: ["nodejs", "async"],
  },
  {
    id: "nodejs-17",
    question: "What are microtasks vs macrotasks?",
    answer:
      "Microtasks (nextTick, Promises, queueMicrotask) execute before macrotasks (timers, I/O, setImmediate). The event loop prioritizes all microtasks before moving to the next macrotask.",
    category: "Event Loop & Async",
    tags: ["nodejs", "async"],
  },
  {
    id: "nodejs-18",
    question: "What is the call stack?",
    answer:
      "The call stack is a data structure that tracks function execution. When a function is called, it's pushed onto the stack; when it returns, it's popped off. JavaScript is single-threaded with one call stack.",
    category: "Event Loop & Async",
    tags: ["nodejs", "callstack"],
  },
  {
    id: "nodejs-19",
    question: "What is synchronous vs asynchronous?",
    answer:
      "Synchronous code blocks execution waiting for a task to complete. Asynchronous code doesn't block; it delegates the task and continues. Node.js is asynchronous by default using callbacks, promises, and async/await.",
    category: "Event Loop & Async",
    tags: ["nodejs", "async"],
  },
  {
    id: "nodejs-20",
    question: "What is callback hell? How do you fix it?",
    answer:
      "Callback hell is deeply nested callbacks making code unreadable. Fix it with: 1) Named functions, 2) Promises, 3) async/await, 4) Libraries like async.js. async/await is the modern best practice.",
    category: "Event Loop & Async",
    tags: ["nodejs", "callbacks"],
  },
  {
    id: "nodejs-21",
    question: "What is control flow in Node.js?",
    answer:
      "Control flow manages the order of async operations. Libraries like async.js provide helpers (series, parallel, waterfall) or use Promises/async-await. Without it, dependencies between async tasks are hard to manage.",
    category: "Event Loop & Async",
    tags: ["nodejs", "control-flow"],
  },
  {
    id: "nodejs-22",
    question:
      "How does Node.js handle concurrency despite being single-threaded?",
    answer:
      "Node.js uses the event loop and non-blocking I/O. When an I/O operation is initiated, control returns immediately. The OS handles the operation, and a callback is executed when done. libuv manages this.",
    category: "Event Loop & Async",
    tags: ["nodejs", "concurrency"],
  },
  {
    id: "nodejs-23",
    question: "What is event-driven programming?",
    answer:
      "Event-driven programming means code responds to events (user actions, I/O completion, timers). Functions are executed when events occur. Node.js is event-driven, using EventEmitter to emit and listen to events.",
    category: "Event Loop & Async",
    tags: ["nodejs", "events"],
  },
  {
    id: "nodejs-24",
    question: "What can block the event loop and how do you prevent it?",
    answer:
      "Heavy synchronous computations, large JSON parsing, regex operations, or database queries block the loop. Prevent by: 1) Using async I/O, 2) Worker Threads for CPU tasks, 3) Offloading to background jobs.",
    category: "Event Loop & Async",
    tags: ["nodejs", "eventloop"],
  },
  {
    id: "nodejs-25",
    question: "What are Promises in Node.js?",
    answer:
      "Promises represent eventual completion of async operations. They have 3 states: Pending, Fulfilled (resolved), or Rejected. Promises replace callback hell with .then().catch() or async/await syntax.",
    category: "Promises & Async/Await",
    tags: ["nodejs", "promises"],
  },
  {
    id: "nodejs-26",
    question: "What are the 3 states of a Promise?",
    answer:
      "1. Pending: Initial state, operation hasn't completed. 2. Fulfilled: Operation completed successfully with a value. 3. Rejected: Operation failed with a reason. State never changes once settled.",
    category: "Promises & Async/Await",
    tags: ["nodejs", "promises"],
  },
  {
    id: "nodejs-27",
    question: "Difference between Promise and async/await?",
    answer:
      "Both handle async code. Promises use .then().catch(). async/await is syntactic sugar over Promises, using try/catch, making code look synchronous and more readable. async/await is generally preferred.",
    category: "Promises & Async/Await",
    tags: ["nodejs", "async"],
  },
  {
    id: "nodejs-28",
    question: "Which do you prefer — Promise or async/await? Why?",
    answer:
      "async/await is preferred for readability and simpler error handling with try/catch. It makes async code look synchronous. However, understand Promises deeply as async/await is built on them.",
    category: "Promises & Async/Await",
    tags: ["nodejs", "async"],
  },
  {
    id: "nodejs-29",
    question: "What is Promise.all?",
    answer:
      "Promise.all takes an array of Promises and returns a single Promise. It resolves when all Promises resolve (with array of results) or rejects if any Promise rejects. Used for parallel operations.",
    category: "Promises & Async/Await",
    tags: ["nodejs", "promises"],
  },
  {
    id: "nodejs-30",
    question: "Difference between Promise.all and Promise.allSettled?",
    answer:
      "Promise.all rejects if any Promise fails. Promise.allSettled waits for all Promises and returns results regardless (fulfilled or rejected). Use allSettled when all operations must complete.",
    category: "Promises & Async/Await",
    tags: ["nodejs", "promises"],
  },
  {
    id: "nodejs-31",
    question: "What is Promise.race?",
    answer:
      "Promise.race returns the result of the first Promise to settle (resolve or reject). Used for timeouts, competition between operations, or racing multiple async tasks.",
    category: "Promises & Async/Await",
    tags: ["nodejs", "promises"],
  },
  {
    id: "nodejs-32",
    question: "What is Promise chaining?",
    answer:
      "Promise chaining uses .then() to link async operations sequentially. Each .then() returns a Promise, allowing the next operation to wait for the previous. Modern code prefers async/await.",
    category: "Promises & Async/Await",
    tags: ["nodejs", "promises"],
  },
  {
    id: "nodejs-33",
    question: "How do you handle errors in async/await?",
    answer:
      "Use try/catch blocks. Wrap async code in try, catch errors in catch block. Or use .catch() on the Promise. Always handle errors to prevent unhandled Promise rejections.",
    category: "Promises & Async/Await",
    tags: ["nodejs", "async"],
  },
  {
    id: "nodejs-34",
    question: "What is a module in Node.js?",
    answer:
      "A module is a reusable block of code. Node.js uses CommonJS (require/module.exports) and ESM (import/export). Each file is a module with its own scope.",
    category: "Modules & NPM",
    tags: ["nodejs", "modules"],
  },
  {
    id: "nodejs-35",
    question: "Difference between require() (CommonJS) and import (ESM)?",
    answer:
      "require() is synchronous and part of CommonJS. import is asynchronous and ES Modules standard. ESM is the modern standard but CommonJS is still widely used. Node.js supports both with .mjs or package.json.",
    category: "Modules & NPM",
    tags: ["nodejs", "modules"],
  },
  {
    id: "nodejs-36",
    question: "What is npm? What are its advantages?",
    answer:
      "npm (Node Package Manager) is the package manager for Node.js. Advantages: huge package registry, dependency management, version control, easy installation, and script automation via package.json.",
    category: "Modules & NPM",
    tags: ["nodejs", "npm"],
  },
  {
    id: "nodejs-37",
    question: "What is package.json?",
    answer:
      "package.json is a metadata file for Node.js projects. It contains project name, version, description, dependencies, devDependencies, scripts, and other config. It's essential for npm projects.",
    category: "Modules & NPM",
    tags: ["nodejs", "npm"],
  },
  {
    id: "nodejs-38",
    question: "What is package-lock.json and why commit it?",
    answer:
      "package-lock.json locks exact versions of dependencies and sub-dependencies. Commit it to ensure all developers and CI/CD use identical versions, preventing 'works on my machine' issues.",
    category: "Modules & NPM",
    tags: ["nodejs", "npm"],
  },
  {
    id: "nodejs-39",
    question: "Difference between dependencies and devDependencies?",
    answer:
      "dependencies are required to run the app (express, mongoose). devDependencies are only for development (jest, eslint, nodemon). npm install --production installs only dependencies.",
    category: "Modules & NPM",
    tags: ["nodejs", "npm"],
  },
  {
    id: "nodejs-40",
    question: "What is npx?",
    answer:
      "npx is a tool to execute packages from npm registry without installing. Useful for one-time commands or running local binaries. Example: npx create-react-app myapp.",
    category: "Modules & NPM",
    tags: ["nodejs", "npm"],
  },
  {
    id: "nodejs-41",
    question: "What is semantic versioning (^, ~, *)?",
    answer:
      "Semantic versioning: major.minor.patch. ^ allows patch/minor updates, ~ allows only patch. * allows any version. Example: ^1.2.3 allows up to <2.0.0, ~1.2.3 allows up to <1.3.0.",
    category: "Modules & NPM",
    tags: ["nodejs", "npm"],
  },
  {
    id: "nodejs-42",
    question: "Name 5 inbuilt Node.js modules.",
    answer:
      "fs (file system), path (file paths), http (HTTP server), events (EventEmitter), util (utilities), stream (streaming), crypto (cryptography), os (OS info), buffer (buffers), child_process.",
    category: "Modules & NPM",
    tags: ["nodejs", "modules"],
  },
  {
    id: "nodejs-43",
    question: "What is module caching in Node.js?",
    answer:
      "Node.js caches loaded modules. Subsequent require() calls return cached module. This improves performance but means modifications to module state persist across calls. Clear with delete require.cache.",
    category: "Modules & NPM",
    tags: ["nodejs", "modules"],
  },
  {
    id: "nodejs-44",
    question: "Can you create an API without Express?",
    answer:
      "Yes, use Node.js built-in http module: require('http').createServer(). Manually handle routing, middleware, parsing. But Express abstracts these complexities, making development faster.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "express"],
  },
  {
    id: "nodejs-45",
    question: "Why use Express.js?",
    answer:
      "Express provides routing, middleware system, template engines, error handling. It simplifies API development, reduces boilerplate, and is the most popular Node.js framework with a large ecosystem.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "express"],
  },
  {
    id: "nodejs-46",
    question: "Which Node.js framework do you prefer and why?",
    answer:
      "Express is most popular for APIs. Fastify is faster. Koa is lighter and uses async/await. NestJS is for large applications. Choice depends on project needs, team experience, and scalability requirements.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "frameworks"],
  },
  {
    id: "nodejs-47",
    question: "What is middleware in Express?",
    answer:
      "Middleware are functions with access to request, response, and next. They execute sequentially. Can modify request/response, end request, or call next() to pass control. Powerful for logging, auth, etc.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "middleware"],
  },
  {
    id: "nodejs-48",
    question: "What are the 5 types of middleware?",
    answer:
      "The five types of middleware in Express are application-level, router-level, built-in, third-party, and error-handling middleware. Application-level middleware runs for the whole app or specific routes, router-level middleware is scoped to routers, built-in middleware is provided by Express like JSON parsing, third-party middleware comes from external packages like CORS or logging tools, and error-handling middleware is used to catch and handle errors centrally.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "middleware"],
  },
  {
    id: "nodejs-49",
    question: "What is the difference between app.use() and app.get()?",
    answer:
      "app.use() runs for all methods (GET, POST, etc). app.get() runs only for GET requests. app.use() is for middleware, app.get() for route handlers. app.use() patterns match prefixes.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "express"],
  },
  {
    id: "nodejs-50",
    question: "How does next() work in middleware?",
    answer:
      "next() passes control to the next middleware/route handler in the stack. Without calling next(), request stops. Used to chain middleware or route handlers. Essential for middleware flow.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "middleware"],
  },
  {
    id: "nodejs-51",
    question: "What is error-handling middleware? Why does it need 4 params?",
    answer:
      "Error-handling middleware catches errors thrown by other middleware/routes. It needs 4 params (err, req, res, next) so Express recognizes it as error handler. The err param carries the error object.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "express", "error-handling"],
  },
  {
    id: "nodejs-52",
    question: "What is body-parser? Is it needed separately in modern Express?",
    answer:
      "body-parser is middleware that parses the body of incoming HTTP requests and makes the parsed data available on: req.body. Because the request body arrives as a stream of data and Express doesn't automatically convert it into a JavaScript object unless parsing middleware is used. app.use(express.json())  app.use(express.urlencoded({ extended: true })) ",
    category: "Express.js & Middleware",
    tags: ["nodejs", "express", "middleware"],
  },
  {
    id: "nodejs-53",
    question: "What is the CORS module and why is it needed?",
    answer:
      "CORS (Cross-Origin Resource Sharing) module enables requests from different origins. Browsers block cross-origin requests by default. CORS middleware allows your API to accept requests from frontend on different domains.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "express", "security"],
  },
  {
    id: "nodejs-54",
    question: "What is helmet.js?",
    answer:
      "Helmet.js is an Express middleware that improves application security by automatically setting various HTTP security headers. It helps protect against common web vulnerabilities such as clickjacking, MIME sniffing, and some cross-site scripting risks. It is commonly added to Express applications using app.use(helmet()) as part of a broader security strategy.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "express", "security"],
  },
  {
    id: "nodejs-55",
    question: "What is morgan?",
    answer:
      "morgan is HTTP request logger middleware for Express. It logs details about incoming requests (method, URL, status, response time) to console or files, useful for debugging and monitoring.Morgan is an HTTP request logging middleware for Express. It logs details about incoming requests such as the HTTP method, URL, status code, response time, and response size. It is commonly used for debugging, monitoring, and maintaining request logs in Node.js applications.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "express", "logging"],
  },
  {
    id: "nodejs-56",
    question: "What is express.Router()?",
    answer:
      "express.Router() creates a modular router instance. It allows you to organize routes into separate files/modules, then mount them as middleware. Useful for scalable applications with many routes.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "express"],
  },
  {
    id: "nodejs-57",
    question: "What is EJS (template engine)?",
    answer:
      "EJS (Embedded JavaScript) is a template engine for Node.js and Express that allows developers to generate dynamic HTML by embedding JavaScript inside HTML templates. It is commonly used with res.render() to pass data from the server to views and generate server-side rendered pages.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "express", "templates"],
  },
  {
    id: "nodejs-58",
    question:
      "Difference between query params, route params, and request body?",
    answer:
      "Route parameters (req.params) are values embedded in the URL path and are used to identify a specific resource, such as /users/123. Query parameters (req.query) appear after the ? in the URL and are typically used for filtering, sorting, searching, or pagination. Request body (req.body) contains data sent by the client, usually in POST, PUT, or PATCH requests, and is used to create or update resources.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "express", "requests"],
  },
  {
    id: "nodejs-59",
    question: "What is express.json() vs express.urlencoded()?",
    answer:
      "express.json() is middleware that parses JSON request bodies with the application/json content type, while express.urlencoded() parses URL-encoded form data with the application/x-www-form-urlencoded content type. Both make the parsed data available in req.body. Modern APIs mostly use express.json(), while express.urlencoded() is commonly used for HTML form submissions.",
    category: "Express.js & Middleware",
    tags: ["nodejs", "express"],
  },
  {
    id: "nodejs-60",
    question: "How do you implement authentication in Node.js?",
    answer:
      "In Node.js, I typically implement authentication using JWT. During login, I verify the user's credentials, compare the password using bcrypt, and generate a signed JWT containing user information. The client stores the token and sends it in the Authorization header for future requests. Middleware verifies the token before allowing access to protected routes. For traditional server-rendered applications, session-based authentication using cookies and express-session is another common approach.",
    category: "Authentication & Security",
    tags: ["nodejs", "auth", "security"],
  },
  {
    id: "nodejs-61",
    question: "What is JWT? How does it work end to end?",
    answer:
      "JWT (JSON Web Token) is a compact, signed token used for authentication and authorization. After a user successfully logs in, the server generates a JWT containing user claims and signs it with a secret key. The client stores the token and sends it with future requests, usually in the Authorization header. The server verifies the token's signature and expiry before granting access to protected resources. Because the token itself contains the required user information, JWT-based authentication is stateless and scales well for APIs.",
    category: "Authentication & Security",
    tags: ["nodejs", "jwt", "auth"],
  },
  {
    id: "nodejs-62",
    question:
      "Where should you store JWT on the client? (localStorage vs httpOnly cookie)",
    answer:
      "httpOnly cookies are generally more secure because JavaScript cannot access them, reducing XSS risk. localStorage is simpler but vulnerable to token theft if XSS occurs. For production applications, I prefer httpOnly Secure cookies, often combined with short-lived access tokens and refresh tokens.",
    category: "Authentication & Security",
    tags: ["nodejs", "jwt", "security"],
  },
  {
    id: "nodejs-63",
    question: "What is bcrypt? Why is it used for passwords?",
    answer:
      "bcrypt is a password hashing algorithm used to securely store passwords. Instead of saving plain-text passwords, applications store bcrypt hashes. During login, bcrypt compares the entered password with the stored hash. It automatically generates salts and is intentionally slow, making brute-force and rainbow-table attacks much more difficult.",
    category: "Authentication & Security",
    tags: ["nodejs", "bcrypt", "passwords"],
  },
  {
    id: "nodejs-64",
    question: "How does password hashing with bcrypt work (salt rounds)?",
    answer:
      "bcrypt hashes passwords using a random salt and a configurable cost factor called salt rounds. The salt ensures that identical passwords generate different hashes, while the cost factor controls how much computational work bcrypt performs. The work increases exponentially, making brute-force attacks significantly slower. During login, bcrypt extracts the salt and cost factor from the stored hash, rehashes the entered password, and compares the results.",
    category: "Authentication & Security",
    tags: ["nodejs", "bcrypt", "passwords"],
  },
  {
    id: "nodejs-65",
    question: "Have you implemented Google OAuth authentication?",
    answer:
      "Yes. In one of my recent projects, I implemented Google OAuth using Supabase Authentication. When the user clicks Sign in with Google, they're redirected to Google's OAuth consent screen. After successful authentication, Supabase handles the OAuth callback, exchanges the authorization code for tokens, and creates a session. I then used the authenticated user information to secure application features and associate user-specific data with the logged-in account.",
    category: "Authentication & Security",
    tags: ["nodejs", "oauth", "auth"],
  },
  {
    id: "nodejs-66",
    question: "What is session-based authentication vs token-based?",
    answer:
      "In session-based authentication, the server stores user state and the client sends a session ID cookie. In token-based authentication, the client stores a token such as a JWT and sends it with each request. Sessions are stateful, while JWT authentication is stateless and generally scales better for APIs.",
    category: "Authentication & Security",
    tags: ["nodejs", "auth"],
  },
  {
    id: "nodejs-67",
    question: "How do you manage sessions in Node.js?",
    answer:
      "In Node.js, sessions are commonly managed using express-session. After a user logs in, the server creates a session and stores user-related data on the server. A session ID is sent to the client in a cookie, and subsequent requests use that session ID to retrieve the user's session data. In production, sessions are typically stored in Redis instead of memory to support scalability and persistence.",
    category: "Authentication & Security",
    tags: ["nodejs", "sessions"],
  },
  {
    id: "nodejs-68",
    question: "What is rate limiting and how do you implement it?",
    answer:
      "Rate limiting is a mechanism that restricts the number of requests a client can make within a specified time window. It is used to prevent brute-force attacks, API abuse, and excessive server load. In Express, I typically implement it using express-rate-limit, where I configure a maximum number of requests and a time window. If the limit is exceeded, the server returns a 429 Too Many Requests response. In production, Redis is often used to maintain counters across multiple server instances.",
    category: "Authentication & Security",
    tags: ["nodejs", "security"],
  },
  {
    id: "nodejs-69",
    question: "What is XSS and how do you prevent it in Node?",
    answer:
      "XSS occurs when untrusted JavaScript is injected into a page and executed by users' browsers. I prevent it by escaping output, sanitizing user input, using Helmet with CSP, avoiding unsafe HTML rendering, and securing authentication tokens.",
    category: "Authentication & Security",
    tags: ["nodejs", "security", "xss"],
  },
  {
    id: "nodejs-70",
    question: "What is CSRF and how do you prevent it?",
    answer:
      "CSRF occurs when a malicious site causes a user's browser to perform actions on another site where they're already authenticated. I prevent it using SameSite cookies, CSRF tokens, Origin validation, and secure cookie settings. If authentication uses cookies, CSRF protection is essential.",
    category: "Authentication & Security",
    tags: ["nodejs", "security", "csrf"],
  },
  {
    id: "nodejs-71",
    question: "Can Node.js use both relational and non-relational databases?",
    answer:
      "Yes, Node.js is database-agnostic and can interact with both SQL databases like PostgreSQL/MySQL and NoSQL databases like MongoDB using appropriate drivers, ORMs, or ODMs.",
    category: "Databases & ORM",
    tags: ["nodejs", "database"],
  },
  {
    id: "nodejs-72",
    question: "How do you connect MongoDB to a Node.js app?",
    answer:
      "I usually connect MongoDB using Mongoose. I install the package, connect with mongoose.connect(), define schemas and models, and then perform CRUD operations through those models. Database credentials are stored in environment variables rather than hardcoded in the application.",
    category: "Databases & ORM",
    tags: ["nodejs", "mongodb"],
  },
  {
    id: "nodejs-73",
    question:
      "What is Mongoose? Why use it instead of the native MongoDB driver?",
    answer:
      "Mongoose is an ODM (Object Document Mapper) for MongoDB in Node.js. It provides schemas, validation, models, middleware, and relationship handling on top of the native MongoDB driver. While the native driver offers direct access to MongoDB and slightly better performance, Mongoose improves developer productivity by enforcing data structure, simplifying CRUD operations, and supporting features like hooks and population.",
    category: "Databases & ORM",
    tags: ["nodejs", "mongoose", "mongodb"],
  },
  {
    id: "nodejs-74",
    question: "How do you create a Mongoose model/schema?",
    answer:
      "To create a Mongoose model, I first define a schema using mongoose.Schema(), specifying fields, data types, and validations. Then I create a model using mongoose.model(), which maps the schema to a MongoDB collection. The model is used to perform CRUD operations such as create, read, update, and delete.",
    category: "Databases & ORM",
    tags: ["nodejs", "mongoose"],
  },
  {
    id: "nodejs-75",
    question: "How do you implement search functionality with MongoDB?",
    answer:
      "For basic search, I use MongoDB's $regex operator. For scalable search, I create text indexes and use $text queries. In production applications, search is usually combined with pagination and filtering, and for advanced search capabilities I would use Elasticsearch or OpenSearch.",
    category: "Databases & ORM",
    tags: ["nodejs", "mongodb", "search"],
  },
  {
    id: "nodejs-76",
    question: "How do you count documents in MongoDB?",
    answer:
      "To count documents in MongoDB, I typically use countDocuments(). It can count all documents or only those matching a filter. For example, User.countDocuments({ role: 'admin' }) returns the number of admin users. If I only need an approximate total count of a collection, I can use estimatedDocumentCount(), which is faster because it uses collection metadata",
    category: "Databases & ORM",
    tags: ["nodejs", "mongodb"],
  },
  {
    id: "nodejs-77",
    question: "What is connection pooling and why is it important?",
    answer:
      "Connection pooling allows multiple requests to reuse a limited number of database connections instead of creating a new connection for each request. This improves performance, reduces resource usage, and helps the database handle high traffic efficiently.",
    category: "Databases & ORM",
    tags: ["nodejs", "database", "performance"],
  },
  {
    id: "nodejs-78",
    question: "How do you connect MySQL to Node.js?",
    answer:
      "To connect MySQL to a Node.js application, I typically use the mysql2 package. I create a connection or, preferably, a connection pool using the database credentials, then execute queries using query() or execute(). In production, I use connection pooling for better performance and store credentials in environment variables. For larger applications, I may use an ORM such as Prisma or Sequelize.",
    category: "Databases & ORM",
    tags: ["nodejs", "mysql"],
  },
  {
    id: "nodejs-79",
    question: "When would you choose MongoDB over MySQL?",
    answer:
      "I would choose MongoDB when the application deals with flexible or rapidly evolving data structures, document-oriented data, or large volumes of unstructured data. MongoDB allows quick development and horizontal scaling. However, for applications that require complex relationships, joins, and strong transactional consistency—such as banking or order management systems—I would prefer MySQL",
    category: "Databases & ORM",
    tags: ["nodejs", "database"],
  },
  {
    id: "nodejs-80",
    question: "What is an ORM? Name one for Node.js.",
    answer:
      "ORM stands for Object-Relational Mapper. It's a layer that lets you interact with a relational database using your programming language's objects and methods instead of writing raw SQL.",
    category: "Databases & ORM",
    tags: ["nodejs", "orm"],
  },
  {
    id: "nodejs-81",
    question: "What is a Buffer in Node.js?",
    answer:
      "A Buffer is a Node.js object used to store and manipulate raw binary data. It represents a fixed-size chunk of memory and is commonly used when working with files, streams, network communication, and other binary data sources. Buffers allow Node.js to efficiently handle data that is not naturally represented as JavaScript strings or objects.",
    category: "Files, Buffers & Streams",
    tags: ["nodejs", "buffer"],
  },
  {
    id: "nodejs-82",
    question: "What are Streams in Node.js?",
    answer:
      "A stream is a mechanism for processing data chunk by chunk rather than loading everything into memory at once. Streams are memory-efficient and commonly used for file handling, uploads, downloads, and network communication. The main types are Readable, Writable, Duplex, and Transform streams.",
    category: "Files, Buffers & Streams",
    tags: ["nodejs", "streams"],
  },
  {
    id: "nodejs-83",
    question: "What are the 4 types of streams?",
    answer:
      "1. Readable: read data sequentially. 2. Writable: write data. 3. Duplex: both readable and writable. 4. Transform: modify data while reading/writing. TCP sockets and file streams are duplex.",
    category: "Files, Buffers & Streams",
    tags: ["nodejs", "streams"],
  },
  {
    id: "nodejs-84",
    question: "What is piping in Node.js streams?",
    answer:
      "Piping is a feature in Node.js streams that allows data from a readable stream to be sent directly to a writable stream using the pipe() method. It simplifies stream handling, improves memory efficiency by processing data in chunks, and automatically manages backpressure between streams.",
    category: "Files, Buffers & Streams",
    tags: ["nodejs", "streams"],
  },
  {
    id: "nodejs-85",
    question: "What is the difference between readFile and createReadStream?",
    answer:
      "readFile() loads the complete file into memory, whereas createReadStream() processes the file chunk by chunk. For small files I use readFile(), but for large files or streaming scenarios I use createReadStream() because it consumes much less memory and starts processing immediately.",
    category: "Files, Buffers & Streams",
    tags: ["nodejs", "files", "streams"],
  },
  {
    id: "nodejs-86",
    question: "What package do you use for file uploads? (multer)",
    answer:
      "I use Multer for handling file uploads in Express applications. It parses multipart/form-data requests, provides access to uploaded files through req.file or req.files, and supports validation, size limits, and custom storage configurations.",
    category: "Files, Buffers & Streams",
    tags: ["nodejs", "express", "files"],
  },
  {
    id: "nodejs-87",
    question: "How does multer work?",
    answer:
      "Multer works as Express middleware that processes incoming multipart/form-data requests. It parses form fields and uploaded files, stores the files according to the configured storage engine (disk or memory), and attaches file information to req.file or req.files and text fields to req.body. After Multer finishes processing, control passes to the route handler where the uploaded data can be used.",
    category: "Files, Buffers & Streams",
    tags: ["nodejs", "multer"],
  },
  {
    id: "nodejs-88",
    question: "What is the Cluster module in Node.js?",
    answer:
      "The Cluster module lets Node.js create multiple worker processes so an application can use all available CPU cores. Incoming requests are distributed among workers, improving throughput and scalability. Each worker is a separate process with its own memory and event loop.",
    category: "Advanced & Internals",
    tags: ["nodejs", "cluster"],
  },
  {
    id: "nodejs-89",
    question: "What are Worker Threads? How do they differ from Cluster?",
    answer:
      "Worker Threads are used to run CPU-intensive tasks in parallel without blocking Node.js's event loop. Unlike Cluster, which creates multiple processes for scaling web servers, Worker Threads create multiple threads inside the same process and can share memory. I would use Cluster for handling more requests and Worker Threads for heavy computations.",
    category: "Advanced & Internals",
    tags: ["nodejs", "workers"],
  },
  {
    id: "nodejs-90",
    question: "What is PM2 and why is it used in production?",
    answer:
      "PM2 is a Node.js process manager used in production to keep applications running. It provides features like automatic restarts on crashes, log management, monitoring, startup on server reboot, and cluster mode for utilizing multiple CPU cores.",
    category: "Advanced & Internals",
    tags: ["nodejs", "pm2", "production"],
  },
  {
    id: "nodejs-91",
    question: "How do you handle environment variables in Node.js?",
    answer:
      "Use process.env to access environment variables. Define in .env file, load with dotenv package. Store sensitive data (API keys, DB credentials) as env vars, never hardcode in code.",
    category: "Advanced & Internals",
    tags: ["nodejs", "env"],
  },
  {
    id: "nodejs-92",
    question: "What is a memory leak in Node.js? How do you find one?",
    answer:
      "A memory leak in Node.js happens when objects that are no longer needed remain referenced, preventing the V8 garbage collector from freeing memory. This causes memory consumption to grow over time and can eventually crash the application. Common causes include global variables, unremoved event listeners, uncleared timers, large caches, and closures holding references. To find memory leaks, I would monitor process.memoryUsage(), use heap snapshots through Chrome DevTools, analyze heap dumps, or use profiling tools such as Clinic.js to identify objects that keep growing in memory.",
    category: "Advanced & Internals",
    tags: ["nodejs", "memory", "debugging"],
  },
  {
    id: "nodejs-93",
    question: "What is graceful shutdown and how do you implement it?",
    answer:
      "Graceful shutdown is the process of safely terminating a Node.js application without interrupting active requests or leaving resources open. When the application receives signals such as SIGINT or SIGTERM, it stops accepting new requests, completes ongoing requests, closes database and external service connections, releases resources, and then exits. In Node.js, this is typically implemented using process.on('SIGINT') and process.on('SIGTERM'), calling server.close() and cleaning up database, Redis, or queue connections before exiting the process. This is especially important in production environments using Docker, Kubernetes, or load-balanced deployments.",
    category: "Advanced & Internals",
    tags: ["nodejs", "shutdown"],
  },
  {
    id: "nodejs-94",
    question: "What is the EventEmitter in Node.js?",
    answer:
      "EventEmitter is a built-in Node.js class that implements the publish-subscribe pattern. One part of your code emits a named event, other parts listen for it and react. It's the foundation of how Node.js handles async events internally — streams, HTTP requests, file system — all of it is built on EventEmitter.",
    category: "Advanced & Internals",
    tags: ["nodejs", "events"],
  },
  {
    id: "nodejs-95",
    question: "What is the crypto module?",
    answer:
      "The crypto module is a built-in Node.js module that provides cryptographic functionality such as hashing, encryption, decryption, digital signatures, and secure random value generation. It is commonly used for password hashing, generating authentication tokens, encrypting sensitive data, verifying message integrity with HMACs, and creating secure keys. Some commonly used APIs are createHash(), randomBytes(), pbkdf2(), createCipheriv(), and createHmac(). In real applications, many developers use bcrypt,Argon2 because they are specifically designed for password storage.",
    category: "Advanced & Internals",
    tags: ["nodejs", "crypto", "security"],
  },
  {
    id: "nodejs-96",
    question: "What is child_process module?",
    answer:
      "Node.js is single-threaded, so CPU-heavy tasks block everything. The child_process module lets you spawn separate OS-level processes — completely independent from your main Node process — to run shell commands, scripts, or other programs in parallel.",
    category: "Advanced & Internals",
    tags: ["nodejs", "processes"],
  },
  {
    id: "nodejs-97",
    question: "How do you debug a Node.js application?",
    answer:
      "I usually start debugging by checking logs and reproducing the issue. For local debugging, I use VS Code breakpoints or the Node.js inspector (--inspect) to step through code and inspect variables. For API issues, I use Postman to validate requests and responses. If the problem is performance-related, I analyze database queries, monitor process.memoryUsage(), and use profiling tools such as Clinic.js or the Node profiler. I also rely on stack traces and structured logging to quickly identify the root cause of errors.",
    category: "Advanced & Internals",
    tags: ["nodejs", "debugging"],
  },
  {
    id: "nodejs-98",
    question: "What is caching in Node.js? Have you used Redis?",
    answer:
      "Caching stores expensive operation results so repeated requests are served instantly. For single-server apps a simple Map works, but in production I'd use Redis — it's shared across all server instances, survives restarts, and supports TTL-based expiry. I've used it for caching DB queries and also for rate limiting and session storage. The trickiest part is cache invalidation — knowing exactly when to clear stale data.",
    category: "Advanced & Internals",
    tags: ["nodejs", "caching", "redis"],
  },
  {
    id: "nodejs-99",
    question: "Explain the folder structure of your Node.js project.",
    answer:
      "Common structure: src/ (code), routes/ (endpoints), models/ (database), controllers/ (logic), middleware/ (middleware), config/ (configuration), utils/ (helpers). .env file at root, package.json, node_modules/.",
    category: "Practical & Tooling",
    tags: ["nodejs", "project-structure"],
  },
  {
    id: "nodejs-100",
    question: "Walk me through starting a new Node.js project from scratch.",
    answer:
      "npm init → install dependencies → create folder structure → setup .env → initialize git → write routes/models → setup database connection → test locally → deploy. Use package manager, version control.",
    category: "Practical & Tooling",
    tags: ["nodejs", "setup"],
  },
  {
    id: "nodejs-101",
    question: "Write a Hello World HTTP server in Node.js (no Express).",
    answer:
      "const http = require('http'); const server = http.createServer((req, res) => { res.writeHead(200); res.end('Hello World'); }); server.listen(3000);",
    category: "Practical & Tooling",
    tags: ["nodejs", "http"],
  },
  {
    id: "nodejs-102",
    question: "Which package do you use for sending emails? (Nodemailer)",
    answer:
      "Nodemailer is popular for sending emails from Node.js. Configure SMTP settings (Gmail, SendGrid, etc), create transporter, send mail with mailOptions. Also: SendGrid, AWS SES alternatives.",
    category: "Practical & Tooling",
    tags: ["nodejs", "email"],
  },
  {
    id: "nodejs-103",
    question: "Have you used WebSockets in Node.js?",
    answer:
      "WebSockets enable bidirectional communication. Libraries: socket.io (easiest, fallbacks), ws (lightweight). Use for real-time features: chat, notifications, live updates. Server maintains persistent connection.",
    category: "Practical & Tooling",
    tags: ["nodejs", "websockets"],
  },
  {
    id: "nodejs-104",
    question:
      "What is the timer module? (setTimeout, setInterval, setImmediate, clearTimeout)",
    answer:
      "setTimeout: delay callback execution. setInterval: repeat callback. setImmediate: run after I/O phase. clearTimeout/clearInterval: cancel. Used for scheduling tasks, animations, polling.",
    category: "Practical & Tooling",
    tags: ["nodejs", "timers"],
  },
  {
    id: "nodejs-105",
    question: "What is microservices architecture? When would you use it?",
    answer:
      "Microservices: split application into small, independent services communicating via APIs. Use when: large team, different scaling needs, independent deployment, fault isolation important. Trade-off: complexity.",
    category: "Practical & Tooling",
    tags: ["nodejs", "architecture"],
  },
  {
    id: "nodejs-106",
    question: "What is the difference between REST and GraphQL?",
    answer:
      "REST: fixed endpoints, over-fetching, multiple requests for related data. GraphQL: single endpoint, query exactly what you need, nested queries, strongly typed. GraphQL more efficient for complex data.",
    category: "Practical & Tooling",
    tags: ["nodejs", "api"],
  },
  {
    id: "nodejs-107",
    question: "How do you implement pagination in a Node.js API?",
    answer:
      "Use skip and limit parameters: db.collection.find().skip(offset).limit(pageSize). Or use cursor. Send page number, page size in request. Return total count, current page, data in response.",
    category: "Practical & Tooling",
    tags: ["nodejs", "api"],
  },
  {
    id: "nodejs-108",
    question: "How do you implement API versioning?",
    answer:
      "Methods: URL path (/api/v1/, /api/v2/), request headers (Accept header), subdomains (v1.api.com). URL path is most common. Allows supporting multiple versions simultaneously, gradual migration for clients.",
    category: "Practical & Tooling",
    tags: ["nodejs", "api"],
  },
];

export default nodeBackendQuestions;
