export const increment = () => {
    console.log('incrementa');
    return {
        type: 'INCREMENT',
    };
};

export const decrement = () => {
    console.log('subtrai');
    return {
        type: 'DECREMENT',
    };
};
