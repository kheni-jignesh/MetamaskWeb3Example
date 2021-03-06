import { useState, useContext } from "react";
import MetamaskContext from "../context/metamask";

import { addCollection } from "../controllers/assetController";

export default function AddCollection() {
    const user = useContext(MetamaskContext).user || "??";
    const defaults = {
        "collectionName": "",
        "description": "",
        "logoLink": "",
    }

    const [collectionName, setCollectionName] = useState(defaults.collectionName);
    const [description, setDescription] = useState(defaults.description);
    const [logoLink, setLogoLink] = useState(defaults.logoLink);
    const [message, setMessage] = useState("");

    const handleFormData = (fx) => (e) => {
        fx(e.target.value)
    }

    const resolveAddCollection = async () => {
        const addCollectionQuery = await addCollection({
            userId: user.userId,
            collectionName: collectionName,
            description: description,
            logoLink: logoLink
        });
        console.log("[DEBUG]", "resolveAddCollection called");

        setMessage("Created collection with ID: " + addCollectionQuery.id + " successfully.")
    }

    return (
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            {message && <h3>{message}</h3>}
            <CollectionField name="Collection Name" value={collectionName} handler={handleFormData(setCollectionName)} />
            <CollectionField name="Description" value={description} handler={handleFormData(setDescription)} />
            <CollectionField name="Logo Link" value={logoLink} handler={handleFormData(setLogoLink)} />
            <button onClick={resolveAddCollection}>Add Collection</button>
        </div>
    )
}

function CollectionField({ name, value, handler }) {
    return (
        <div style={{ margin: "10px" }}>
            <label>{name}</label>
            <br />
            <input value={value} onChange={handler} />
        </div>
    )
}