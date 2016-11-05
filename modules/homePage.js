import React from 'react'
import DepositBox from './depositBox'
import Toolbar from './toolbar'
import WithdrawBox from './withdrawBox'
import BalanceBox from './balanceBox'
import TransactionBox from './transactionBox'
import Page from './page'

export default class HomePage extends Page {

  reloadTable() {
    console.log("table_reloaded");
  }

  render() {
    return <div>
      <Toolbar currentPage="home"/>
      <div className="half-screen col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <BalanceBox balance={this.state.balance} />
        <TransactionBox transactions={this.state.transactions} />
      </div>
      <div className="half-screen col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <DepositBox
          fnCallback={this.refreshComponents.bind(this)}
        />
        <WithdrawBox
          fnCallback={this.refreshComponents.bind(this)}
          balance={this.state.balance}
        />
      </div>
    </div>
  }
}
