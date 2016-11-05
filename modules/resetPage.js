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
      <div className="half-screen col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <BalanceBox
          balance={this.state.balance}
        />
        <TransactionBox transactions={this.state.transactions} />
      </div>
      <div className="half-screen col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <ResetBox
          fnCallback={this.refreshComponents.bind(this)}
        />
      </div>
    </div>
  }
}
