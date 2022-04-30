import Contact from '../Contact';
import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ arrayOfNames, deleteContact }) => {
  return (
    <ul>
      {arrayOfNames.map(({ name, number, id }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  arrayOfNames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
