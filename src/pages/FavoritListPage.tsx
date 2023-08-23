import React, {memo, useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {ContactDto} from 'src/types/dto/ContactDto';
import {useAppDispatch, useAppSelector} from "src/redux/hooks";
import {filterContactsActionCreator} from "src/redux/action";

export const FavoriteListPage = memo(() => {

  const dispatch = useAppDispatch()

  const {allContacts, contacts} = useAppSelector(state => state.contactsReducer)
  const {favoriteContacts} = useAppSelector(state => state.contactsFavoriteReducer)

  useEffect(() => {
    const favoriteContactsShow = () => allContacts.filter(({id}) => favoriteContacts.includes(id))
    favoriteContactsShow() && dispatch(filterContactsActionCreator(favoriteContactsShow()))
    return () => {
      dispatch(filterContactsActionCreator(allContacts))
    }
  }, [allContacts, favoriteContacts])


  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact: ContactDto) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
})
