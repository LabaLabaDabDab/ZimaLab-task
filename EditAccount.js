import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useNavigate } from 'react-router-dom';

function EditAccount() {
    const { id } = useParams();
    const history = useNavigate();
    const [account, setAccount] = useState({
        first_name: '',
        last_name: '',
        email: '',
        company_name: '',
        position: '',
        phone1: '',
        phone2: '',
        phone3: '',
    });


    useEffect(() => {
        fetch(`/api/accounts/${id}`)
            .then(response => response.json())
            .then(data => setAccount(data[0]));
    }, [id]);

    const handleUpdate = () => {
        const accountToUpdate = {
            first_name: account.first_name,
            last_name: account.last_name,
            email: account.email,
            company_name: account.company_name,
            position: account.position,
            phone1: account.phone1,
            phone2: account.phone2,
            phone3: account.phone3,
        };

        fetch(`/api/accounts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(accountToUpdate),
        })
            .then(response => {
                if (response.ok) {
                    history('/');
                }
            });
    };

    return (
        <div>
            <h3 style={{ marginTop: 20, marginBottom: 20, marginLeft: 2 }}>Edit Account</h3>
            <Form>
                {account && (
                    <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            style={{ marginBottom: 10, width: 600 }}
                            type="text"
                            placeholder="Enter first name"
                            value={account.first_name || ''}
                            onChange={e => setAccount({ ...account, first_name: e.target.value })}
                        />
                    </Form.Group>
                )}

                {account && (
                    <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            style={{ marginBottom: 10, width: 600 }}
                            type="text"
                            placeholder="Enter last name"
                            value={account.last_name || ''}
                            onChange={e => setAccount({ ...account, last_name: e.target.value })}
                        />
                    </Form.Group>
                )}

                {account && (
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            style={{ marginBottom: 10, width: 600 }}
                            type="text"
                            placeholder="Enter email"
                            value={account.email || ''}
                            onChange={e => setAccount({ ...account, email: e.target.value })}
                        />
                    </Form.Group>
                )}

                {account && (
                    <Form.Group controlId="formCompanyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                            style={{ marginBottom: 10, width: 600 }}
                            type="text"
                            placeholder="Enter company name"
                            value={account.company_name || ''}
                            onChange={e => setAccount({ ...account, company_name: e.target.value })}
                        />
                    </Form.Group>
                )}

                {account && (
                    <Form.Group controlId="formPosition">
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                            style={{ marginBottom: 10, width: 600 }}
                            type="text"
                            placeholder="Enter position"
                            value={account.position || ''}
                            onChange={e => setAccount({ ...account, position: e.target.value })}
                        />
                    </Form.Group>
                )}

                {account && (
                    <Form.Group controlId="formPhone1">
                        <Form.Label>Phone 1</Form.Label>
                        <Form.Control
                            style={{ marginBottom: 10, width: 600 }}
                            type="text"
                            placeholder="Enter phone 1"
                            value={account.phone1 || ''}
                            onChange={e => setAccount({ ...account, phone1: e.target.value })}
                        />
                    </Form.Group>
                )}

                {account && (
                    <Form.Group controlId="formPhone2">
                        <Form.Label>Phone 2</Form.Label>
                        <Form.Control
                            style={{ marginBottom: 10, width: 600 }}
                            type="text"
                            placeholder="Enter phone 2"
                            value={account.phone2 || ''}
                            onChange={e => setAccount({ ...account, phone2: e.target.value })}
                        />
                    </Form.Group>
                )}

                {account && (
                    <Form.Group controlId="formPhone3">
                        <Form.Label>Phone 3</Form.Label>
                        <Form.Control
                            style={{ marginBottom: 10, width: 600 }}
                            type="text"
                            placeholder="Enter phone 3"
                            value={account.phone3 || ''}
                            onChange={e => setAccount({ ...account, phone3: e.target.value })}
                        />
                    </Form.Group>
                )}

                <Button variant="primary" onClick={handleUpdate}>
                    Update
                </Button>
                <Link to="/" style={{ marginLeft: 10, marginTop: 8, color: 'white' }} className="btn btn-dark mb-2 ">Back</Link>
            </Form>
        </div>
    );
}

export default EditAccount;
