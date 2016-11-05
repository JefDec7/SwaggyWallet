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
            <input ref="amount" className="form-control" type="text" placeholder="Enter the amount..."/>
            <div className="panel-buttons">
              <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Accept</button>
            </div>
          </div>
        </div>
        <div ref="warning" id="withdraw-alert" className="panel-body-warning hidden">
          <div className="alert alert-danger">
            You cannot withdraw more money than you have !
          </div>
        </div>
      </div>
    </div>);
  }

  handleClick() {
    var strKey = Constants.LOCALSTORAGE_KEY + Date.now();
    let floatValue = parseFloat(this.refs.amount.value);
    var eltWarning = $("#" + this.refs.warning.id);

    if(floatValue > this.props.balance){
      eltWarning.removeClass("hidden");
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
