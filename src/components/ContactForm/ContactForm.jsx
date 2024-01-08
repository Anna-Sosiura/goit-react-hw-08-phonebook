import { useState } from 'react';
import { Form, Label, Input } from './ContactForm.styled';
// import { Form, AddBtn, Label, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../servise/contactsServise';
import { Notify } from 'notiflix';
import Button from '@mui/material/Button';

const getContacts = state => state.contacts.contactItems;

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const resetForm = () => {
      setName('');
      setNumber('');
    };
    const isContact = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (isContact) {
      Notify.info(`Such contact already exists`);
      resetForm();
      return;
    }
    dispatch(addContact({ name, number }));

    resetForm();
  };

  const hendleChange = e => {
    const { value, name } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);

        break;
      default:
        break;
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          required
          value={name}
          onChange={hendleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          required
          value={number}
          onChange={hendleChange}
        />
      </Label>
      <Button variant="contained" color="success" type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
