const types = {
    setFavorite: "SET_FAVORITE",
    deleteFavorite: "DELETE_FAVORITE",
    loginRequest: "LOGIN_REQUEST",
    logoutRequest: "LOGOUT_REQUEST",
    registerRequest: "REGISTER_REQUEST",
    getVideoSource: "GET_VIDEO_SOURCE",
};

const reducer = (state, action) => {
    switch (action.type) {
        case types.setFavorite:
            return {
                ...state,
                myList: [...state.myList, action.payload],
            };

        case types.deleteFavorite:
            return {
                ...state,
                myList: state.myList.filter(
                    (item) => item.id !== action.payload
                ),
            };

        case types.loginRequest:
            return { ...state, user: action.payload };
        case types.logoutRequest:
            return { ...state, user: action.payload };
        case types.registerRequest:
            return { ...state, user: action.payload };
        case types.getVideoSource:
            return {
                ...state,
                playing:
                    state.trends.find(
                        (item) => item.id === Number(action.payload)
                    ) ||
                    state.originals.find(
                        (item) => item.id === Number(action.payload)
                    ) ||
                    [],
            };

        default:
            return state;
    }
};

export { types };
export { reducer };
