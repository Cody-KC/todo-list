const addTodo = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");


//ADDING TODOS
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

});

//DELETING TODOS
    list.addEventListener("click", e =>{
        if(e.target.classList.contains("delete")){
            e.target.parentElement.remove();
        }
    });
//KEYUP EVENTS
const filterTodos = (term) =>{
    Array.from(list.children)
    .filter((todo) =>{return !todo.textContent.toLowerCase().includes(term)})
    .forEach((todo) =>{todo.classList.add("filtered")})

    Array.from(list.children)
    .filter((todo) =>{return todo.textContent.toLowerCase().includes(term)})
    .forEach((todo) =>{todo.classList.remove("filtered")})

        // console.log(todo.textContent)
        // return true;
    
};

search.addEventListener("keyup", e =>{
    const term = search.value.toLowerCase().trim();
    filterTodos(term);
})

