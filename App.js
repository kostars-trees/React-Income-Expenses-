import React from 'react';
import './App.css';
import  { Header } from './components/Header';
import  { Balance } from './components/Balance'
import { incomeExpenses } from './components/incomeExpenses';
import { TransactionList } from './components/TransactionList';
import { addTransaction } from './components/addTransaction';
import { GlobalProvider } from './context/GlobalState'

function App() {
  
  
  return (
    <GlobalProvider>
    <Header />
    <div className="container">
    <Balance />
    <incomeExpenses />
    <TransactionList />
    <addTransaction />
    </div>
      
    </GlobalProvider>
  );
}

export default App;
