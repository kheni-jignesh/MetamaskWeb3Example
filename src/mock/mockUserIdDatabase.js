/** 
 * @dev fail -> User is not in DB  
 */
const fail = true;
const addresses = fail ? [] : ["0x7020Eb349A97f15BeDA19442d12145702cA15781"];

const registry = fail
    ? {}
    : {
        "0x7020Eb349A97f15BeDA19442d12145702cA15781": "6FFAD60473B3"
    }

const randId = () => (Math.floor(Math.random() * 10 ** 10)).toString(16).toUpperCase();

export function checkUserAddress(id) {
    return addresses.includes(id);
}

export function getNewUserId(address) {
    const newId = randId();
    registry[address] = newId;
    return newId;
}

export function getExistingId(address) {
    return registry[address];
}