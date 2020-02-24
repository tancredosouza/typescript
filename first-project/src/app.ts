// Code goes here!
const PROJECT_INPUT_ID: string = "project-input";

let templateElement = document.getElementById(
  PROJECT_INPUT_ID
) as HTMLTemplateElement;
let clone = templateElement.content.cloneNode(true);

class Project {
  constructor(
    public title: string,
    public description: string,
    public teamSize: number
  ) {}
}

// When user presses 'Add project' button, should output project to console
let projectSubmissionForm = document.createElement("form");
projectSubmissionForm.append(templateElement.content.cloneNode(true));

let submitProjectButton = projectSubmissionForm.getElementsByTagName(
  "button"
)[0] as HTMLButtonElement;

function createProjectFromUserInput() {
  let divs = projectSubmissionForm.querySelectorAll(".form-control");

  let title: string = divs[0].getElementsByTagName("input")[0].value;
  let description: string = divs[1].getElementsByTagName("textarea")[0].value;
  let teamSize: number = +divs[2].getElementsByTagName("input")[0].value;

  console.log(title);
  console.log(description);
  console.log(teamSize);
}

submitProjectButton.addEventListener("click", createProjectFromUserInput);

// render web page
document.body.append(projectSubmissionForm);
