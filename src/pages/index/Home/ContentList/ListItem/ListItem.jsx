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
    render() {
        let {itemData}  = this.props;
        return (
            <div className="item-content scale-1px">
                <img src={itemData.pic_url} className="item-img"/>
                {this.renderBrand(itemData)}
                <div className="item-info-content">
                    <p className="item-title">{itemData.name}</p>
                    <div className="item-desc">
                    <div className="item-score">{this.renderScore(itemData)}</div>
                    <div className="item-count">qq</div>
                    <div className="item-distance">sd</div>
                    <div className="item-time">zx</div>
                    </div>
                    <div className="item-price">
                        <div className="item-pre-price">xx</div>
                        <div className="item-dis-price">xx</div>
                    </div>
                    <div className="item-others">
                        <div className="other-info">
                            <img src="" alt="" className="other-tag"/>
                            <div className="other-content"></div>
                        </div>
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
