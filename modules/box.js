import React from 'react'

export default class WithdrawBox extends React.Component {

  // Must be overrided
  render(){
    return null;
  }

  // Changes the format of the input after typing
  setTwoDecimal() {
    this.refs.amount.value = parseFloat(this.refs.amount.value).toFixed(2);
  }

  // Checks the value of the input and displays a warning
  checkValue() {
    let floatValue = parseFloat(this.refs.amount.value);
    var eltWarning = $("#" + this.refs.warning.id);
    if(this.props.balance != undefined && floatValue > this.props.balance ){
      eltWarning.find("div").text("You cannot withdraw more money than you have !");
      eltWarning.removeClass("hidden");
      return false;
    }
    else if(isNaN(floatValue)){
      eltWarning.removeClass("hidden");
      eltWarning.find("div").text("The value has to be numeric !");
      return false;
    }
    else if(floatValue < 0) {
      eltWarning.removeClass("hidden");
      eltWarning.find("div").text("The value can't be negative !");
      return false;
    }
    eltWarning.addClass("hidden")
    return true;
  }

}
