import { connect } from "react-redux";
import {getSaleDetail, getImages, getOptions, getTags, getAvailableTime, getConvinience, getSecurity, getSchools}  from "../reducers/saleDetailReducer";
import Sales from "../screen/Sale/Sales";


const mapStateToProps = (state) =>{
    
    return ({
        saleData:state.saleDetailReducer.saleData,
        imgData:state.saleDetailReducer.imgData,
        optData:state.saleDetailReducer.optData,
        tagData:state.saleDetailReducer.tagData,
        avlTimeData:state.saleDetailReducer.avlTimeData,
        conviData:state.saleDetailReducer.conviData,
        secureData:state.saleDetailReducer.secureData,
        schoolData:state.saleDetailReducer.schoolData,
    })
}

const mapDispatchToProps = (dispatch) =>{
    return({
        handleGetSaleDetail:    (sID) =>{ dispatch(getSaleDetail(sID))  },
        handleGetSaleImages:    (sID) =>{ dispatch(getImages(sID)) },
        handleGetOptions:       (sID) =>{ dispatch(getOptions(sID)) },
        handleGetTags:          (sID) =>{ dispatch(getTags(sID)) },
        handleGetAvlTime:       (sID) =>{ dispatch(getAvailableTime(sID)) },
        handleGetConvinience:   (sID) =>{ dispatch(getConvinience(sID)) },
        handleGetSecurity:      (sID) =>{ dispatch(getSecurity(sID)) },
        handleGetSchools:       (sID) =>{ dispatch(getSchools(sID)) },

    })
}
const SaledetailContainer = connect(mapStateToProps, mapDispatchToProps)(Sales)

export default SaledetailContainer

