import React from "react";
import {Text } from "react-native";
export default function Comptext()
{
    return (
        <>
        <Text style={{}}>Hay</Text>
        <Greetings/>
        </>
    );
}

const Greetings = ()=>
{
    return <Text>Good evening!</Text>
}