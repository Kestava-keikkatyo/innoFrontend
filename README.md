# Kestävä Keikkatyö - KeikkaKaveri #

## Table of Contents ##
* [Introduction](#introduction)
    * [What is KeikkaKaveri intended for?](#what-is-keikkakaveri)
    * [Priorities and ideas for future developers](#priorities-and-ideas)
* [Instructions for developers](#insctruction-for-developers)
  * [Stack](#stack)
  * [Setup](#setup)
    * [AWS](#aws)
    * [Docs generated by npx](#docs-generated)

## Introduction

### What is KeikkaKaveri

KeikkaKaveri is a web app developed to assist temporary workers in their work.

KeikkaKaveri is developed by Metropolia in collaboration with various organizations for Työturvallisuuskeskus(TTK, the Centre for Occupational Safety). 

The app is developed to fit/implement parts of the model provided by Tampereen teknillinen yliopisto(TTY, Tampere University of Technology), namely the three-way communication of relevant parties (agency, worker, customer business) and to display information relevant to all who need it.


### Priorities and ideas for future developers

Priorities for future development should revolve around the three-way-interface that includes the worker, their agency and the customer. The app should also continue to implement the TTY model.

Ideas for future development:
  1. Internationalization: Accessible in Finnish, Swedish and English.
  2. Admin role: Develop a role for administration to maintain the userspace - adding articles to the "feed", managing users(enforcing terms etc).
  3. Seed data 
  4. Documentation: Generating (automated) documentation for the codebase.
  5. Testing: Much of the project is not covered.


## Instructions for developers

### Stack

Frontend: React/Redux and Material UI

Backend: Node.js, Express.js and MongoDB

Testing/Deployment: AWS & Jenkins

### Setup

To run this project locally you need:

* Node.js (lts)
* Git
* A text editor of your choosing
* [Backend](https://github.com/Kestava-keikkatyo/innoBackend) with MongoDB connection

#### AWS

Frontend of the app is served by Amazon CloudFront content delivery network. Static files are hosted in S3 bucket. 
More detailed description of the architecture can be found in the project's Google drive folder.

To publish static files in the build folder to s3-bucket, run
```
npm run deploy
```
Before you can publish something to AWS you need to connect your development enviroment to AWS.
Here's the guide for doing it with VS Code: https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/setup-toolkit.html

#### Docs generated by npx

For documentation generated by npx(how to run locally, tests, dependencies etc.) see the [the old README](https://github.com/Kestava-keikkatyo/innoFrontend/blob/development/README_old.md)

