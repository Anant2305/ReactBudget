import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries, setEntries] =  useState(initialEntries)

  //const deleteEntry = id => {}
  function deleteEntry(id){
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  function addEntry(description, value) {
    const result = entries.concat({id: entries.length+1, description, value});
    setEntries(result);
  }

  return (
    <Container>
      
      <MainHeader title="Budget"/>

      <DisplayBalance balSize='small' balColor='black' balLabel='YOUR BALANCE' balValue='2,550.53' />
      
      <DisplayBalances />

      <MainHeader title="History" type='h3' />

      <EntryLine entries={entries} deleteEntry={deleteEntry} />
      

      <MainHeader title="Add New Transaction" type='h3' />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;

var initialEntries = [
  { 
    id:1,
    description: "Work income",
    value: '1000.00',
    isExpense: false
  },
  { 
    id:2,
    description: "Water Bill",
    value: '200.00',
    isExpense: true
  },
  { 
    id:3,
    description: "Mortgage",
    value: '500.00',
    isExpense: true
  },
  { 
    id:4,
    description: "Electical",
    value: '100.00',
    isExpense: true
  }
]