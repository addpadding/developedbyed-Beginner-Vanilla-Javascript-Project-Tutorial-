const input = document.querySelector(".input")
const btn_plus = document.querySelector(".btn_plus")
const ul_list = document.querySelector(".ul_list")

btn_plus.addEventListener("click", add_todo)

function add_todo(e) {
    e.preventDefault();

    const div = document.createElement("div")
    div.classList.add("div_todo")

    const li = document.createElement("li")
    li.innerText = "hey"
    li.classList.add("li_item")
    div.appendChild(li)

    const complete_btn = document.createElement("button")
    complete_btn.innerHTML = '<i class="fas fa-check"></i>'
    complete_btn.classList.add("complete_btn")
    div.appendChild(complete_btn)

    const trash_btn = document.createElement("button")
    trash_btn.innerHTML = '<i class="fas fa-trash"></i>'
    trash_btn.classList.add("trash_btn")
    div.appendChild(trash_btn)

    ul_list.appendChild(div)


}