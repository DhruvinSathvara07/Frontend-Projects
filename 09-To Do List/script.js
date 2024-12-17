const form = document.querySelector(".form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = input.value;
    const li = document.createElement("li");
    li.innerHTML =
        `<span>${data}</span><button class='remove'>Remove</button>`;
    ul.append(li);
    input.value = "";
});

const ulcontainer = document.querySelector(".ulcontainer");
ulcontainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove")) {
        const uldata = e.target.parentNode;
        uldata.remove();
    }
});



