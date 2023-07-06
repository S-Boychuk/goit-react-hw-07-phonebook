import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { contacts, isLoading, error } = useSelector(getContacts);

  // if (!contacts && !error) {
  //   return;
  // }

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
      {isLoading && <p>Loading...</p>}
      {filteredContacts && filteredContacts.length > 0 ? (
        <ul className={css['contact-list']}>
          {filteredContacts.map(({ id, name, number }) => {
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })}
        </ul>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <p className={css['no-contact-text']}>Sorry, no contact found</p>
        </div>
      )}
    </>
  );
};

export default ContactList;
