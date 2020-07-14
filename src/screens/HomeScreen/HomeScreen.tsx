import React, { Component } from 'react';
import {
    Container,
    Button,
    Counter,
    LabelButton,
    Card,
} from '../../components/StyledComponent';

class HomeScreen extends Component {
    state = { value: 0 };

    increment = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }));
    };

    decrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1,
        }));
    };

    render() {
        return (
            <>
                <Container>
                    <Button title="Adicionar +" onPress={this.increment}>
                        <LabelButton>Adicionar +</LabelButton>
                    </Button>

                    <Card>
                        <Counter>{this.state.value}</Counter>
                    </Card>

                    <Button onPress={this.decrement}>
                        <LabelButton>Subtrair -</LabelButton>
                    </Button>
                </Container>
            </>
        );
    }
}

export default HomeScreen;
