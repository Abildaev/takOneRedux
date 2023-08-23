import React, {memo, useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {FilterForm, FilterFormValues} from 'src/components/FilterForm';
import {ContactDto} from 'src/types/dto/ContactDto';
import {useAppDispatch, useAppSelector} from "src/redux/hooks";
import {filterContactsActionCreator} from "src/redux/action";


export const ContactListPage = memo(() => {

  const dispatch = useAppDispatch()

  const {allContacts, contacts} = useAppSelector(state => state.contactsReducer)
  const {allContactsGroup} = useAppSelector(state => state.contactsGroupReducer)

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = allContacts;
    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(({name}) => (
        name.toLowerCase().indexOf(fvName) > -1
      ))
    }
    if (fv.groupId) {
      const groupContacts = allContactsGroup.find(({id}) => id === fv.groupId);
      if (groupContacts) {
        findContacts = findContacts.filter(({id}) => (
          groupContacts.contactIds.includes(id)
        ))
      }
    }
    dispatch(filterContactsActionCreator(findContacts))
  }

  useEffect(() => {
    return () => {
      dispatch(filterContactsActionCreator(allContacts))
    }
  }, [])

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={allContactsGroup} initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {
            contacts.map((contact: ContactDto) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))

          }
        </Row>
      </Col>
    </Row>
  );
})
