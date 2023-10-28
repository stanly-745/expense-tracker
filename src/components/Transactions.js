import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transactions = ({transaction}) => {
    const {deleteTransaction}=useContext(GlobalContext); 
    const sign=transaction.amount < 0 ? '-' : '+';
    return (
    <li className={transaction.amount<0 ? 'minus': 'plus'}>
        {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
        <button onClick={()=>deleteTransaction(transaction.id)}className='delete-btn'>&#215;</button>
    </li>
  )
}

export default Transactions
