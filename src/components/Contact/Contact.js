import React from 'react';
import s from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li className={s.item}>
      <span>{name}: </span>
      <span>{number}</span>
      <button className={s.button} id={id} onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
