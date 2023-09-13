const addField = document.getElementById('add__field');
const taskContainer = document.getElementById('task__container');



function addTask() {
    if (addField.value == '' || addField.value == " ") {
        addField.placeholder='Please write something her...';
    }
    else {
        let taskItem = document.createElement('li');
        taskItem.innerHTML = addField.value;
        taskContainer.appendChild(taskItem);

        let deleteBtn = document.createElement('span');
        deleteBtn.setAttribute('class', 'delete__btn');
        deleteBtn.innerHTML = 'x';
        taskItem.appendChild(deleteBtn);
    }
}


taskContainer.addEventListener("click", function(e) {
    if (e.target.tagName = "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName = "SPAN") {
        e.target.parentElement.remove();
    }
});
// deleteBtn.addEventListener("click", function(e) {

// });







