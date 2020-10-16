import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data =>{
        fetch('https://glacial-stream-85081.herokuapp.com/add-admin',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
            
        })
        .then(res=>res.json())
        .then(success=>{
            if(success){
                alert('Make Admin Successful, Thanks')
            }
        })


    }
    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
        <input placeholder="Admin@gmail.com" name="email" className="form-control"  ref={register} />
        </div>
        <div className="form-group ">
                        
                        <input    className="btn-dgn" type="submit" />
                    </div>

        </form>
        
    );
};

export default MakeAdmin;