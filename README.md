# ExpenseManagementSystem

This project is created to show the details of personal expense. It uses the following features:

## Features
- Add total budget amount
- Add New expense
- Showing remaing budget balance
- Adding category of the expense
- Edit or delete expense
- Modify the budget

## Prerequisite
- Mongodb
- Angular CLI
- NODE JS
- NODEMON
- Any OS (Prefer UBUNTU)

## Executing Procedure
This project consist of two different part:
- Angular Project (FRONT END)
- Node JS Project (BACK END API)

Here are the detailed procedure for individuals:
### Development Angular Project
Clone this projec to your local system and navigate to the root folder of the project and run the following commands in sequence:
1. `npm install`
2. `ng serve  OR ng serve --open`

Now, navigate to `http://localhost:4200/`. The app will automatically load
 
### Development NODE JS server
After cloning this project, in this folder there is **`EMS-server`** zipped folder which is **NODE JS** project.

Extract the folder to your desired location and naviate to that root folder in your terminal and perform these commands in sequence:
1. `npm install`
2. `sudo service mongodb start` (To start mongodb in ubuntu if not started)
2. `nodemon server.js OR node server.js`

**NOTE**: You can put the **EMS-server** folder inside also and perform above commands, it still works. 

## IMPORTANT GLANCE
- Default mongodb database will be created with name **EMS-rt**
- After calling **add expense** api, change the route and see the result, since the result are not instance of subjectbehaviour.