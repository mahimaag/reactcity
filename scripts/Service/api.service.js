/**
 * Created by ttnd on 27/6/16.
 */
const service = (pageNo =1)=>{
    $.get('http://blaze.ratecity.com.au/api/search/home-loans/?page='+ pageNo, function (result) {
        store.dispatch({type:'SHOW_FIRST_PAGE',payload:result});
        console.log(store.getState(),"in app.js11111111111111>");
        return store.getState();
    });
};

export default service