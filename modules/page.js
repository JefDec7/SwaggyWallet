import React from 'react'
import Constants from './constants'

export default class Page extends React.Component {

  constructor() {
    super();
    this.state = {
      balance:0.00,
      transactions:[]
    }
  }

  componentDidMount() {
    this.refreshComponents();
  }

  refreshComponents() {
    this.computeBalance();
    this.getArrayOfTransactions();
  }

  computeBalance() {
    let localStorage = window.localStorage;
    let balance = 0;
    let strToCheck = Constants.LOCALSTORAGE_KEY;
    for(let key in localStorage){
      if(key.substring(0, strToCheck.length) == strToCheck){
        let objTransaction = JSON.parse(localStorage.getItem(key));
        let money = parseFloat(objTransaction.value);
        balance += money;
      }
    }
    this.setState({balance: balance});
  }

  getArrayOfTransactions(){
    let aTransactions = [];
    let localStorage = window.localStorage;
    let strToCheck = Constants.LOCALSTORAGE_KEY;
    for(let key in localStorage){
      var objTransaction = JSON.parse(localStorage.getItem(key));
      aTransactions.push(objTransaction);
    }
    this.setState({transactions: aTransactions});
  }

}
