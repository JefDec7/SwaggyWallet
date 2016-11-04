import React from 'react'
import Box from './box'

export default class HomeContent extends React.Component {

  addTransaction(value) {

    let strToCheck = "swaggy_wallet_transaction_";
    let strKey = strToCheck + Date.now();
    window.localStorage.addItem(strKey,value)
  }

  render() {
    let strTitleDeposit = "Deposit money";
    let strBodyDeposit = "Here you can deposit your money in your online wallet. As we are very sympathic, you can deposit an unlimited amount of money :)";
    let strTitleWithdraw = "Withdraw money";
    let strBodyWithdraw = "Here you can withdraw your money ! You can't withdraw more money than you have in your online wallet but it should not be a problem since you can deposit as much money as you want ;)";
    let strButton = "Accept";
    let strTheme = "transaction-box";
    return <div>
      <Box
        strTitle={strTitleDeposit}
        strBody={strBodyDeposit}
        strButton={strButton}
        strTheme={strTheme}
      />
      <Box
        strTitle={strTitleWithdraw}
        strBody={strBodyWithdraw}
        strButton={strButton}
        strTheme={strTheme}
      />
    </div>
  }
}
