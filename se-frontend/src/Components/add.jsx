import { useSearch } from "../searchContext";
import { useEffect, useState } from "react";
import axios from "../axios";
import "./app.css"

const Add = () => {
    return (
        <div id="backGround">
            <h1>Title</h1>
            <div id="titleInput" className="glass">
                <input type="text" placeholder="Enter text" />
            </div>
        </div>
    )
}

export default Add 