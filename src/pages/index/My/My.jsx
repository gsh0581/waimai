import React, { Component } from 'react'
import './style.scss'
export default class My extends Component {
    render() {
        return (
            <div className="my">
                <div className="header">
                    <img src="http://i.waimai.meituan.com/static/img/default-avatar.png" alt="" className="avatar"/>
                    <p className="nickname">tuhao &gt;</p>
                </div>
                <div className="content">
                    <ul className="items">
                    <li className="money">
                        <p>
                            美团红包
                        </p>
                        </li>
                        <li className="address">
                           <p>
                            收货地址
                           </p>
                        </li>
                  
                        <li className="email">
                            <p>
                            联系地址
                            </p>
                        </li>
                        <li className="question">
                            <p>
                            常见问题
                            </p>
                        </li>
                    </ul>
                    <p className="tel">客服电话: &nbsp; 101-097-77 </p>
                    <p className="time">营业时间: &nbsp; 9:00-23:00 </p>
                </div>
            </div>
        )
    }
}
