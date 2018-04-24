This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

---
Following [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) docs

### Table of Contents
1. [Starting With A Mock](#Starting-With-A-Mock)
2. [Step One: Component Hierarchy](#Step-One:-Component-Hierarchy)
3. 

## Thinking in React

>React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.

### Starting With A Mock

#### Step 1: Break The UI Into A Component Hierarchy

##### Technique: Single Responsibility Principle
>* a component should ideally only [do one thing](https://en.wikipedia.org/wiki/Single_responsibility_principle). If it ends up growing, it should be decomposed into smaller subcomponents.

> * break it up into components that represent exactly one piece of your data model.

#### Projects
Front End Projects
React Projects
Full Stack Projects

1. **FilterableProjectTable (Orange)**: Contains the entirety of the projects
2. **SearchBar (blue):** receives all user input
3. **ProjectTable (green):** displays and filters the data collection based on user input
4. **ProjectCategoryRow (turquoise):** displays a heading for each category
5. **ProjectRow (red):** displays a row for each project


### Component Hierarchy:
>Components that appear within another component in the mock should appear as a child in the hierarchy:

* FilterableProjectTable
  - SearchBar
  - ProjectTable
    + ProjectCategoryRow
    + ProjectRow

---

### Step Two: Build A Static Version in React


Easiest way to implement the app is to build a version that takes the data model and renders the UI without any interactivity.

Build components that reuse other components and pass data using props.

Props are a way for passing data from parent to child (Unidirectional flow).

Don't use state at all to build this static version.

State should only be used for interactivity, aka data that changes over time.

#### Top-down or bottom-up?
* Top-down:
  1. Start with building the components higher up in the hierarchy (FilterableProjectTable).
* Bottom-up:
  1. Start with building the components lower in the hierarchy (ProjectRow). 

