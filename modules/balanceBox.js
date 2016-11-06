import React from 'react'
import Constants from './constants'

export default function BalanceBox(props) {
  return <div id="balance-box" className="panel panel-default col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
    <div className="panel-body">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div>Current balance : </div>
        {props.balance.toFixed(2)}{Constants.CURRENT_CURRENCY}
      </div>
      <div id="easter-egg" className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <img src="../img/over9000.jpg" width="100" height="80" className={props.balance.toFixed(2) < 9000 ? "hidden" : ""}></img>
      </div>
    </div>
  </div>
}
