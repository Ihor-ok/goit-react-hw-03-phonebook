import { Component } from 'react'
import { nanoid } from 'nanoid'
import Phonebook from 'components/Phonebook/Phonebook'
import Contacts from 'components/Contacts/Contacts'
import Filter from './Filter/Filter'
import css from './App.module.css'

const LS_KEY = 'contacts'

class App extends Component {

  state = {

    contacts: [],
    filter: '',
    
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(LS_KEY)) 
    
    if (contacts) {
      this.setState({ contacts })
    }
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts))
  }

  handleSubmit = (values, { resetForm }) => {
    
    const contact = { ...values }
    contact.id = nanoid()
    console.log(contact);
    

    if (this.state.contacts.find(contactState => contactState.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase())) {
      alert(`${contact.name} is already in contacts.`)
      return
    }

    this.setState({contacts: [...this.state.contacts, contact]})

    resetForm();

  }

  hendleDelete = (id) => {
    this.setState((prev) => {return {contacts: prev.contacts.filter((contac) =>contac.id !== id)}})
  }

  changeFilter = (evt) => {
        this.setState({ filter: evt.currentTarget.value })
  }


  render() {

    const normslizedFilter = this.state.filter.toLocaleLowerCase()
    const visibileContakt = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normslizedFilter))

  
    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <Phonebook handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts contacts={visibileContakt} hendleDelete={this.hendleDelete} />
        
      </div>

    )
  }

}



export default App

