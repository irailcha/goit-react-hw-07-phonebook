import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import GlobalStyle from './GlobalStyle';
import { SectionStyle, TitleStyle, TitleContactsStyle, ContactListStyle } from './App.styled';
import {
  selectLoading,
  selectError,
  selectContacts
} from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';

const App = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);



  return (
    <SectionStyle>
      <TitleStyle> Phonebook </TitleStyle>
      <ContactForm/>
      {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {contacts.length === 0 && (
            <p>There are no any contacts </p>
          )}
      <TitleContactsStyle> Contacts </TitleContactsStyle>
      <ContactListStyle>
        <Filter />
        <ContactList />
      </ContactListStyle>
      <GlobalStyle />
    </SectionStyle>
  );
};

export default App;