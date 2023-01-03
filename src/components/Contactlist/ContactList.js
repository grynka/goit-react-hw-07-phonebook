import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';
import { getError, getIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operation';
import { MdAccountCircle, MdHighlightOff } from 'react-icons/md';
import { List, BtnDel, Item } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const items = useSelector(getContacts);
  const filter = useSelector(getFilter).toLowerCase();
  const filteredContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContactId = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <List>
        {filteredContacts.length > 0 &&
          filteredContacts.map(({ id, name, phone }) => (
            <Item key={id}>
              <MdAccountCircle style={{ fontSize: '20px' }} />
              {name}, {phone}{' '}
              <BtnDel onClick={() => deleteContactId(id)}>
                <MdHighlightOff style={{ fontSize: '20px' }} />
              </BtnDel>
            </Item>
          ))}
      </List>
    </>
  );
};

export default ContactList;
