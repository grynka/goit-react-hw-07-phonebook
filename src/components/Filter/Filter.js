import React from 'react';
import { Label, Input } from './Filter.styled';
import { filterContacts } from 'redux/filterSlise';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by Name
      <Input
        type="text"
        name="find"
        onChange={changeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </Label>
  );
};

export default Filter;
