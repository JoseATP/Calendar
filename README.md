# Codelitt Calendar Interview

Basic calendar to create, check and edit reminders.

Design by Codelitt [figma link](https://www.figma.com/file/TR3YH8mNhFHecK6lm8kj21/Codelitt-Calendar?node-id=0%3A1)

Application created by [Create react app](https://create-react-app.dev/)
## Installation

Clone this repository on your computer. You will need node and npm installed globally on your machine.

Open a bash on the project path and run the next command:

```bash
npm install
```

## Usage

```bash
npm start
```
The above command will run the project at port 3000 to show the app open [http://localhost:3000/](http://localhost:3000/) in your browser.

## Run tests
```bash
npm test
```
## Libraries implemented

| First Header      | Second Header |
| ----------------  | ------------- |
| React Router Doom | [https://reactrouter.com/en/main](https://reactrouter.com/en/main)  |
| Redux             | [https://es.redux.js.org/](https://es.redux.js.org/) |
| Redux-thunk       | [https://www.npmjs.com/package/redux-thunk](https://www.npmjs.com/package/redux-thunk)|
| TypeScript        | [https://www.typescriptlang.org/](https://www.typescriptlang.org/)| 
| Styled Components | [https://styled-components.com/](https://styled-components.com/) | 
| Testing Library   | [https://testing-library.com/](https://testing-library.com/) | 

## Improvements
- Add persintance to avoid lose changes after reloading app.
-  The application works for desktops, so we could improve it to support many devices and resolutions.
-  Show alerts when an event is coming ( Notification).
-  Make a progressive web app, so we can install an app on our cellphones.
-  Create an account to save your events and with that future available perhaps create groups to share your remainders with other members or accounts.
- Implement backend connection.

## Conclutions and challengues
This project was a good way of proving and putting into practice most of the necessary technologies to create a scalable project, I had to implement many libraries and the previous knowledge that I've been getting through my career.


<details>
<summary>Original content</summary>
## Instructions

The goal of this exercise is to create a demo calendar application using React. We strongly recommend create-react-app to make the bootstrapping of your application really easy.

Please don't use a `calendar` library, we would like to see your own calendar logic.


### The Task

In this task we are building a single month view of a calendar for the current month. [Here](https://www.figma.com/file/TR3YH8mNhFHecK6lm8kj21/Codelitt-Calendar?node-id=0%3A1) you have the design we are expecting for this task.


### Features & Requirements:

* You need to use one of the following state management libraries: Relay, Apollo, MobX or Redux
* Ability to add a new “reminder” (max 30 chars) for a user entered day and time.
* Display reminders on the calendar view in the correct time order.
* Allow the user to select a color when creating a reminder and display it appropriately.
* Properly handle overflow when multiple reminders appear on the same date.
* Ability to edit reminders – including changing text, day and time & color.
* Ability to delete reminders.
* Expand the calendar to support more than the current month.

### Notes:

1. We expect the solution to be as close to the final design as possible, but we will understand if there are small differences.
2. Make sure to provide a tutorial on how to run your application
3. The data should be retained across different page views, but it’s not necessary to persist it beyond a browser refresh.

## Evaluation

| Functionality     |                                                              | Possible Points |
|-------------------|--------------------------------------------------------------|-----------------|
|                   | Matches the proposed requirements                            | 25              |
|                   | Console do not display any error/warning                     | 10              |
|                   | User Experience                                              | 15              |
| **Code Quality**  |                                                              | --              |
|                   | Code format, readability, maintainability, etc.              | 10              |
|                   | Folders and packages structure                               | 10              |
|                   | Separation of components and logic by clear responsibilities | 20              |
| **Testing**       |                                                              | --              |
|                   | Has tests                                                    | 5               |
| **Documentation** |                                                              | --              |
|                   | Has a README.md with instructions                            | 5               |
| **Total**         |                                                              | 100             |

### Bonus Points:
1. If you deploy the application in any server and share the link with us
2. If provide thoughts on what you could improve on your code given more time and incentives

## F.A.Q.

### Is it necessary to connect to a backend?
No, this is a frontend only exercise.

### How do you evaluate the exercise?
For every exercise we have two senior frontend engineers from our team reviewing the code and the functionality and giving a score for each line item as shown in the previous table.

### How can I deliver the exercise?
To deliver the exercise, you should clone this repository and work on a new branch. When you'll consider it completed, just push the branch and open a Merge Request.

### Will I have access to the evaluation?
By default we only send the result, however you can feel free to request the full evaluation and we will share it with you as well as the final score.

</details>