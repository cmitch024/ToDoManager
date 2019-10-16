import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Todo from '../components/Todo';

export default class Todos extends Component {
    state = {
        todo: "some shit to do"
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} 
                />
                <Todo {this.state.todo}></Todo>
            </View>
        );
    }
}