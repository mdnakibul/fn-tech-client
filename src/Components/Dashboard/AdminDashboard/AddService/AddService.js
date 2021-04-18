import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const AddService = () => {
    return (
        <section className="add-service">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="col-md-10 mt-5">
                        <form>
                            <div class="form-group">
                                <label for="name">Service Name</label>
                                <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Service Name" />
                            </div>
                            <div class="form-group">
                                <label for="description">Service Description</label>
                                <input type="text" class="form-control" style={{minHeight : '100px'}} id="exampleInputPassword1" placeholder="Service Description" />
                            </div>
                            <div class="form-group">
                                <label for="price">Service Price</label>
                                <input type="number" class="form-control" id="price" placeholder="Service Price" />
                            </div>
                            <div class="form-group">
                                <label for="photo">Upload a Photo</label>
                                <input type="file" class="form-control-file" id="photo" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;