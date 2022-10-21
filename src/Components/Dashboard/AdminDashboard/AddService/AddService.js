import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const AddService = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(e.target.files[0]);
    }

    const handleServiceSubmit = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        formData.append('price', info.price);
        console.log(formData);

        fetch('https://fn-tech-server-imjte4rrt-mdnakibul.vercel.app/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error);
                alert(error.message)
            })
    }

    return (
        <section className="add-service">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="col-md-10 mt-5">
                        <form onSubmit={handleServiceSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Service Name</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="title" id="name" aria-describedby="nameHelp" placeholder="Service Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Service Description</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="description" style={{ minHeight: '100px' }} id="exampleInputPassword1" placeholder="Service Description" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Service Price</label>
                                <input onBlur={handleBlur} type="number" name="price" className="form-control" id="price" placeholder="Service Price" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="photo">Upload a Photo</label>
                                <input onChange={handleFileChange} type="file" name="file" className="form-control-file" id="photo" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;