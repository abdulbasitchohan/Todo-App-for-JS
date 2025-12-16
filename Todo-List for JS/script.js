
const main = document.createElement("main");
document.body.style.margin = "0px"
document.body.style.padding = "0px"
document.body.style.boxSizing = "border-box"
document.body.style.overflow = "hidden"


main.style.margin = "0px"
main.style.padding = "0px"
main.style.boxSizing = "border-box"
main.style.height = "100vh";
main.style.background = "linear-gradient(to right, red, blue)";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";


document.body.appendChild(main);


const box = document.createElement("div");

box.style.width = "435px"
box.style.backgroundColor = "#0000002a"
box.style.backdropFilter = "blur(1px)"
box.style.boxShadow = "5px 8px 12px 5px"
box.style.borderTopLeftRadius = "30px"
box.style.borderBottomRightRadius = "30px"
main.appendChild(box);

const heading = document.createElement("h1");
heading.textContent = "Todo App"
heading.style.color = "rgb(33 185 171)"
heading.style.textShadow = "-5px 4px 6px #000000"
heading.style.fontSize = "40px"
heading.style.fontFamily = "Lucida Sans"
heading.style.textAlign = "center"

box.appendChild(heading)
// INPUT BOX AND IN THIS TWO CHILDS 
const inputBox = document.createElement("div");

inputBox.style.margin = "30px 48px"
inputBox.style.display = "flex"
inputBox.style.gap = "16px"


box.appendChild(inputBox);

// INPUT CHILD 1
const input = document.createElement("input");
input.setAttribute("placeholder", `Enter Your Task`)
input.style.backgroundColor = "transparent"
input.style.color = "#ffff"
input.style.fontSize = "17px"
input.style.padding = "8px"
input.style.border = "3px white dashed"
input.style.borderRadius = "10px"

inputBox.appendChild(input);


// BUTTUN CHILD 2
const addBtn = document.createElement("button");
addBtn.textContent = "Add Task";
addBtn.style.backgroundColor = `rgb(0 6 183)`
addBtn.style.color = "#ffff"
addBtn.style.textAlign = `center`
addBtn.style.border = `3px solid transparent `
addBtn.style.padding = `5px 10px`
addBtn.style.borderRadius = `10px`
addBtn.style.cursor = "pointer"

inputBox.appendChild(addBtn);

const ListBox = document.createElement("div");
box.appendChild(ListBox);

const addUl = document.createElement("ul")
addUl.style.padding = "0px"
ListBox.appendChild(addUl)


const AddTask = () => {


    // let InputVal = input.value;
    let items = document.createElement("li");

    items.style.cursor = "Pointer"
    items.style.margin = "20px 30px"
    items.style.padding = "10px 15px"
    items.style.color = "#ffff"
    items.style.fontFamily = "Lucida Sans Regular"
    items.style.display = "flex"
    items.style.alignItems = "center"
    items.style.backdropFilter = "blur(10px)"
    items.style.borderRadius = "30px"
    // items.style.gap = "10px"
    // items.style.justifyContent = "space-evenly"


    addUl.appendChild(items);

    let span = document.createElement("span")

    span.textContent = input.value
    span.style.width = "250px"
    items.appendChild(span);


    const editBtn = document.createElement("button");

    editBtn.innerHTML = `<i class="ri-edit-2-fill"></i>`;
    editBtn.style.color = "#f1f52eff"
    editBtn.style.backgroundColor = "transparent"
    editBtn.style.fontSize = "20px"
    editBtn.style.border = "none"
    editBtn.style.marginLeft = "27px"
    editBtn.style.borderRadius = "8px"
    editBtn.style.cursor = "pointer"

    items.appendChild(editBtn);

    const delBtn = document.createElement("button")

    delBtn.innerHTML = `<i class="ri-delete-bin-6-fill"></i>`
    delBtn.style.color = "red"
    delBtn.style.backgroundColor = "transparent"
    delBtn.style.fontSize = "20px"
    delBtn.style.border = "none"
    // delBtn.style.padding = "6px 10px"
    // delBtn.style.borderRadius = "8px"
    delBtn.style.cursor = "pointer"
    delBtn.style.float = "right"

    items.appendChild(delBtn)

    delBtn.addEventListener("click", () => {
        // items.remove(); 
        addUl.removeChild(items)
    })

    editBtn.addEventListener("click", () => {

        if (editBtn.innerHTML === `<i class="ri-edit-2-fill"></i>`) {
            const editInput = document.createElement('input');

            editInput.style.backgroundColor = "transparent"
            editInput.style.color = "#ffff"
            editInput.style.backdropFilter = "blur(20px)"
            editInput.style.fontSize = "17px"
            editInput.style.padding = "8px"
            editInput.style.marginRight = "17px"
            // editInput.style.float = "left"
            editInput.style.border = "none"
            editInput.style.borderRadius = "10px"
            editInput.value = span.textContent;

            items.insertBefore(editInput, span);

            items.removeChild(span);

            editBtn.innerHTML = `<i class="ri-add-box-fill"></i>`
            editBtn.style.color = "rgba(84, 240, 11, 1)"


        } else {

            const editInput = items.querySelector('input');
            span.textContent = editInput.value;

            items.insertBefore(span, editInput);
            items.removeChild(editInput);


            editBtn.innerHTML = `<i class="ri-edit-2-fill"></i>`;
        }

    }

    );
}

input.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        AddTask();
    }
}
)


addBtn.addEventListener("click", function () {
    AddTask();
})



