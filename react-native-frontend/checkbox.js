import { CheckBox } from "react-native-elements";
import React, { useState } from "react";

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
  handleOnPress = () => this.setState({ checked: !this.state.checked });
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
