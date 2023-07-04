import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch(setFilter);

  const handleChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <label className={css['filter-label']}>
      <span className={css['filter-label-text']}>Find contacts by name</span>
      <input
        className={css['filter-input']}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
      ></input>
    </label>
  );
};

export default Filter;
