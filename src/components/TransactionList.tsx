import React from 'react';
import { Transaction } from '../types';
import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';

interface TransactionListProps {
  transactions: Transaction[];
}


const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
    const formattingTime = (dateStr : string) =>{
        const date = new Date(dateStr);
        return date.toLocaleDateString()
    }
  return (
    <div>
    <Typography variant="h5" gutterBottom sx={{marginLeft:5 ,fontFamily:"Montsserat"}}>
      Transactions List :-
    </Typography>
    <List>
      {transactions.map((transaction, index) => (
        <React.Fragment key={transaction.id}>
          <ListItem sx={{marginRight:4}}>
            <ListItemText
              primary={`${index + 1}. ${transaction.description}`}
              secondary={`Date: ${formattingTime(transaction.date)} , Amount: ${transaction.amount}, Category: ${transaction.category}`}
            />
          </ListItem>
          {index < transactions.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  </div>
  );
};

export default TransactionList;
