import React from 'react';
import FilterButtons from '/components/FilterButtons';
import TasksList from '/components/TasksList';
function App() {
    return (
        <div>
            <h1>Задачи</h1>
            <TasksList/>
            <FilterButtons/>
        </div>
    )
}

export default App
