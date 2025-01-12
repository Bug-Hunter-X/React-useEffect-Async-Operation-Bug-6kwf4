# React useEffect Async Operation Bug

This repository demonstrates a common bug in React applications involving asynchronous operations within the `useEffect` hook. The bug is related to incorrect handling of promises and updating the component's state.

## Bug Description
The provided `bug.js` file showcases an incorrect way to handle asynchronous operations in `useEffect` in a React functional component. The problem lies in how the `fetchData` async function and state updates are handled.

## Solution
The `bugSolution.js` file provides the correct approach to resolve the issue. A correct asynchronous operation in `useEffect` ensures that the state updates properly.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` to observe the buggy code.
3. Open `bugSolution.js` to see the corrected code. 
4. Run both to observe the difference in behavior.