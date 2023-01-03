import { Label, Input, Forms, Button } from './ContactForm.styled';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operation';
import { getContacts } from 'redux/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const contactsName = items.map(contact => contact.name);

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'phone':
        setPhone(event.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleContactsCreate = event => {
    event.preventDefault();
    if (contactsName.includes(name)) {
      alert('данный контакт уже существует');
      return;
    } else dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <Forms onSubmit={handleContactsCreate}>
      <Label>
        Name
        <Input
          value={name}
          type="text"
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Phone
        <Input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <p>
        <Button type="submit">Add contact</Button>
      </p>
    </Forms>
  );
}
