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
            <input ref="amount" className="form-control" type="text" placeholder="Enter the amount..."/>
            <div className="panel-buttons">
              <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Accept</button>
            </div>
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
