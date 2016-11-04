import React from 'react'

export default class Box extends React.Component {
  render() {
    return <div className="panel panel-default col-xs-10 col-sm-10 col-md-4 col-lg-4 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
      <div className="panel-heading">{this.props.strTitle}</div>
      <div className="panel-body">{this.props.strBody}</div>
      <div className="panel-footer">
        <button className="btn btn-primary" onClick={this.props.onClick}>{this.props.strButton}</button>
      </div>
    </div>
  }
}
