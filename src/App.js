import React, { useState } from "react";
import "./index.css";

const TaskXApp = () => {
  // State to manage tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    //I think this is the input from the user as a string??
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
    timeSpent: 0,
    status: "note-started",
  });

  //Task Creation
  const handleCreateTask = () => {
    if (newTask.title.trim()) {
      setTasks([
        ...tasks,
        {
          ...newTask,
          id: Date.now(),
          createdAt: new Date().toISOString(),
        },
      ]);

      //reset form
      setNewTask({
        title: "",
        description: "",
        priority: "medium",
        dueDate: "",
        timeSpent: 0,
        status: "not-started",
      });
    }
  };

  return (
    <div className="dark bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-6">TaskX</h1>

      {/* Task Creation form */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
        <h2 className="text-xl text-red-400 mb-4">Create New Task</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Task Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
          />

          <select
            value={newTask.priority}
            onChange={(e) =>
              setNewTask({ ...newTask, priority: e.target.value })
            }
            className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>

          <input
            type="date"
            value={newTask.dueDate}
            onChange={(e) =>
              setNewTask({ ...newTask, dueDate: e.target.value })
            }
            className="w-full bg-gray-700 hover:bg-red-700 p-2 text-white rounded border border-gray-600"
          />

          <button
            onClick={handleCreateTask}
            className="w-full bg-red-500 hover:bg-red-600 p-2 text-white rounded"
          >
            Create Task
          </button>
        </div>
      </div>

      {/* Task List */}
      <div>
        <h2 className="text-2xl text-red-400 mb-4">Your Tasks</h2>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{task.title}</h3>
                <p
                  className={`
                                    ${
                                      task.priority === "high"
                                        ? "text-red-500"
                                        : task.priority === "medium"
                                        ? "text-yellow-500"
                                        : "text-green-500"
                                    }
                                    `}
                >
                  Priority: {task.priority}
                </p>
                {task.dueDate && (
                  <p className="text-gray-400"> Due: {task.dueDate}</p>
                )}
              </div>
              <button className="bg-red-600 hover:bg-red-700 p-2 text-white rounded">
                Start Timer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskXApp;
