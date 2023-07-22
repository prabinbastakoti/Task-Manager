import initialLoad from "./functions/initialLoad";
import "./styles/homepage.css";

initialLoad();

const dropdownTasks = document.querySelector(".tasks");

dropdownTasks.addEventListener("click", (e) => {
  console.log(e.target);
  console.log("Hello This is right target(i.e. Tasks dropdown item");
});
