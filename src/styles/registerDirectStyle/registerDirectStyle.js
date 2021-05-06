import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../Colors';

//@AHN
export const StepContainer = styled.View`
    height: 100%;
    background-color: ${Colors.whiteColor};
`

export const StepHeader = styled.View`
    top: 0;
    flex-direction: row;
    background-color: ${Colors.whiteColor};
    padding: 4px;
    z-index: 9999;
    shadow-color: #000;
    shadow-offset: 0px 3px;
    shadow-opacity: 0.1;
    shadow-radius: 6px;
    elevation: 5;
	z-index: 9999;
`

export const Step = styled.View`
    flex-direction: row;
    min-width: 110px;
    height: 52px;
    margin-right: 4px;
    border-radius: 12px;
    justify-content: space-between;
    align-items: center;
    padding-left: 17px;
    padding-right: 18px;
    background-color: ${props => props.active ? Colors.mainColor : Colors.borderBottomColors };
    color: #6d6d6d;
`
export const StepText = styled.Text`
    font-size: 14px;
    font-weight: 300;
`

export const FooterBtnDiv = styled.TouchableOpacity`
    flex:1;
    justify-content: center;
    align-items: center;
    height: 48px;
`
export const FooterButtonDivY = styled(FooterBtnDiv)`
    background-color: ${Colors.mainColor};
`
export const FooterButtonDivB = styled(FooterBtnDiv)`
    background-color: ${Colors.blackColor};
`
export const FooterButtonDivW = styled(FooterBtnDiv)`
    background-color: ${Colors.whiteColor};
`
//@AHN





export const GreyBox = styled.View`
    background-color: ${Colors.borderBottomColors};
    padding: 16px 18px;
    margin-bottom: 24px;
    border-radius: 9px;
`

export const GreyBox2 = styled.View`
    padding: 6px 11px;
    background-color: ${Colors.borderBottomColors};
    flex-direction: row;
    align-items: center;
    margin-bottom: 36px;
    margin-top: 8px;
`

export const GreyBoxTit = styled.Text`
    font-weight: 300;
    font-size: 12px;
    margin-left: 3px;
`

export const GreyChkBtn = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`

export const OccupancyDateBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0;
`

export const OccupancyDateSel = styled.View`
    width: 100%;
    max-width: 300px;
    justify-content: center;
    border-width: 0.5px;
    border-color: ${Colors.borderColor};
    height: 34px;
`
export const OccupancyRadioBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 70%;
    max-width: 400px;
`

export const RegisterInfoBox = styled.View`
    border-width: 0.5px;
    border-color: ${Colors.borderColor};
    padding: 16px 24px;
    margin-bottom: 10px;
    margin-top: 10px;
`

export const RegisterInfoText = styled.Text`
    font-size: 11px;
    font-weight: 500;
    line-height: 15px;
    padding-left: 13px;
`
export const InfoNum = styled.Text`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 11px;
    font-weight: 600;
    line-height: 15px;
`

export const RegisterInfoText2 = styled.Text`
    font-size: 10px;
    font-weight: 300;
    line-height: 15px;
    padding-left: 23px;
`
export const InfoNum2 = styled.Text`
    position: absolute;
    top: 0;
    left: 15px;
    font-size: 10px;
    font-weight: 300;
    line-height: 15px;
`
export const AgreedChkBtn = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`
export const AgreedChkText = styled.Text`
    font-size: 11px;
    font-weight: 600;
`

//step03
export const FloorText = styled.Text`
    font-size: 11px;
    font-weight: 400;
    color: ${Colors.greyColor};
    padding-left: 4;
`
export const TagBox = styled.View`
    margin-top: 8px;
    flex-wrap: wrap;
    flex-direction: row;
`
export const Tag = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.borderBottomColors};
    height: 34;
    padding-left: 6px;
    padding: 0 10px;
    margin-right: 4px;
    margin-bottom: 4px;
`
export const TagText = styled.Text`
    font-size: 12px;
    font-weight: 300;
    padding-right: 10px;
`
export const RoomTextArea = styled.TextInput`
    height:160;
    padding: 10px 9px;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 10px;
    height: 160px;
    border: 1px solid ${Colors.borderLightColors};

    line-height: 15px;
`
export const TextAreaInfo = styled.Text`
    font-size: 11px;
    font-weight: 300;
    padding-bottom: 34px;
`
export const RowSubTitle = styled.Text`
    font-size: 12px;
    font-weight: ${Platform.OS=="ios" ? 600 : 'bold'};
`
export const RoomBorderView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 65%;
`
export const RoomItemList2Box = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
`

export const DatePickerIcons = styled.Image`
    position: absolute;
    top: 4px;
    right: 4px;
    width: 24px;
    height: 24px;
`
export const ImageUploadCont = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
`
export const ImageUploadBtn = styled.TouchableOpacity`
    flex: 0 0 23.6%;
    border: 1px dashed #000;
    border-radius: 6;
    height: 77;
    overflow: hidden;
    margin-bottom: 4px;
    margin-right: 4px;
    justify-content: center;
    align-items: center;
`
export const ImageUploadBox = styled.View`
    width: 23.6%;
    overflow: hidden;
    border-radius: 6px;
    height: 77px;
    margin-right: 4px;
`
export const ImageUploadImg = styled.Image`
    width: 24px;
    height: 21px;
`
export const ImageUploadText = styled.Text`
    font-size: 10px;
    margin-top: 5px;
`
export const UploadImg = styled.Image`
    width: 100%;
    height: 100%;
`
export const UploadImgXImg = styled.Image`
    width: 24px;
    height: 24px;
`
export const UploadImgX = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right: 0;
`
export const StepFooter = styled.TouchableOpacity`
    flex-direction: row;
    bottom: 0;
`
export const FooterBtn = styled.TouchableOpacity`
    flex: 0 0 50%;
    justify-content: center;
    align-items: center;
    height: 48;
`
export const FooterBtnY = styled(FooterBtn)`
    background-color: ${Colors.mainColor};
`
export const FooterBtnB = styled(FooterBtn)`
    background-color: ${Colors.blackColor};
`
export const FooterBtn3 = styled.TouchableOpacity`
    flex: 0 0 33.333%;
    justify-content: center;
    align-items: center;
    height: 48px;
`
export const FooterBtn3Y = styled(FooterBtn3)`
    background-color: ${Colors.mainColor};
`
export const FooterBtn3B = styled(FooterBtn3)`
    background-color: ${Colors.blackColor};
`
export const FooterBtn3W = styled(FooterBtn3)`
    background-color: ${Colors.whiteColor};
`

export const StepIcon = styled.Image`
    position: absolute;
    width: 9px;
    height: 8px;
    right: 21px;
    top: 14px;
`