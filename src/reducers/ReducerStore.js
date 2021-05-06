import ReactThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { filterActions } from 'redux-ignore';

import indexReducer,	{ ALL_INDEX_ACTIONS }	from '../reducers/indexReducer';
import authReducer,		{ ALL_AUTH_ACTIONS }	from '../reducers/authReducer';
import memberReducer,	{ ALL_MEMBER_ACTIONS }	from '../reducers/memberReducer';
import chatReducer,		{ ALL_CHAT_ACTIONS }	from '../reducers/chatReducer';
import salesReducer,	{ ALL_SALES_ACTIONS }	from '../reducers/salesReducer';
import modalReducer,	{ ALL_MODAL_ACTIONS }	from '../reducers/modalReducer';

import saleDetailReducer, {ALL_SALE_DETAIL_ACTIONS} from '../reducers/saleDetailReducer';

const reducers = combineReducers({
	indexReducer: 			filterActions(indexReducer, 	ALL_INDEX_ACTIONS ),
	authReducer: 			filterActions(authReducer, 		ALL_AUTH_ACTIONS ),
	memberReducer: 			filterActions(memberReducer, 	ALL_MEMBER_ACTIONS ),
	chatReducer: 			filterActions(chatReducer, 		ALL_CHAT_ACTIONS ),
	salesReducer: 			filterActions(salesReducer, 	ALL_SALES_ACTIONS ),
	modalReducer: 			filterActions(modalReducer, 	ALL_MODAL_ACTIONS ),
		
	saleDetailReducer: 	 	filterActions(saleDetailReducer, 	ALL_SALE_DETAIL_ACTIONS ),

})

const Store = createStore(reducers, applyMiddleware(ReactThunk));

export default Store;