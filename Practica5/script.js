document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById("txtItem");
    const addItemBtn = document.getElementById("addItemBtn");
    const taskList = document.getElementById("taskList");

    let tasks = [];

    function renderList() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span contenteditable="false" class="task-text">${task}</span>
                <button class="edit-btn" onclick="editItem(${index})">✏️</button>
                <button class="delete-btn" onclick="deleteItem(${index})">❌</button>
            `;
            taskList.appendChild(li);
        });
    }

    window.deleteItem = (index) => {
        tasks.splice(index, 1);
        renderList();
    };

    window.editItem = (index) => {
        const span = taskList.children[index].querySelector(".task-text");
        const isEditable = span.contentEditable === "true";
        span.contentEditable = isEditable ? "false" : "true";
        span.focus();

        if (!isEditable) {
            span.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    tasks[index] = span.textContent.trim();
                    span.contentEditable = "false";
                    renderList();
                }
            });
        }
    };

    addItemBtn.addEventListener("click", () => {
        let taskText = itemInput.value.trim();
        if (taskText === "") {
            alert("La tarea no puede estar vacía");
            return;
        }
        tasks.push(taskText);
        itemInput.value = "";
        renderList();
    });

    renderList();
});
