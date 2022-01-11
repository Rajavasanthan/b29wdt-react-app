import React from 'react'
import { useFormik } from 'formik';
import axios from "axios";
import {useNavigate} from "react-router-dom"
function UserCreate() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            name: ''
        },
        onSubmit: async (values) => {
            try {
                await axios.post("http://localhost:3000/create-user",values)
                navigate("/")
            } catch (error) {
                console.log(error)
            }
        }
    });

    return (
        <div className='row'>
            <form onSubmit={formik.handleSubmit}>
                <div className='col-lg-6'>
                    <label>Name</label>
                    <input type="text" name='name' className='form-control'
                        onChange={formik.handleChange}
                        value={formik.values.name} />
                </div>
                <div className='col-lg-6'>
                    <label>Email</label>
                    <input type="text" name='email' className='form-control'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default UserCreate
