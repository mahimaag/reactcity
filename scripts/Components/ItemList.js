/**
 * Created by ttnd on 25/6/16.
 */
import React, {Component} from 'react';
import Item from './ItemComponent.js';
export default class ItemList extends Component {
    render (){
        var itemList = this.props.itemList;
        return <table>
            <tbody>
        {itemList.map(item=>
            <Item key={item.id} item12={item}/>

        )}
                </tbody>
            </table>
    }
}
