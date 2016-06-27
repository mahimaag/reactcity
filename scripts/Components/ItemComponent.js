/**
 * Created by ttnd on 25/6/16.
 */
import React, {Component} from 'react';

export default class Item extends Component {

    render() {
        var item = this.props.item12;
        return (<tr>
        <td>{item && item.company && item.company.name}</td>
        </tr>);

    }
}