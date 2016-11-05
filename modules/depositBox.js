import React from 'react'
import Constants from './constants'

export default class DepositBox extends React.Component {

  render() {
    return (<div id="deposit-box" className="panel panel-default col-xs-10 col-sm-10 col-md-4 col-lg-4 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
      <div className="panel-heading">Deposit money</div>
      <div className="panel-body">
        <div className="panel-body-text">
          Here you can deposit your money in your online wallet. As we are very sympathic, you can deposit an unlimited amount of money :)
        </div>
        <div className="panel-body-input">
          <div className="form-group">
            <label>Amount</label>
            <input ref="amount" className="form-control" type="text" placeholder="Enter the amount..."/>
            <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Accept</button>
          </div>
        </div>
      </div>
    </div>);
  }

  handleClick() {
    let strKey = Constants.LOCALSTORAGE_KEY + Date.now();
    let floatValue = parseFloat(this.refs.amount.value);
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
