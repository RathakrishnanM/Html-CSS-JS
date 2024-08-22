const add = document.querySelector("#add");
const task = document.querySelector("#input");
const description = document.querySelector("#description");
const ul = document.querySelector("#ul-list");

const deleteTask = (li) => {
  li.remove();
};

const editTask = (taskValField, descriptionValField) => {
  taskValField.focus();
  taskValField.readOnly = false;
  descriptionValField.readOnly = false;
};

const addList = () => {
  const li = document.createElement("li");
  const box = document.createElement("div");
  const checkBox = document.createElement("input");
  const taskValField = document.createElement("input");
  const descriptionValField = document.createElement("textarea");
  const edit = document.createElement("button");
  const del = document.createElement("button");

  taskValField.value = task.value;
  descriptionValField.value = description.value;

  taskValField.readOnly = true;
  descriptionValField.readOnly = true;

  if (taskValField.value === "") return;

  if (descriptionValField.value === "")
    descriptionValField.value = "Description not available";

  checkBox.type = "checkbox";

  li.className = "list-item";
  box.className = "box";
  edit.className = "edit-btn";
  del.className = "delete-btn";
  checkBox.className = "checkBox";
  taskValField.className = "taskValField";
  descriptionValField.className = "descriptionValField";

  box.append(taskValField, descriptionValField);
  li.append(checkBox, box, edit, del);
  ul.appendChild(li);

  edit.addEventListener("click", () =>
    editTask(taskValField, descriptionValField)
  );
  del.addEventListener("click", () => deleteTask(li));

  edit.title = "Edit";
  del.title = "Delete";

  task.value = "";
  description.value = "";
  task.focus();
};

add.addEventListener("click", addList);
