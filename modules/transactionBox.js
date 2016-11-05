import React from 'react'
import TransactionRow from './transactionRow'

export default class TransactionBox extends React.Component {

  render() {
    return (
      <div className="panel panel-default col-xs-10 col-sm-10 col-md-4 col-lg-4 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.props.transactions.map(item => <TransactionRow key={item.date} date={item.date} value={item.value} />)}
          </tbody>
        </table>
      </div>
    );
  }

}
