import initialLoad from "./functions/initialLoad";
import cleanDOM from "./functions/cleanDOM";
import tasksInbox from "./pages/tasks";
import { toggleTasks, viewTaskButton, removeToggle } from "./pages/homepage";
import "./styles/homepage.css";
import "./styles/tasks.css";

initialLoad();

const home1 = document.querySelector("img#logo");
const home2 = document.querySelector(".logoText");

const container = document.querySelector(".itemsContainer");

const tasks = document.querySelector(".tasks");
// const tasks2 = document.querySelector(".allTasks");

// const today = document.querySelector(".today");
// const thisWeek = document.querySelector(".thisWeek");
// const thisMonth = document.querySelector(".thisMonth");

// const projects1 = document.querySelector(".project");
// const projects2 = document.querySelector(".allProjects");

// const notes1 = document.querySelector(".notes");
// const notes2 = document.querySelector(".allNotes");

home1.addEventListener("click", () => {
  cleanDOM();
  removeToggle();
  viewTaskButton();
});

home2.addEventListener("click", () => {
  cleanDOM();
  removeToggle();
  viewTaskButton();
});

tasks.addEventListener("click", () => {
  cleanDOM();
  toggleTasks();
  tasksInbox();
});

container.addEventListener("click", (e) => {
  if (e.target.id === "allTasks") {
    cleanDOM();
    tasksInbox();
  }
});
