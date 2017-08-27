import React from "react";
import ProgressBar from "./ProgressBar";

class Image extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            loaded: false
        };
    }

    componentDidMount()
    {
        let _this = this;
        let image = new window.Image();

        image.onload = function()
        {
            try {
                _this.image.src = _this.props.src;
                _this.setState({loaded: true});
            }
            catch(e)
            {
            }
        };

        image.src = _this.props.src;
    }

    render()
    {
        const {src} = this.props;

        if(!src)
        {
            return null;
        }

        return (
            <picture>
                {!this.state.loaded &&
                    <ProgressBar />
                }

                <img
                    ref={image => this.image = image}
                    className={"image " + (this.state.loaded ? "visible" : "hidden")}
                    src="/assets/images/transparent.png"
                    alt=""
                />
            </picture>
        );
    }
}

export default Image;
