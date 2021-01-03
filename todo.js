const addTodo = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html
};

addTodo.addEventListener("submit", e=>{
    e.preventDefault();
    const todo = addTodo.add.value.trim();
    // .trim() prevents excess spaces clicked by the user when adding todos
    if (todo.length){
        generateTemplate(todo);
        addTodo.reset();
    };
   

})