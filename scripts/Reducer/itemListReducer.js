/**
 * Created by ttnd on 27/6/16.
 */
import actionConstant from '../Action/index.js';

const items = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_FIRST_PAGE':
               state=[action.payload];
                return state;
        case 'GET':
            return state;
        case 'NEXT':
            return state;
        case 'PREVIOUS':
            return state;
        default:
            return state;
    }

}
export default items