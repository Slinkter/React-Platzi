import React from "react";
import { useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

const EditTodoPage = () => {
    const { stateUpdaters } = useTodos();
    const { editTodo } = stateUpdaters;
    const { id } = useParams();
    const idTodo = Number(id);

    return (
        <div>
            <h1>EditTodoPage</h1>
            <TodoForm
                label="edita tu todo"
                submitText="editar"
                submitEvent={(newText) => editTodo(idTodo, newText)}
            />
        </div>
    );
};

export { EditTodoPage };
