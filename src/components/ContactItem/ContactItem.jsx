import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { PropTypes } from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <li className={css['contact-list-item']}>
        <span className={css['contact-name-text']}>{name}: </span>
        <span className={css['contact-number-text']}> {number}</span>
        <button
          className={css['delete-contact-btn']}
          type="button"
          onClick={() => onDelete()}
        >
          Delete
        </button>
      </li>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
