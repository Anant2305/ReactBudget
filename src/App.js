import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import ModalEdit from './components/ModalEdit';
import {useDispatch, useSelector} from 'react-redux';
import { getAllEntries } from './actions/entries.actions';

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const {isOpen, id }= useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);
  
  useEffect(() =>{
    const index = entries.findIndex(entry => entry.id===id);
    setEntry(entries[index]);
  },[isOpen, id, entries]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if(entry.isExpense) {
        return totalExpenses += Number(entry.value);
      } 
      return totalIncomes += Number(entry.value);
    });
    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
    // eslint-disable-next-line
  }, [entries]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);
  return (
    <Container>
      <MainHeader title="Budget"/>
      <DisplayBalance balSize='small' balColor='black' balLabel='YOUR BALANCE' balValue={total} />
      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal}/>
      <MainHeader title="History" type='h3' />
      <EntryLine entries={entries} />
      <MainHeader title="Add New Transaction" type='h3' />
      <NewEntryForm/>
      <ModalEdit isOpen={isOpen} {...entry}/>
    </Container>
  );
}

export default App;

