import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

import HomeScreen from './HomeScreen/HomeScreen';
import DetailsScreen from './DetailsScreen/DetailsScreen';

const mapStateToProps = (state) => {
    console.log(state);
    return {
        counter: state.counter,
        theme: state.theme,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => { dispatch(increment()) },
        decrement: () => { dispatch(decrement()) },
    };
};

export const screens = {
    Home: connect(mapStateToProps, mapDispatchToProps)(HomeScreen),
    Details: connect(mapStateToProps, mapDispatchToProps)(DetailsScreen),
};