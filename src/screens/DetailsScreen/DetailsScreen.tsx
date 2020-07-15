import React, { Component } from 'react';
import {
    Container,
    Button,
    Counter,
    LabelButton,
    Card,
} from '../../components/StyledComponent';

class DetailsScreen extends Component {
    render() {
        return (
            <>
                <Container>
                    <Button onPress={() => {}}>
                        <LabelButton>Tema escuro</LabelButton>
                    </Button>

                    <Card>
                        <Counter>Light</Counter>
                    </Card>

                    <Button onPress={() => {}}>
                        <LabelButton>Tema claro</LabelButton>
                    </Button>
                </Container>
            </>
        );
    }
}

export default DetailsScreen;
