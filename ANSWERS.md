- [ ] Why would you use class component over function components (removing hooks from the question)?
= Legacy code and to make use of all the various react lifecycles

- [ ] Name three lifecycle methods and their purposes.

= componentDidMount(): is called once the component is actually mounted to the DOM.

= componentWillMount(): is essentially the constructor. You can set instance properties that don't affect render, pull data from a store synchronously and setState with it, and other simple side effect free code you need to run when setting up your component.

= shouldComponentUpdate(): This method allows your Component to exit the Update life cycle if there is no reason to apply a new render.

- [ ] What is the purpose of a custom hook? 
= Reusability and less code.


- [ ] Why is it important to test our apps?
= To test for EdgeCases and make sure there are no bugs.