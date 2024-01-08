import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsCount } from '../../redux/selectors';
import { useEffect } from 'react';
import { getContacts } from '../../servise/contactsServise';

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectContactsCount);
  const selectLoader = state => state.contacts.isLoading;
  const selectError = state => state.contacts.error;
  const isLoading = useSelector(selectLoader);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <p>
        Total contacts in phonebook:
        <span> {count}</span>
      </p>
      <Filter />
      {isLoading && !error && <p>Loading...</p>}
      {error && <p>An error occurred: {error}</p>}
      <ContactList />
    </div>
  );
}
