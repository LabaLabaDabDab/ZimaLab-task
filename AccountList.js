import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { useNavigate } from 'react-router-dom';

import Pagination from './Pagination';

function AccountList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [accounts, setAccounts] = useState([]);
    const accountsPerPage = 10;
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/api/accounts')
            .then(response => response.json())
            .then(data => setAccounts(data));
    }, [currentPage]);

    const totalPages = Math.ceil(accounts.length / accountsPerPage);
    const indexOfLastAccount = currentPage * accountsPerPage;
    const indexOfFirstAccount = indexOfLastAccount - accountsPerPage;
    const currentAccounts = accounts.slice(indexOfFirstAccount, indexOfLastAccount);

    const handleDelete = (accountId) => {
        if (window.confirm('Are you sure you want to delete this account?')) {
            fetch(`/api/accounts/${accountId}`, {
                method: 'DELETE'
            })
                .then(response => {
                    if (response.ok) {
                        fetch('/api/accounts')
                            .then(response => response.json())
                            .then(data => setAccounts(data));
                    }
                });
        }
    };

    return (

        <div className={"table-container"}>
            <Table style={{ width: '100%', marginTop: 20, marginRight: 40, marginLeft: 0 }} striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Company Name</th>
                    <th>Position</th>
                    <th>Phone 1</th>
                    <th>Phone 2</th>
                    <th>Phone 3</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {currentAccounts.map(account => (
                    <tr key={account.id}>
                        <td>{account.id}</td>
                        <td>{account.first_name}</td>
                        <td>{account.last_name}</td>
                        <td>{account.email}</td>
                        <td>{account.company_name}</td>
                        <td>{account.position}</td>
                        <td>{account.phone1}</td>
                        <td>{account.phone2}</td>
                        <td>{account.phone3}</td>

                        <td>
                            <Button onClick={() => navigate(`/edit/${account.id}`)} className='btn btn-primary btn-sm'>Edit</Button>
                            <Button onClick={(e) => { handleDelete(account.id) }} className='btn btn-danger btn-sm ml-2'>Delete</Button>
                        </td>

                    </tr>
                ))}
                </tbody>

            </Table>
            <Link to="/create" className="btn btn-success mb-2">Create Account</Link>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default AccountList;
