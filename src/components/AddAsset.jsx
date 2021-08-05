import { useState } from "react";

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
    const defaults = {
        nftId: 0, creatorId: 0, collectionId: 0,
        categoryId1: 0, categoryId2: 0, categoryId3: 0,
        type: "", numberOfCopies: 1, title: "",
        description: "", royalty: 0,
    };

    const [nftId, setNftId] = useState(defaults.nftId);
    const [creatorId, setCreatorId] = useState(defaults.creatorId);
    const [collectionId, setCollectionId] = useState(defaults.collectionId);
    const [categoryId1, setCategoryId1] = useState(defaults.categoryId1);
    const [categoryId2, setCategoryId2] = useState(defaults.categoryId2);
    const [categoryId3, setCategoryId3] = useState(defaults.categoryId3);
    const [type, setType] = useState(defaults.type);
    const [numberOfCopies, setNumberOfCopies] = useState(defaults.numberOfCopies);
    const [title, setTitle] = useState(defaults.title);
    const [description, setDescription] = useState(defaults.description);
    const [royalty, setRoyalty] = useState(defaults.royalty);

    const handleFormData = (fx) => (e) => fx(e.target.value);

    return (
        <>
            <AssetField name="NFT ID"
                type="number"
                value={nftId}
                handler={handleFormData(setNftId)} />

            <AssetField name="Creator ID"
                type="number"
                value={creatorId}
                handler={handleFormData(setCreatorId)} />

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

            <button>Create Asset</button>
        </>
    )
}

function AssetField({ name, value, handler, type }) {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <br />
            <input name={name} type={type} value={value} onChange={handler} />
        </div>
    )
}