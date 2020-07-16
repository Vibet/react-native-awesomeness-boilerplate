import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
    padding: 20px;
    flex: 1;
    background: ${props => props.theme.background};
    justify-content: space-between;
`;

export const Row = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
`;

export const Button = styled.TouchableOpacity`
    background: ${props => props.theme.primary};
    display: flex;
    align-items: center;
    padding: 10px 0px;
    border-radius: 50px;
`;

export const FBButton = styled.TouchableOpacity`
    background: #4267B2;
    display: flex;
    flex: 1;
    align-items: center;
    height: 50px;
    padding: 10px 0px;
    border-radius: 50px;
`;

export const GoogleButton = styled.TouchableOpacity`
    background: #DB4437;
    display: flex;
    flex: 1;
    align-items: center;
    height: 50px;
    padding: 10px 0px;
    border-radius: 50px;
`;

export const Separator = styled.View`
    height: 20px;
    width: 20px;
`;

export const Counter = styled.Text`
    color: ${props => props.theme.textPrimary};
    text-align: center;
    font-size: 60px;
`;

export const Card = styled.View`
    background: ${props => props.theme.card};
    border-radius: 20px;
    shadow-color: ${props => props.theme.shadow.shadowColor};
    shadow-opacity: ${props => props.theme.shadow.shadowOpacity};
    shadow-offset: 1px 2px;
    shadow-radius: 20px;
    elevation: ${props => props.theme.shadow.elevation};
`;

export const Title = styled.Text`
    color: ${props => props.theme.textPrimary};
    text-align: center;
    font-size: 24px;
`;

export const Subtitle = styled.Text`
    color: ${props => props.theme.textPrimary};
    text-align: center;
    font-size: 18px;
`;

export const LabelPrimary = styled.Text`
    color: ${props => props.theme.textPrimary};
    text-align: center;
    font-size: 18px;
    font-weight: bold;
`;

export const LabelButton = styled.Text`
    color: ${props => props.theme.textContrast};
`;

export const Input = styled.TextInput`
    color: ${props => props.theme.textPrimary};
    background: ${props => props.theme.card};
    border-radius: 40px;
    padding: 10px 20px;
`;

const IconFA = (props) => {
    return <FontAwesome5 name={props.name} style={props.style} />;
};

export const IconPrimary = styled(IconFA)`
    color: ${props => props.theme.textPrimary};
    font-size: 24px;
`;
