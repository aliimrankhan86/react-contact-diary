import React from "react";

export default function ContactList(props) {

    if (props.list.length === 0) {
        return (
            <div>
                <p>No contact entry is found</p>
            </div>
        )
    }

    else {
        return (
            <div>
                {
                    props.list.map(contact => {
                        return (
                            <p key={contact.firstname}>{contact.firstname} {contact.lastname} {contact.contactno}
                                <button onClick={props.delete}>Delete</button>
                                <button onClick={props.edit}>Edit</button>
                            </p>
                        )
                    })
                }
            </div>
        )
    }




}