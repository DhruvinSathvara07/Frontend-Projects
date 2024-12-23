const form = document.querySelector("form");
const body = document.querySelector(".tbody");
const input = form.childNodes[3]
const textarea = form.childNodes[7]

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = {
        name: input.value,
        text: textarea.value
    }

    const users = JSON.parse(localStorage.getItem("data")) || []
    users.push(data)
    localStorage.setItem("data", JSON.stringify(users))
    show()
});

function show() {
    var users = JSON.parse(localStorage.getItem("data"))
    var tbody = document.querySelector("#tbody");
    var result = ""

    users.forEach((items, index) => {
        result += `
        <tr class='table-row'>
            <td>${items.name}</td>
            <td>${items.text}</td>
            <td>
                <button class="btn btn-primary" onclick='handleEdit(${index})'>Edit</button>
                <button class="btn btn-danger delete" onclick='remove(${index})'>Delete</button>
            </td>
        </tr>`;
    });
    console.log(users, "this is users");
    tbody.innerHTML = result
}
show()

function handleEdit(id) {
    const detils = JSON.parse(localStorage.getItem("data"))
    const update = document.querySelector(".update")
    update.style.display = "block"
    const submit = document.querySelector(".submit")
    submit.style.display = "none"

    const todo = {
        name: input.value,
        text: textarea.value
    };

    input.value = detils[id].name
    textarea.value = detils[id].text

    update.addEventListener("click", function (e) {
        e.preventDefault();
        const data = {
            name: input.value,
            text: textarea.value
        };

        const datalist = JSON.parse(localStorage.getItem("data"))
        datalist.splice(id, 1, data)
        localStorage.setItem("data", JSON.stringify(datalist))
        show()
        location.reload()
    })
}


function remove(id) {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    data.splice(id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    show();
}