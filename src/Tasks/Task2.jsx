import React from 'react';

const Task2 = ( { age, setAge,  Age } ) => {

    return (
        <div>
            <input type="text"
            placeholder='Укажите возраст'
            onChange={(e) => setAge(e.target.value)}
            value={age}/>
            <button onClick={() => Age()}>Войти</button>
        </div>
    );
};

export default Task2;