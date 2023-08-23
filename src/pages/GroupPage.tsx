import React, {memo, useEffect} from 'react';

import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactDto} from 'src/types/dto/ContactDto';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {Empty} from 'src/components/Empty';
import {ContactCard} from 'src/components/ContactCard';
import {useAppDispatch, useAppSelector} from "src/redux/hooks";
import {getOneContactGroupActionCreator} from "src/redux/action/contactsGroupActionCreator";
import {filterContactsActionCreator} from "src/redux/action";

export const GroupPage = memo(() => {
    const {groupId} = useParams<{ groupId: string }>();

    const dispatch = useAppDispatch()

    const {allContacts, contacts} = useAppSelector(state => state.contactsReducer)
    const {allContactsGroup, oneContactsGroup} = useAppSelector(state => state.contactsGroupReducer)

    useEffect(() => {
        const findGroup = allContactsGroup.find(({id}) => id === groupId);
        findGroup && dispatch(getOneContactGroupActionCreator(findGroup))

        const filterContacts: () => ContactDto[] | [] = () => {
            if (findGroup) {
                return allContacts.filter(({id}) => findGroup.contactIds.includes(id))
            }
            return [];
        };
        filterContacts() && dispatch(filterContactsActionCreator(filterContacts()))

        return () => {
            dispatch(filterContactsActionCreator(allContacts))
        }

    }, [groupId]);

    return (
        <Row className="g-4">
            {oneContactsGroup ? (
                <>
                    <Col xxl={12}>
                        <Row xxl={3}>
                            <Col className="mx-auto">
                                <GroupContactsCard groupContacts={oneContactsGroup}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row xxl={4} className="g-4">
                            {contacts.map((contact: ContactDto) => (
                                <Col key={contact.id}>
                                    <ContactCard contact={contact} withLink/>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </>
            ) : <Empty/>}
        </Row>
    );
});
