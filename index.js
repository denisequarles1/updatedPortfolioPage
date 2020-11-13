//Packagaes
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//Defines variable used for writing the file
const writeFileAsync = util.promisify(fs.writeFile);

//Function to prompt user
function promptUser() {
  return inquirer.prompt([
    {
      //Gets users name
      type: "input",
      name: "name",
      message: "What is your full name?"
    },

    {
      //Gets users name
      type: "input",
      name: "email",
      message: "What is your email address?"
    },
    {
      //Gets users name
      type: "input",
      name: "phone",
      message: "What is your phone number?"
    },

    {
      //Gets users location
      type: "input",
      name: "location",
      message: "Where are you from?"
    },

    {
      //Gets users bio
      type: "input",
      name: "bio",
      message: "Provide a brief bio?"
    },

    {
      //Gets users GitHub name
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },

    {
      //Gets LinkedIn URL
      type: "input",
      name: "linkedin",
      message: "What is your LinkedIn URL?"
    },
  ]);
}

function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Biography <span class="badge badge-secondary">${answers.bio}</span></h3>
    <ul class="list-group">
    <li class="list-group-item">Email address: ${answers.email}</li>
    <li class="list-group-item">Phone Number: ${answers.phone}</li>
      <li class="list-group-item">GitHub: ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
    <h3>Resume</h3>
    <li> Resume Link: <a href= https://github.com/denisequarles1/updatedPortfolioPage/blob/main/Denise%20Quarles%20Resume%20(002).pdf> Resume PDF</a>  </li>

    <br>
    <h3>Examples of Student Work </h3>
        <li> Project Title: Weather Dashboard </li>
        <li> GitHub Link: <a href= https://github.com/denisequarles1/weatherDashboard>Weather Dashboard </a> </li>
        <li> Screenshot of Deployed Application: </li> 
        <br>
        <img src="weatherscreenshot.JPG" alt="weather" style="width:800px;height:500px;">
    <br>

     <h3>Examples of Student Work </h3>
        <li> Project Title: Day Planner </li>
        <li> GitHub Link: <a href https://github.com/denisequarles1/workdayscheduler>WorkDay Scheduler </a> </li>
        <li> Screenshot of Deployed Application: </li> 
        <br>
        <img src="dayplannerscreenshot.JPG" alt="planner" style="width:800px;height:500px;">
  </div>
</div>
</body>
</html>`;
}

// function to initialize program
async function init() {
  console.log("hi")
  try {
    // Prompt user questions
    const answers = await promptUser();

    const html = generateHTML(answers);

    // Writes answers to index HTML file
    await writeFileAsync("index.html", html);

    console.log("Successfully wrote to index.html");
  } catch(err) {
    console.log(err);
  }
}

// function call to initialize program
init();
