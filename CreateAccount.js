import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom';

function CreateAccount() {
    const navigate = useNavigate();
    const [newAccount, setNewAccount] = useState({
        first_name: '',
        last_name: '',
        email: '',
        company_name: '',
        position: '',
        phone1: '',
        phone2: '',
        phone3: '',
    });

    const handleCreate = () => {
        fetch('/api/accounts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAccount),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Account created successfully');
                navigate('/'); // Перейти на список аккаунтов после создания
            });
    };

    return (
        <div>
            <h3 style={{ marginTop: 20, marginBottom: 20, marginLeft: 2 }}>Create New Account</h3>
            <Form>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        style={{ marginBottom: 10, width: 600 }}
                        type="text"
                        placeholder="Enter first name"
                        value={newAccount.first_name}
                        onChange={e => setNewAccount({ ...newAccount, first_name: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        style={{ marginBottom: 10, width: 600 }}
                        type="text"
                        placeholder="Enter last name"
                        value={newAccount.last_name}
                        onChange={e => setNewAccount({ ...newAccount, last_name: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        style={{ marginBottom: 10, width: 600 }}
                        type="text"
                        placeholder="Enter email"
                        value={newAccount.email}
                        onChange={e => setNewAccount({ ...newAccount, email: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formCompanyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                        style={{ marginBottom: 10, width: 600 }}
                        type="text"
                        placeholder="Enter company name"
                        value={newAccount.company_name}
                        onChange={e => setNewAccount({ ...newAccount, company_name: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formPosition">
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                        style={{ marginBottom: 10, width: 600 }}
                        type="text"
                        placeholder="Enter position"
                        value={newAccount.position}
                        onChange={e => setNewAccount({ ...newAccount, position: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formPhone1">
                    <Form.Label>Phone 1</Form.Label>
                    <Form.Control
                        style={{ marginBottom: 10, width: 600 }}
                        type="text"
                        placeholder="Enter phone 1"
                        value={newAccount.phone1}
                        onChange={e => setNewAccount({ ...newAccount, phone1: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formPhone2">
                    <Form.Label>Phone 2</Form.Label>
                    <Form.Control
                        style={{ marginBottom: 10, width: 600 }}
                        type="text"
                        placeholder="Enter phone 2"
                        value={newAccount.phone2}
                        onChange={e => setNewAccount({ ...newAccount, phone2: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formPhone3">
                    <Form.Label>Phone 3</Form.Label>
                    <Form.Control
                        style={{ marginBottom: 10, width: 600 }}
                        type="text"
                        placeholder="Enter phone 3"
                        value={newAccount.phone3}
                        onChange={e => setNewAccount({ ...newAccount, phone3: e.target.value })}
                    />
                </Form.Group>

                <Button variant="primary" onClick={handleCreate}>
                    Create
                </Button>
                <Link to="/" style={{ marginLeft: 10, marginTop: 8, color: 'white' }} className="btn btn-dark mb-2 ">Back</Link>
            </Form>
        </div>
    );
}

export default CreateAccount;
