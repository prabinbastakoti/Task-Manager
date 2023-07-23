import HeadingLogo from "../assets/favicon.svg";

import downarrowIcon from "../assets/downarrow.png";

import rightarrowIcon from "../assets/rightarrow.png";

import today from "../assets/today.png";

import week from "../assets/thisweek.png";

import month from "../assets/thismonth.png";

import projects from "../assets/projects.png";

import taskIcon from "../assets/tasks.png";

import githubLogo from "../assets/github.png";

const functions = (() => {
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
