import React from "react";
import ContactList from "./ContactList";


export default class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            contactno: "",
            data: [],
            add: 'add contact',
            loc: ""
        }
    }

    onContactDelete = (e) => {
        e.preventDefault();
        const currentElm = e.target.parentElement.childNodes[0].nodeValue;
        const data = [...this.state.data];
        data.splice(data.indexOf(currentElm), 1)
        this.setState({
            data: data
        })
    }

    onContactEdit = (e) => {
        e.preventDefault();
        const fname = e.target.parentElement.childNodes[0].nodeValue;
        const lname = e.target.parentElement.childNodes[2].nodeValue;
        const num = e.target.parentElement.childNodes[4].nodeValue;
        const data = [...this.state.data];
        let i;
        const loc = data.filter((current, index) => {
            if (current.firstname === fname) {
                i = index
                return true
            }
        })

        this.setState({
            firstname: fname,
            lastname: lname,
            contactno: num,
            data: data,
            add: 'Update contact',
            loc: i
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.firstname.length === 0 || this.state.lastname.length === 0 || this.state.contactno.length === 0) {
            alert('Please insert data on all fields!')
        }
        else {
            const contactInfo = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                contactno: this.state.contactno
            }
            const data = [...this.state.data];
            data.push(contactInfo)
            this.setState({
                data: data,
                firstname: "",
                lastname: "",
                contactno: ""
            })
        }

        if (this.state.add !== 'add contact') {
            const data = [...this.state.data];
            data[this.state.loc].firstname = this.state.firstname;
            data[this.state.loc].lastname = this.state.lastname;
            data[this.state.loc].contactno = this.state.contactno;
            this.setState({
                data: data
            })
        }
    }

    onFirstNameInput = (e) => {
        console.log(e.target.value)
        this.setState({
            firstname: e.target.value
        })
    }

    onLastNameInput = (e) => {
        console.log(e.target.value)
        this.setState({
            lastname: e.target.value
        })
    }

    onContactNumberInput = (e) => {
        console.log(e.target.value);
        this.setState({
            contactno: e.target.value
        })
    }

    render() {
        const display = {
            display: this.props.display
        }
        return (
            <div className="wrapper" style={display}>
                <div>
                    <form className="form" onSubmit={this.onFormSubmit} >
                        <label>
                            First name
                        <input type="text" onChange={this.onFirstNameInput} value={this.state.firstname} />
                        </label>
                        <label>
                            last name
                        <input type="text" onChange={this.onLastNameInput} value={this.state.lastname} />
                        </label>
                        <label>
                            Phone Number
                        <input type="tel" onChange={this.onContactNumberInput} value={this.state.contactno} />
                        </label>
                        <input type="submit" value={this.state.add} />
                    </form>
                </div>
                <ContactList list={this.state.data} delete={this.onContactDelete} edit={this.onContactEdit} />
            </div>
        );
    }
}