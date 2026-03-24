
### react js
- it creates a virtual dom in the main memory instead of creating a real dom in the browser 
- when we make any changes to the virtual dom, react compares it with the  previous version of the virtual dom and updates only the necessary parts of the real dom in the browser, which makes it faster and more efficient than traditional js.

### steps to create a react app

varun@Varuns-MacBook-Air react-app-1 % npm create vite@latest
Need to install the following packages:
create-vite@9.0.2
Ok to proceed? (y) y


> npx
> create-vite

│
◇  Project name:(means current directory name) react-app-1
│  .
│
◇  Current directory is not empty. Please choose how to proceed:(only if u have some files in the current directory otherwise it will not show this option)
│   - Ignore files and continue
│
◇  Select a framework:
│  - React
│
◇  Select a variant:
│  - JavaScript
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /Users/varun/react-app-1...
│
◇  Installing dependencies with npm...
⠙

added 152 packages, and audited 153 packages in 5m

36 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> react-app-1@0.0.0 dev
> vite


  VITE v8.0.0  ready in 339 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

-------------------------------------------------------------------------------

### legacy webpages and modern webpages

- multi page application (mpa) is a traditional way of building websites where each page is a separate html file and when we click on any link it reloads the entire page from the server, which can be slow and inefficient.

- single page application (spa) is a modern way of building websites where the entire application is loaded in a single html file and the content is updated dynamically without reloading the page, which provides a better user experience.
the server 

### user interface (ui) and user experience (ux)
- in react js we use the concept of components, which are reusable pieces of code that can be used to build the user interface. 
each component can have its own state and props, which allows us to create dynamic and interactive web applications.
this is a component based architecture which makes it easier to manage and maintain the codebase, as we can break down the application into smaller and more manageable pieces.

- chosing a smallest componet is a good practice in react js, as it allows us to create reusable and modular code.



#### jsx
- jsx is a syntax extension for javascript that allows us to write html like code in our javascript
- main.jsx is the entry point of our react application, where we render the root component (App) to the DOM.
- App.jsx is the main component of our application, where we can define the structure and behavior of our application.

we use uppercamelcase for naming our components in react js, which is a convention to differentiate between regular html elements and react components.

### components

- class componets and functional components are two ways to define components in react js.


<test/> -----> <Test/> (upper camel case) is the correct way to define a component in react js, as it follows the convention of using upper camel case for component names.

props is a single object that contains all the properties passed to a component, which allows us to pass data from a parent component to a child component. 
props -> properties
