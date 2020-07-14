import styled from 'styled-components/native';
import colors from '../theme/colors';

export const Container = styled.View`
    padding: 20px;
    flex: 1;
    background: #f5f5f5;
    justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
    background: ${colors.black};
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-radius: 50px;
`;

export const LabelButton = styled.Text`
    color: #fff;
`;

export const Counter = styled.Text`
    color: #333;
    text-align: center;
    font-size: 60px;
`;

export const Card = styled.View`
    background: #fff;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.55);
    elevation: 2;
    border-radius: 20px;
`;