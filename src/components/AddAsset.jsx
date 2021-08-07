import { useState, useContext } from "react";
import MetamaskContext from "../context/metamask";
import { addAsset } from "../controllers/assetController";

/**
 * 
 * @dev Only for test purposes
 *  In the production:
 *  it should take collectionId from selected collection
 *  and categoryId #1 & #2 & #3 from selected categories
 */

export default function AssetForm() {
    const metamaskContext = useContext(MetamaskContext);

    const fields = {
        collectionId: { name: "Collection ID", type: "number", default: null },
        categoryId1: { name: "Category ID #1", type: "number", default: null },
        categoryId2: { name: "Category ID #2", type: "number", default: null },
        categoryId3: { name: "Category ID #3", type: "number", default: null },
        type: { name: "Type", type: "string", default: null },
        numberOfCopies: { name: "Number Of Copies", type: "number", default: null },
        title: { name: "Title", type: "string", default: null },
        description: { name: "Description", type: "string", default: null },
        royalty: { name: "Royalty", type: "number", default: null },
    };

    const defaults = Object.keys(fields).reduce((p, f) => {
        const copy = Object.assign({}, p);
        copy[f] = fields[f].default;
        return copy;
    }, {});

    const creatorId = metamaskContext.user.userId;

    const [formState, setFormState] = useState(defaults);

    const updateForm = (field) => (e) => {
        setFormState(prevState => {
            const prevStateCopy = Object.assign({}, prevState);
            prevStateCopy[field] = e.target.value;
            return prevStateCopy;
        });
    }

    const [waitPrompt, setWaitPrompt] = useState(false);
    const [message, setMessage] = useState("");

    const resolveAddAsset = async () => {
        try {
            const queryDetails = {
                creatorId,
                ...formState,
                "fileLink": null,      // "/fileLink49"
                "previewLink": null,    // "/previewLink49"
                "provider": null,       // "provider49",
                "size": null,           // 1000,
                "payload": null,        // "1"
            };

            const addAssetQuery = await addAsset(queryDetails);
            console.log("[DEBUG]", "resolveAddAsset called", queryDetails, addAssetQuery);

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
        setFormState({
            collectionId: Math.ceil(Math.random() * 3),
            categoryId1: Math.ceil(Math.random() * 3),
            categoryId2: Math.ceil(Math.random() * 3),
            categoryId3: Math.ceil(Math.random() * 3),
            type: "1",
            numberOfCopies: 1,
            title: "Example title " + Math.ceil(Math.random() * 10000),
            description: "Example description " + Math.ceil(Math.random() * 10000),
            royalty: Math.floor(Math.random() * 3)
        })
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

                {
                    Object.keys(defaults).map(f =>
                        <AssetField
                            key={f}
                            name={fields[f].name}
                            type={fields[f].default}
                            value={formState[f]}
                            handler={updateForm(f)} />)
                }

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