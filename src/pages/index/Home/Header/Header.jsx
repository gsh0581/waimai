import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Header.scss'
/**
 * @constructor <Header />
 * @description 顶部banner
 */
export default class Header extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="header">
            <SearchBar />
                <img className="banner-img" src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg"/>
            </div>
        )
    }
}
