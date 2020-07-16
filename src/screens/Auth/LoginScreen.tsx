import React from 'react';
import {
    Container,
    Title,
    Subtitle,
    FBButton,
    GoogleButton,
    Row,
    LabelPrimary,
    IconPrimary,
    Separator,
} from '../../components/StyledComponent';

const LoginScreen: React.FC = () => {
    return (
        <Container>
            <Title>LOGIN</Title>
            <Subtitle>Faça login com suas redes sociais</Subtitle>

            <Row>
                <FBButton>
                    <Row>
                        <IconPrimary name={'facebook'} />
                        <LabelPrimary>Facebook</LabelPrimary>
                    </Row>
                </FBButton>

                <Separator />

                <GoogleButton>
                    <Row>
                        <IconPrimary name={'google'} />
                        <LabelPrimary>Google</LabelPrimary>
                    </Row>
                </GoogleButton>
            </Row>
        </Container>
    );
};

export default LoginScreen;
