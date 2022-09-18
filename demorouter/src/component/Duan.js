import React, { Component } from 'react';

class Duan extends Component {
    render() {
      console.log(this.props);
      //console.log(this.props.match.params.id);
      //console.log(dl);
        return (
            <div>
                <header className="masthead du_an">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12 my-auto">
              <div className="header-content mx-auto">
                <h1 className="mt-5">Chi tiết dự án</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="jumbotron">
              <h3 className="display-4">Jumbo heading</h3>
              <p className="lead">Jumbo helper text</p>
              <hr className="my-2" />
              <p>More info</p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <img src="https://placehold.it/600x370" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <h4>Tin liên quan</h4>
        <div className="card-deck">
          <div className="card">
            <a href="du-an.html"><img className="card-img-top" src="#" alt="" /></a>
          </div>
          <div className="card">
            <a href="du-an.html"><img className="card-img-top" src="#" alt="" /></a>
          </div>
          <div className="card">
            <a href="du-an.html"><img className="card-img-top" src="#" alt="" /></a>
          </div>
          <div className="card">
            <a href="du-an.html"><img className="card-img-top" src="#" alt="" /></a>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default Duan;
