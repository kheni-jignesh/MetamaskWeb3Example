import { GET_ALL_ITEM_EXPLORER, USERS_ERROR, TOP_HERO_AUCTIONS, TOP_AUCTIONS, TOP_ARTWORKS, TOP_CREATORS, TOP_ALL_CATEGORIES, GET_USERS, GET_ALL_USER_EXPLORER, GET_ALL_CATEGORIES, GET_LIVE_AUCTIONS, GET_ALL_CREATED_ITEMS, GET_ITEM_PROFILE_INFO, GET_ITEM_ONSALE_ASSETS, GET_ITEM_SOLD_ASSETS, GET_ITEM_OWNED_ASSETS, GET_ITEM_ACTIVITIES } from './type';
import axios from 'axios';

// header hero Auctions
export const getHeroAuction = () => async dispatch => {
    try {
        const res = await axios.get(process.env.REACT_APP_URL + "GetHeroAuction")
        console.log(res,"GetHeroAuction")
        dispatch({
            type: TOP_HERO_AUCTIONS,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}
// header top auctions
export const getTopAuctions = () => async dispatch => {
    try {
        const res = await axios.get(process.env.REACT_APP_URL + "getTopAuctions")
        dispatch({
            type: TOP_AUCTIONS,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}
// header Latest Artworks
export const getTopItems = () => async dispatch => {
    try {
        let data = {
            userId: 1
        }
        const res = await axios.post(process.env.REACT_APP_URL + "GetTopItems", data)
        console.log(res.data, "getTopItems")
        dispatch({
            type: TOP_ARTWORKS,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}
// header Top Creators
export const getTopCreators = () => async dispatch => {
    try {
        let data = {
            userId: 1
        }
        const res = await axios.post(process.env.REACT_APP_URL + "GetTopCreators", data)
        console.log(res.data, "topCategory")
        dispatch({
            type: TOP_CREATORS,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

// getTopCategories
export const getTopCategories = () => async dispatch => {
    try {
        const res = await axios.get(process.env.REACT_APP_URL + "GetAllCategories")
        console.log(res.data, "GetAllCategories")
        dispatch({
            type: TOP_ALL_CATEGORIES,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}



// explorer
export const getallcategories = () => async dispatch => {

    try {
        const res = await axios.get(process.env.REACT_APP_URL + "GetAllCategories")

        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

export const getalluserexplorer = () => async dispatch => {

    try {
        // let data = {
        //     sortMethod: 1,
        //     isVerified: 1,
        //     categoryId: 0
        // }
        // const res = await axios.post(process.env.REACT_APP_URL + "getAllUsersSorted", data)
        const res = await axios.get(process.env.REACT_APP_URL + "GetAllUsers")
        dispatch({
            type: GET_ALL_USER_EXPLORER,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

export const getallitemexplorer = () => async dispatch => {

    try {

        const res = await axios.get(process.env.REACT_APP_URL + "GetAllAssets")

        dispatch({
            type: GET_ALL_ITEM_EXPLORER,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}


// Live Auctions

export const getLiveAuctions = () => async dispatch => {
    try {
        const res = await axios.get(process.env.REACT_APP_URL + "GetLiveAuctions")
        dispatch({
            type: GET_LIVE_AUCTIONS,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }
}


//====================================myitempage ============== 

export const postCreatedByUser = () => async dispatch => {
    // CreatedByUser
    try {
        let userData = {
            "userId": 1,
            accountUserId: null
        }
        const res = await axios.post(process.env.REACT_APP_URL + "GetAllAssetsCreatedByUser", userData)
        dispatch({
            type: GET_ALL_CREATED_ITEMS,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }
}
// int userId, int accountUserId
export const getItemInfoData = () => async dispatch => {
    // getUserById
    try {
        let data = {
            userId: 1,
            accountUserId:1
        }
        const res = await axios.post(process.env.REACT_APP_URL + "getUserById", data)
        console.log(res.data, "getItemInfoData")
        dispatch({
            type: GET_ITEM_PROFILE_INFO,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }
}


export const getItemOnSaleAssetsOfUser = () => async dispatch => {
    // getOnSaleAssetsOfUser
    try {
        let data = {
            userId: 1,
            accountUserId:null
        }
        const res = await axios.post(process.env.REACT_APP_URL + "getOnSaleAssetsOfUser", data)
        console.log(res.data, "getItemOnSaleAssetsOfUser")
        dispatch({
            type: GET_ITEM_ONSALE_ASSETS,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }
}


export const getItemSoldAssetsOfUser = () => async dispatch => {
    // getSoldAssetsOfUser
    try {
        let data = {
            userId: 1,
            accountUserId: null
        }
        const res = await axios.post(process.env.REACT_APP_URL + "getSoldAssetsOfUser", data)
        dispatch({
            type: GET_ITEM_SOLD_ASSETS,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }
}

export const getItemAssetsOwnedByUser = () => async dispatch => {
    // getAllAssetsOwnedByUser
    try {
        let data = {
            userId: 1,
            accountUserId: null
        }
        const res = await axios.post(process.env.REACT_APP_URL + "getAllAssetsOwnedByUser", data)
        dispatch({
            type: GET_ITEM_OWNED_ASSETS,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }
}


export const getItemActivitiesOfUser = () => async dispatch => {
    // getAllActivitiesOfUser
    try {
        let data = {
            userId: 1,
        }
        const res = await axios.post(process.env.REACT_APP_URL + "getLikeActivitiesOfUser", data)
        console.log(res.data, "getLikeActivitiesOfUser")
        dispatch({
            type: GET_ITEM_ACTIVITIES,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }
}

