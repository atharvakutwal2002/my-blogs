---
title: '5 Common Reactjs Anti patterns'
date: '2022-10-25'
image: antipatterns.png
excerpt: 5 Common Reactjs Anti patterns everyone should learn to become Pro .
isFeatured: true
---


## Props Drilling-

Prop drilling occurs when a component must receive props from its parent component, and then pass them down to its child components.

This can create a deeply nested structure that is difficult to understand and maintain. In addition, it can make it difficult to reuse components, since they may be tightly coupled to their parents.

Therefore, it is best to avoid prop drilling by refactoring your code to reduce the depth of nesting. This will make your code more readable and maintainable and will make it easier to reuse components in the future.

To refactor the code one can use state management libraries like redux, however redux is heavy work, so sometimes context API can be a better suitable option.

## Nested Components

In ReactJS, modularization is accomplished through the use of components. It is common to use nested inline components. For example

```js
import React from 'react';
const NestedComponent= props => {
    const ChildComponent = () => {
        return <div>Child Component</div>;
    }
    return (
        <div>
            <ChildComponent />
        </div>
    );
};
export default NestedComponent;
```

However, it is generally considered bad practice to nest these components too deeply.

Nested components can make the code difficult to read and understand, and they can also lead to performance issues.

Whenever the parent component will be called, the inline component will be recreated, even when the component will rerender, it will still be created, and again and again, it will leave you with a performance hole. So it is always better to create your child component separately.

So instead of writing components like the above example, a simple refactor may help in this case.

```js
import React from 'react';const ChildComponent = () => {
   return <div>Child Component</div>;
}const NestedComponent= props => {
    return (
        <div>
            <ChildComponent />
        </div>
    );
};
export default NestedComponent;
```

## Avoid Huge Components-

In Reactjs you can create almost a whole application in one component, there is absolutely nothing that stops you from doing that.

Any experienced software engineer will tell you that one of the worst things you can do is create a huge, monolithic component.


## Index as a key prop-

Many of the ReactJS developers do not understand why a key prop is needed, so when even they write a loop and Reactjs will give them a warning. So they tend to use index and key prop.

## Never do it again, but why?

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.

## Not Memorizing Complex Calculations-

Sometimes developers may need to do heavy calculations in a Reactjs component. It is might take good computing power and slow down the component a little bit, which is ok.

For example 

```js
const ComplexComponent = props => {
    const complexOutput = complexCalculationFunction(props);
    return (
        <div>
            Do Something
        </div>
    );
};
export default ComplexComponent;
```

But as we know component re-renders whenever there is a change in state and prop. so every time this calculation will be done again.

So what if the component can remember the calculation that was done when the factors which determine the calculation have not changed, that will be really good.

The good news is, there is useMemo present, it can be used for Memorizing the calculations.

```js
const ComplexComponent = props => {
    const complexOutput = useMemo(() => complexCalculationFunction(props.a, props.b), [props.a, props.b]);
    return (
        <div>
            Do Something
        </div>
    );
};
export default ComplexComponent;
```

![Create routes via your file + folder structure](inComp.jpeg)