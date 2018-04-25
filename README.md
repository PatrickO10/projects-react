## Project Overview
This project goes through the steps of building a React App by following the [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) Steps.

It showcases projects I've built and projects I plan to build.  Users will be able to see a variety of projects and select between finished projects and "under construction" projects.

## Why this project?
This project will help me understand and think in a React way of building an app.  It will help me walk through the thought process of building a searchable project data table using React.

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

---

### Table of Contents
* [Starting With A Mock](#starting-with-a-mock)
* [Step One: Component Hierarchy](#step-1-break-the-ui-into-a-component-hierarchy)
* [Step Two: Build Static Version](#step-two-build-a-static-version-in-react)
* [Step Three: Identify The Minimal (but complete) Representation Of UI State](#step-3-identify-the-minimal-but-complete-representation-of-ui-state)
* [Step 4: Identify Where Your State Should Live](#step-4-identify-where-your-state-should-live)
* [Step 5: Add Inverse Data Flow](#step-5-add-inverse-data-flow)

## Thinking in React

>React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.

### Starting With A Mock

### Step 1: Break The UI Into A Component Hierarchy

##### Technique: Single Responsibility Principle
>* a component should ideally only [do one thing](https://en.wikipedia.org/wiki/Single_responsibility_principle). If it ends up growing, it should be decomposed into smaller subcomponents.
>
> * break it up into components that represent exactly one piece of your data model.

#### Projects
* Front End Projects
* React Projects
* Full Stack Projects

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
  * Start with building the components higher up in the hierarchy (FilterableProjectTable).
* Bottom-up:
  * Start with building the components lower in the hierarchy (ProjectRow). 


#### A Brief Interlude: Props vs State

>There are two types of “model” data in React: props and state. It’s important to understand the distinction between the two; skim the [official React docs](https://reactjs.org/docs/interactivity-and-dynamic-uis.html) if you aren’t sure what the difference is.

### Step 3: Identify The Minimal (but complete) Representation Of UI State

* Think of the minimal set of mutable **state** that your app needs.
* [DRY: Don't Repeat Yourself.](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* Compute everything else you need on-demand.

> For example, if you’re building a TODO list, just keep an array of the TODO items around; don’t keep a separate state variable for the count. Instead, when you want to render the TODO count, simply take the length of the TODO items array.
> 
#### All the pieces of Data in the application:
* The original list of projects
* The search text the user has entered
* The value of the checkbox
* The filtered list of projects

#### Go through each one and figure out which one is state by asking three questions about each piece of data:
1. Is it passed in from a parent via props? If so, it probably isn't state.
2. Does it remain unchanged over time? If so, it probably isn't state.
3. Can you compute it based on any other state or props in your component? If so, it isn't state.

* The original list of projects (**not state**)
  - passed in as props 
* The search text (**state**)
  - changes over time
  - cannot be computed from anything
* The checkbox (**state**)
  - changes over time
  - cannot be computed from anything
* The filtered list of projects (**not state**)
  - can be computed by combining the original list of projects with the search text and value of the checkbox.

**State:**
* The search text the user has entered
* The value of the checkbox

---

### Step 4: Identify Where Your State Should Live

After finding out the minimal set of app state, identify which component mutates, or owns, this state.

>Remember: React is all about one-way data flow down the component hierarchy. It may not be immediately clear which component should own what state. This is often the most challenging part for newcomers to understand, so follow these steps to figure it out:

For each piece of state in your application:
* Identify every component that renders something based on that state.
* Find a common owner component (a single component above all the components that need the state in the hierarchy).
* Either the common owner or another component higher up in the hierarchy should own the state.
* If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

Process the strategy for this application:
* `ProjectTable` needs to filter the project list based on **state** and `SearchBar` needds to display the search text and checked state.
* The common owner component is `FilterableProjectTable`
* The filter text and checked value should live in the `FilterableProjectTable`

---

### Step 5: Add Inverse Data Flow

**Objective**: 
* have the form components deep in the hierarchy update the state in `FilterableProjectTable`
* Whenever the user updates the form, update the **state** to reflect the user input.

The `FilterableProjectTable` will pass callbacks to `SearchBar` that will fire whenever the state should be updated.

Using the `onChange` event on the inputs will notify it.

The app will be updated when the callbacks passed by `FilterableProjectTable` call `setState()`.


