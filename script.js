const sideMenu = document.querySelector("aside");
const menuButton = document.querySelector("#menu-btn");
const closeButton = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//show sideBar
menuButtonFunction = () => {
  sideMenu.style.display = "block";
};

menuButton.addEventListener("click", menuButtonFunction);

//close sideBar
closeBtnFunction = () => {
  sideMenu.style.display = "none";
};

closeButton.addEventListener("click", closeBtnFunction);

//change Theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  activeThemeToggler = themeToggler
    .querySelector("span:nth-child(1)")
    .classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
  // themeToggler.querySelector('span').classList.toggle('active')

  const theme = getTheme();
  if (theme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }

  applyTheme();
});

//THEME PERSISTENT IN THE LOCAL STORAGE
//create a function that sets the current theme (dark or light) in local storage
const setTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

//create a function that gets the current theme from local storage. If there
//is no theme saved in local storage, set the default theme to 'light'
const getTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "light";
};

//create a function that applies the current theme to the page. This
//function will be called whenever the page is loaded or whenever the
//theme is changed.
const applyTheme = () => {
  const theme = getTheme();
  const body = document.body;

  if (theme === "dark") {
    body.classList.add("dark-theme-variables");
  } else {
    body.classList.remove("dark-theme-variables");
  }
};
document.addEventListener("DOMContentLoaded", function () {
  applyTheme();
});

//fill orders in the table
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
                    <td>${order.productName}</td>
                    <td>${order.productNumber}</td>
                    <td>${order.paymentStatus}</td>
                    <td class="warning">${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}</td>
                    <td class="primary">Details</td> 
    `;

    tr.innerHTML = trContent
    document.querySelector('table tbody').appendChild(tr)
});
