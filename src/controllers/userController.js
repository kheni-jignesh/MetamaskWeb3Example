import axios from "axios";

const baseUrl = "http://104.248.138.246:8085";

/**
 * 
 * @param {string} walletAddress 
 * @returns {Promise<string | null>} userId
 */
export async function getUserByWalletAddress(walletAddress) {
    try {
        const response = await axios.get('/getUserIdByWalletAddress/' + walletAddress, {
            baseURL: baseUrl,
        });

        return response;
    } catch (err) {
        console.log(err);
        return { status: 404 }
    }
}

/**
 * get user details with ID
 * @param {number} id 
 * @returns {Promise<any>} userDetails
 */
export async function getUserById(id) {
    const response = await axios.get('/getUserById/' + id, {
        baseURL: baseUrl
    });

    return response;
}

/**
 * add user to DB and retrieve user ID
 * @param {string} walletAddress 
 * @returns {Promise<any>} userId
 */
export async function addUser(walletAddress) {
    const data = { walletAddress };

    const response = await axios.post('/addUser', data, {
        baseURL: baseUrl
    });

    return response;
}