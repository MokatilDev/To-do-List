
const Button_Add = document.querySelector(".Button_Add")
const Tasks = document.querySelector(".Tasks")
const input = document.querySelector("input")


input.addEventListener("input", () => {
    if (input.value.trim() == "") {
        Button_Add.style.cssText = `
        color: var(--Color-Button);
        border: 1px solid var(--Boder);
        padding: 8px 20px;
        cursor: pointer;
        border-radius: 7px;
        text-transform: capitalize;
        font-size: 1rem;
        cursor: not-allowed;
        background-color: var(--Bg-Button);
        `
        return false
    }


    if (input.value.trim() != "") {
        Button_Add.removeAttribute("disabled")
        Button_Add.style.cssText = `
        color: var(--Color-Normal);
        border: 1px solid var(--Color-Basic);
        padding: 8px 20px;
        cursor: pointer;
        border-radius: 7px;
        text-transform: capitalize;
        font-size: 1rem;
        cursor: pointer;
        background-color: var(--Color-Basic);`
    }
})



function task(name) {
    return `<div class="Single_Task">
    <div>
        <i onclick="Check(event)" class="check uil uil-check-circle"></i>
        <h1 class="checked">${name}</h1>
    </div>
    <div class="Buttons_Delet_Edit">
        <i onclick="delet(event)" class="uil uil-trash-alt"></i>
        <i onclick="Edite(event)" class="uil uil-edit"></i>
    </div>
    </div>`
}

function delet(e) {
    e.target.parentElement.parentElement.remove()

}

function Check(e) {
    e.target.nextElementSibling.classList.toggle("active")
    if (e.target.nextElementSibling.classList == "checked active") {
        e.target.parentElement.nextElementSibling.children[1].style.cssText = `
        background-color: var(--Bg-Button);
        border: solid 1px var(--Boder);
        color: var(--Color-Button);
        padding: 2px 10px;
        font-size: 1.6rem;
        border-radius: 7px;
        cursor: not-allowed;
        `
    } else {
        e.target.parentElement.nextElementSibling.children[1].style.cssText = `
        background-color: var(--Color-Basic);
        border: solid 1px var(--Color-Basic);
        color: var(--Color-Normal);
        padding: 2px 10px;
        font-size: 1.6rem;
        border-radius: 7px;
        cursor: pointer;
        transition: all 0.3s;
        `
    }
    e.target.classList.toggle("active")
    e.target.parentElement.classList.toggle("active")
}


function edit(e) {
    e.target.removeAttribute("class")
    e.target.removeAttribute("onclick")
    e.target.setAttribute("class", "uil uil-edit")
    e.target.setAttribute("onclick", "Edite(event)")

    const input12 = e.target.parentElement.previousElementSibling.lastElementChild.firstChild.value
    const h1 = e.target.parentElement.previousElementSibling.lastElementChild
    if (input12.trim() == "") {
        delet(e)
    }
    h1.innerHTML = input12

}



function Edite(e) {
    if (e.target.parentElement.previousElementSibling.children[1].classList == "checked active") {
        return false;
    }else{
        
    }
    const input1 = document.createElement("input")
    input1.setAttribute("placeholder", "Write a Task")
    input1.setAttribute("class", "done")
    input1.setAttribute("type", "text")
    const h1 = e.target.parentElement.previousElementSibling.lastElementChild
    input1.value = h1.innerHTML
    input1.style.cssText = `
        background-color: var(--Bg-Button);
        border: 1px solid var(--Boder);
        padding: 8px 10px;
        padding-left: 10px;
        outline: none;
        border-radius: 7px;
        color: var(--Color-Normal);
        font-size: 1.2rem;
        
    `
    h1.innerHTML = ""
    h1.appendChild(input1)
    e.target.setAttribute("class", "uil uil-check")
    e.target.setAttribute("onclick", "edit(event)")

}




Button_Add.addEventListener("click", () => {
    if (input.value == "") {
        return false;
    }

    Button_Add.style.cssText = `
    color: var(--Color-Button);
    border: 1px solid var(--Boder);
    padding: 8px 20px;
    cursor: pointer;
    border-radius: 7px;
    text-transform: capitalize;
    font-size: 1rem;
    cursor: not-allowed;
    background-color: var(--Bg-Button);
    `
    Tasks.innerHTML += task(input.value)
    input.value = ""
})




























// const Single_Task = document.createElement("div")
    // Single_Task.setAttribute("class", "Single_Task")

    // const div = document.createElement("div"),
    //     button = document.createElement("button"),

    //     uil_check_circle = document.createElement("i");
    // uil_check_circle.setAttribute("class", "uil uil-check-circle")

    // button.appendChild(uil_check_circle)
    // div.appendChild(button)

    // const h1 = document.createElement("h1")
    // const Name__Task = document.createTextNode(input.value)
    // h1.appendChild(Name__Task)
    // div.appendChild(h1)
    // Single_Task.appendChild(div)

    // const Buttons_Delet_Edit = document.createElement("div")
    // Buttons_Delet_Edit.setAttribute("class", "Buttons_Delet_Edit")
    // const Button__Delet = document.createElement("button")
    // const icon_delet = document.createElement("i")
    // icon_delet.setAttribute("class", "uil uil-trash-alt")

    // Button__Delet.appendChild(icon_delet)
    // Buttons_Delet_Edit.appendChild(Button__Delet)

    // const Button__Edit = document.createElement("button"),
    //     icon__Edit = document.createElement("i")
    // icon__Edit.setAttribute("class", "uil uil-edit")

    // Button__Edit.appendChild(icon__Edit)
    // Buttons_Delet_Edit.appendChild(Button__Edit)
    // Single_Task.appendChild(Buttons_Delet_Edit)

    // const Task = Single_Task
    // Tasks.innerHTML += Task.outerHTML