import React from "react";

class ProgressBar extends React.Component
{
    render()
    {
        return (
            <div className={"progress-bar " + (this.props.visible ? "visible" : "hidden")}>
                <img
                    src="/assets/images/spinner.gif"
                    alt=""
                />
            </div>
        );
    }
}

export default ProgressBar;
