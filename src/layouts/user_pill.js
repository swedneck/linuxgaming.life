import React from "react";
import axios from 'axios';

export default class UserPill extends React.Component {
    render() {
        return (
            <a className="t2_UserPill" href={"https://matrix.to/#/" + this.props.userId} title={this.props.userId}>
                <img src={"../img/logos/" + this.props.img} className="t2_UserPill_avatar"/>
                <span className="t2_UserPill_displayName">{this.props.userId}</span>
            </a>
        );
    }
}
