"use client"
import React, { useState } from 'react';
import { Button, TextField , Typography } from '@mui/material';
import { Transaction } from '../types';

interface TransactionFormProps {
  onSubmit: (transaction: Transaction) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    if(!description || !amount || !category){
        alert('Please add details for all fields');
      return;
    }
    const newTransaction: Transaction = {
      id: Math.random().toString(),
      date: new Date().toISOString(),
      description,
      amount: parseFloat(amount),
      category,
    };
    onSubmit(newTransaction);
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <div style={{justifyContent:'center', flexDirection:'row'}}>
        <Typography  ml={2} variant="h3">Expense Tracker</Typography>
      <h2 style={{marginTop:20 , marginBottom:20 , marginLeft:20, fontFamily:"Montsserat"}}>Add New Transaction</h2>
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{marginLeft:4 , marginRight:2 , width:'240px'}}
      />
      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        sx={{ marginRight:2 ,width: '150px', 
        height: '30px'
    }}

      />
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        sx={{marginRight:2 , marginBottom:5 , width:'120px'}}
      />
      <Button onClick={handleSubmit} variant='contained' sx={{ alignSelf:'self-end', marginTop:2}} color="success">Add Transaction</Button>
    </div>
  );
};

export default TransactionForm;
