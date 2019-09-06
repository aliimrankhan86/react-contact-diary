import React from "react";

export default class AddContact extends React.Component {
    render() {
        return (
            <div>
                <button className="megabutton" onClick={this.props.onAddnewContact}>View Form</button>
            </div>
        );
    }
}