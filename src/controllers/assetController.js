import axios from "axios";

const baseUrl = "http://104.248.138.246:8085";

const checkQuery = (query, name) => { if (query.data.resultCode === 0) throw new Error(name + " query failed") }

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
 * @return {Promise<{ resultCode: number, id: number }>?} Asset ID
 */
export async function addAsset(assetDetails) {
    const data = assetDetails;

    console.log(data)

    try {
        const query = await axios.post('/addAsset', data, {
            baseURL: baseUrl
        });

        console.log(query)

        checkQuery(query, "addAsset"); // Throws an error if result code is 0
        return query.data;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

/**
 * Add a new collection to DB
 * @param {{
 *      userId: number,
 *      collectionName: string,
 *      description: string,
 *      logoLink: string
 * }} collectionDetails 
 * @returns {Promise<{
 *  resultCode: number,
 *  id:number}?
 * >} resultCode
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
 * @returns {Promise<{
 * resultCode: 0 | 1,
 * response: [{
 *      collectionId: number, 
 *      userId: number, 
 *      collectionName: string, 
 *      description: string, 
 *      logoLink: string, 
 *      resultCode: number
 * }]
 * }?>} Details of all collections
 */
export async function getAllCollections() {
    try {
        const query = await axios.get('/getAllCollections', {
            baseURL: baseUrl
        });

        checkQuery(query, "getAllCollections");
        return query.data;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

/**
 * Gets all assets
 * @returns {Promise<{
 * resultCode: 0 | 1,
 * response: [{
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
 * }]
 * }?>} all assets
 */
export async function getAllAssets() {
    try {
        const query = await axios.get('/getAllAssets', {
            baseURL: baseUrl
        });

        checkQuery(query, "getAllAssets")
        return query.data;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

/**
 * Gets on sale assets
 * @returns {Promise<{
 * resultCode: 0 | 1,
 * response: [{
 *      assetId: number, 
 *      title: string, 
 *      previewLink: string, 
 *      resultCode: number
 * }]
 * }?>}
 */
export async function getOnSaleAssets() {
    try {
        const query = await axios.get('/getAllOnSaleAssets', {
            baseURL: baseUrl
        })

        checkQuery(query, "getAllOnSaleAssets")
        return query.data;
    }
    catch (err) {
        console.log(err);
        return null;
    }

}

/**
 * Gets all categories
 * @returns {Promise<{
 * resultCode: 0 | 1,
 * response: 
 * [{
 *      categoryId: number,
 *      name: string,
 *      position: number
 * }]
 * }?>}
 */
export async function getAllCategories() {
    try {
        const query = await axios.get('/getAllCategories', {
            baseURL: baseUrl
        });

        checkQuery(query, "getAllCategories");
        return query.data;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}