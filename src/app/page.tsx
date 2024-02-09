"use client"
import React, { useState } from 'react';
import TransactionList from '../components/TransactionList';
import TransactionForm from '../components/TransactionForm';
import { Transaction } from '../types';

const Home: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (newTransaction: Transaction) => {
    setTransactions((prevTransactions) => [ ...prevTransactions, newTransaction]);
  };

  return (
    <div>
      <TransactionForm onSubmit={handleAddTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Home;
