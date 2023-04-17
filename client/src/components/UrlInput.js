import React, {useState} from 'react';
import axios from 'axios';
import {toast} from "react-toastify";

const UrlInput = () => {
    const [url, setUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/url', {url})
            .then(response => {
                console.log(response.data);
                toast.success("Electronic Health Record added successfully!");
            })
            .catch(error => {
                console.log(error);
                toast.error("Error while adding Electronic Health Record");
            });
    };

    const handleChange = (event) => {
        setUrl(event.target.value);
    };

    return (
        <div className="square-container-ehr">
            <form>
                <label>
                    Enter URL of your Electronic Health Record (EHR) stored in <a href="https://www.healthit.gov/"
                                                                                  target="_blank"
                                                                                  rel="noopener noreferrer">https://www.healthit.gov/</a> to
                    be analyzed
                    and included in the HackHealth database:
                    <br/>
                    <input type="text" className="form-control mt-2" placeholder="https://www.healthit.gov/" value={url}
                           onChange={handleChange}/>
                </label>

                <br/>
                <button type="submit" className="btn btn-success my-2" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>

    );
};

export default UrlInput;
