import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AccountList from './AccountList';
import EditAccount from './EditAccount';
import CreateAccount from "./CreateAccount";

function App() {
  return (
      <Routes>
        <Route path="/" element={<AccountList />} />
        <Route path="/edit/:id" element={<EditAccount />} />
        <Route path="/create" element={<CreateAccount />} />
      </Routes>
  );
}

export default App;