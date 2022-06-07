import React from 'react';
import { Pressable } from 'react-native';

export default (props) => {
    const pressableOpacity = (pressed) => [
        { opacity: pressed ? 0.5 : null },
        props.style,
    ];

    return (
        <Pressable {...props} style={({ pressed }) => pressableOpacity(pressed)}>
            {props.children}
        </Pressable>
    );
};
