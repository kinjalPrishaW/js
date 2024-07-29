// /src/components/Manager/AccountStatements.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

const AccountStatements = () => {
  const [statements, setStatements] = useState([]);
  const { accountId } = useParams();

  useEffect(() => {
    const fetchStatements = async () => {
      try {
        const response = await api.get(`/manager/accounts/${accountId}/statements`);
        setStatements(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStatements();
  }, [accountId]);

  return (
    <div>
      <h2>Account Statements</h2>
      <ul>
        {statements.map((statement) => (
          <li key={statement.id}>
            {statement.date}: {statement.type} of ${statement.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountStatements;
