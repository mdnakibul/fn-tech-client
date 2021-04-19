import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const handleMakeAdmin = (data) => {
        console.log(data);

        fetch('https://enigmatic-castle-41503.herokuapp.com/makeAnAdmin',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Admin Role Updated Successfully');
            }
        })
    }
    return (
        <section className="make-admin">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="col-md-10" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="book-navigation d-flex justify-content-between px-3 py-3">
                            <h4 className="text-uppercase pl-2">Make An Admin</h4>
                            <h4 className="pr-2">{loggedInUser.displayName}</h4>
                        </div>

                        <form className="form-inline mt-5" onSubmit={handleSubmit(handleMakeAdmin)}>
                            <div className="form-group">
                                <input name="email" type="email" className="form-control py-3 mb-3"  {...register("email", { required: true })} placeholder="Enter Email Address" />
                                {/* errors will return when field validation fails  */}
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-primary mb-3 ml-3" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;