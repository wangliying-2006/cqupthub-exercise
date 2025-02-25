window.onload = function () {
    let newTaskInput = document.querySelector('.new-task input');
    newTaskInput.onkeydown = function (event) {
        if (event.keyCode == 13) {
            let newTaskText = newTaskInput.value;
            let template = document.querySelector('.todo-template');
            let newTaskContainer = template.cloneNode(true);
            let newTaskNode = newTaskContainer.querySelector('.todo-item');
            newTaskNode.querySelector('.todo-text').innerText = newTaskText;
            let firstTodo = document.querySelector('.todo-list .todo-item');
            document.querySelector('.todo-list').insertBefore(newTaskNode, firstTodo);
            //绑定点击事件
            let icon = newTaskNode.querySelector('.todo-icon');
            icon.onclick = function (event) {
                if (icon.src.includes('round')) {
                    icon.setAttribute('src', 'icon-ios7-circle-outline-1024.webp');
                    let todoText = icon.parentElement.parentElement.querySelector('.todo-text');
                    todoText.style.textDecoration = 'none';

                    let firstTodo = document.querySelector('.todo-list .todo-item');
                    document.querySelector('.todo-list').insertBefore(icon.parentElement.parentElement, firstTodo);
                } 
                else {
                    icon.setAttribute('src', 'record-round-circle-dot-128.webp');
                    let todoText = icon.parentElement.parentElement.querySelector('.todo-text');
                    todoText.style.textDecoration = 'line-through';
                    document.querySelector('.done-list').appendChild(icon.parentElement.parentElement);
                }
            };
            
        }
    };
    let todoItemIcons = document.querySelectorAll('.todo-list .todo-icon');
    todoItemIcons.forEach(function (todoItemIcons) {
        todoItemIcons.onclick = function (event) {
                if (todoItemIcons.src.includes('round')) {
                    todoItemIcons.setAttribute('src', 'icon-ios7-circle-outline-1024.webp');
                    let todoText = todoItemIcons.parentElement.parentElement.querySelector('.todo-text');
                    todoText.style.textDecoration = 'none';

                    let firstTodo = document.querySelector('.todo-list .todo-item');
                    document.querySelector('.todo-list').insertBefore(todoItemIcons.parentElement.parentElement, firstTodo);
                } 
                else {
                    todoItemIcons.setAttribute('src', 'record-round-circle-dot-128.webp');
                    let todoText = todoItemIcons.parentElement.parentElement.querySelector('.todo-text');
                    todoText.style.textDecoration = 'line-through';
                    document.querySelector('.done-list').appendChild(todoItemIcons.parentElement.parentElement);
                }
            
        }
    });
}