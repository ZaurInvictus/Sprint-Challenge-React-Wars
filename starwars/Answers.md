# Answers

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a UI library that is used in various forms to create complex, rich user interfaces. Facebook had a need to build something that could power their user experiences in such a way that was decoupled and unconcerned when and where the data was received.
DOM operations are quite expensive in terms of performance, and any application that has much of DOM operations in the background will render slowly.
React solves this problem, without even having the page reload. It does by a concept called virtual DOM. When a page is rendered using React, the state of the DOM tree structure/hierarchy is stored, and when there any updates to be made to the UI, it does a diff on the previous (old) DOM tree with the new one, and updates only the ones that have changed. In this way, lots of DOM operations/refreshes are reduced, improving performance considerably.

- [ ] What does it mean to _think_ in react?

One of the many great parts of React is how it makes you think about apps as you build them. 
Step 1: Break The UI Into A Component Hierarchy
The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names. If you’re working with a designer, they may have already done this, so go talk to them! Their Photoshop layer names may end up being the names of your React components!
Step 2: Build A Static Version in React
Now that you have your component hierarchy, it’s time to implement your app. The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. It’s best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing.
Step 3: Identify The Minimal (but complete) Representation Of UI State
To make your UI interactive, you need to be able to trigger changes to your underlying data model. React makes this easy with state.
Step 4: Identify Where Your State Should Live
For each piece of state in your application:
Identify every component that renders something based on that state.
Find a common owner component (a single component above all the components that need the state in the hierarchy).
Either the common owner or another component higher up in the hierarchy should own the state.
If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.
Step 5: Add Inverse Data Flow
So far, we’ve built an app that renders correctly as a function of props and state flowing down the hierarchy. Now it’s time to support data flowing the other way: the form components deep in the hierarchy need to update the state in FilterableProductTable.



- [ ] Describe state.

Components data will be stored in component's State. This state can be modified based on user action or other action. when a component state is changed React will re-render the component to the browser.
`state` is a heart of an application that takes blood which is `props` and passes around our application so it can live.
`state` is the data that we have when we need it.
 It's just an `object` that we reference on the `this` keyword.
`state` can be changed via the `setState` method.

- [ ] Describe props.

First of all Props - is an object.
If `state` is a heart of an application so the `props` is a blood which is being passed around our application so it can live.
Unlike `state`, `props` are immutable. Meaning you cannot change the assignment but only read them.
They can be passed from the top down, or even bottom up through event handlers.