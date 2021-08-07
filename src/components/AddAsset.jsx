import { useState, useContext } from "react";
import MetamaskContext from "../context/metamask";
import { addAsset } from "../controllers/assetController";

/**
 * 
 * @dev Şu an sadece test amaçlı bu şekilde,
 * son halinde:
 * collectionId seçili collection'dan
 * creatorId userId'den,
 * categoryId1 & 2 & 3  seçili kategorilerden gelecek
 * 
 * ? nftId ve royalty nasıl seçilecek bilmiyorum
 */

export default function AssetForm() {
    const metamaskContext = useContext(MetamaskContext);

    const defaults = {
        nftId: null, creatorId: null, collectionId: null,
        categoryId1: null, categoryId2: null, categoryId3: null,
        type: null, numberOfCopies: null, title: null,
        description: null, royalty: null,
    };

    const creatorId = metamaskContext.user.userId;

    const [collectionId, setCollectionId] = useState(defaults.collectionId);
    const [categoryId1, setCategoryId1] = useState(defaults.categoryId1);
    const [categoryId2, setCategoryId2] = useState(defaults.categoryId2);
    const [categoryId3, setCategoryId3] = useState(defaults.categoryId3);
    const [type, setType] = useState(defaults.type);
    const [numberOfCopies, setNumberOfCopies] = useState(defaults.numberOfCopies);
    const [title, setTitle] = useState(defaults.title);
    const [description, setDescription] = useState(defaults.description);
    const [royalty, setRoyalty] = useState(defaults.royalty);

    const [waitPrompt, setWaitPrompt] = useState(false);
    const [message, setMessage] = useState("");

    const handleFormData = (fx) => (e) => fx(e.target.value);

    const resolveAddAsset = async () => {
        try {
            const queryDetails = {
                creatorId, collectionId,
                categoryId1, categoryId2, categoryId3,
                type, numberOfCopies, title, description, royalty,
                "fileLink": null,      // "/fileLink49"
                "previewLink": null,    // "/previewLink49"
                "provider": null,       // "provider49",
                "size": null,           // 1000,
                "payload": null,        // "1"
            };

            const addAssetQuery = await addAsset(queryDetails);
            console.log("[DEBUG]", "resolveAddAsset called", addAssetQuery);

            setWaitPrompt(true);

            await metamaskContext.contract.methods.safeMint(addAssetQuery.id).send({
                from: metamaskContext.user.walletAddress
            });

            setWaitPrompt(false);
            setMessage("Asset with ID " + addAssetQuery.id + " is successfully minted");
        }
        catch (err) {
            console.log(err);

            setWaitPrompt(false);
            setMessage("Asset mint failed");
        }
    };

    const randomFill = () => {
        setCollectionId(1);
        setCategoryId1(1);
        setCategoryId2(2);
        setType("1");
        setNumberOfCopies(1);
        setTitle("Example title " + Math.ceil(Math.random() * 10000));
        setDescription("Example description " + Math.ceil(Math.random() * 10000));
        setRoyalty(5);
    }

    return waitPrompt
        ? (
            <div>
                <h2>Minting the NFT... Please accept the prompt</h2>
            </div>
        )
        : (
            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <button onClick={randomFill}>Fill</button>

                {message && <h3>{message}</h3>}

                <AssetField name="Collection ID"
                    type="number"
                    value={collectionId}
                    handler={handleFormData(setCollectionId)} />

                <AssetField name="Category ID 1"
                    type="number"
                    value={categoryId1}
                    handler={handleFormData(setCategoryId1)} />

                <AssetField name="Category ID 2"
                    type="number"
                    value={categoryId2}
                    handler={handleFormData(setCategoryId2)} />

                <AssetField name="Category ID 3"
                    type="number"
                    value={categoryId3}
                    handler={handleFormData(setCategoryId3)} />

                <AssetField name="Type"
                    type="text"
                    value={type}
                    handler={handleFormData(setType)} />

                <AssetField name="Number of Copies"
                    type="number"
                    value={numberOfCopies}
                    handler={handleFormData(setNumberOfCopies)} />

                <AssetField name="Title"
                    type="text"
                    value={title}
                    handler={handleFormData(setTitle)} />

                <AssetField name="Description"
                    type="text"
                    value={description}
                    handler={handleFormData(setDescription)} />

                <AssetField name="Royalty"
                    type="number"
                    value={royalty}
                    handler={handleFormData(setRoyalty)} />

                <button onClick={resolveAddAsset}>Create Asset</button>
            </div>
        )
}

function AssetField({ name, value, handler, type }) {
    return (
        <div style={{ margin: "10px" }}>
            <label htmlFor={name}>{name}</label>
            <br />
            <input name={name} type={type} value={value ? value : ""} onChange={handler} />
        </div>
    )
}