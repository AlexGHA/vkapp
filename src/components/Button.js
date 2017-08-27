import React from "react";

class Button extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        if(this.props.onClick)
        {
            this.props.onClick();
        }
    }

    render()
    {
        return (
            <div
                className={"button " + this.props.className}
                onClick={this.handleClick}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Button;
