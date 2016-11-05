import React from 'react'
import Page from './page'
import BalanceBox from './balanceBox'
import ResetBox from './resetBox'
import TransactionBox from './transactionBox'
import Toolbar from './toolbar'

export default class ResetPage extends Page {

  render() {
    return <div>
      <Toolbar currentPage="reset"/>
      <ResetBox
        fnCallback={this.refreshComponents.bind(this)}
      />
      <BalanceBox
        balance={this.state.balance}
      />
      <TransactionBox transactions={this.state.transactions} />
    </div>
  }
}
