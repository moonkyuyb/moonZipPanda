import { connect } from 'react-redux';

import ChatListScreen from "../screen/ChatListScreen";
import ChatScreen from "../screen/ChatScreen";
import { queMessage, retryMessage, selectMessageList, refreshMessageList, removeMessageList } from "../reducers/chatReducer";
import { showAlertMessage } from "../reducers/modalReducer";

const chatStateToProps = (state) => {
	return{
		d_id: state.chatReducer.d_id,
		m_id_from: state.chatReducer.m_id_from,
		m_id_to: state.chatReducer.m_id_to,
		messageList: state.chatReducer.messageList,

		alertMessage:	state.modalReducer.alertMessage,
	}
}

const chatDispatchToProps = (dispatch) => {
	return{
		queMessage: 		(payload) => { dispatch(queMessage(payload)) },
		retryMessage: 		(payload) => { dispatch(retryMessage(payload)) },
		selectMessageList:	(payload) => { dispatch(selectMessageList(payload)) },
		refreshMessageList:	(payload) => { dispatch(refreshMessageList(payload)) },
		removeMessageList:	(payload) => { dispatch(removeMessageList(payload)) },
		showAlertMessage:	(payload) => { dispatch(showAlertMessage(payload)) },
	}
}

export const ChatListContainer = connect(chatStateToProps, chatDispatchToProps)(ChatListScreen)
export const ChatContainer = connect(chatStateToProps, chatDispatchToProps)(ChatScreen)

