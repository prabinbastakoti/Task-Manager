import initialLoad from "./functions/initialLoad";
import { toggleTasks } from "./pages/homepage";
import "./styles/homepage.css";

initialLoad();

const dropdownTasks = document.querySelector(".tasks");

dropdownTasks.addEventListener("click", () => {
  toggleTasks();
});
