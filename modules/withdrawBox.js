import React from 'react'
import Constants from './constants'

export default class WithdrawBox extends React.Component {

  render() {
    return (<div id="withdraw-box" className="panel panel-default col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
      <div className="panel-heading">Withdraw money</div>
      <div className="panel-body">
        <div className="panel-body-text">
          Here you can withdraw your money ! You cannot withdraw more money than you have in your online wallet but it should not be a problem since you can deposit as much money as you want ;)
        </div>
        <div className="panel-body-input">
          <div className="form-group">
            <input onBlur={this.setTwoDecimal.bind(this)} ref="amount" min="0" id="withdraw-input" className="form-control" type="number" step='0.01' placeholder="Enter the amount..."/>
            <div className="current-currency">{Constants.CURRENT_CURRENCY}</div>
            <div className="panel-buttons">
              <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Accept</button>
            </div>
          </div>
        </div>
        <div ref="warningWithdraw" id="withdraw-alert" className="panel-body-warning hidden">
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
    var strKey = Constants.LOCALSTORAGE_KEY + Date.now();
    let floatValue = parseFloat(this.refs.amount.value);
    var eltWarning = $("#" + this.refs.warningWithdraw.id);

    if(floatValue > this.props.balance ){
      eltWarning.find("div").text("You cannot withdraw more money than you have !");
      eltWarning.removeClass("hidden");
    }
    else if(isNaN(floatValue)){
      eltWarning.find("div").text("The value has to be numeric !");
      eltWarning.removeClass("hidden");
    }
    else if(floatValue < 0) {
      eltWarning.removeClass("hidden");
      eltWarning.find("div").text("The value can't be negative !");
    }
    else {
      eltWarning.addClass("hidden")
      floatValue *= -1;
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
