const initialState = null;

interface Action {
    type: string;
    payload: any;
}

export const userReducer = (state = initialState, action: Action) => {
    return state;
};
