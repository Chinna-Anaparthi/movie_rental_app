import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, TextField, Button, Typography } from '@mui/material';
import './AddPayment.css';

const AddPayment = () => {
  const [paymentData, setPaymentData] = useState({
    RentalId: 0,
    CardNumber: '',
    ExpiryDate: '',
    CVV: '',
    PaymentAmount: 0,
    PaymentDate: new Date().toISOString().split('T')[0], // Set the current date as the default
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5042/api/Payment', paymentData);

      console.log('Payment added successfully:', response.data);
      alert('Payment added successfully');
    } catch (error) {
      console.error('Error adding payment:', error.response.data);
      alert('Failed to add payment. Please try again.');
    }
  };

  return (
    <Card className="payment-card">
      <CardContent>
        <Typography variant="h5" component="div">
          Add Payment
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Rental ID"
            type="number"
            name="RentalId"
            value={paymentData.RentalId}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Card Number"
            type="text"
            name="CardNumber"
            value={paymentData.CardNumber}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Expiry Date"
            type="text"
            name="ExpiryDate"
            value={paymentData.ExpiryDate}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="CVV"
            type="text"
            name="CVV"
            value={paymentData.CVV}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Payment Amount"
            type="number"
            name="PaymentAmount"
            value={paymentData.PaymentAmount}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Payment Date"
            type="date"
            name="PaymentDate"
            value={paymentData.PaymentDate}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <Button type="submit" variant="contained" color="primary">
            Add Payment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddPayment;
