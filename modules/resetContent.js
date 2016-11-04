import React from 'react'
import Box from './box'

export default class ResetContent extends React.Component {

  resetTransactions() {
    var localStorage = window.localStorage;
    var strToCheck = "swaggy_wallet_transaction_";
    localStorage.forEach((key) => {
      if(key.substring(0, strToCheck.length) == strToCheck){
        localStorage.removeItem(key);
      }
    });
  }

  render() {
    let strTitle = "Reset transactions";
    let strBody = "Warning ! This operation is irreversible. Do it with caution !";
    let strButton = "Reset"
    let strTheme = "reset-box"
    let onClick = this.resetTransactions
    return <div>
      <Box
        strTitle={strTitle}
        strBody={strBody}
        strButton={strButton}
        strTheme={strTheme}
        onClick={onClick}
      />
    </div>
  }
}
