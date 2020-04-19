var task = document.querySelector('#task-input');

let createNewTask = () => {
  let taskList = document.querySelector('.task-list');
  let newTask = document.createElement('li');
  newTask.classList.add('dueTask');
  let taskId = `task${taskList.children.length + 1}`;
  newTask.innerHTML = `
  <div class="checkbox-wrapper">
    <input type="checkbox" class="cb" id=${taskId} />
    <svg viewBox="0 0 60 40" aria-hidden="true" focusable="false">
      <path
        d="M21,2 C13.4580219,4.16027394 1.62349378,18.3117469 3,19 C9.03653312,22.0182666 25.2482171,10.3758914 30,8 C32.9363621,6.53181896 41.321398,1.67860195 39,4 C36.1186011,6.8813989 3.11316157,27.1131616 5,29 C10.3223659,34.3223659 30.6434647,19.7426141 35,18 C41.2281047,15.5087581 46.3445303,13.6554697 46,14 C42.8258073,17.1741927 36.9154967,19.650702 33,22 C30.3136243,23.6118254 17,31.162498 17,34 C17,40.4724865 54,12.4064021 54,17 C54,23.7416728 34,27.2286213 34,37"
        stroke-width="4"
        fill="none"
        stroke-dasharray="270"
        stroke-dashoffset="270"
      ></path>
    </svg>
    <label for=${taskId}>${task.value}</label>
  </div>`;
  taskList.appendChild(newTask);
  removeDoneTask();
  task.value = '';
};

// EventListener - neue Aufgabe erstellen
task.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    createNewTask();
  }
});

// let selection = document.querySelector('#task-selection');
// let selectionValue = selection.options[selection.selectedIndex].value;
// let showDoneTasks = () => {
//   selection.addEventListener('change', (e) => {
//     if ((selectionValue = 'all')) {
//       let doneTask = document.querySelectorAll('.done');
//       for (task of doneTask) {
//         task.classList.toggle('hide');
//       }
//     }
//   });
// };
// showDoneTasks();

let removeDoneTask = () => {
  let checkbox = document.querySelectorAll('.cb');
  let taskRow = document.querySelectorAll('li');

  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click', () => {
      setTimeout(() => {
        if (checkbox[i].checked) {
          taskRow[i].classList.add('done', 'hide');
        } else {
          if (taskRow[i].classList.contains('done')) {
            taskRow[i].classList.remove('done');
          }
        }
      }, 500);
    });
  }
};

let due = document.querySelector('#due');
let all = document.querySelector('#all');
let doneTask = document.getElementsByClassName('done');

due.addEventListener('click', (e) => {
  due.style.textDecoration = 'underline';
  all.style.textDecoration = 'none';
  for (let task of doneTask) {
    task.classList.add('hide');
  }
});

all.addEventListener('click', (e) => {
  all.style.textDecoration = 'underline';
  due.style.textDecoration = 'none';
  for (let task of doneTask) {
    task.classList.remove('hide');
  }
});
