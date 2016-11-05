import React from 'react'
import Constants from './constants'

export default function TransactionRow(props){
  let objDate = new Date(props.date);
  let days = objDate.getDate();
  let months = objDate.getMonth()+1;
  let years = objDate.getFullYear();
  let hours = objDate.getHours();
  let minutes = objDate.getMinutes();
  let strFullDate = months+'/'+days+'/'+years;
  let strFullTime = hours+":"+minutes;

  return (
    <tr className={props.value > 0 ? 'success' : 'danger'}>
      <td>{strFullDate}</td>
      <td>{strFullTime}</td>
      <td>{props.value} {Constants.CURRENT_CURRENCY}</td>
    </tr>
  );
}
