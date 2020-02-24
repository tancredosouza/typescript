// Code goes here!
const PROJECT_INPUT_ID = "project-input";
const SINGLE_PROJECT_ID = "single-project";
const PROJECT_LIST_ID = "project-list";

function displayTemplateOnWebPage(templateId: string) {
  let element = document.getElementById(templateId) as HTMLTemplateElement;
  let clone = element.content.cloneNode(true);

  document.body.appendChild(clone);
}

displayTemplateOnWebPage(PROJECT_INPUT_ID);
displayTemplateOnWebPage(SINGLE_PROJECT_ID);
displayTemplateOnWebPage(PROJECT_LIST_ID);
