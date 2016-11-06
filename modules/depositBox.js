import React from 'react'
import Constants from './constants'

export default class DepositBox extends React.Component {

  render() {
    return (<div id="deposit-box" className="panel panel-default col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
      <div className="panel-heading">Deposit money</div>
      <div className="panel-body">
        <div className="panel-body-text">
          Here you can deposit your money in your online wallet. As we are very sympathic, you can deposit an unlimited amount of money :)
        </div>
        <div className="panel-body-input">
          <div className="form-group">
            <input onBlur={this.setTwoDecimal.bind(this)} id="deposit-input" ref="amount" min="0" className="form-control" type="number" step='0.01' placeholder="Enter the amount..."/>
            <div className="current-currency">{Constants.CURRENT_CURRENCY}</div>
            <div className="panel-buttons">
              <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Accept</button>
            </div>
          </div>
        </div>
        <div ref="warningDeposit" id="deposit-alert" className="panel-body-warning hidden">
          <div className="alert alert-danger">
          </div>
        </div>
      </div>
    </div>);
  }

  setTwoDecimal() {
    this.refs.amount.value = parseFloat(this.refs.amount.value).toFixed(2);
  }

  handleClick() {
    let strKey = Constants.LOCALSTORAGE_KEY + Date.now();
    let floatValue = parseFloat(this.refs.amount.value);
    var eltWarning = $("#" + this.refs.warningDeposit.id);
    if(isNaN(floatValue)){
      eltWarning.removeClass("hidden");
      eltWarning.find("div").text("The value has to be numeric !");
    }
    else if(floatValue < 0) {
      eltWarning.removeClass("hidden");
      eltWarning.find("div").text("The value can't be negative !");
    }
    else {
      eltWarning.addClass("hidden");
      let objTransaction = {
        date: Date.now(),
        value: floatValue
      }
      window.localStorage.setItem(strKey,JSON.stringify(objTransaction));
      if(this.props.fnCallback)
        this.props.fnCallback();
      this.refs.amount.value = "";
    }
  }

}
