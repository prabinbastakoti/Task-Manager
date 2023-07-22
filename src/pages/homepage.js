import HeadingLogo from "../assets/favicon.svg";

const functions = (() => {
  const addImage = () => {
    const logo = document.querySelector(".logo");
    const img = document.createElement("img");
    img.src = HeadingLogo;
    img.setAttribute("id", "logo");
    logo.appendChild(img);
  };
  return { addImage };
})();

const homepage = () => {
  functions.addImage();
};

export default homepage;
