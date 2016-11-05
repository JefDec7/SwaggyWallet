import React from 'react'
import { Link } from 'react-router'

export default class Toolbar extends React.Component {
  render() {
    return (
      <nav id="wallet-navigation-bar" className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <i id="wallet-icon" className="material-icons md-36">account_balance_wallet</i>
              Swaggy Wallet
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse" aria-expanded="false" style={{height: 0 + 'px'}}>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">Home</a></li>
              <li><a href="/#/reset">Reset</a></li>
              <li><a href="https://github.com/JefDec7/SwaggyWallet">View Source</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
