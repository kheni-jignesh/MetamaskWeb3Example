import { useEffect, useState } from "react";
import AddAsset from "../AddAsset";

import {
    getAllCategories,
    getAllCollections,
    getOnSaleAssets,
} from "../../controllers/assetController";
import AddCollection from "../AddCollection";

export default function AssetsPage() {
    const [categories, setCategories] = useState([]);
    const [collections, setCollections] = useState([]);
    const [onSaleAssets, setOnSaleAssets] = useState([])

    const [showAddAsset, setShowAddAsset] = useState(false);
    const hAddAsset = () => setShowAddAsset(!showAddAsset);

    const [showAddCollection, setShowAddCollection] = useState(false);
    const hAddCollection = () => setShowAddCollection(!showAddCollection);

    useEffect(() => {
        getAllCategories().then(
            /* Resolve */
            (result) => {
                setCategories(result.data);
            },
            /* Reject */
            (error) => {
                console.log(error);
            }
        );

        getAllCollections().then(
            /* Resolve */
            (result) => {
                setCollections(result.data);
            },
            /* Reject */
            (error) => {
                console.log(error);
            }
        );

        getOnSaleAssets().then(
            (result) => {
                setOnSaleAssets(result.data);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    return (
        <>
            <h2>Categories: </h2>
            {
                categories.length > 0
                    ? categories.map((category) => (
                        <div key={category.categoryId}>
                            <h3>[{category.categoryId}] {category.name} - {category.position}</h3>
                        </div>
                    ))
                    : (
                        <div>
                            <p>None</p>
                        </div>
                    )
            }

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
                onSaleAssets.length > 0
                    ? onSaleAssets.map((asset) => (
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
