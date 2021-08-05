const baseUrl = "http://104.248.138.246:8085";

/**
 * Adds an asset to the DB
 * @param {{
 *      nftId: number
 *      creatorId: number,
 *      collectionId: number,
 *      categoryId1: number,
 *      categoryId2: number,
 *      categoryId3: number,
 *      type: string,
 *      numberOfCopies: number,
 *      title: string,
 *      description: string,
 *      royalty: number
 * }} assetDetails 
 * 
 * @return {Promise<any>} Asset ID
 */
export async function addAsset(assetDetails) {
    const data = assetDetails;
    const response = await fetch(
        baseUrl + '/addAsset',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );

    return response.json();
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
    const response = await fetch(
        baseUrl + '/addCollection',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );

    return response.json();
}

/**
 * Gets all collections' details
 * @returns {Promise<[
 *  collectionId: number, userId: number, collectionName: string, 
 *  description: string, logoLink: string, resultCode: number
 * ]>} Details of all collections
 */
export async function getAllCollections() {
    const response = await fetch(
        baseUrl + '/getAllCollections',
        {
            method: 'GET'
        }
    );

    return response.json();
}