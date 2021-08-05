import { useEffect, useState } from "react";
import AssetForm from "../AssetForm";

import {
    getAllCollections
} from "../../controllers/assetController";

export default function AddAsset() {
    const [collections, setCollections] = useState([]);

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
    }, [])

    return (
        <>
            <AssetForm />
        </>
    );
}
