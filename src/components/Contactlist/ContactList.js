import React from 'react';
import { Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlise';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter).toLowerCase();
  console.log(filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  const dispatch = useDispatch();

  const deleteContactId = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}{' '}
            <Button onClick={() => deleteContactId(id)}>delete</Button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
