import React, { Component } from 'react';
import {
    Link, NavLink,
} from "react-router-dom";

class Sanpham extends Component {
    chuyenDoiUrl = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }

    render() {
        var array = [2, 5, 3, 9];
        var kq = array.map((value, key) => value * 2 + "và có chỉ số là: " + key);
        console.log(kq);
        return (
            <div className="card">
                <NavLink to={"/duan/" + this.chuyenDoiUrl(this.props.tieude) + "." + this.props.tinId}><img className="card-img-top" src={this.props.hinh} alt="" /></NavLink>
                <div className="card-body">
                    <h4 className="card-title">{this.props.tieude}</h4>
                    <p className="card-text">{this.props.mota} </p>
                </div>
            </div>
        );
    }
}

export default Sanpham;