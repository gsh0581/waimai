import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getHeadData } from "../../store/actions/ListItemAction";
import './style.scss'
 class ListItem extends Component {
     constructor(props) {
         super(props);
        }
        /**
         * 渲染新到/品牌标签
         * @param {*} data 
         */
        renderBrand(data){
            if(data.brand_type)
                return <div className="brand brand-pin">品牌</div>
            else
                return <div className="brand brand-xin">新到</div>
        }
        /**
         * 渲染评分
         * @param {*} data 
         */
        renderScore(data){
            let {wm_poi_score} = data || ''
            let score = wm_poi_score.toString()
            let scoreArray = score.split('.')
            // 满星个数
            let fullstar = parseInt(scoreArray[0])
            // 半星个数
            let halfstar = parseInt(scoreArray[1] >= 5 ?1:0)
            // 灰星个数
            let nullstar = 5-fullstar - halfstar

            let starjsx = []
                for (let i = 0; i < fullstar; i++) {
                    starjsx.push(<div key={i+'full'} className="star fullstar"></div>)
                }
            if(halfstar){
                for (let i = 0; i < halfstar; i++) {
                    starjsx.push(<div key={i+'half'} className="star halfstar"></div>)
                }
            }
            if(nullstar){
                for (let i = 0; i < nullstar; i++) {
                    starjsx.push(<div key={i+'null'} className="star nullstar"></div>)
                }
            }
            return starjsx
        }
         /**
         * 渲染月售
         * @param {*} data 
         */
        renderMonthNum(data){
            let num = data.month_sale_num
            if(num>999){
                return '999+'
            }
            return num;
        }
        /**
         * 是否为美团专送tag
         * @param {*} data 
         */
        renderMeituanFlag(data){
            if(data.delivery_type){
                return <div className="item-meituan-flag">美团专送</div>
            }
            return null
        }
        /**
         * 渲染商家活动
         * @param {*} data 
         */
        renderOthers(data){
            const {discounts2} = data
            return discounts2.map((item,index)=> {
                return (
                <div className="other-info" key={index}>
                            <img src={item.icon_url} alt="" className="other-tag"/>
                            <div className="other-content">{item.info}</div>
                        </div>
                ) 
            })
        }
    render() {
        let {itemData}  = this.props;
        return (
            <div className="item-content scale-1px">
                <img src={itemData.pic_url} className="item-img"/>
                {this.renderBrand(itemData)}
                <div className="item-info-content">
                    <p className="item-title">{itemData.name}</p>
                    <div className="item-desc clearfix">
                    <div className="item-score">{this.renderScore(itemData)}</div>
                    <div className="item-count">月售{this.renderMonthNum(itemData)}</div>
                    <div className="item-distance">&nbsp;{itemData.distance}</div>
                    <div className="item-time">{itemData.mt_delivery_time}&nbsp;|</div>
                    </div>
                    <div className="item-price">
                        <div className="item-pre-price">{itemData.min_price_tip}</div>
                        {this.renderMeituanFlag(itemData)}
                    </div>
                    <div className="item-others">
                       {this.renderOthers(itemData)}
                    </div>
                </div>
            </div>
            
        )
    }
   
}
// const mapStateToProps = state => ({
//     items:state.ListItemReducer.items
// })
export default connect(null,null)(ListItem)
