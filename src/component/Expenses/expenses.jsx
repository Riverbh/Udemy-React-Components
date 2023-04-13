import React, { useState } from 'react';


import Card from '../UI/Card';
import './expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './expensesList';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  
    return (
      <div>
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpensesList items={filterExpenses}/>
        </Card>
        </div>
      );
}

export default Expenses
