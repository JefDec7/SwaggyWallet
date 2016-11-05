import React from 'react'
import DepositBox from './depositBox'
import Toolbar from './toolbar'
import WithdrawBox from './withdrawBox'
import BalanceBox from './balanceBox'
import Page from './page'

export default class HomePage extends Page {

  reloadTable() {
    console.log("table_reloaded");
  }

  render() {
    return <div>
      <Toolbar currentPage="home"/>
      <DepositBox
        fnCallback={this.computeBalance.bind(this)}
      />
      <WithdrawBox
        fnCallback={this.computeBalance.bind(this)}
      />
      <BalanceBox balance={this.state.balance} />
    </div>
  }
}