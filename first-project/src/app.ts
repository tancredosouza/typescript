const projects: Project[] = [];

const PROJECT_INPUT_ID: string = "project-input";

const projectSubmissionForm = renderFormFromTemplateWithId(PROJECT_INPUT_ID);
const singleProjectTemplate = getTemplateFromId("single-project");

function renderFormFromTemplateWithId(id: string) {
  let templateElement = getTemplateFromId(id);
  let formCanvas = document.createElement("form");

  formCanvas.append(templateElement);

  return formCanvas;
}

function getTemplateFromId(id: string): Node {
  let templateElement = document.getElementById(id) as HTMLTemplateElement;
  let clone = templateElement.content.cloneNode(true);

  return clone;
}

setupAddProjectButton();

function setupAddProjectButton(): void {
  let submitProjectButton = projectSubmissionForm.getElementsByTagName(
    "button"
  )[0] as HTMLButtonElement;

  submitProjectButton.addEventListener("click", createAndSaveProject);
}

function createAndSaveProject(): void {
  const projectFromUserInput = createProjectFromUserInput();

  projects.push(projectFromUserInput);
}

function createProjectFromUserInput(): Project {
  const FORM_CLASS: string = ".form-control";
  const divs = projectSubmissionForm.querySelectorAll(FORM_CLASS);

  const TITLE_INDEX = 0;
  const title: string = divs[TITLE_INDEX].getElementsByTagName("input")[0]
    .value;

  const DESCRIPTION_INDEX = 1;
  const description: string = divs[DESCRIPTION_INDEX].getElementsByTagName(
    "textarea"
  )[0].value;

  const TEAM_SIZE_INDEX = 2;
  const teamSize: number = +divs[TEAM_SIZE_INDEX].getElementsByTagName(
    "input"
  )[0].value;

  return new Project(title, description, teamSize);
}

document.body.append(projectSubmissionForm);

// Classes definition

class Project {
  constructor(
    public title: string,
    public description: string,
    public teamSize: number
  ) {}
}
