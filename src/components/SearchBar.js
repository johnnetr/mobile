import React from 'react';
import { TextInput, View } from 'react-native';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
        }
    }

    onChange(e) {
        let newValue = e.target.value;
        this.setState({
            value: newValue,
        });
        this.props.handleChange(newValue);
    }

    render() {
        return (
            <View style={{borderWidth: 2, marginHorizontal: 10, borderRadius: 5}}>
                <TextInput value={this.state.value} onChange={(e) => this.onChange(e)} placeholder="Movie search..." />
            </View>
        )
    }
}