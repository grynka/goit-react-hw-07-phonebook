import { useEffect } from 'react';
import { Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/operation'
import { getError, getIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operation';


const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const items = useSelector(getContacts);
  const filter = useSelector(getFilter).toLowerCase();
  const filteredContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter))

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContactId = contactId => {
    dispatch(deleteContact(contactId));
  };

 return (
      <div>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <ul>{filteredContacts.length > 0 && filteredContacts.map(({ id, name, phone }) => <li key={id}><p>{name}, {phone}{' '}
      <Button onClick={() => deleteContactId(id)}>delete</Button>
      </p>
      </li>
      )}</ul>
    </div>
  );
};

export default ContactList;
