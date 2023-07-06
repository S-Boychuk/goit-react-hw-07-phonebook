import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import ContactItem from 'components/ContactItem/ContactItem';
import Loader from 'components/Loader';
import css from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { contacts, isLoading, error } = useSelector(getContacts);

  const filterContacts = () => {
    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };

  const filteredContacts = filterContacts();

  return (
    <>
      {isLoading && (
        <div className={css.backdrop}>
          <Loader />
        </div>
      )}
      {filteredContacts && filteredContacts.length > 0 ? (
        <ul className={css['contact-list']}>
          {filteredContacts.map(({ id, name, number }) => {
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })}
        </ul>
      ) : error ? (
        <p className={css['error-text']}>{error}</p>
      ) : (
        <div>
          <p className={css['no-contact-text']}>Sorry, no contact found</p>
        </div>
      )}
    </>
  );
};

export default ContactList;
