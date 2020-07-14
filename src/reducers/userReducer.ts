const initialState = {
    name: '',
};

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'CLICK_UPDATE_VALUE':
            return {
                ...state,
                name: action.name,
            };
        default:
            return state;
    }
};
