import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { notification, Button, Table, Select, Typography } from 'antd';
import { useNavigate } from 'react-router-dom'; 

const { Option } = Select;
const { Title } = Typography;

const GenerateAccountStatements = () => {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [statements, setStatements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('/api/manager/accounts');
        setAccounts(response.data);
      } catch (error) {
        console.error('Failed to fetch accounts:', error);
        notification.error({
          message: 'Error',
          description: 'Failed to fetch accounts.',
        });
      }
    };
    fetchAccounts();
  }, []);

  const handleAccountChange = (value) => {
    setSelectedAccount(value);
  };

  const fetchStatements = async () => {
    if (!selectedAccount) {
      notification.warning({
        message: 'Warning',
        description: 'Please select an account first.',
      });
      return;
    }

    try {
      const response = await axios.get(`/api/manager/accounts/${selectedAccount}/statements`);
      setStatements(response.data);
      notification.success({
        message: 'Success',
        description: 'Account statements fetched successfully.',
      });
    } catch (error) {
      console.error('Failed to fetch account statements:', error);
      notification.error({
        message: 'Error',
        description: 'Failed to fetch account statements.',
      });
    }
  };

  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => `$${amount.toFixed(2)}`,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  const handleBack = () => {
    navigate('/manager'); // Adjust the route to the correct path for the manager dashboard
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Generate Account Statements</Title>
      <Select
        style={{ width: '200px', marginBottom: '20px' }}
        placeholder="Select an account"
        onChange={handleAccountChange}
      >
        {accounts.map(account => (
          <Option key={account.id} value={account.id}>
            {account.username} - {account.id}
          </Option>
        ))}
      </Select>
      <Button type="primary" onClick={fetchStatements} style={{ marginBottom: '20px' }}>
        Fetch Statements
      </Button>
      <Table dataSource={statements} columns={columns} rowKey="transactionId" />
      <Button type="default" onClick={handleBack} style={{ marginTop: '20px' }}>
        Go Back to Dashboard
      </Button>
    </div>
  );
};

export default GenerateAccountStatements;
