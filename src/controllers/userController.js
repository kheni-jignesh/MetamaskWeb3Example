import axios from "axios";

const baseUrl = "http://104.248.138.246:8085";

/**
 * Throws an error if query result code is 0
 * @param {any} query 
 * @param {string} name  
 */
const checkQuery = (query, name) => { if (query.data.resultCode === 0) throw new Error(name + " query failed") }

/** 
 * @param {string} walletAddress 
 * @returns {Promise<{ resultCode: 0 | 1, response: string}?>} user ID
 */
export async function getUserByWalletAddress(walletAddress) {
    try {
        const query = await axios.get('/getUserIdByWalletAddress/' + walletAddress, {
            baseURL: baseUrl,
        });

        checkQuery(query, "getUserByWalletAddress");
        return query.data;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

/**
 * Gets user details with ID
 * @param {number} id 
 * @returns {Promise<any?>} userDetails
 */
export async function getUserById(id) {
    try {
        const query = await axios.get('/getUserById/' + id, {
            baseURL: baseUrl
        });

        checkQuery(query, "getUserById");
        return query.data;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

/**
 * Adds user to DB and retrieve user ID
 * @param {string} walletAddress 
 * @returns {Promise<{ resultCode: 0 | 1, id: number }?>} userId
 */
export async function addUser(walletAddress) {
    const data = { walletAddress };

    try {
        const query = await axios.post('/addUser', data, {
            baseURL: baseUrl
        });

        checkQuery(query, "addUser")
        return query.data;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}