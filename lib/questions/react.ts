import { Question } from "../questions";

const reactQuestions: Question[] = [
  // ─── REACT BASICS ─────────────────────────────────────────────────────────
  {
    id: "react-1",
    question: "What is React?",
    answer:
      "React is an open-source JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It uses a component-based architecture where UI is broken into reusable, self-contained pieces. React uses a virtual DOM to efficiently update the real DOM only where necessary. It handles only the view layer — not routing or data fetching — making it flexible to combine with other libraries.",
    category: "React Basics",
    tags: ["react", "basics"],
  },
  {
    id: "react-2",
    question: "What is the difference between a library and a framework?",
    answer:
      "A library provides tools you call when you need them — you control the flow. A framework controls the flow and calls your code — 'inversion of control'. React is a library — it handles the view layer but lets you choose routing (React Router), state management (Redux), and HTTP (Axios). Angular is a full framework — it prescribes routing, HTTP, forms, and structure. Vue sits in between. React's library nature makes it flexible but requires more architectural decisions.",
    category: "React Basics",
    tags: ["react", "basics"],
  },
  {
    id: "react-3",
    question: "What is the virtual DOM in React?",
    answer:
      "The virtual DOM is a lightweight JavaScript representation of the real DOM kept in memory. When state changes, React creates a new virtual DOM tree and diffs it against the previous one — a process called reconciliation. Only the actual differences are applied to the real DOM in a process called patching. This is more efficient than directly manipulating the DOM on every change because DOM operations are expensive. The virtual DOM allows React to batch and optimise updates.",
    category: "React Basics",
    tags: ["react", "virtual-dom"],
  },
  {
    id: "react-4",
    question: "What is reconciliation in React?",
    answer:
      "Reconciliation is React's process of comparing the new virtual DOM tree with the previous one to determine the minimum number of changes needed to update the real DOM. React uses a diffing algorithm that compares trees level by level. Key assumptions: elements of different types produce different trees (React replaces them entirely), and the key prop helps React identify which list items have changed/moved. Efficient reconciliation is why React can handle frequent state changes without performance problems.",
    category: "React Basics",
    tags: ["react", "reconciliation", "virtual-dom"],
  },
  {
    id: "react-5",
    question: "What is JSX?",
    answer:
      "JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup inside JavaScript code. It is transpiled by Babel into React.createElement() calls. Example: <div className='box'>{name}</div> becomes React.createElement('div', { className: 'box' }, name). JSX is not mandatory — you can use React without it — but it makes component code much more readable. Key differences from HTML: use className instead of class, htmlFor instead of for, and all tags must be closed.",
    category: "React Basics",
    tags: ["react", "jsx"],
  },
  {
    id: "react-6",
    question: "What is the difference between Real DOM and Virtual DOM?",
    answer:
      "Real DOM: actual browser representation, expensive to update, re-renders the entire subtree on change, directly reflects what the user sees. Virtual DOM: lightweight in-memory JavaScript object, cheap to create and update, React diffs it to find minimal changes, then applies only those to the real DOM. Analogy: the real DOM is like redrawing an entire blueprint to change one room; the virtual DOM is like marking only the changed parts and applying just those edits.",
    category: "React Basics",
    tags: ["react", "virtual-dom", "dom"],
  },
  {
    id: "react-7",
    question: "What is React Fiber?",
    answer:
      "React Fiber is the complete reimplementation of React's reconciliation engine introduced in React 16. It enables incremental rendering — breaking rendering work into chunks and spreading it over multiple frames. This allows React to pause, resume, and prioritise rendering work, enabling features like Concurrent Mode, Suspense, and time-slicing. Before Fiber, React's reconciliation was synchronous and blocking — a large update would block the main thread until complete. Fiber made React's rendering interruptible.",
    category: "React Basics",
    tags: ["react", "fiber", "internals"],
  },
  {
    id: "react-8",
    question: "What is the difference between React and React DOM?",
    answer:
      "React (the core library) contains the logic for defining components, managing state, and the virtual DOM diffing algorithm — it is platform-agnostic. ReactDOM is the package that bridges React to the browser's real DOM — it handles rendering React trees to the DOM with ReactDOM.render() or createRoot(). This separation allows the same React core to be used with React Native (mobile), React Three Fiber (3D), and other renderers. You import and use both, but they have distinct responsibilities.",
    category: "React Basics",
    tags: ["react", "basics"],
  },

  // ─── COMPONENTS ──────────────────────────────────────────────────────────
  {
    id: "react-9",
    question: "What is a component in React?",
    answer:
      "A component is a reusable, self-contained piece of UI. It is a JavaScript function (or class) that accepts props as input and returns JSX describing what to render. Components can be composed together to build complex UIs from simple building blocks. A Button component, a NavBar, and a UserCard are all components. Components can have their own state, manage side effects, and communicate with other components via props and callbacks.",
    category: "Components",
    tags: ["react", "components"],
  },
  {
    id: "react-10",
    question: "What is the difference between functional and class components?",
    answer:
      "Functional components are plain JavaScript functions that return JSX. They use hooks for state and lifecycle. They are simpler, shorter, and the modern standard. Class components extend React.Component, use this.state and this.setState(), and have lifecycle methods like componentDidMount. Before hooks (React 16.8), only class components could have state. Now functional components with hooks are preferred for all new code. Class components are still supported but considered legacy.",
    category: "Components",
    tags: ["react", "components", "functional", "class"],
  },
  {
    id: "react-11",
    question: "What are props in React?",
    answer:
      "Props (properties) are read-only inputs passed from a parent component to a child component — like function arguments. They allow components to be dynamic and reusable. Example: <Button label='Submit' onClick={handleSubmit} disabled={loading} />. Inside Button, these are accessible as props.label, props.onClick. Props flow one way — parent to child (unidirectional data flow). A child cannot modify its own props. To pass data upward, the parent passes a callback function as a prop that the child can call.",
    category: "Components",
    tags: ["react", "props"],
  },
  {
    id: "react-12",
    question: "What is prop drilling? How do you solve it?",
    answer:
      "Prop drilling is when you pass props through multiple levels of components just to get data to a deeply nested component that needs it — components in between don't use the data but must pass it along. Solutions: Context API (built-in, good for medium complexity — theme, auth, language), Redux or Zustand (for complex global state), component composition (restructure components to avoid deep nesting), or render props/children patterns. The best solution depends on how often the data changes and how many components need it.",
    category: "Components",
    tags: ["react", "props", "prop-drilling"],
  },
  {
    id: "react-13",
    question: "What is component composition in React?",
    answer:
      "Composition means building complex UIs by combining simpler components — React's preferred pattern over inheritance. Using the children prop: <Card><UserInfo /><UserStats /></Card> — Card renders whatever is passed as children without knowing what it is. Slot-like patterns: <Layout sidebar={<Sidebar />} main={<Feed />} />. This avoids prop drilling and creates flexible, reusable components. React recommends composition over extending classes. Any component can be passed as a prop because components are just functions/objects.",
    category: "Components",
    tags: ["react", "composition", "patterns"],
  },
  {
    id: "react-14",
    question:
      "What is the difference between controlled and uncontrolled components?",
    answer:
      "A controlled component has its form input value controlled by React state — the value is set by state and updated via an onChange handler. The component is the single source of truth. An uncontrolled component stores its own state internally in the DOM — you access the value using a ref. Controlled: <input value={name} onChange={e => setName(e.target.value)} />. Uncontrolled: const ref = useRef(); <input ref={ref} />; (read with ref.current.value). Controlled components are preferred because they make form state predictable and easier to validate.",
    category: "Components",
    tags: ["react", "forms", "controlled", "uncontrolled"],
  },
  {
    id: "react-15",
    question: "What is a Pure Component in React?",
    answer:
      "A Pure Component performs a shallow comparison of props and state before re-rendering — it only re-renders if props or state have actually changed. In class components: extend React.PureComponent instead of React.Component. In functional components: wrap with React.memo(). Useful for components that render frequently but receive the same props often. Caveat: shallow comparison means it won't detect changes inside nested objects or arrays — if you mutate an object without creating a new reference, the component won't re-render.",
    category: "Components",
    tags: ["react", "pure-component", "performance"],
  },
  {
    id: "react-16",
    question: "What is React.memo?",
    answer:
      "React.memo is a higher-order component that wraps a functional component and memoises it — preventing re-renders when the parent re-renders but the component's props haven't changed (shallow comparison). const MemoButton = React.memo(Button). If props change, it still re-renders. Use it for expensive components that receive the same props frequently. Don't overuse it — the comparison itself has a cost. Pair with useCallback on function props to prevent functions from being recreated on every render, which would break the memo.",
    category: "Components",
    tags: ["react", "memo", "performance"],
  },
  {
    id: "react-17",
    question: "What are Higher Order Components (HOC)?",
    answer:
      "A Higher Order Component is a function that takes a component and returns a new enhanced component. It's a pattern for reusing component logic. Example: withAuth(Component) — returns a new component that checks authentication before rendering Component. HOCs were the primary pattern for code reuse before hooks. Today, custom hooks are preferred over HOCs for most cases because they're simpler and avoid wrapper hell. But HOCs are still useful for cross-cutting concerns like error boundaries, analytics, and authentication wrappers.",
    category: "Components",
    tags: ["react", "hoc", "patterns"],
  },

  // ─── STATE ────────────────────────────────────────────────────────────────
  {
    id: "react-18",
    question: "What is state in React?",
    answer:
      "State is a JavaScript object managed inside a component that holds data which can change over time. When state changes, React re-renders the component to reflect the new data. Unlike props (which come from parent), state is local to the component. In functional components, useState returns the current state value and a setter function. State updates are asynchronous — React batches updates for performance. Never mutate state directly — always use the setter function to ensure React detects the change and re-renders.",
    category: "State",
    tags: ["react", "state"],
  },
  {
    id: "react-19",
    question: "What is the difference between state and props?",
    answer:
      "Props: passed from parent to child, read-only in the receiving component, owned by the parent. State: managed inside the component, mutable via setState/setter, owned by the component itself. Props are like function arguments — data you receive. State is like local variables — data you manage. A component can receive a prop and use it to initialise state, but changing the prop after that won't automatically update the state (stale state issue — use a useEffect with the prop as dependency to sync them).",
    category: "State",
    tags: ["react", "state", "props"],
  },
  {
    id: "react-20",
    question: "What is state lifting in React?",
    answer:
      "Lifting state up means moving state to the closest common ancestor of components that need to share it. If two sibling components need the same data, move the state to their parent. The parent then passes the data as props and update functions as callback props. Example: a search input in one component filters a list in another — lift the search query state to their parent. This maintains React's unidirectional data flow. If the common ancestor is too far up, consider Context API instead.",
    category: "State",
    tags: ["react", "state", "lifting-state"],
  },
  {
    id: "react-21",
    question: "Why should you never mutate state directly in React?",
    answer:
      "React tracks state changes by reference comparison. If you mutate an object directly, the reference doesn't change — React doesn't know the state changed and won't re-render. Example: state.items.push(newItem) mutates the array in place; React sees the same reference and skips re-render. Correct: setItems([...items, newItem]) creates a new array reference, triggering re-render. Always return new objects/arrays: setUser({ ...user, name: 'New' }) instead of user.name = 'New'; setUser(user).",
    category: "State",
    tags: ["react", "state", "immutability"],
  },

  // ─── HOOKS ────────────────────────────────────────────────────────────────
  {
    id: "react-22",
    question: "What are React hooks?",
    answer:
      "Hooks are functions introduced in React 16.8 that let functional components use state, lifecycle, and other React features that were previously only available in class components. Rules of Hooks: only call hooks at the top level (not inside loops, conditionals, or nested functions), and only call them from React functional components or custom hooks. Key built-in hooks: useState, useEffect, useContext, useRef, useMemo, useCallback, useReducer.",
    category: "Hooks",
    tags: ["react", "hooks"],
  },
  {
    id: "react-23",
    question: "What is useState? How does it work?",
    answer:
      "useState declares a state variable in a functional component. const [count, setCount] = useState(0) — returns the current value and a setter. Calling setCount(newValue) schedules a re-render with the new value. State updates are asynchronous and batched — you can't read the new value immediately after setting it. For state that depends on the previous value, use the functional update form: setCount(prev => prev + 1) — this prevents stale closure issues. useState can hold any type: number, string, array, object.",
    category: "Hooks",
    tags: ["react", "hooks", "useState"],
  },
  {
    id: "react-24",
    question: "What is useEffect? How does it work?",
    answer:
      "useEffect runs side effects after a component renders — data fetching, subscriptions, timers, DOM manipulation. It takes a function and a dependency array. The function runs after every render if no dependency array. With an empty array [], it runs only on mount. With [dep1, dep2], it runs on mount and whenever the listed dependencies change. Return a cleanup function to run on unmount or before the next effect: useEffect(() => { const sub = subscribe(); return () => sub.unsubscribe(); }, [id]).",
    category: "Hooks",
    tags: ["react", "hooks", "useEffect"],
  },
  {
    id: "react-25",
    question: "What is the useEffect cleanup function?",
    answer:
      "The cleanup function is returned from useEffect and runs before the component unmounts or before the effect runs again (if dependencies change). Used to prevent memory leaks and stale operations. Examples: clearing timers (return () => clearInterval(timer)), cancelling fetch requests (return () => controller.abort()), removing event listeners (return () => window.removeEventListener('resize', handler)), and unsubscribing from WebSocket/observables. Without cleanup, you risk memory leaks and updating state on unmounted components (causes React warning).",
    category: "Hooks",
    tags: ["react", "hooks", "useEffect", "cleanup"],
  },
  {
    id: "react-26",
    question: "What is useContext?",
    answer:
      "useContext reads the value of a React Context — consuming data shared across the component tree without prop drilling. First create context: const ThemeContext = createContext('light'). Wrap the tree with the provider: <ThemeContext.Provider value={theme}>. In any descendant: const theme = useContext(ThemeContext). The component re-renders whenever the context value changes. Good for: auth user, theme, language, any global config. Not ideal for high-frequency updates like animation frames — it re-renders all consumers on every change.",
    category: "Hooks",
    tags: ["react", "hooks", "useContext", "context"],
  },
  {
    id: "react-27",
    question: "What is useRef?",
    answer:
      "useRef returns a mutable object { current: initialValue } that persists across renders without causing re-renders when changed. Two main uses: 1) DOM access — const inputRef = useRef(null); <input ref={inputRef} /> — then inputRef.current.focus() gives direct DOM access. 2) Storing mutable values that shouldn't trigger re-renders — like previous values, timer IDs, or animation frames. Unlike state, updating ref.current doesn't cause a re-render. A common use is storing the previous value of a prop or state: useEffect(() => { prevRef.current = value; }, [value]).",
    category: "Hooks",
    tags: ["react", "hooks", "useRef"],
  },
  {
    id: "react-28",
    question: "What is useMemo?",
    answer:
      "useMemo memoises the result of an expensive computation, recalculating only when dependencies change. const result = useMemo(() => heavyComputation(data), [data]). Without it, the computation runs on every render. Use when: a calculation is genuinely expensive (sorting/filtering large arrays, complex transforms) and the component re-renders frequently. Don't overuse — useMemo itself has overhead. The key question is: is this computation expensive enough that memoising it is worth the added complexity? For simple operations, just compute them inline.",
    category: "Hooks",
    tags: ["react", "hooks", "useMemo", "performance"],
  },
  {
    id: "react-29",
    question: "What is useCallback?",
    answer:
      "useCallback memoises a function reference, returning the same function instance across renders unless dependencies change. const handleClick = useCallback(() => { doSomething(id) }, [id]). Without it, a new function is created on every render — this breaks React.memo on child components that receive the function as a prop (new function reference = prop changed = re-render). Use useCallback when: passing callbacks to memoised child components, passing functions to useEffect dependencies, or creating stable event handlers for performance-sensitive lists.",
    category: "Hooks",
    tags: ["react", "hooks", "useCallback", "performance"],
  },
  {
    id: "react-30",
    question: "What is the difference between useMemo and useCallback?",
    answer:
      "useCallback memoises a function itself — it returns the same function reference. useMemo memoises the return value of a function — it returns the computed result. useCallback(fn, deps) is equivalent to useMemo(() => fn, deps). Use useCallback when you want to stabilise a function reference (to pass to memo components or as an effect dependency). Use useMemo when you want to cache an expensive computed value. Both take a dependency array and only recompute when dependencies change.",
    category: "Hooks",
    tags: ["react", "hooks", "useMemo", "useCallback", "performance"],
  },
  {
    id: "react-31",
    question: "What is useReducer?",
    answer:
      "useReducer is an alternative to useState for complex state logic. It follows the Redux pattern: const [state, dispatch] = useReducer(reducer, initialState). A reducer is a pure function: (state, action) => newState. You dispatch actions: dispatch({ type: 'INCREMENT' }) or dispatch({ type: 'SET_USER', payload: user }). Better than useState when: multiple state values are related and updated together, next state depends on previous state in complex ways, or state transitions are complex enough to benefit from being described as actions.",
    category: "Hooks",
    tags: ["react", "hooks", "useReducer"],
  },
  {
    id: "react-32",
    question: "What are custom hooks in React?",
    answer:
      "Custom hooks are functions that start with 'use' and can call other hooks — they let you extract and reuse stateful logic across components. Example: function useFetch(url) { const [data, setData] = useState(null); const [loading, setLoading] = useState(true); useEffect(() => { fetch(url).then(r => r.json()).then(setData).finally(() => setLoading(false)); }, [url]); return { data, loading }; }. Any component can call useFetch(url) to get fetch functionality without duplicating the logic. Custom hooks don't share state — each component gets its own instance.",
    category: "Hooks",
    tags: ["react", "hooks", "custom-hooks"],
  },
  {
    id: "react-33",
    question: "What are the rules of hooks?",
    answer:
      "Two rules: 1) Only call hooks at the top level — never inside loops, conditions, or nested functions. This ensures hooks are called in the same order on every render, which is how React associates state with the correct hook. 2) Only call hooks from React function components or custom hooks — not from plain JavaScript functions or class components. The ESLint plugin eslint-plugin-react-hooks enforces these rules and catches violations at development time.",
    category: "Hooks",
    tags: ["react", "hooks", "rules"],
  },
  {
    id: "react-34",
    question: "What is useLayoutEffect? How is it different from useEffect?",
    answer:
      "useLayoutEffect fires synchronously after all DOM mutations but before the browser paints. useEffect fires after the browser paints. Use useLayoutEffect when you need to read DOM measurements (element size/position) and synchronously apply changes before the user sees the render — avoiding visual flicker. Example: measuring a tooltip position and repositioning it. For most side effects (data fetching, subscriptions), use useEffect. useLayoutEffect blocks painting, so expensive operations in it cause visible delays.",
    category: "Hooks",
    tags: ["react", "hooks", "useLayoutEffect"],
  },
  {
    id: "react-35",
    question: "What is useId hook in React?",
    answer:
      "useId generates a unique, stable ID that is consistent between server and client renders — important for SSR hydration. Primary use case: associating form labels with inputs accessibly. const id = useId(); <label htmlFor={id}>Name</label><input id={id} />. Each component instance gets a different ID. Do not use it for keys in lists — useId is for accessibility attributes. Available since React 18.",
    category: "Hooks",
    tags: ["react", "hooks", "useId"],
  },

  // ─── COMPONENT LIFECYCLE ──────────────────────────────────────────────────
  {
    id: "react-36",
    question: "What are the lifecycle phases of a React component?",
    answer:
      "Three phases: Mounting (component is created and inserted into DOM — constructor, render, componentDidMount in class; in functional: component function runs, useEffect with [] fires). Updating (re-renders due to state/prop changes — render, componentDidUpdate in class; in functional: component re-runs, useEffect with deps fires when deps change). Unmounting (component removed from DOM — componentWillUnmount in class; in functional: useEffect cleanup function runs).",
    category: "Component Lifecycle",
    tags: ["react", "lifecycle"],
  },
  {
    id: "react-37",
    question: "How do you replicate componentDidMount with hooks?",
    answer:
      "Use useEffect with an empty dependency array: useEffect(() => { // runs once after first render (mount) fetchInitialData(); }, []). The empty array tells React there are no dependencies — the effect only runs on mount, never on updates. This is equivalent to componentDidMount. Be careful: if you reference state or props inside and they change, you'll get stale values because the effect won't re-run — use the dependency array to keep it in sync.",
    category: "Component Lifecycle",
    tags: ["react", "lifecycle", "hooks"],
  },
  {
    id: "react-38",
    question: "How do you replicate componentWillUnmount with hooks?",
    answer:
      "Return a cleanup function from useEffect: useEffect(() => { const timer = setInterval(tick, 1000); return () => clearInterval(timer); // runs on unmount }, []). The returned function is the equivalent of componentWillUnmount. When the dependency array is [], the cleanup only runs on unmount. When there are dependencies, the cleanup also runs before each re-execution of the effect (before the next render with new deps).",
    category: "Component Lifecycle",
    tags: ["react", "lifecycle", "hooks"],
  },
  {
    id: "react-39",
    question: "How do you replicate componentDidUpdate with hooks?",
    answer:
      "Use useEffect with specific dependencies: useEffect(() => { // runs after every render where userId changed document.title = `User ${userId}`; }, [userId]). This fires after mount and after every render where userId changed — like componentDidUpdate but more granular. To skip the mount execution, track a mounted ref: const mounted = useRef(false); useEffect(() => { if (!mounted.current) { mounted.current = true; return; } // update logic here }, [dep]).",
    category: "Component Lifecycle",
    tags: ["react", "lifecycle", "hooks"],
  },

  // ─── PERFORMANCE ──────────────────────────────────────────────────────────
  {
    id: "react-40",
    question: "What causes unnecessary re-renders in React?",
    answer:
      "Common causes: parent re-renders (child re-renders by default even if props didn't change), new object/array references as props ({ id: 1 } creates a new object on every render), inline arrow functions as props (new function reference each time), context value changes (all consumers re-render), and missing key prop on list items. Fixes: React.memo to skip renders when props don't change, useMemo for stable object/array references, useCallback for stable function references, splitting context into smaller contexts.",
    category: "Performance",
    tags: ["react", "performance", "re-renders"],
  },
  {
    id: "react-41",
    question: "What is code splitting in React?",
    answer:
      "Code splitting breaks your bundle into smaller chunks that are loaded on demand instead of loading everything upfront. React.lazy() enables component-level code splitting: const LazyPage = React.lazy(() => import('./HeavyPage')). Wrap it in Suspense with a fallback: <Suspense fallback={<Spinner />}><LazyPage /></Suspense>. The chunk for LazyPage is only downloaded when the component is first rendered. Route-based splitting (lazy-loading each route) is the most impactful — users only download code for pages they visit.",
    category: "Performance",
    tags: ["react", "performance", "code-splitting", "lazy"],
  },
  {
    id: "react-42",
    question: "What is React.lazy and Suspense?",
    answer:
      "React.lazy() dynamically imports a component and returns a lazy component. Suspense provides a loading fallback while the lazy component's code is being fetched. const Modal = React.lazy(() => import('./Modal')). In JSX: <Suspense fallback={<div>Loading...</div>}><Modal /></Suspense>. The component must be exported as a default export. React.lazy only works with default exports. In React 18, Suspense also works with data fetching in frameworks like Next.js, not just code splitting.",
    category: "Performance",
    tags: ["react", "performance", "lazy", "suspense"],
  },
  {
    id: "react-43",
    question: "What is windowing/virtualisation in React?",
    answer:
      "Windowing renders only the visible items in a long list instead of all items. For a list of 10,000 rows, without virtualisation React renders all 10,000 DOM nodes — expensive. With virtualisation, only the ~20 visible rows are rendered. As the user scrolls, items are swapped in/out. Libraries: react-window (lightweight) and react-virtual. Critical for data tables, infinite scroll lists, and any list with hundreds of items. The DOM node count stays constant regardless of data size.",
    category: "Performance",
    tags: ["react", "performance", "virtualisation"],
  },
  {
    id: "react-44",
    question: "What is the key prop in React? Why is it important?",
    answer:
      "The key prop is a special attribute that helps React identify which items in a list have changed, been added, or removed during reconciliation. React uses keys to match elements between renders. Without keys (or using index as key), React may incorrectly reuse DOM nodes leading to bugs in forms, animations, and state. Always use a stable unique identifier as key: item.id, not array index. Using index as key is acceptable only for static, non-reorderable lists. Keys must be unique among siblings but don't need to be globally unique.",
    category: "Performance",
    tags: ["react", "key", "reconciliation", "lists"],
  },
  {
    id: "react-45",
    question: "What is the React Profiler?",
    answer:
      "The React Profiler is a built-in performance tool in React DevTools that records when components render and how long each render took. It shows a flame graph and ranked chart of render times, helping identify which components are the rendering bottleneck. In code, the <Profiler> component lets you measure renders programmatically: <Profiler id='Nav' onRender={callback}>. The onRender callback receives the component id, phase (mount/update), actualDuration, and baseDuration. Use it to identify components that should be wrapped in React.memo or restructured.",
    category: "Performance",
    tags: ["react", "performance", "profiler"],
  },

  // ─── CONTEXT API & STATE MANAGEMENT ──────────────────────────────────────
  {
    id: "react-46",
    question: "What is the Context API?",
    answer:
      "Context API provides a way to share values between components without passing props through every level of the tree. Three parts: createContext() creates the context object, Context.Provider makes the value available to all descendants, useContext(Context) or Context.Consumer reads the value. Best for: auth state, theme, language/i18n, user preferences. Limitation: every component that calls useContext re-renders whenever the context value changes — even if the component only uses part of the value. Split contexts to minimise unnecessary re-renders.",
    category: "Context & State Management",
    tags: ["react", "context", "state-management"],
  },
  {
    id: "react-47",
    question: "What is Redux?",
    answer:
      "Redux is a predictable state management library. It stores the entire application state in a single JavaScript object (store). State is read-only — the only way to change it is by dispatching actions (plain objects describing what happened). Reducers are pure functions that compute the new state from (currentState, action). This strict unidirectional flow makes state changes predictable and debuggable. Redux DevTools lets you time-travel through state changes. Best for large applications with complex, shared state. Overkill for most small-medium apps.",
    category: "Context & State Management",
    tags: ["react", "redux", "state-management"],
  },
  {
    id: "react-48",
    question: "What is Redux Toolkit?",
    answer:
      "Redux Toolkit (RTK) is the official, opinionated toolset for Redux that reduces boilerplate. createSlice() generates actions and reducers together. configureStore() sets up the store with devtools and middleware. createAsyncThunk() handles async operations. RTK also includes Immer for writing 'mutating' reducer logic that is actually immutable under the hood. Example: const counterSlice = createSlice({ name: 'counter', initialState: 0, reducers: { increment: state => state + 1 } }). RTK is the modern way to use Redux — avoid the old pattern with hand-written action constants.",
    category: "Context & State Management",
    tags: ["react", "redux", "redux-toolkit"],
  },
  {
    id: "react-49",
    question: "What is the difference between Context API and Redux?",
    answer:
      "Context API: built into React, no extra library, simple setup, re-renders all consumers on value change, no devtools, best for low-frequency updates like theme/auth. Redux: separate library, more setup, powerful DevTools with time-travel debugging, selective subscription to slices of state (components only re-render when their slice changes), middleware for side effects (redux-thunk/saga), best for complex, frequently changing global state. Rule of thumb: start with Context, move to Redux when state management becomes a pain point.",
    category: "Context & State Management",
    tags: ["react", "context", "redux", "state-management"],
  },
  {
    id: "react-50",
    question: "What is Zustand?",
    answer:
      "Zustand is a lightweight state management library that combines the simplicity of Context API with the power of Redux. It uses a hook-based API with no boilerplate: const useStore = create(set => ({ count: 0, increment: () => set(state => ({ count: state.count + 1 })) })). Components subscribe with const count = useStore(state => state.count) — they only re-render when the selected slice changes. No providers needed. Much simpler than Redux but with selective subscription. Growing in popularity as an alternative to both Context and Redux for mid-complexity apps.",
    category: "Context & State Management",
    tags: ["react", "zustand", "state-management"],
  },

  // ─── REACT ROUTER ────────────────────────────────────────────────────────
  {
    id: "react-51",
    question: "What is React Router?",
    answer:
      "React Router is the standard routing library for React — it maps URLs to components, enabling navigation in single-page applications without full page reloads. It maintains URL history and handles browser back/forward. Core components (v6): BrowserRouter (wraps your app), Routes (container for route definitions), Route (maps a path to a component), Link (navigation without page reload). It also provides hooks: useNavigate, useParams, useLocation, useSearchParams.",
    category: "React Router",
    tags: ["react", "router", "navigation"],
  },
  {
    id: "react-52",
    question:
      "What is the difference between useNavigate and Link in React Router?",
    answer:
      "Link renders an <a> tag that navigates when clicked — use it in JSX for normal navigation links. useNavigate returns a function for programmatic navigation — navigate('/dashboard') or navigate(-1) to go back. Use useNavigate when you need to navigate as a result of an action: after form submission, after an API call succeeds, or conditionally. Example: const navigate = useNavigate(); onSubmit: () => { await login(); navigate('/dashboard'); }. Link is declarative (in JSX), useNavigate is imperative (in code).",
    category: "React Router",
    tags: ["react", "router", "navigation"],
  },
  {
    id: "react-53",
    question: "What is useParams in React Router?",
    answer:
      "useParams returns an object of key-value pairs of the URL parameters — the dynamic segments defined in the route path. For route <Route path='/users/:id' />, inside the component: const { id } = useParams() gives you the id from the URL. For /users/42, id would be '42' (always a string). Useful for detail pages, profile pages, or any route that needs to identify a specific resource from the URL. You can have multiple params: path='/categories/:categoryId/products/:productId'.",
    category: "React Router",
    tags: ["react", "router", "params"],
  },
  {
    id: "react-54",
    question: "What are protected routes in React?",
    answer:
      "Protected routes restrict access to authenticated users. If an unauthenticated user tries to visit a protected route, they're redirected to the login page. Implementation with React Router v6: const ProtectedRoute = ({ children }) => { const { user } = useAuth(); if (!user) return <Navigate to='/login' replace />; return children; }. Usage: <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />. The replace prop prevents the login page from being added to history (so back button doesn't go back to it).",
    category: "React Router",
    tags: ["react", "router", "authentication"],
  },

  // ─── FORMS ───────────────────────────────────────────────────────────────
  {
    id: "react-55",
    question: "How do you handle forms in React?",
    answer:
      "Two approaches: Controlled (React state drives the input): const [email, setEmail] = useState(''); <input value={email} onChange={e => setEmail(e.target.value)} />. All input values are in React state, making validation and submission easy. Uncontrolled (ref-based): const emailRef = useRef(); access value on submit with emailRef.current.value. Controlled is the standard for forms with validation. For complex forms, libraries like React Hook Form (performant, minimal re-renders) or Formik (feature-rich) are popular.",
    category: "Forms",
    tags: ["react", "forms"],
  },
  {
    id: "react-56",
    question: "What is React Hook Form and why use it?",
    answer:
      "React Hook Form is a form library that minimises re-renders by using uncontrolled inputs with refs instead of controlled state. It provides useForm hook: const { register, handleSubmit, formState: { errors } } = useForm(). Fields are registered: <input {...register('email', { required: true, pattern: /\\S+@\\S+/ })}/>. Errors are in formState.errors. Benefits: minimal re-renders (only renders on submit/validation), tiny bundle size, easy validation with rules or Yup schema, TypeScript support. Much more performant than Formik for large forms.",
    category: "Forms",
    tags: ["react", "forms", "react-hook-form"],
  },

  // ─── ERROR HANDLING ───────────────────────────────────────────────────────
  {
    id: "react-57",
    question: "What is an Error Boundary in React?",
    answer:
      "An Error Boundary is a class component that catches JavaScript errors anywhere in its child component tree and displays a fallback UI instead of crashing the whole app. It implements componentDidCatch(error, info) and static getDerivedStateFromError(). Wrap sections of your app: <ErrorBoundary fallback={<Error />}><UserDashboard /></ErrorBoundary>. Error boundaries do NOT catch: errors in event handlers, async code (useEffect), server-side rendering errors, or errors in the error boundary itself. Functional component error boundaries are not yet supported — must be a class component (or use a library like react-error-boundary).",
    category: "Error Handling",
    tags: ["react", "error-boundary", "error-handling"],
  },
  {
    id: "react-58",
    question: "What is the react-error-boundary library?",
    answer:
      "react-error-boundary provides a ready-made ErrorBoundary component and useErrorBoundary hook so you don't have to write a class component. <ErrorBoundary FallbackComponent={ErrorFallback} onReset={resetApp}>. The FallbackComponent receives error and resetErrorBoundary props. useErrorBoundary() gives you showBoundary(error) to manually trigger an error boundary from async code or event handlers (which class-based error boundaries can't catch). It's the recommended way to handle errors in React applications today.",
    category: "Error Handling",
    tags: ["react", "error-boundary"],
  },

  // ─── ADVANCED PATTERNS ────────────────────────────────────────────────────
  {
    id: "react-59",
    question: "What is the Render Props pattern?",
    answer:
      "Render Props is a pattern where a component receives a function as a prop and calls it to determine what to render, sharing logic without determining the UI. Example: <DataFetcher url='/api/users' render={data => <UserList data={data} />} />. Or using children as a function: <Toggle>{(isOn, toggle) => <button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>}</Toggle>. This pattern was popular before hooks. Today, custom hooks largely replace render props for sharing logic, but render props are still useful for some patterns like compound components.",
    category: "Advanced Patterns",
    tags: ["react", "patterns", "render-props"],
  },
  {
    id: "react-60",
    question: "What is the Compound Components pattern?",
    answer:
      "Compound Components is a pattern where multiple components work together sharing implicit state via Context, giving the consumer flexible control over rendering. Example: <Select> <Select.Option value='1'>One</Select.Option> <Select.Option value='2'>Two</Select.Option> </Select>. Select manages state internally and shares it via Context with Select.Option — without requiring explicit prop passing. Used by headless UI libraries like Radix UI and Headless UI. It's expressive, flexible, and separates the logic from the rendering structure.",
    category: "Advanced Patterns",
    tags: ["react", "patterns", "compound-components"],
  },
  {
    id: "react-61",
    question: "What is Portals in React?",
    answer:
      "Portals render a child component into a different DOM node than the parent's DOM subtree. ReactDOM.createPortal(child, domNode) renders child inside domNode regardless of where the component is in the React tree. Common use cases: modals, tooltips, and dropdowns that need to visually escape an overflow:hidden or z-index constraint from a parent. Even though the portal renders outside the parent DOM, React event bubbling still works through the React component tree — not the DOM tree.",
    category: "Advanced Patterns",
    tags: ["react", "portals"],
  },
  {
    id: "react-62",
    question: "What is React.forwardRef?",
    answer:
      "By default, you cannot pass a ref to a functional component — ref is not a normal prop. forwardRef lets a functional component accept a ref and forward it to a DOM element or child component inside it. const Input = React.forwardRef((props, ref) => <input ref={ref} {...props} />). Now the parent can do const inputRef = useRef(); <Input ref={inputRef} /> and call inputRef.current.focus(). Commonly used in UI component libraries to expose DOM access to consumers.",
    category: "Advanced Patterns",
    tags: ["react", "forwardRef", "ref"],
  },
  {
    id: "react-63",
    question: "What is useImperativeHandle?",
    answer:
      "useImperativeHandle customises the instance value exposed to the parent when using forwardRef. Instead of exposing the raw DOM node, you expose a controlled API. Example: useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus(), clear: () => setVal('') })). The parent can only call focus() and clear() — it can't access the full DOM node. Used in UI libraries to provide a clean, controlled API to consumers while hiding internal implementation details.",
    category: "Advanced Patterns",
    tags: ["react", "useImperativeHandle", "ref"],
  },

  // ─── REACT 18 FEATURES ────────────────────────────────────────────────────
  {
    id: "react-64",
    question: "What are the major features introduced in React 18?",
    answer:
      "React 18 key features: Automatic Batching — state updates inside setTimeout, Promises, and native event handlers are now batched automatically (previously only in React event handlers). Concurrent Rendering — rendering can be interrupted, paused, and resumed. Transitions API — useTransition and startTransition mark non-urgent updates so React can prioritise user interactions. Suspense improvements — data fetching with Suspense support. New hooks: useId, useTransition, useDeferredValue, useSyncExternalStore. New createRoot() API replaces ReactDOM.render().",
    category: "React 18",
    tags: ["react", "react-18", "concurrent"],
  },
  {
    id: "react-65",
    question: "What is automatic batching in React 18?",
    answer:
      "Batching groups multiple state updates into a single re-render for performance. Before React 18, batching only happened inside React event handlers. State updates in setTimeout, Promises, or native events caused separate re-renders. React 18 automatically batches all updates everywhere: setTimeout(() => { setCount(c => c+1); setFlag(f => !f); }, 0) — now causes only one re-render instead of two. To opt out: use ReactDOM.flushSync(() => setState(val)) to force an immediate render, but this is rarely needed.",
    category: "React 18",
    tags: ["react", "react-18", "batching"],
  },
  {
    id: "react-66",
    question: "What is useTransition?",
    answer:
      "useTransition marks a state update as non-urgent (a transition), allowing React to keep the UI responsive by interrupting the transition if a more urgent update comes in. const [isPending, startTransition] = useTransition(). Wrap slow updates: startTransition(() => setFilter(input)). isPending is true while the transition is processing. Use for: filtering/searching large lists, tab switches, navigation. React renders the previous state while computing the new state in the background — the UI stays interactive. Without it, a slow filter could block the input from updating.",
    category: "React 18",
    tags: ["react", "react-18", "useTransition", "concurrent"],
  },
  {
    id: "react-67",
    question: "What is useDeferredValue?",
    answer:
      "useDeferredValue is similar to useTransition but for deferring a value rather than wrapping an update. const deferredQuery = useDeferredValue(query). The deferred value lags behind the actual value during a transition — React renders with the old value first (keeping it responsive) and then updates to the new value when the browser is idle. Use when you don't control the state update (it comes from a parent via props) — you can't wrap it in startTransition. Example: expensive list filtering where the input is controlled by the parent.",
    category: "React 18",
    tags: ["react", "react-18", "useDeferredValue"],
  },

  // ─── PRACTICAL & TOOLING ──────────────────────────────────────────────────
  {
    id: "react-68",
    question: "What is Vite? How is it different from Create React App?",
    answer:
      "Vite is a modern frontend build tool that uses native ES modules for near-instant dev server startup and hot module replacement (HMR). Create React App uses Webpack which bundles the entire app even in development — slow startup on large projects. Vite only transforms files on demand. For production, Vite uses Rollup. CRA is largely deprecated now — Vite (or Next.js for SSR) is the recommended starting point. Vite also has first-class TypeScript support, fast HMR, and a simple config file.",
    category: "Practical & Tooling",
    tags: ["react", "vite", "tooling"],
  },
  {
    id: "react-69",
    question: "What is Next.js and when would you use it over plain React?",
    answer:
      "Next.js is a React framework that adds server-side rendering (SSR), static site generation (SSG), file-based routing, API routes, and image optimisation on top of React. Use Next.js when: you need SEO (SSR/SSG pre-renders HTML that crawlers can index), faster initial page loads (server-rendered HTML), built-in routing without React Router, API backend in the same project, or image and font optimisation. Use plain React (Vite) for SPAs where SEO is not critical — admin dashboards, internal tools, highly interactive apps.",
    category: "Practical & Tooling",
    tags: ["react", "nextjs", "ssr"],
  },
  {
    id: "react-70",
    question:
      "What is server-side rendering (SSR) vs client-side rendering (CSR)?",
    answer:
      "CSR: browser downloads an empty HTML shell, downloads JS bundle, React runs in browser, renders the UI. Initial load is slow (blank page until JS loads). SEO is poor (crawlers may not execute JS). Great for apps where SEO doesn't matter. SSR: server renders the full HTML for each request and sends it to the browser. User sees content immediately (faster FCP). SEO is excellent. Then React 'hydrates' — attaches event listeners to the server-rendered HTML. Trade-off: server has more work per request. Next.js provides both SSR and SSG (pre-renders at build time).",
    category: "Practical & Tooling",
    tags: ["react", "ssr", "csr", "rendering"],
  },
  {
    id: "react-71",
    question: "What is React Query (TanStack Query)?",
    answer:
      "React Query is a data-fetching and server state management library. It handles loading/error states, caching, background refetching, pagination, and cache invalidation — all things you'd otherwise implement manually with useEffect + useState. const { data, isLoading, error } = useQuery({ queryKey: ['users'], queryFn: fetchUsers }). The queryKey determines caching — same key = same cached data. useMutation handles POST/PUT/DELETE with optimistic updates and cache invalidation. It separates server state (API data) from client state (UI state), which is a cleaner architecture.",
    category: "Practical & Tooling",
    tags: ["react", "react-query", "data-fetching"],
  },
  {
    id: "react-72",
    question: "What is the difference between Axios and Fetch API?",
    answer:
      "Fetch is the built-in browser API for HTTP requests — no extra library needed, returns Promises. Limitations: doesn't reject on HTTP error status codes (only rejects on network failure), no request cancellation natively, no request/response interceptors. Axios is a third-party library built on XMLHttpRequest: automatically parses JSON, rejects on non-2xx status codes, supports request/response interceptors (add auth headers globally), request cancellation via AbortController, and works in Node.js too. For most React apps, Axios is preferred for its convenience. For simple cases, Fetch is fine.",
    category: "Practical & Tooling",
    tags: ["react", "axios", "fetch", "http"],
  },
  {
    id: "react-73",
    question: "How do you handle API calls in React?",
    answer:
      "Pattern with useEffect: useEffect(() => { let cancelled = false; setLoading(true); fetchData().then(data => { if (!cancelled) setData(data); }).catch(setError).finally(() => { if (!cancelled) setLoading(false); }); return () => { cancelled = true; }; }, [deps]). The cancellation flag prevents state updates on unmounted components. Better: extract into a custom useFetch hook, or use React Query which handles all this automatically. Never make API calls outside useEffect in render — it runs on every render.",
    category: "Practical & Tooling",
    tags: ["react", "api", "data-fetching"],
  },
  {
    id: "react-74",
    question: "What is Tailwind CSS and how do you use it with React?",
    answer:
      "Tailwind CSS is a utility-first CSS framework — you compose styles by applying small, single-purpose classes directly in JSX instead of writing custom CSS. <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>Click me</button>. No CSS files needed for most styling. Benefits: no naming conflicts, consistent design tokens, no unused CSS in production (purges unused classes). Works perfectly with React — install via npm, configure tailwind.config.js with your content paths. Pair with clsx or cn utility to conditionally apply classes.",
    category: "Practical & Tooling",
    tags: ["react", "tailwind", "styling"],
  },
  {
    id: "react-75",
    question: "What are React DevTools?",
    answer:
      "React DevTools is a browser extension (Chrome, Firefox) for inspecting and debugging React applications. Features: Components tab (inspect component tree, view/edit props and state, see which hooks are in use), Profiler tab (record renders, see which components rendered and why, measure render duration). In the Components tab, you can select a component and inspect its current props, state, and context values. The Profiler helps identify performance bottlenecks — components with long render times or unnecessary re-renders.",
    category: "Practical & Tooling",
    tags: ["react", "devtools", "debugging"],
  },
  {
    id: "react-76",
    question: "What is TypeScript with React?",
    answer:
      "TypeScript adds static typing to React. You type props with interfaces: interface ButtonProps { label: string; onClick: () => void; disabled?: boolean; } const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => .... Type useState: const [user, setUser] = useState<User | null>(null). Type events: const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}. Benefits: catch errors at compile time, better IDE autocomplete, self-documenting components, safer refactoring. Most new React projects use TypeScript by default.",
    category: "Practical & Tooling",
    tags: ["react", "typescript"],
  },
  {
    id: "react-77",
    question: "What is Storybook?",
    answer:
      "Storybook is a development environment for building and documenting UI components in isolation. Each 'story' is a use case of a component with specific props. It lets you develop, test, and showcase components without running the full application. Benefits: develop components in isolation without needing backend data, automatic component documentation, visual regression testing, easy sharing with designers and stakeholders. Widely used in design systems and component libraries. Popular in teams that maintain shared UI component libraries.",
    category: "Practical & Tooling",
    tags: ["react", "storybook", "tooling"],
  },
  {
    id: "react-78",
    question:
      "What is the difference between default export and named export in React components?",
    answer:
      "Default export: export default Button — imported without curly braces, can be imported with any name: import Btn from './Button'. Only one default export per file. Named export: export const Button = ... — imported with curly braces matching the exact name: import { Button } from './Button'. Multiple named exports per file. Best practice for components: use default export for the main component in a file. Use named exports for utility functions or multiple related components in one file. React.lazy() only works with default exports.",
    category: "Practical & Tooling",
    tags: ["react", "modules", "exports"],
  },
  {
    id: "react-79",
    question: "How do you optimise images in React?",
    answer:
      "Techniques: use correct image format (WebP for photos, SVG for icons), lazy load images below the fold with loading='lazy' attribute, use responsive images with srcSet and sizes, compress images before serving, use a CDN for image delivery. In Next.js, the <Image> component handles all of this automatically. In plain React, use the Intersection Observer API or react-lazyload library. Avoid importing large images directly — serve them from a CDN or static file server and reference by URL.",
    category: "Practical & Tooling",
    tags: ["react", "performance", "images"],
  },
  {
    id: "react-80",
    question: "What is prop types in React?",
    answer:
      "PropTypes is a runtime type-checking library for React props. Import PropTypes from 'prop-types' and define: Button.propTypes = { label: PropTypes.string.isRequired, onClick: PropTypes.func.isRequired, disabled: PropTypes.bool }. In development, React logs warnings if props don't match the defined types. PropTypes are removed in production builds. Today, TypeScript is preferred over PropTypes because TypeScript checks types at compile time (earlier, better errors) while PropTypes only check at runtime. Use TypeScript for new projects.",
    category: "Practical & Tooling",
    tags: ["react", "propTypes", "typescript"],
  },
];

export default reactQuestions;
