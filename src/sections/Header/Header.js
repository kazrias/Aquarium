const header = document.querySelector(".header");

function createHeader({ element, content }) {
  const header = document.createElement(element);

  header.appendChild(
    creatingLogo({ element: "div", content: "img" }),
    createNavBar({ element: "nav", content: "ul" })
  );
}
function createNavBar({ element, content }) {
  const navBar = {
    Home: "#header",
    Products: "#products",
    Contacts: "#contacts",
    "About Us": "#aboutUs",
  };
  const nav = document.createElement(element);
  nav.setAttribute("class", "list");
  const ul = document.createElement(content);
  ul.setAttribute("class", "navigation");
  nav.appendChild(ul);
  for (let key in navBar) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = navBar[key];
    a.innerText = key;
    li.appendChild(a);
    ul.appendChild(li);
  }
  return nav;
}

function creatingLogo() {
  const div = `
  <div class="logo">
            <img src="https://i.pinimg.com/736x/44/96/a9/4496a981ee1481c4cf8395ac8811ebef.jpg">
            Aquarium park 
        </div>
  `;
  return div;
}

export const createHeaderSection = () => {
  header.insertAdjacentHTML("afterbegin", creatingLogo());
  header.appendChild(createNavBar({ element: "nav", content: "ul" }));
  header.appendChild(createHeader({ element: "div" }));
};