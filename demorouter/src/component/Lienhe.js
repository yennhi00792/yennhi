import React, { Component } from 'react'

export default class Lienhe extends Component {
    render() {
        return (
            <div>
                <header className="masthead du_an">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mt-5">Trang Liên hệ</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <form action="mail.php" method="post">
                        <div className="card border-primary rounded-0">
                            <div className="card-header p-0">
                                <div className="bg-info text-white text-center py-2">
                                    <h3><i className="fa fa-envelope" /> Contactanos</h3>
                                    <p className="m-0">Con gusto te ayudaremos</p>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                {/*Body*/}
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-user text-info" /></div>
                                        </div>
                                        <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Nombre y Apellido" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-envelope text-info" /></div>
                                        </div>
                                        <input type="email" className="form-control" id="nombre" name="email" placeholder="ejemplo@gmail.com" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-comment text-info" /></div>
                                        </div>
                                        <textarea className="form-control" placeholder="Envianos tu Mensaje" required defaultValue={""} />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <input type="submit" defaultValue="Enviar" className="btn btn-info btn-block rounded-0 py-2" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
