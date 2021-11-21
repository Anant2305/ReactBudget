import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import ModalEdit from './components/ModalEdit';
import {useSelector} from 'react-redux'
function App() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const entries = useSelector((state) => state.entries);

  useEffect(() =>{
    if(!isOpen && entryId) {
      const index = entries.findIndex((entry) => entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      //setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isOpen])

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if(entry.isExpense) {
        return totalExpenses += entry.value;
      } 
      return totalIncomes += entry.value
    });
    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
    // eslint-disable-next-line
  }, entries)

  // //const deleteEntry = id => {}
  // MOVED TO REDUX PROCESS
  // function deleteEntry(id){
  //   const result = entries.filter(entry => entry.id !== id);
  //   //setEntries(result);
  // }

  function editEntry(id){
    console.log('edit entrywith id ${id');
    if(id){
      const index = entries.findIndex((entry)=>entry.id===id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function addEntry() {
    const result = entries.concat({id: entries.length+1, description, value, isExpense});
    //setEntries(result);
    resetEntry();
  }

  function resetEntry(){
      setDescription('');
      setValue('');
      setIsExpense(true);
  }

  return (
    <Container>
      
      <MainHeader title="Budget"/>

      <DisplayBalance balSize='small' balColor='black' balLabel='YOUR BALANCE' balValue={total} />
      
      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal}/>

      <MainHeader title="History" type='h3' />

      <EntryLine entries={entries} editEntry={editEntry}/>
      

      <MainHeader title="Add New Transaction" type='h3' />
      <NewEntryForm
        addEntry={addEntry} 
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />

      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}
      addEntry={addEntry} 
      description={description}
      value={value}
      isExpense={isExpense}
      setDescription={setDescription}
      setValue={setValue}
      setIsExpense={setIsExpense}
       />
    </Container>
  );
}

export default App;

