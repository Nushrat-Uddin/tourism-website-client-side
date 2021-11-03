import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddDestination.css'
const AddDestination = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:3000/destinations', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset();
                }
            })
    };
    return (
        <div className="backgrnd-img">
            <div className="add-place mx-auto">
                <h2>Add a Destination</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="backgrnd-img">
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="title" />
                    <input type="text" {...register("description")} placeholder="Description" />
                    <input type="text" {...register("price")} placeholder="price" />
                    
                    <input {...register("img")} placeholder="Image Url" />
                    <input type="submit" className="btn-success" />
                </form>
            </div>
        </div>
    );
};

export default AddDestination;