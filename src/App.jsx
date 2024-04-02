import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import './App.css'

function App() {
  const [contactsList, setContactList] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem('contacts'));

    if (savedContacts !== null) {
      return savedContacts;
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  useEffect(() => {
    if (contactsList !== null) {
      window.localStorage.setItem('contacts', JSON.stringify(contactsList));
    }
  }, [contactsList]);

  const [filters, setFilter] = useState('');

  const visibleContacts = contactsList.filter(({ name }) => {
    return name.toLowerCase().includes(filters.toLowerCase().trim());
  });

  const contactDelete = idToDelete => {
    setContactList(
      contactsList.filter(({ id }) => {
        return id !== idToDelete;
      })
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contactsList={contactsList} onSubmit={setContactList} />
      <SearchBox filter={filters} onFilter={setFilter} />
      <ContactList contactsList={visibleContacts} onDelete={contactDelete} />
    </div>
  );
}


export default App
