import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import Chitietsanpham from './Chitietsanpham';
import dl from './dulieu.json';
import Tinlienquan from './Tinlienquan';

export default function Duan1() {
    let params = useParams();
    //typeof ktra kiểu du lieu mọt giá trị
    //console.log(typeof(params.id));
    console.log(dl);


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
            {
                dl.map((value, key) => {
                    if (value.id == params.id) {
                        return (
                            <Chitietsanpham
                                tieude = {value.tieuDe}
                                mota ={value.moTa}
                                hinh = {value.hinh}
                            />
                        )
                    }
                })
            }



            <div className="container">
                <h4>Tin liên quan</h4>
                <div className="card-deck">
                    {/*<Tinlienquan hinh = "https://www.saigontourist.net/uploads/destination/TrongNuoc/Mientay/cho-noi_140716792.jpg"/>
                    <Tinlienquan hinh = "https://www.saigontourist.net/uploads/destination/TrongNuoc/Mientay/My-tho-Vinh-tranh-pagoda.jpg"/>*/}
                    {dl.map((value, key)=>{
                        return(
                            <Tinlienquan hinh={value.hinh}
                            tieude = {value.tieuDe}
                            tinId = {value.id}
                            />
                        )
                    }
                    )}
                    
                </div>
            </div>
        </div>
    )
}
