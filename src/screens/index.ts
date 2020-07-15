import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

import HomeScreen from './Home/HomeScreen';
import DetailsScreen from './Details/DetailsScreen';
import LoginScreen from './Auth/LoginScreen';

const mapStateToProps = (state) => {
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
    Auth: {
        Login: LoginScreen,
    },
};
