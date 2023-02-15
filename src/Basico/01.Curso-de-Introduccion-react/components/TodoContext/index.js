import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        loading,
        error,
        item: data,
        saveItem,
    } = useLocalStorage("TODOS_V1", []);
    //
    const [openModel, setOpenModal] = React.useState(false);
    const [stateSearch, setStateSearch] = React.useState("");
    //
    const count_TotalTodos = data.length;
    const count_CompletedTodos = data.filter((item) => !!item.completed).length;

    let searchedTodos = [];

    if (!stateSearch.length >= 1) {
        searchedTodos = data;
    } else {
        searchedTodos = data.filter((item) => {
            const todoText = item.text.toLowerCase();
            const searchText = stateSearch.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    // funcion que va en modal
    const addTodo = (text) => {
        const newTodos = [...data]; // copy array
        const item = {
            competed: false,
            text: text,
        };
        newTodos.push(item);
        saveItem(newTodos);
    };

    const onUpdateItem = (text) => {
        const index = data.findIndex((item) => item.text === text); // buscar el text ,coger index , sale un numero
        const newTodos = [...data]; // copy array
        newTodos[index].completed = true; //cambiar a true
        saveItem(newTodos);
    };

    const onDeleteItem = (text) => {
        const index = data.findIndex((item) => item.text === text); // si coincide el text ,coger
        const newTodos = [...data];
        newTodos.splice(index, 1);
        saveItem(newTodos);
    };

    //===============================>

    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                count_TotalTodos,
                count_CompletedTodos,
                stateSearch,
                setStateSearch,
                searchedTodos,
                addTodo,
                onUpdateItem,
                onDeleteItem,
                openModel,
                setOpenModal,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}
export { TodoContext, TodoProvider };
