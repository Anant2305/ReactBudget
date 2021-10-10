import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      
      <MainHeader title="Budget"/>

      <DisplayBalance balSize='small' balColor='black' balLabel='YOUR BALANCE' balValue='2,550.53' />
      
      <DisplayBalances />

      <MainHeader title="History" type='h3' />
      <EntryLines title='Something' value='10.00' />
      <EntryLines title='Something Else' value='100.00' isExpense />
      <EntryLines title='Something New' value='20.00' />

      <MainHeader title="Add New Transaction" type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
