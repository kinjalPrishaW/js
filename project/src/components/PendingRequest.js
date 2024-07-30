import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { notification, Button, Table } from 'antd';
import { useNavigate } from 'react-router-dom'; 

const PendingWithdrawalRequests = () => {
  const [withdrawalRequests, setWithdrawalRequests] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchWithdrawalRequests = async () => {
      try {
        const response = await axios.get('/api/manager/withdrawals/pending');
        setWithdrawalRequests(response.data);
      } catch (error) {
        console.error('Failed to fetch withdrawal requests:', error);
        notification.error({
          message: 'Error',
          description: 'Failed to fetch pending withdrawal requests.',
        });
      }
    };
    fetchWithdrawalRequests();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.post(`/api/manager/withdrawals/${id}`, { status: 'approved' });
      notification.success({
        message: 'Success',
        description: 'Withdrawal request approved successfully.',
      });
      setWithdrawalRequests(withdrawalRequests.filter(req => req.id !== id));
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to approve withdrawal request.',
      });
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`/api/manager/withdrawals/${id}`, { status: 'rejected' });
      notification.success({
        message: 'Success',
        description: 'Withdrawal request rejected successfully.',
      });
      setWithdrawalRequests(withdrawalRequests.filter(req => req.id !== id));
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to reject withdrawal request.',
      });
    }
  };

  const columns = [
    {
      title: 'Account ID',
      dataIndex: 'accountId',
    },
    {
      title: 'Username',
      dataIndex: ['user', 'username'],
    },
    {
      title: 'Requested Amount',
      dataIndex: 'amount',
      render: (amount) => `$${amount.toFixed(2)}`,
    },
    {
      title: 'Requested On',
      dataIndex: 'date',
    },
    {
      title: 'Action',
      render: (text, record) => (
        <span>
          <Button type="primary" onClick={() => handleApprove(record.id)}>Approve</Button>
          <Button type="danger" onClick={() => handleReject(record.id)} style={{ marginLeft: 8 }}>Reject</Button>
        </span>
      ),
    },
  ];

  const handleBack = () => {
    navigate('/manager'); // Adjust the route to the correct path for the manager dashboard
  };

  return (
    <div>
      <Table dataSource={withdrawalRequests} columns={columns} rowKey="id" />
      <Button type="default" onClick={handleBack} style={{ marginBottom: '16px' }}>
        Go Back to Dashboard
      </Button>
    </div>
  );
};

export default PendingWithdrawalRequests;
