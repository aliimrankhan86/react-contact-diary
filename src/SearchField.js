import React from "react";

export default class ContactDiary extends React.Component {
    render() {
        return (
            <div className="searchfield">
                <input type="text" placeholder="search contact" />
                <button>Search</button>
            </div>
        );
    }
}