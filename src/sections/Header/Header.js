const header = document.querySelector(".header");

function createHeader({ element, content }) {
  const header = document.createElement(element);

  header.appendChild(
    creatingLogo({ element: "div", content: "img" }),
    createNavBar({ element: "nav", content: "ul" })
  );
}