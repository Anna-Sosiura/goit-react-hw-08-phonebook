import { useSelector, useDispatch } from 'react-redux';
import { List } from './ContactList.styled';
// import { List, DeleteBtn } from './ContactList.styled';
import { getFilterContacts } from '../../redux/selectors.js';
import { deleteContact } from '../../servise/contactsServise';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = () => {
  const filteredContacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {filteredContacts.map(contact => (
        <li
          key={contact.id}
          style={{
            fontSize: 30,
          }}
        >
          {contact.name}: {contact.number}
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            style={{
              color: '#fff',
              backgroundColor: 'red',
              position: 'absolute',
              right: 150,
            }}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </li>
      ))}
    </List>
  );
};
export default ContactList;
