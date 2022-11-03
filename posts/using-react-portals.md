---
title: 'Using React Portals'
date: '2022-11-01'
image: transport.webp
excerpt: When we create components in React, normally they exist within the component tree. This is mostly fine, but sometimes we want certain parts of a component to appear outside the component tree, or somewhere entirely different .We can achieve this with react portals .
isFeatured: false
---

## Using React Portals-

To show you how portals work, consider we have the following basic React code inside our App.js file. Here, we want the modal to appear on top of everything else. As such, we've created a div called #modal-container. This is ultimately where we want all of our modals to go into:


import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Modal from './components/Modal.js';

```js

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>

                <button onClick={() => setIsModalOpen(!isModalOpen)}>
                    Click to Open Modal
                </button>
                <Modal modalState={isModalOpen} onClickEvent={() => setIsModalOpen(!isModalOpen)}>
                    This is Modal Content!
                </Modal>
            </header>
            <div id="modal-container"></div>
        </div>
    );
}

export default App;
```

Inside App.js, I've imported a component called Modal. This is our Modal component, which will pop up any time the user clicks the button. Whenever isModalOpen is set to true using setIsModalOpen(), the modal should appear. Otherwise, it'll disappear.

I've also got a bit of CSS to ensure our modals do indeed appear on top of everything else:

```css
#modal-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    height: 100%;
    pointer-events: none;
}

.modal {
    position: absolute;
    top: 200px;
    background: white;
    border-radius: 4px;
    left: calc(50% - 100px);
    width: 200px;
}
```

## Creating our portal-

Creating a potal is pretty easy - there is one function, createPortal(). Instead of returning some DOM in React, we return the Portal instead. createPortal() accepts two arguments - the DOM element we want to return - in this case, the modal - and the DOM element we want to teleport our DOM element to. So our second argument is document.getElementById('modal-container'), since we want to put all of our modals into #modal-container:

```js
import { createPortal } from 'react-dom';

function Modal({modalState, onClickEvent}) {

    if(!modalState) return null;

    return (
        createPortal(
            <div className="modal">
                <button onClick={onClickEvent}>Close Modal</button>
                <div className="modal-content">Modal Content goes here</div>
            </div>, 
            document.getElementById('modal-container')
        )
    );
};

export default Modal;
```
Although we teleported our DOM element to modal-container, it still behaves like a normal React child. Since the Portal still exists in the React tree, features like the context the element is in still work the same.

It should also be noted that although we have modal-container and Modal in the same file, the place you teleport your DOM element to can be anywhere in your React code. So you could teleport it to a completely different sub component, element, or parent anywhere in the DOM. It's pretty powerful, and useful - so use it wisely.

Let's look back at our App.js HTML:

```js
    <!-- .... -->
    <button onClick={() => setIsModalOpen(!isModalOpen)}>
        Click to Open Modal
    </button>
    <Modal modalState={isModalOpen} onClickEvent={() => setIsModalOpen(!isModalOpen)}>
        This is Modal Content!
    </Modal>
</header>
<div id="modal-container"></div>
```
Now, even though Modal sits in our header, it will appear in #modal-container whenever we open the modal using the button:

![Create routes via your file + folder structure](final.png)