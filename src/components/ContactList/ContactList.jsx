import React from 'react';
import './ContactList.styled';
import { ContactStyle, ContactListStyle, BtnDeleteStyle } from './ContactList.styled';
import { useDispatch, useSelector} from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const deleteContactHandler = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactListStyle>
      {visibleContacts.map(contact => (
        <ContactStyle key={contact.id}>
          {contact.name} : {contact.phone}
          <BtnDeleteStyle onClick={() => deleteContactHandler(contact.id)}>Delete</BtnDeleteStyle>
        </ContactStyle>
      ))}
    </ContactListStyle>
  );
}

export default ContactList;