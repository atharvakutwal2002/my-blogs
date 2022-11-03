---
title: 'React Hooks: All You Need '
date: '2022-11-03'
image: hooks.jpg
excerpt: Hooks replaced the way of using class frequently before. It’s easier to understand the complex components and handle the states better.
isFeatured: true
---

## 1. useState-

store the state and change it with setState()

![Create routes via your file + folder structure](usestate.png)

## 2. useReducer

For more complex state logic, the alternative way for useState is useReducer

setup the state with useReducer with reduce function which is a switch…case


****const [state,dispatch]=useReducer(reducer,{count:0,text:showText})****


reducer is the function to change state with conditions

initial the count and text after it

when dispatching the state, means the state changes, then we look for the reducer function.

![Create routes via your file + folder structure](useReducer.png)

The action type decides how the state turns.

When clicking, we can trigger onClick with dispatch according to different types.

![Create routes via your file + folder structure](useReducer2.png)

## 3. useEffect-

the action will call when rendering

Such as fetching the API when the page renders

****useEffect(()=>{…}) Call every time rendering****

****useEffect(()=>{…},[])Call with the condition applied****

For example, Whenever the [?] changes, call.If empty [ ], call once.

![Create routes via your file + folder structure](useEffect.png)

## 4. useRef-

easy to access DOM and manipulate it

return a ‘ref’ object

Value is persisted in the refContainer.current property

![Create routes via your file + folder structure](useRef.png)

useRef(null) set a ref initially

remember to call the ref in the input tag to connect them.

When clicking the button, return the ref value with .current.value

## 7. useContext

![Create routes via your file + folder structure](useContext.png)


**createContext** in the parent component and run with **Provider**

pass the **value** in parent component to child component in attr

![Create routes via your file + folder structure](useContext2.png)

import in the **AppContext** to get the setUsername

**useContext** in the child component and manipulate the state in the parent





