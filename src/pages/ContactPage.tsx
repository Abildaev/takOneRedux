import React, {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactCard} from 'src/components/ContactCard';
import {Empty} from 'src/components/Empty';
import {useAppDispatch, useAppSelector} from "src/redux/hooks";
import {filterContactsActionCreator, getOneContactActionCreator} from "src/redux/action";


export const ContactPage  = () => {
  const dispatch = useAppDispatch()
  const {contactId} = useParams<{ contactId: string }>();
  const {oneContact, allContacts} = useAppSelector(state => state.contactsReducer)

  useEffect(() => {
    const findContact = allContacts.find(({id}) => id === contactId)
    findContact && dispatch(getOneContactActionCreator(findContact))
    return () => {
      dispatch(filterContactsActionCreator(allContacts))
    }
  }, [contactId]);

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {oneContact ? <ContactCard contact={oneContact} /> : <Empty />}
      </Col>
    </Row>
  );
};
