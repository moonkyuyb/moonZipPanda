import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import Colors from '../styles/Colors';
import { Image34, Image24, Image48, Image12, TextBold11, TextBold12, Image14, TextBold13, FlexRowBox, TextLight12, Image20, TextLight11 } from '../styles/CommonStyle';
import { ChatContainer, PandaChat, ChatPandaImg, PandaChatCont, PandaChatHeader, PandaText, ItemBox, ItemList, TextDot,
	ChatInputWrap, ChatInputBox, ChatInput, ChatSendBtn, ChatAddBtn, ChatWrap, ChatScrollBox, ChatScroll, ChatR, ChatTopBox,
	ChatTime, ChatBox, ChatM, ChatTriR, ChatL, ChatLinner, Profile, ProfileTit, ChatTriL, ChatPopup, PopupTextBox, PopupText,
	ChatInfoBox, PopupBtn, InfoIcon, ScrollUpBtn, ScrollDownBtn } from '../styles/chatStyle/chatStyle';
import { ChatHeaderContainer, ChatSaleBtnBox, SaleBtn, BtnText } from '../styles/chatStyle/chatHeaderStyle';
import ChatHeaderSale from '../components/chat/ChatHeaderSale';
import ChatHeaderMenu from '../components/chat/ChatHeaderMenu';
import ModalPopup from '../components/common/ModalPopup';
import _ from 'lodash';

const ChatScreen = ({
    messageList, d_id, m_id_from, m_id_to, alertMessage,
	queMessage, retryMessage, selectMessageList, refreshMessageList, removeMessageList, showAlertMessage,
}) => {

	//UI COMPONENTS
	const ChatNewOn = () => (<Image12 source={require('../../assets/img/drawable-xhdpi/icon_chat_on.png')} />)
	const ChatNewOff = () => (<Image12 source={require('../../assets/img/drawable-xhdpi/icon_chat_off.png')} />)
	const InfoClockIcon = () => (<InfoIcon source={require('../../assets/img/drawable-xhdpi/icon_time.png')} />)
	const InfoTelIcon = () => (<InfoIcon source={require('../../assets/img/drawable-xhdpi/icon_chat_call.png')} />)
	const ScrollUpIcon = () => (<Image34 source={require('../../assets/img/drawable-xhdpi/bt_chat_up.png')} />)
	const ScrollDownIcon = () => (<Image34 source={require('../../assets/img/drawable-xhdpi/bt_chat_down.png')} />)
	const ChatMessageR = (props) => {
		return(
			<ChatR>
				<ChatTopBox>
					<ChatTime>2021-02-15  14:25:23</ChatTime>
					<ChatNewOff />{/* <ChatNewOn /> */}
				</ChatTopBox>
				<ChatBox>
					<ChatTriR />{props.children}
				</ChatBox>
			</ChatR>
		)
	}
	const ChatMessageL = (props) => {
		return(
			<ChatL>
				<Profile style={{backgroundColor: Colors.profileColor01 }}>
					<ProfileTit>박</ProfileTit>
				</Profile>
				<ChatLinner>
					<ChatTopBox>
						<TextBold12>박*수</TextBold12><ChatTime>2021-02-15  14:25:23</ChatTime>
					</ChatTopBox>
					<ChatBox chatLeft>
						<ChatTriL />{props.children}
					</ChatBox>
				</ChatLinner>
			</ChatL>
		)
	}

	//UI STATE
	const [inputMessage, setInputMessage] = useState('')

	//HANDLE EFFECT
	useEffect(()=>{
		selectMessageList({ d_id: d_id, m_id_from: m_id_from, m_id_to: m_id_to })

		function listenMessageList() {
			setTimeout(function() {
				selectMessageList({ d_id: d_id, m_id_from: m_id_from, m_id_to: m_id_to })
				listenMessageList();
			}, 2000)
		}

		listenMessageList();
	},[])

	//UI Functions
	function handleQueMessage(){
		queMessage({ d_id: d_id, m_id_from: m_id_from, m_id_to: m_id_to, ct_message: inputMessage, })
		setInputMessage('')
	}

	function handleRetry(item){
		retryMessage(item)
	}

	function handleRemove(item){
		removeMessageList(item)
	}

	return(
		<ChatContainer>
			<ModalPopup/>

			{/* header */}
			<ChatHeaderContainer>
				<ChatHeaderSale>
					<ChatSaleBtnBox>
						<SaleBtn first onPress={()=>{showAlertMessage('준비중입니다 ~/05/21')}}>
							<Image14 source={require('../../assets/img/drawable-xhdpi/icon_outdoor_g.png')} /><BtnText>나가기</BtnText>
						</SaleBtn>
						<SaleBtn onPress={()=>{showAlertMessage('준비중입니다 ~/05/21')}}>
							<Image14 source={require('../../assets/img/drawable-xhdpi/icon_cutout_g.png')} /><BtnText>차단</BtnText>
						</SaleBtn>
					</ChatSaleBtnBox>
				</ChatHeaderSale>
				<ChatHeaderMenu/>
			</ChatHeaderContainer>

			<ChatWrap>		
				<ChatScrollBox>
					{/* top, bottom Btn */}
					{/* <ScrollUpBtn Up onPress={() => this.scroll.scrollTo()}><ScrollUpIcon /></ScrollUpBtn> */}
					{/* <ScrollDownBtn onPress={() => this.scroll.scrollToEnd()}><ScrollDownIcon /></ScrollDownBtn> */}
					{/* <ChatScroll ref={ref => { this.scroll = ref; }}> */}
					<ScrollUpBtn><ScrollUpIcon /></ScrollUpBtn>
					<ScrollDownBtn><ScrollDownIcon /></ScrollDownBtn>
					<ChatScroll>
						{/* 일반 메시지 */}
						{messageList.map(item=>{
							if(item.m_id_from == m_id_from){
								return(<ChatMessageR key={(_.random(true)*1000%1000)}><ChatM>{item.ct_message}</ChatM></ChatMessageR>);
							}else{
								return(<ChatMessageL key={(_.random(true)*1000%1000)}><ChatM>{item.ct_message}</ChatM></ChatMessageL>);
							}
						})}
					</ChatScroll>
				</ChatScrollBox>
			</ChatWrap>
			<ChatInputWrap>
				<ChatInputBox>
					<ChatAddBtn onPress={()=>{showAlertMessage('준비중입니다 ~05/21')}}>
						<Image24 resizeMode={'cover'} source={require('../../assets/img/drawable-xhdpi/bt_icon_attachment.png')} />
					</ChatAddBtn>
					<ChatInput multiline={true} placeholder={'메시지를 입력해주세요.'} value={inputMessage} onChangeText={setInputMessage}/>
				</ChatInputBox>
				<ChatSendBtn onPress={()=>{handleQueMessage()}} disabled={!inputMessage}>
					<Image48 source={require('../../assets/img/drawable-xhdpi/bt_talk.png')} />
				</ChatSendBtn>
			</ChatInputWrap>
		</ChatContainer>
	)
}

export default ChatScreen;