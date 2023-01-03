import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contactlist/ContactList';
import { Phonebook } from './App.styled';


export default function App() {

  return (
    <Phonebook>
      <h2>Phonebook</h2>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </Phonebook>
  );
}
