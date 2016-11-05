import React from 'react'
import Page from './page'
import BalanceBox from './balanceBox'
import ResetBox from './resetBox'
import Toolbar from './toolbar'

export default class ResetPage extends Page {

  render() {
    return <div>
      <Toolbar currentPage="reset"/>
      <ResetBox
        fnCallback={this.computeBalance.bind(this)}
      />
      <BalanceBox
        balance={this.state.balance}
      />
    </div>
  }
}
