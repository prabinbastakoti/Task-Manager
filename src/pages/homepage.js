import HeadingLogo from "../assets/logo.svg";

import DarkHeadingLogo from "../assets/favicon.svg";

import downarrowIcon from "../assets/downarrow.png";

import rightarrowIcon from "../assets/rightarrow.png";

import today from "../assets/today.png";

import week from "../assets/thisweek.png";

import month from "../assets/thismonth.png";

import projects from "../assets/projects.png";

import taskIcon from "../assets/tasks.png";

import githubLogo from "../assets/github.png";

import noteIcon from "../assets/notes.png";

const NavBarfunctions = (() => {
  const addImage = () => {
    const logo = document.querySelector(".logo");
    const img = document.createElement("img");
    img.src = HeadingLogo;
    img.setAttribute("id", "logo");
    logo.appendChild(img);
  };

  const addIcons = () => {
    const arrowIcons = document.getElementById("arrowIcon");
    arrowIcons.src = downarrowIcon;

    const taskIcons = document.getElementById("tasksIcon");
    taskIcons.src = taskIcon;

    const todayIcon = document.getElementById("todayIcon");
    todayIcon.src = today;

    const weekIcon = document.getElementById("weekIcon");
    weekIcon.src = week;

    const monthIcon = document.getElementById("monthIcon");
    monthIcon.src = month;

    const projectIcon = document.getElementById("projectIcon");
    projectIcon.src = projects;

    const githubIcon = document.getElementById("githubLogo");
    githubIcon.src = githubLogo;

    const notes = document.getElementById("notesIcon");
    notes.src = noteIcon;
  };

  return { addImage, addIcons };
})();

const viewTaskButton = () => {
  const mainContainer = document.querySelector(".itemsContainer");

  const heading = document.createElement("div");
  heading.classList.add("topHeading");

  const headingLogo = document.createElement("img");
  headingLogo.src = DarkHeadingLogo;

  const headingText = document.createElement("h1");
  headingText.innerHTML = "todoist";
  headingText.classList.add("homeHeading");

  heading.appendChild(headingLogo);
  heading.appendChild(headingText);

  const headingPara = document.createElement("p");
  headingPara.classList.add("headingParagraph");
  headingPara.innerHTML =
    "todoist is a productive system. It is a powerful and intuitive online tool designed to streamline and organize your daily tasks, assignments, and projects. This website aims to provide users with a seamless task management experience, helping them enhance productivity and effectively manage their time.";

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttonsContainer");

  const buttonsName = ["View All Tasks", "View All Projects", "View All Notes"];

  for (let i = 0; i < buttonsName.length; i++) {
    const allTasks = document.createElement("button");
    allTasks.innerHTML = buttonsName[i];
    allTasks.setAttribute("type", "button");
    if (i === 0) {
      allTasks.setAttribute("class", "allTasks");
    } else if (i === 1) {
      allTasks.setAttribute("class", "allProjects");
    } else if (i === 2) {
      allTasks.setAttribute("class", "allNotes");
    }
    allTasks.setAttribute("id", "allTasks");
    allTasks.classList.add("prevent-select");
    buttonsContainer.appendChild(allTasks);
  }

  mainContainer.appendChild(heading);
  mainContainer.appendChild(headingPara);
  mainContainer.appendChild(buttonsContainer);
};

const homepage = () => {
  NavBarfunctions.addImage();
  NavBarfunctions.addIcons();
  viewTaskButton();
};

const toggleTasks = () => {
  const nestedItems = document.querySelectorAll(".nested");
  const arrowIcons = document.getElementById("arrowIcon");

  nestedItems.forEach((item) => {
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      arrowIcons.src = rightarrowIcon;
    } else {
      arrowIcons.src = downarrowIcon;
    }
  });
};

const removeToggle = () => {
  const nestedItems = document.querySelectorAll(".nested");
  const arrowIcons = document.getElementById("arrowIcon");

  nestedItems.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
    arrowIcons.src = downarrowIcon;
  });
};

export default homepage;
export { toggleTasks, viewTaskButton, removeToggle };
