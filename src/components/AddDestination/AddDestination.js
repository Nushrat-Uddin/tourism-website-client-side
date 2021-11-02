import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddDestination.css';

const AddDestination = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
     console.log(data);
     axios.post('http://localhost:5000/destinations',data)
     .then(res=>{
       if(res.data.insertedId){
         alert('added successfully');
         reset();
       }
     })
  }
    return (
        <div className='add'>
            <h2>Please Add a destination</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { required: true, maxLength: 20 })} placeholder='title'/>
      <input {...register("description")} placeholder='description' />
      <input {...register("img")} placeholder='image url' />
      <input {...register("price")} placeholder='price' />

      <input type="submit" />
    </form>
        </div>
    );
};

export default AddDestination;