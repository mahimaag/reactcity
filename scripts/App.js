import React, {Component} from 'react';
import ItemList from './Components/ItemList.js';
import Paginator from './Components/Paginator.js';
import {createStore} from 'redux';
import items from './Reducer/itemListReducer.js';
let store = createStore(items);
var Paginate = require('react-paginate-component');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state={itemlist: [], pageCount:0};
  }
  componentDidMount() {
    this.callApi(1);

  }
  callApi(pageNo){

    console.log(pageNo);
    this.serverRequest = $.get('http://blaze.ratecity.com.au/api/search/home-loans/?page='+ pageNo, function (result) {
      store.dispatch({type:'SHOW_FIRST_PAGE',payload:result});
      console.log(store.getState(),"in app.js11111111111111>");
        this.setState({itemlist: result && result.hits});
        if(pageNo == 1){
          this.setState({pageCount: result && result.meta && result.meta.page_count});
        }

    }.bind(this));
  }

  onChangePage(page) {
    this.callApi(page);
  }
  render() {
    var list=[{id:1, text:'hi'},{id: 2, text:'hello'},{id:3, text:'bye'}];
    return (
      // Add your component markup and other subcomponent references here.
        <div>
          <h1>Hello, World!</h1>
          <ItemList itemList={this.state.itemlist}/>
          <Paginator max={10} maxVisible={this.state.pageCount < 5 ? this.state.pageCount : 5} onChange={this.onChangePage.bind(this)} />
        </div>
    );
  }
}
