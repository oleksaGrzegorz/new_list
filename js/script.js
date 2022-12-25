{
  const tasks = [
    {
      content: "pouczyc sie",
      done: false,
    },
    {
      content: "zjesc cos",
      done: true,
    },
  ];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  };

  const render = () => {
    htmlString = "";
    for (const task of tasks) {
      htmlString += `
        <li 
            ${task.done ? ' style="text-decoration: line-through"' : ""}
        > 
        <button class="js-remove">usun</button>
            ${task.content}
        </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButtons, index) => {
      removeButtons.addEventListener("click", () => {
        removeTask(index);
      });
    });
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const onFormSumit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();

    if (newTaskContent === "") {
      return;
    }
    addNewTask(newTaskContent);
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSumit);
  };

  init();
}
