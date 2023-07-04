import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInput = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`field type name - ${name} can't be managed`);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      window.alert(`we ara sorry, contact ${name} has already existed`);
      return;
    }
    dispatch(addContact(name, number));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css['phonebook-form']} onSubmit={handleSubmit}>
      <div className={css.wrapper}>
        <label className={css['phonebook-label']}>
          <span className={css['phonebook-label-text']}>Name</span>
          <input
            className={css['phonebook-input']}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInput}
          />
        </label>
        <label className={css['phonebook-label']}>
          <span className={css['phonebook-label-text']}>Number</span>
          <input
            className={css['phonebook-input']}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInput}
          />
        </label>
      </div>
      <button className={css['phonebook-form-btn']} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
