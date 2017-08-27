import React from "react";
import Button from "./Button";

class CheckButton extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            checked: props.checked || false
        };
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({checked: nextProps.checked});
    }

    render()
    {
        return (
            <Button
                className={"check-button " + (this.state.checked ? "check-button-checked " : "") + this.props.className}
                onClick={this.props.onClick}
            >{this.props.children}</Button>
        );
    }
}

export default CheckButton;
