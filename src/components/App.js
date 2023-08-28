import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    if (name.trim() !== '' && number.trim() !== '') {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { name, number }],
        name: '',
        number: '',
      }));
    }
  };

  render() {
    const { contacts, name, number } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone number:
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;