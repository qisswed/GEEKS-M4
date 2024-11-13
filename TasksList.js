
import React from 'react';
import { useSelector } from 'react-redux';

const TasksList = () => {
    const tasks = useSelector((state) => state.tasks);
    const filter = useSelector((state) => state.filter);

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'all') return true;
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    return (
        <ul>
            {filteredTasks.map((task) => (
                <li key={task.id}>
                    {task.name} {task.completed ? '(завершено)' : '(активно)'}
                </li>
            ))}
        </ul>
    );
};

export default TasksList;
