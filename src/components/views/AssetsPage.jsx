import { useEffect, useState } from "react";
import AddAsset from "../AddAsset";

import {
    getAllCollections
} from "../../controllers/assetController";
import AddCollection from "../AddCollection";

export default function AssetsPage() {
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

            <button onClick={hAddCollection}>{showAddCollection ? "Close Modal" : "Add Collection"}</button>
            {showAddCollection && <AddCollection />}

            <button onClick={hAddAsset}>{showAddAsset ? "Close Modal" : "Add Asset"}</button>
            {showAddAsset && <AddAsset />}
        </>
    );
}
