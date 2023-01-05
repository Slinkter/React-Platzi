import React from "react";
import { TodoForm } from "../../ui/TodoForm";

const EditTodoPage = () => {
    return (
        <div>
            <h1>EditTodoPage</h1>
            <TodoForm
                label="edita tu todo"
                submitText="editar"
                submitEvent={() => {
                    console.log("llmar a editTodo()");
                }}
            />
        </div>
    );
};

export { EditTodoPage };
