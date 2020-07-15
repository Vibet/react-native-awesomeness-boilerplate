import React from 'react';
import { Container, Counter, Card } from '../../components/StyledComponent';

const DetailsScreen: React.FC = (props) => {
    return (
        <Container style={{ justifyContent: 'center' }}>
            <Card>
                <Counter>{props.theme}</Counter>
            </Card>
        </Container>
    );
};

export default DetailsScreen;
