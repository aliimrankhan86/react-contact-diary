import React from "react";
import ReactDOM from "react-dom";
import SearchField from "./SearchField";
import AddContact from "./AddContact";
import ContactForm from "./ContactForm";


import "./styles.css";


export default class ContactDiary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'none',
      hide: 'none',
      opacity: 0,
      data: [],
      contacts: []
    }
  }

  masterUpdate = (data) => {

  }


  onAddnewContact = (e) => {
    this.setState({
      display: 'block'
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <h1>React Contact Diary</h1>
        <SearchField />
        <AddContact onAddnewContact={this.onAddnewContact} hide={this.state.hide} contacts={this.state.contacts} />
        <ContactForm display={this.state.display} opacity={this.state.opacity} data={this.state.data} />
        <br />
        {/* <ContactList list={this.state.data} /> */}

      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ContactDiary />, rootElement);
