import React from "react";
import { TodoForm } from "../../ui/TodoForm";

const NewTodoPage = () => {
    return (
        <div>
            <h1>NewTodoPage</h1>
            <TodoForm
                label="escribe tu nuevo todo"
                submitText="agregar"
                submitEvent={() => {
                    console.log("llamar a addTodo()");
                }}
            />
        </div>
    );
};

export { NewTodoPage };
