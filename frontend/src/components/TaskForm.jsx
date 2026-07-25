import { useState } from "react";
import API from "../services/api";

function TaskForm({ fetchTasks }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    priority: "Medium",
    dueDate: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("", task);

      setTask({
        title: "",
        description: "",
        status: "Pending",
        priority: "Medium",
        dueDate: "",
      });

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        required
      />

      <br /><br />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        required
      />

      <br /><br />

      <select
        name="status"
        value={task.status}
        onChange={handleChange}
      >
        <option>Pending</option>
        <option>Completed</option>
      </select>

      <br /><br />

      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <br /><br />

      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;