// const container = document.querySelector(".container");
// const input = document.querySelector("input");
// const form = document.querySelector("form");
// const btn = document.querySelector("button");
// const ul_container = document.querySelector("ul");
// const li = document.createElement("li");

// btn.addEventListener("click", function (e) {
//     e.preventDefault();
//     const data = input.value;

//     li.innerHTML = `<span>${data}</span><button class='done'>Done</button>`;
//     ul_container.append(li);
//     input.value = "";
// });

// const hi = done_btn.childNodes();
// const by = hi[1];
// console.log(by);




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
// const remove = document.querySelector("remove");


// hi.addEventListener("click", function () {
//     li.style.background = "red"
// }
// );

// remove.addEventListener("click", function () {
//     const inner = document.querySelector(li);
//     inner.remove();
// });

const ulcontainer = document.querySelector(".ulcontainer");
ulcontainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove")) {
        const uldata = e.target.parentNode;
        uldata.remove();
    }

})



