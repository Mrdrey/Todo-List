const input = document.getElementById('todo');
const submit = document.getElementById('submit');
const todoList = document.getElementById('todo-list');

submit.onclick = function() {
    const todo = input.value;
    if (todo) {
        const li = document.createElement('li');
        li.textContent = todo;
        todoList.appendChild(li);
        input.value = '';
    }
}

