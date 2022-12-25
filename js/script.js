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

  const render = () => {
    htmlString = "";
    for (const task of tasks) {
      htmlString += `
        <li 
            ${task.done ? ' style="text-decoration: line-through"' : ""}
        > 
            ${task.content}
        </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
  };

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

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
