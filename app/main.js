//create array to store data
taskArr = [];
id = 0;
function submitform(e) {
    // prevent form from submitting
    e.preventDefault();

    //pull data from form input 
    const taskList = document.getElementById('taskList');
    const form = document.forms.form;
    const formData = new FormData(form);
    const name = formData.get('name');
    const description = formData.get('description');
    const date = formData.get('date');

    //create form data object and put form value input
    const formObj = {
        id,
        name,
        description,
        date
    }

    //push form object value in array
    taskArr.push(formObj);
    console.log(taskArr);

    // Clear the task list to re-load new tasks.
    taskList.innerHTML = '';

    //add form value to tasklist div
    taskArr.forEach(element => {
        taskList.innerHTML += `
            <div class="row bg-light p-3 mb-1" id="${element.id}">
                <div class="col-sm-10">
                    <h5>${element.name}</h5>
                    <p>${element.description}</p>
                    <p><strong>Due:</strong> ${element.date}</p>
                </div>
                <div class="col-sm-2 d-flex align-items-center">
                    <p><a href="#" onclick="removeElement(this.id)" id="${element.id}" class="remove-btn">X</a></p>
                </div>
            </div>
        `;
    });


    //increment ID
    id++;
    //Clear the data
    form.reset();
}

function removeElement(id) {
    const removeBtn = document.querySelector('.remove-btn');
    if (removeBtn) {
        const taksID = document.getElementById(id);
        taksID.remove();
        let index = null;
        for (let i = 0; i < taskArr.length; i++) {
            if (taskArr[i].id == id) {
                index = i;
                break;
            }
        }
        console.log("Array Index", index);

        taskArr.splice(index, 1);

        console.log(taskArr);

    }
}

form.addEventListener('submit', submitform);


