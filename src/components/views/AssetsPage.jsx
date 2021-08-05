import { useEffect, useState } from "react";
import AssetForm from "../AssetForm";

import {
    getAllCollections
} from "../../controllers/assetController";

export default function AddAsset() {
    const [collections, setCollections] = useState([]);

    const [showAddAsset, setShowAddAsset] = useState(false);
    const hAddAsset = () => setShowAddAsset(!showAddAsset);

    const [showAddCollection, setShowAddCollection] = useState(false);
    const hAddCollection = () => setShowAddCollection(!showAddCollection);

    useEffect(() => {
        getAllCollections().then(
            /* Resolve */
            (result) => {
                setCollections(result);
            },
            /* Reject */
            (error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {collections.map((collection) => (
                <div key={collection.collectionId}>
                    <p>ID: {collection.collectionId}</p>
                    <h3>Name: {collection.collectionName}</h3>
                    <p>Description: {collection.description}</p>
                </div>
            ))}

            <button onClick={hAddCollection}>{showAddCollection ? "Close modal" : "Add Collection"}</button>
            {showAddCollection && <p>Add Collection</p>}

            <button onClick={hAddAsset}>{showAddAsset ? "Close modal" : "Add Asset"}</button>
            {showAddAsset && <AssetForm />}
        </>
    );
}
