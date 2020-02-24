// Code goes here!
const PROJECT_INPUT_ID: string = "project-input";
const SINGLE_PROJECT_ID = "single-project";
const PROJECT_LIST_ID = "project-list";

let templateElement = document.getElementById(
  PROJECT_INPUT_ID
) as HTMLTemplateElement;
let clone = templateElement.content.cloneNode(true);

//document.body.appendChild(clone);

// displayTemplateOnWebPage(SINGLE_PROJECT_ID);
// displayTemplateOnWebPage(PROJECT_LIST_ID);

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

submitProjectButton.addEventListener("click", function() {
  console.log("Clicked!");
});

// render web page
document.body.append(projectSubmissionForm);
