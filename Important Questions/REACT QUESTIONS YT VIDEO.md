### Q. How Virtual DOM is different than the actual DOM?

DOM is an interface that allows the script to update the content, style, and structure of the document. Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.DOM is an interface that allows the script to update the content, style, and structure of the document. Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.

### Q. Diffrence bw Virtual DOM and DOM =

Virtual DOM Real DOM
Changes can be made easily Changes can be expensive
Minimal memory wastage High demand for memory and more wastage
JSX element is updated if the element exists Creates a new DOM every time and element gets updated
Cannot update HTML directly Able to directly manipulate HTML
Faster updates Slow updates

### Q. What is React

React is a widely used JavaScript library that was launched in 2011. It was created by developers at facebook, and it is primarily used for frontend development.
React uses the component-based approach, which ensures to help you build
components that possess high reusability.
React is well known for developing and designing complex mobile user
interfaces and web applications.

    Features=
        Boosts performance and efficiency
        Can other framworks easily.
        High readability
        Reusable components
        Unidirectional state flow.
        Server and client side rendering.
        Live development server

    Disadvantage=
        Sometimes JSX might become complex.
        Beginners can find it tough as it has huge repository and can be overwhelming.
        React has dependencies.

### Q. What is meaning of Virtual DOM

A virtual DOM is a simple JavaScript object that is the exact copy of the corresponding real DOM.
It can be considered as a node tree that consists of elements, their attributes, and other properties.
Using the render function in React, it creates a node tree and updates it based on the changes that occur in the data model.
These changes are usually triggered by users or the actions caused by the system.

### Q. What is JSX?

JSX is the abbreviation of JavaScript XML. It is a file that is used in React to bring out the essence of JavaScript to React and use it for its advantages. - It even includes bringing out HTML and the easy syntax of JavaScript. - This ensures that the resulting HTML file will have high readability, thereby relatively increasing the performance of the application.

### Q. What is React Components.

The components in react are reuaable bits of code, they return the JSX code telling what should be returned.
There are two types of components, Functional and Class Components.

### Q. Rendering in React.

Rendering is a process in react with which react updates the virtual DOM.
In rendering react engine process walks through the virtual DOM and collects current state, props and structure desired change, react updates the virtual DOM using some calculations officially called 'Reconciliation', then compaes it with real DOM too. Then update the needed changes in DOM.

### Q. What is State in React.

State is an javascript object which acts as the memory of the component, stores the information which might update over the lifetime of the component.

### setState

- Allways use setState to update the state of the component ,never update the state directly
  setState has the second argument which works as a callback , setState works asynchronously, when we
  want to update current state of the component we just use setState(prev => prev + 1) like this:

### Q. What are Props in React.

Props in react are the arguments passed in component. It short hand of properties. They are immutable and passed from parent to child.

### Q. Use of arrow function in react.

When we use in higher order functions. Its easy to to bind function.

### Q. Higher order components in react.

They are special type of components, which take components as input, then modify them and returns new component.
Great in sharing information, state manuplation, reuse mutated component

### Q. What is create-react-app?

It is a CLI command to start a pre configured react app.

### Q. What is Redux.

Redux is used to store the state of the application in a signle entity, called as store. We can modify the state by dispatching actions. We can not directly modify it. Its a javascript object.

### Q. Diffrence bw state and prop.

Prop can be changed by parent component.
State can be changed in owner component.
State is mutable but prop is not.
Both crates rerender.

### Q. What is life cycle in react?

Mount / Initial rendering - when it is attached to the DOM. useEffect runs for first time.
Update- When state changes, or something in dependency array changes.
Unmount - Removal of the component, useeffect runs cleanup function, which is added as return statement.

### Q. What is event?

Event is a action which happens in response to the user's activity, as key press / click/ hover.
Event perform some set of activities.

### Q. What is synthetic event?

It is a cross browser wrapper around browser's native event, for better compatibility.
For consistency, and high performance.

### Q. Routing in react diffrent from conventional?

Pages are single entity in react. As opposite to considering every page as new file.
Navigation happens by reissueing the object to create views. Opposite to refreshing the whole page.

### Q. What are stateful components in react?

These are the components, that store some information in memory which changes over the lifecycle.

### Q. What are Refs in react?

Refs is short for references, used to store the reference to a single react component.
Used to manage focus, to initiate animations.

### Q. What are controlled components in react?

They are the components, whose values are controlled by parent, by passing state as a prop.

### Q. Why are routers required in react?

Its used to manage multiple routes when user go to the intended route

### Q. Components of Redux.

Action - Object that describes the call
Reducer- Make changes in store
Store - State and object tree storage.

### Q. Advanage of Redux?

Organized & structured code
Good testing and debugging, as redux function are isolated and independent.
Track actions
Large community.

### Q. What are pure components in react?

Pure components in react are the components which dont rerender when they are updated with the same values of state and props as previous.
Used for performance optimization

### Q.. what is memo in react ?

memo is works as a pure function but this is works in functions components `export default react.memo(components name)`

### Q. What are keys in react?

To keep track of item changes. Generally in map function.

### Q. Controlled and Uncontrolled components?

In comtrolled component data is handled by react itself, but in uncontrolled component data is handled by DOM, and can be accessed with refs.

### Q. What is clone element?

cloneElement lets you create a new React element using another element as a starting point.

### Q. How to avoid Binding in react?

Use arrow function.
Use react hooks.

### Q. What is StrictMode?

It is a Debugging feature provided by react.

### Q. What is the usual reason of react application rendering slowly?

Unnecessory rerendering or number of rerendering operations.
React.memo() for function components.
PureComponents for class components.

### Q. Conditionally add attributes to components?

example snippet- passing disabled attribut if condition met.
`<button { condition && {disabled: true} } > </button> `

### Q. Why prop is passed to super() functio in react?

When user wishes to use this.props in the constructor.

### Q. What are React.propTypes in react.

PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype.
propTypes.bool , func, node, number, string.

### Q. What is react Fiber.

Its a new engine in react.
Added incremental rendering facility in virtual dom. and assigning right priority to updates.

### Q. What are react hooks?

Hooks are used to make use of states and other functionalities without writing a explicit class. It makes managing state much simpler

### Q. Diffrence bw flux and redux?

Comparison
Components
Dispatcher
Number of Stores
State
Storage

    Flex
        Components connected to Flux in React
        Has a dispatcher
        Single store
        Mutable state
        Contains state and  logic

    Redux
        Container components directly connect
        No dispatcher
        Multiple stores
        Immutable state
        State and logic are separate

### 5 Ways to Optimize Your Functional React Components

Avoid arrow functions when possible.
Use useMemo to cache expensive calculations.
Use Fragments instead of empty divs.
Use Throttle to prevent excessive executions.
Use useRef to avoid component re-renders.
