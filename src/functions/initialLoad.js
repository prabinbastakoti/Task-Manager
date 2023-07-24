import favicon from "../assets/favicon.svg";

import homepage from "../pages/homepage";

const initialLoad = () => {
  const faviconLink = document.createElement("link");
  faviconLink.rel = "icon";
  faviconLink.href = favicon;

  document.head.appendChild(faviconLink);
  homepage();
};

export default initialLoad;
