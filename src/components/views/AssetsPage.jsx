import { useContext, useEffect, useState } from "react";
import AddAsset from "../AddAsset";

import {
    getAllCategories,
    getAllCollections,
    getOnSaleAssets,
} from "../../controllers/assetController";
import AddCollection from "../AddCollection";
import MetamaskContext from "../../context/metamask";

export default function AssetsPage() {
    const metamaskContext = useContext(MetamaskContext);

    const [categories, setCategories] = useState([]);
    const [collections, setCollections] = useState([]);
    const [onSaleAssets, setOnSaleAssets] = useState([])

    const [showAddAsset, setShowAddAsset] = useState(false);
    const hAddAsset = () => setShowAddAsset(!showAddAsset);

    const [showAddCollection, setShowAddCollection] = useState(false);
    const hAddCollection = () => setShowAddCollection(!showAddCollection);

    const [payAmount, setPayAmount] = useState(0);
    const handlePayAmt = (e) => setPayAmount(e.target.value);
    const resolvePayAmount = () => metamaskContext.makePayment(payAmount);

    useEffect(() => {
        getAllCategories().then(
            /* Resolve */
            (result) => {
                setCategories(result.response);
            },
            /* Reject */
            (error) => {
                console.log(error);
            }
        );

        getAllCollections().then(
            /* Resolve */
            (result) => {
                setCollections(result.response);
            },
            /* Reject */
            (error) => {
                console.log(error);
            }
        );

        getOnSaleAssets().then(
            (result) => {
                setOnSaleAssets(result.response);
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
                            <small>{collection.description && collection.description}</small>
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

            <input type="number" placeholder="Amount" value={payAmount} onChange={handlePayAmt} />
            <br />
            <button onClick={resolvePayAmount}>Test Send Payment</button>
            <br />

            <button onClick={hAddCollection}>{showAddCollection ? "Close Modal" : "Add Collection"}</button>
            {showAddCollection && <AddCollection />}

            <button onClick={hAddAsset}>{showAddAsset ? "Close Modal" : "Add Asset"}</button>
            {showAddAsset && <AddAsset />}
        </>
    );
}
