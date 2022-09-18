import React, { Component } from 'react'

export default class Chitietsanpham extends Component {
  render() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-sm-6 nd">
                <div className="jumbotron">
                    <p className="lead">{this.props.tieude}</p>
                    <hr className="my-2" />
                    <p className="mota">{this.props.mota}</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Đặt tour</a>
                    </p>
                </div>
            </div>
            <div className="col-sm-6">
                <img src={this.props.hinh} alt="" width="100%" />
            </div>
        </div>
    </div>
    )
  }
}

