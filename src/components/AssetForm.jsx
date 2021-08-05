import { useState } from "react";

export default function AssetForm() {
    const formFields = {
        nftId: 0,
        creatorId: 0,
        collectionId: 0,
        categoryId1: 0,
        categoryId2: 0,
        categoryId3: 0,
        type: "",
        numberOfCopies: 1,
        title: "",
        description: "",
        royalty: 0,
    };
    const [formData, setFormData] = useState(formFields);
    const handlers = {
        "nftId": (e) => setFormData({ ...formData, nftId: e.target.value }),
        "creatorId": (e) => setFormData({ ...formData, creatorId: e.target.value }),
        "collectionId": (e) => setFormData({ ...formData, creatorId: e.target.value }),
        "categoryId1": (e) => setFormData({ ...formData, categoryId1: e.target.value }),
        "categoryId2": (e) => setFormData({ ...formData, categoryId2: e.target.value }),
        "categoryId3": (e) => setFormData({ ...formData, categoryId3: e.target.value }),
        "type": (e) => setFormData({ ...formData, type: e.target.value }),
        "numberOfCopies": (e) => setFormData({ ...formData, numberOfCopies: e.target.value }),
        "title": (e) => setFormData({ ...formData, title: e.target.value }),
        "description": (e) => setFormData({ ...formData, description: e.target.value }),
        "royalty": (e) => setFormData({ ...formData, royalty: e.target.value })
    };

    return (
        <>
            <AssetField name="NFT ID" value={formData.nftId} handler={handlers.nftId} />
            <AssetField name="Creator ID" value={formData.creatorId} handler={handlers.creatorId} />
            <AssetField name="Collection ID" value={formData.collectionId} handler={handlers.collectionId} />
            <AssetField name="Category ID 1" value={formData.categoryId1} handler={handlers.categoryId1} />
            <AssetField name="Category ID 2" value={formData.categoryId2} handler={handlers.categoryId2} />
            <AssetField name="Category ID 3" value={formData.categoryId3} handler={handlers.categoryId3} />
            <AssetField name="Type" value={formData.type} handler={handlers.type} />
            <AssetField name="Number of Copies" value={formData.numberOfCopies} handler={handlers.numberOfCopies} />
            <AssetField name="Title" value={formData.title} handler={handlers.title} />
            <AssetField name="Description" value={formData.description} handler={handlers.description} />
            <AssetField name="Royalty" value={formData.royalty} handler={handlers.royalty} />
            <button>Create Asset</button>
        </>
    )
}

function AssetField({ name, value, handler }) {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <br />
            <input name={name} type={typeof value} value={value} onChange={handler} />
        </div>
    )
}