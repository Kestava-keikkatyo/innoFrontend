# Kestävä keikkatyö

## Table of contents

* [About](#about)
* [Setup](#setup)
  * [Cloning](#cloning)
  * [VSCode](#vscode)
  * [Running locally](#running-locally)
* [Available scripts](#available-scripts)
  * [Create React App scripts](#create-react-app-scripts)
    * [npm start](#npm-start)
    * [npm test](#npm-test)
    * [npm run build](#npm-run-build)
    * [npm run eject](#npm-run-eject)
  * [npm run lint](#npm-run-lint)
  * [npm run lint-and-fix](#npm-run-lint-and-fix)
  * [npm run docs](#npm-run-docs)
* [Tests](#tests)
  * [Running tests once](#running-tests-once)
  * [Creating coverage report](#creating-coverage-report)

## About

This project is initialized with Create React App. It uses React, Redux for state management, React Router Dom for routing, Material UI for styling and Formik for building forms.

All the dependencies can be seen in the package.json file.

## Setup

To run this project locally you need:

* Node.js (lts)
* Git
* VSCode
* Backend with MongoDB connection

### Cloning

Start by downloading the zip file of this project from GitHub.

Or if you have Git installed

```
$ git clone https://github.com/Inno-Kestava-Keikkatyo/innoFrontend.git
```

### VSCode

You can install Visual Studio Code from [here](https://code.visualstudio.com/).

After the installation is done, download the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to enable linting and allow the execution to run in your workspace.

You don't have to use Visual studio code, any text editor with ESLint support should be fine.

### Running locally

To run this project locally:

```
$ cd (your_path)/innoFrontend
$ npm install
$ npm start
```

You also need to have the [backend](https://github.com/Inno-Kestava-Keikkatyo/innoBackend) set up and running. The backend needs to be run in port 3001 and it also requires MongoDB database connection.

## Available scripts

In the project directory, you can run:

### Create React App scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Publish static files in the build folder to s3-bucket.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`

Runs the linter once and shows any linting errors in the project folder.

Linting rules can be found in the ".eslintrc" file.

You don't have to run this command when you have ESLint extension enabled, linting errors should be highlighted automatically.

### `npm run lint-and-fix`

Runs the linter once and fixes all the linting errors in this project folder.

### `npm run docs`

Creates this projects JSDoc documentation. Destination folder is called docs and it can be found in the root of this project.

JSDoc configuration can be changed in the jsdoc.json file.

## Tests

Tests are created using Jest with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for React components. 

### Running tests once

To run the tests once, in this project directory:

```
$ CI=true npm test
```

### Creating coverage report

To create a coverage report, in this project directory:

```
$ CI=true npm test -- --coverage
```

A coverage report is created in the coverage folder of this project. Coverage folder contains both HTML and Cobertura reports. 