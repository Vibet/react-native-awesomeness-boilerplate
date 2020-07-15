import React from 'react';
import {
    Container,
    Button,
    Counter,
    LabelButton,
    Card,
} from '../../components/StyledComponent';

const HomeScreen = (props) => {
    return (
        <Container>
            <Button title="Adicionar +" onPress={() => props.increment()}>
                <LabelButton>Adicionar +</LabelButton>
            </Button>

            <Card>
                <Counter>{props.counter}</Counter>
            </Card>

            <Button onPress={() => props.decrement()}>
                <LabelButton>Subtrair -</LabelButton>
            </Button>
        </Container>
    );
};

export default HomeScreen;
