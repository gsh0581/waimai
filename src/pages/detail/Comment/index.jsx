import React, { Component } from 'react'
// import { getListData } from '../store/actions/commentAction';

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.fetchData();
    }
    fetchData(){
        // this.props.dispatch(getListData())
    }
    render() {
        let data = this.props.commentData;
        return (
            <div className="comment-inner">
                <div className="comment-score">
                    <div className="mail-score-content">
                        <div className="mail-score">{data.comment}</div>
                    </div>
                </div>
            </div>
        )
    }
}
