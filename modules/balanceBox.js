import React from 'react'
import Constants from './constants'

export default function BalanceBox(props) {
  return <div id="balance-box" className="panel panel-default col-xs-10 col-sm-10 col-md-4 col-lg-4 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
    <div className="panel-body">
      <div>Current balance : </div>
      {props.balance.toFixed(2)}{Constants.CURRENT_CURRENCY}
    </div>
  </div>
}
