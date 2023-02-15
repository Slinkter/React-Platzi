import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                let parsedItem;
                const db_ls = localStorage.getItem(itemName);

                if (!db_ls) {
                    const stringValue = JSON.stringify(initialValue); // tranformacion a string
                    localStorage.setItem(itemName, stringValue);
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(db_ls); // transformacion a objeto
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 2000);
    }, [itemName, initialValue]);

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };

    return { item, saveItem, loading, error };
}

export { useLocalStorage };
