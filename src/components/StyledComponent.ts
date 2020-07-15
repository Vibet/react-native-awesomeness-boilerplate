import styled from 'styled-components/native';
import darkTheme from '../theme/darkTheme';

export const Container = styled.View`
    padding: 20px;
    flex: 1;
    background: ${darkTheme.background};
    justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
    background: ${darkTheme.primary};
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-radius: 50px;
`;

export const LabelButton = styled.Text`
    color: ${darkTheme.textContrast};
`;

export const Counter = styled.Text`
    color: ${darkTheme.textPrimary};
    text-align: center;
    font-size: 60px;
`;

export const Card = styled.View`
    background: ${darkTheme.card};
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.55);
    elevation: 2;
    border-radius: 20px;
`;