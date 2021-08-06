import axios from "axios";

const baseUrl = "http://104.248.138.246:8085";

/**
 * Adds an asset to the DB
 * @param {{
 *      creatorId: number,
 *      collectionId: number,
 *      categoryId1: number,
 *      categoryId2: number?,
 *      categoryId3: number?,
 *      type: "1" | "2",
 *      numberOfCopies: number,
 *      title: string,
 *      description: string,
 *      royalty: number?
 * }} assetDetails 
 * 
 * @return {Promise<any>} Asset ID
 */
export async function addAsset(assetDetails) {
    const data = assetDetails;
    console.log(data);

    const response = await axios.post('/addAsset', data, {
        baseURL: baseUrl
    });

    return response;
}

/**
 * Add a new collection to DB
 * @param {{
 *      userId: number,
 *      collectionName: string,
 *      description: string,
 *      logoLink: string
 * }} collectionDetails 
 * @returns {Promise<number>} resultCode
 */
export async function addCollection(collectionDetails) {
    const data = collectionDetails;

    const response = await axios.post('/addCollection', data, {
        baseURL: baseUrl,
    });

    return response;
}

/**
 * Gets all collections' details
 * @returns {Promise<[{
 *      collectionId: number, 
 *      userId: number, 
 *      collectionName: string, 
 *      description: string, 
 *      logoLink: string, 
 *      resultCode: number
 * }]>} Details of all collections
 */
export async function getAllCollections() {
    const response = await axios.get('/getAllCollections', {
        baseURL: baseUrl
    });

    return response;
}

/**
 * Gets all assets
 * @returns {Promise<[{
 *      assetId: number, 
 *      creatorId: number,
 *      ownerId: number, 
 *      collectionId: number, 
 *      categoryId1: number, 
 *      categoryId2: number, 
 *      categoryId3: number, 
 *      ownerAddress: string, 
 *      type: enum, 
 *      numberOfCopies: number, 
 *      title: string, 
 *      description: string, 
 *      nftAddress: string, 
 *      fileLink: string?, 
 *      previewLink: string,  
 *      provider: string, 
 *      size: number, 
 *      payload: enum, 
 *      createDate: Date, 
 *      isMinted: boolean, 
 *      mintDate: Date, 
 *      onSale: boolean, 
 *      state: enum, 
 *      lastTransferDate: Date, 
 *      isDeleted: boolean, 
 *      isActive: boolean, 
 *      royalty: number, 
 *      likeCount: number, 
 *      creationFee: numeric | bigint, 
 *      resultCode: number
 * }]>} all assets
 */
export async function getAllAssets() {
    const response = await axios.get('/getAllAssets', {
        baseURL: baseUrl
    });

    return response;
}

/**
 * Gets on sale assets
 * @returns {Promise<[{
 *      assetId: number, 
 *      title: string, 
 *      previewLink: string, 
 *      resultCode: number
 * }]>}
 */
export async function getOnSaleAssets() {
    const response = await axios.get('/getAllOnSaleAssets', {
        baseURL: baseUrl
    })

    return response;
}

/**
 * Gets all categories
 * @returns {Promise<[{
 *      categoryId: number,
 *      name: string,
 *      position: int
 * }]>}
 */
export async function getAllCategories() {
    const response = await axios.get('/getAllCategories', {
        baseURL: baseUrl
    });

    return response;
}