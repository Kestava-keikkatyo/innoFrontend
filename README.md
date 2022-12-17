# Kestävä Keikkatyö - KeikkaKaveri #

## Table of Contents ##
* [Introduction](#introduction)
  * [What is KeikkaKaveri intended for?](#what-is-keikkakaveri)
  * [Priorities and ideas for future developers](#priorities-and-ideas-for-future-developers)
* [Instructions for developers](#instructions-for-developers)
  * [Frontend stack](#frontend-stack)
  * [Setup](#setup)
    * [Cloning](#cloning)
    * [Running locally](#running-locally) 
  * [AWS & CI/CD](#aws--cicd)
    * [Development](#development)
  * [Docs generated by npx](#docs-generated-by-npx)

## Introduction

### What is KeikkaKaveri

KeikkaKaveri is a web app developed to assist temporary workers in their work.

KeikkaKaveri is developed by Metropolia in collaboration with various organizations for Työturvallisuuskeskus(TTK, the Centre for Occupational Safety). 

The app is developed to fit/implement parts of the model provided by Tampereen teknillinen yliopisto(TTY, Tampere University of Technology), namely the three-way communication of relevant parties (agency, worker, customer business) and to display information relevant to all who need it.

### Priorities and ideas for future developers

Priorities for future development should revolve around the three-way-interface that includes the worker, their agency and the customer. The app should also continue to implement the TTY model.

Ideas for future development on frontend:
  1. Internationalization: Accessible in Finnish, Swedish and English. Translations soulld be checked also
  2. Personalization: Revamp the UI of the three-way-interface design to match the new design
  3. Databank: A full revamp of the databank according to designs
  4. Documentation: Generating (automated) documentation for the codebase
  5. Testing: Much of the project is not covered (reducers partly and only LogInForm.tsx and SignUpForm.tsx have been tested)

## Instructions for developers

### Frontend stack

React/Redux and Material UI

Testing/Deployment: Jest & AWS

### Setup

To run this project locally you need:

* Node.js (lts)
* Git
* Code editor of your choice (VSCode or IntelliJ IDEA recommended)
* [Backend](https://github.com/Kestava-keikkatyo/innoBackend) with MongoDB connection

You can install Visual Studio Code from [here](https://code.visualstudio.com/).

### Cloning

Start by downloading the zip file of this project from GitHub.

Or if you have Git installed

```
$ git clone https://github.com/Kestava-keikkatyo/innoFrontend.git
```

### Running locally

Run ```npm install``` to install all necessary dependencies. 

Run frontend locally by running the following commands:

```
cd (your_path)/innoFrontend
npm start
```

## AWS & CI/CD

Frontend of the app is served by Amazon CloudFront content delivery network. Static files are hosted in Amazon S3 bucket. 
More detailed description of the architecture can be found in the project's Google drive folder.

### Development

To publish any changes to S3 bucket:

- Pull any recent changes from the main branch (`development`)
- Create a new branch
- Make any necessary changes
- Commit changes
- Publish your branch
- Make a PR (Pull Request) and wait for the `Continuous Integration` action to run its course
   - If the action doesn't go through (fails at tests or build), check the details of the action and make changes accordingly  
   ❗ _Do NOT merge if `Continuous Integration` action fails_ ❗
   - If the action goes through, merge the PR to main branch
- An action called `Continuous Deployment` is triggered upon push to main branch, which will automatically build the project and publish it to the S3 bucket

> For manual publishing to S3 bucket:
>
> - Run the following command
> ```
> npm run deploy
> ```
> - Connect your development enviroment to AWS
>    - Guide for doing it with VS Code: https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/setup-toolkit.html

### Docs generated by npx

For documentation generated by npx(how to run locally, tests, dependencies etc.) see the [the old README](https://github.com/Kestava-keikkatyo/innoFrontend/blob/development/README_old.md)

