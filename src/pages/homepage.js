import HeadingLogo from "../assets/logo.png";

import downarrowIcon from "../assets/downarrow.png";

import rightarrowIcon from "../assets/rightarrow.png";

import today from "../assets/today.png";

import week from "../assets/thisweek.png";

import month from "../assets/thismonth.png";

import projects from "../assets/projects.png";

import taskIcon from "../assets/tasks.png";

import githubLogo from "../assets/github.png";

import homepageBackground from "../assets/homepage.jpg";

import noteIcon from "../assets/notes.png";

const functions = (() => {
  const addImage = () => {
    const logo = document.querySelector(".logo");
    const img = document.createElement("img");
    img.src = HeadingLogo;
    img.setAttribute("id", "logo");
    logo.appendChild(img);

    const mainContainer = document.querySelector(".itemsContainer");
    mainContainer.style.position = "relative";

    const allTasks = document.createElement("button");
    allTasks.innerHTML = "View All Tasks";
    allTasks.setAttribute("type", "button");
    allTasks.setAttribute("id", "allTasks");

    mainContainer.appendChild(allTasks);

    const background = document.createElement("img");
    background.src = homepageBackground;
    background.setAttribute("id", "homeBackground");
    mainContainer.appendChild(background);
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

const homepage = () => {
  functions.addImage();

  functions.addIcons();
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

export default homepage;
export { toggleTasks };
