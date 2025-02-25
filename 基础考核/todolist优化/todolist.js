window.onload = function () {
    let newTaskInput = document.querySelector('.new-task input');
    newTaskInput.onkeydown = function (event) {
        if (event.keyCode == 13) {
            let newTaskText = newTaskInput.value;
            let template = document.querySelector('.todo-template');
            let newTaskContainer = template.cloneNode(true);
            let newTaskNode = newTaskContainer.querySelector('.todo-item');
            newTaskNode.querySelector('.todo-text').innerText = newTaskText;
            // 添加时间戳
            let timestamp = new Date().toLocaleString(); // 获取当前时间
            let timestampElement = document.createElement('span'); // 创建时间戳元素
            timestampElement.className = 'timestamp'; // 添加类名
            timestampElement.innerText = ` - ${timestamp}`; // 设置时间戳文本
            newTaskNode.querySelector('.todo-text').appendChild(timestampElement); // 将时间戳添加到任务文本旁边
            let firstTodo = document.querySelector('.todo-list .todo-item');
            document.querySelector('.todo-list').insertBefore(newTaskNode, firstTodo);
            newTaskInput.value=' ';
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
            let icons = newTaskNode.querySelector('.star-icon');
            icons.onclick = function (event) {
                if (icons.src.includes('multimedia')) {
                    icons.setAttribute('src', 'star-128.webp');
                    
                } 
                else {
                    icons.setAttribute('src', 'multimedia-19-128.webp');
                    
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
    let staricons= document.querySelectorAll('.todo-list .star-icon');
    staricons.forEach(function (staricons) {
        staricons.onclick = function (event) {
            if (staricons.src.includes('multimedia')) {
                staricons.setAttribute('src', 'star-128.webp');
                
            } 
            else {
                staricons.setAttribute('src', 'multimedia-19-128.webp');
                
            }
        };
    });
}