// src/components/EditTask.tsx
import React, { useState, useEffect } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  priority: string;
}

const EditTask: React.FC = () => {
  const [task, setTask] = useState<Task>({
    id: '',
    title: '',
    description: '',
    assignedTo: '',
    dueDate: '',
    priority: 'Medium',
  });

  // Simulate fetching task data (can be from props, API call, etc.)
  useEffect(() => {
    const fetchTask = async () => {
      // Here, you can make an API call to get the task details
      const mockTask: Task = {
        id: '1',
        title: 'Task 1',
        description: 'This is a task description',
        assignedTo: 'John Doe',
        dueDate: '2025-04-30',
        priority: 'High',
      };
      setTask(mockTask);
    };
    fetchTask();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission (send data to API or update state)
    console.log('Task updated:', task);
  };

  return (
    <div className="edit-task-form">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="assignedTo">Assigned To</label>
          <input
            type="text"
            id="assignedTo"
            name="assignedTo"
            value={task.assignedTo}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTask;
