import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./app.css";

const Add = () => {
    const [projectData, setProjectData] = useState({
        title: "",
        dateCreated: "",
        publisherFullName: "",
        relatedCategories: "",
        skills: "",
        description: "",
        imageUrl: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectData({
            ...projectData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log("Submitted project data:", projectData);
        axios.post('http://localhost:3000/add', projectData)
    };

    return (
        <div id="backGround">
            <h1>Add Project</h1>
            <div id="titleInputDiv" className="center">
                <input
                    type="text"
                    name="title"
                    placeholder="Enter Your Title"
                    className="glass"
                    value={projectData.title}
                    onChange={handleInputChange}
                />
            </div>
            <div id="DateCreatedInputDiv" className="center">
                <input
                    type="text"
                    name="dateCreated"
                    placeholder="Enter Data Created"
                    className="glass"
                    value={projectData.dateCreated}
                    onChange={handleInputChange}
                />
            </div>
            <div id="publisherInputDiv" className="center">
                <input
                    type="text"
                    name="publisherFullName"
                    placeholder="Enter Publisher Full Name"
                    className="glass"
                    value={projectData.publisherFullName}
                    onChange={handleInputChange}
                />
            </div>
            <div id="categoriesInputDiv" className="center">
                <input
                    type="text"
                    name="relatedCategories"
                    placeholder="Enter Related Categories"
                    className="glass"
                    value={projectData.relatedCategories}
                    onChange={handleInputChange}
                />
            </div>
            <div id="skillsInputDiv" className="center">
                <input
                    type="text"
                    name="skills"
                    placeholder="Enter Your Skills"
                    className="glass"
                    value={projectData.skills}
                    onChange={handleInputChange}
                />
            </div>
            <div id="con">
                <div id="discriptionInputDiv" className="center bigBox" >
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter Your Description"
                        className="glass"
                        value={projectData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div id="ImageInputDiv" className="center bigBox">
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Enter Your Link To Your Image"
                        className="glass"
                        value={projectData.imageUrl}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="center bigBox glass" >
                    <button onClick={handleSubmit} className="idk">Submit</button>
                </div>
            </div>

        </div>
    );
};

export default Add;
