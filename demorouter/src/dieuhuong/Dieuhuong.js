import React, { Component } from 'react'
import { Routes, Route,} from "react-router-dom";
import Home from '../component/Home'
import Gioithieu from '../component/Gioithieu'

import Lienhe from '../component/Lienhe'
import Duan1 from '../component/Duan1';


export default class Dieuhuong extends Component {
  render() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioithieu" element={<Gioithieu />} />
        <Route exact path="/duan/:slug.:id" element={<Duan1 />} />
        <Route path="/lienhe" element={<Lienhe />} />
        </Routes>

    )
  }
}


