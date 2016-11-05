import React from 'react'
import Constants from './constants'

export default class Page extends React.Component {

  constructor() {
    super();
    this.state = {
      balance:0.00
    }
  }

  componentDidMount() {
    this.computeBalance();
  }

  computeBalance() {
    var localStorage = window.localStorage;
    var balance = 0;
    var strToCheck = Constants.LOCALSTORAGE_KEY;
    for(var key in localStorage){
      if(key.substring(0, strToCheck.length) == strToCheck){
        var money = parseFloat(localStorage.getItem(key));
        balance += money;
      }
    }
    this.setState({balance: balance});
  }

}
