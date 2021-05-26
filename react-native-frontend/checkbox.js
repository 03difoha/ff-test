import { CheckBox } from "react-native-elements";
import React, { useState } from "react";
import api from "./api";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  componentDidMount() {
    this.setState({ checked: this.props.checked });
  }

  handleOnPress = () => {
    var newState = !this.state.checked;
    this.setState({ checked: newState });
    api.update_todo(this.props.id, newState);
    console.log(this.props.id, newState);
  };
  render() {
    return (
      <CheckBox
        onPress={this.handleOnPress}
        checked={this.state.checked}
      ></CheckBox>
    );
  }
}

export default Checkbox;
