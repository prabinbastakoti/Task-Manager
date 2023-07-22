import HeadingLogo from "../assets/favicon.svg";

import task from "../assets/downarrow.png";

import today from "../assets/today.png";

import week from "../assets/thisweek.png";

import month from "../assets/thismonth.png";

import projects from "../assets/projects.png";

const functions = (() => {
  const addImage = () => {
    const logo = document.querySelector(".logo");
    const img = document.createElement("img");
    img.src = HeadingLogo;
    img.setAttribute("id", "logo");
    logo.appendChild(img);
  };

  const addIcons = () => {
    const tasksIcon = document.getElementById("tasksIcon");
    tasksIcon.src = task;

    const todayIcon = document.getElementById("todayIcon");
    todayIcon.src = today;

    const weekIcon = document.getElementById("weekIcon");
    weekIcon.src = week;

    const monthIcon = document.getElementById("monthIcon");
    monthIcon.src = month;

    const projectIcon = document.getElementById("projectIcon");
    projectIcon.src = projects;
  };

  return { addImage, addIcons };
})();

const homepage = () => {
  functions.addImage();

  functions.addIcons();
};

export default homepage;
