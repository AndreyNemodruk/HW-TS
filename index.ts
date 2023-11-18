import { ListWithSearchAndSort } from "./List/ListWithSearchAndSort";
import { Repository } from "./Repository/Repository";

const repository = new Repository();

const todos = new ListWithSearchAndSort(repository);

const task1 = todos.addTask({
  name: "firstTask",
  description: "firstTask",
  isFulfilled: false,
  isWithConfirmation: true,
});

const task2 = todos.addTask({
  name: "second",
  description: "second",
  isFulfilled: true,
  isWithConfirmation: true,
});

const task3 = todos.addTask({
  name: "third",
  description: "third",
  isFulfilled: true,
  isWithConfirmation: false,
});

const task4 = todos.addTask({
  name: "third 444",
  description: "third 444",
  isFulfilled: true,
  isWithConfirmation: false,
});

// console.log("get tasks info", todos.getTasksInfo());
// console.log("get all created tasks - 3", todos.getAllTasks());

// if (task2) {
//   todos.removeTask(task2.id);
// }
// console.log("2 tasks after delete", todos.getAllTasks());

// if (task1) {
//   console.log("get first task by id", todos.getTaskById(task1.id));

//   todos.updateTask({
//     ...task1,
//     description: "changed first with confirmation",
//     name: "changed first with confirmation",
//   });

//   console.log(todos.getTaskById(task1.id));
// }

// if (task3) {
//   todos.updateTask({
//     ...task3,
//     description: "changed third without confirmation",
//     name: "changed first without confirmation",
//   });

//   console.log(todos.getTaskById(task3.id));
// }
