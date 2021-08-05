import { useEffect, useState } from "react";
import AddAsset from "../AddAsset";

import {
    getAllCollections, getOnSaleAssets
} from "../../controllers/assetController";
import AddCollection from "../AddCollection";

export default function AssetsPage() {
    const [collections, setCollections] = useState([]);
    const [assets, setAssets] = useState([])

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
            }
        );

        getOnSaleAssets().then(
            (result) => {
                setAssets(result);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    return (
        <>
            <h2>Collections: </h2>
            {
                collections.length > 0
                    ? collections.map((collection) => (
                        <div key={collection.collectionId}>
                            <h3>[{collection.collectionId}] {collection.collectionName}</h3>
                            <small>{collection.description}</small>
                        </div>
                    ))
                    : (
                        <div>
                            <p>None</p>
                        </div>
                    )
            }

            <h2>Assets On Sale: </h2>
            {
                assets.length > 0
                    ? assets.map((asset) => (
                        <div key={asset.assetId}>
                            <h3>[{asset.assetId}] {asset.title}</h3>
                            <small>{asset.previewLink}</small>
                        </div>
                    ))
                    : (
                        <div>
                            <p>None</p>
                        </div>
                    )
            }

            <br />

            <button onClick={hAddCollection}>{showAddCollection ? "Close Modal" : "Add Collection"}</button>
            {showAddCollection && <AddCollection />}

            <button onClick={hAddAsset}>{showAddAsset ? "Close Modal" : "Add Asset"}</button>
            {showAddAsset && <AddAsset />}
        </>
    );
}
