import { GET_ALL_ITEM_EXPLORER, TOP_HERO_AUCTIONS, TOP_AUCTIONS, GET_ALL_USER_EXPLORER, TOP_ARTWORKS, TOP_CREATORS, TOP_ALL_CATEGORIES, GET_USERS, GET_ALL_CATEGORIES, GET_LIVE_AUCTIONS, GET_ALL_CREATED_ITEMS, GET_ITEM_PROFILE_INFO, GET_ITEM_ONSALE_ASSETS, GET_ITEM_SOLD_ASSETS, GET_ITEM_OWNED_ASSETS, GET_ITEM_ACTIVITIES } from './type'

const initialState = {
    liveAuctions: '',
    topArtworks: '',
    topCreators: '',
    topCategories: '',
    loading: false,
    allcategories: '',
    alluserexplorer: '',
    allitemexplorer: '',
    getAuctionsdata: '',
    allcategoryexplorer: '',
    getItemCreated: "",
    getItemProfileData: '',
    getItemOnSale: "",
    getItemOnSold: "",
    getItemOwnedAssets: '',
    getItemActivities:''
}

export default function (state = initialState, action) {

    switch (action.type) {
        case TOP_HERO_AUCTIONS:
            return {
                ...state,
                ...action.payload,
                loading: true

            }
        case TOP_AUCTIONS:
            return {
                ...state,
                liveAuctions: action.payload,
                loading: true

            }
        case TOP_ARTWORKS:
            return {
                ...state,
                topArtworks: action.payload,
                loading: true
            }
        case TOP_CREATORS:
            return {
                ...state,
                topCreators: action.payload,
                loading: true
            }
        case TOP_ALL_CATEGORIES:
            return {
                ...state,
                topCategories: action.payload,
                loading: true
            }

        case GET_USERS:
            return {
                ...state,
                ...action.payload,
                loading: true

            }
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                allcategoryexplorer: action.payload,
                loading: true
            }

        case GET_ALL_USER_EXPLORER:

            return {
                ...state,
                alluserexplorer: action.payload,
                loading: true

            }
        case GET_ALL_ITEM_EXPLORER:
            return {
                ...state,
                allitemexplorer: action.payload,
                loading: true

            }
        case GET_LIVE_AUCTIONS:
            return {
                ...state,
                getAuctionsdata: action.payload,
                loading: true

            }
        case GET_ALL_CREATED_ITEMS:
            return {
                ...state,
                getItemCreated: action.payload,
                loading: true

            }
        case GET_ITEM_PROFILE_INFO:
            return {
                ...state,
                getItemProfileData: action.payload,
                loading: true

            }
        case GET_ITEM_ONSALE_ASSETS:
            return {
                ...state,
                getItemOnSale: action.payload,
                loading: true

            }
        case GET_ITEM_SOLD_ASSETS:
            return {
                ...state,
                getItemOnSold: action.payload,
                loading: true

            }
        case GET_ITEM_OWNED_ASSETS:
            return {
                ...state,
                getItemOwnedAssets: action.payload,
                loading: true

            }
        case GET_ITEM_ACTIVITIES:
            return {
                ...state,
                getItemActivities: action.payload,
                loading: true

            }
        default: return state


    }

}
