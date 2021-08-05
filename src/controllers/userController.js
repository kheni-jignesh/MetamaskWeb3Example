const baseUrl = "http://104.248.138.246:8085";

/**
 * 
 * @param {string} walletAddress 
 * @returns {Promise<any>} userId
 */
export async function getUserByWalletAddress(walletAddress) {
    const data = { walletAddress }
    const response = await fetch(
        baseUrl + "/getUserByWalletAddress",
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
 * get user details with ID
 * @param {number} id 
 * @returns {Promise<any>} userDetails
 */
export async function getUserById(id) {
    const response = await fetch(
        baseUrl + "/getUserById/" + id,
        {
            method: 'GET'
        }
    );

    return response.json();
}

/**
 * add user to DB and retrieve user ID
 * @param {string} walletAddress 
 * @returns {Promise<any>} userId
 */
export async function addUser(walletAddress) {
    const data = { walletAddress };
    const response = await fetch(
        baseUrl + "/addUser",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }
    );

    return response.json();
}