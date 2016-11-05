import React from 'react'
import Constants from './constants'

export default class ResetBox extends React.Component {

  render() {
    return (<div id="reset-box" className="panel panel-default col-xs-10 col-sm-10 col-md-4 col-lg-4 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
      <div className="panel-heading">Withdrax money</div>
      <div className="panel-body">
        <div className="panel-body-text">
          Resetting your transactions is irreversible ! Do it with caution !
          <div className="panel-buttons">
            <button className="btn btn-danger" onClick={this.handleClick.bind(this)}>Reset</button>
          </div>
        </div>
      </div>
    </div>);
  }

  handleClick() {
    var localStorage = window.localStorage;
    var strToCheck = Constants.LOCALSTORAGE_KEY;
    for(var key in localStorage){
      if(key.substring(0, strToCheck.length) == strToCheck){
        localStorage.removeItem(key);
      }
    }
    if(this.props.fnCallback)
      this.props.fnCallback();
  }

}
