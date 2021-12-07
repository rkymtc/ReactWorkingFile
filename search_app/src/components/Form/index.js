import React, { useState,useEffect } from 'react';
const initialFormValues={fullname:"",phone_number:""};
export default function Form({addContact,contacts}) {
    // prop'ı aldık. atama işlemini yapacak olan fonksiyon
    const [form, setForm] = useState(initialFormValues);
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();// durdurmak için
        if(form.fullname === ""|| form.phone_number === ""){
            console.error("boş kayıt giremezsiniz.");
            return false;
        }
        addContact([...contacts,form]);// eski verileri koruyarak atama yap
        //setForm({fullname:"",phone_number:""})//inputların içini temizleme
    }
 useEffect(()=>{
     setForm(initialFormValues)
 },[contacts])// contacts değiştikten sonra inputun içini temizle.(kayıt eklendikten sonra temizleme)
    return (
        <form onSubmit={onSubmit}>

            <div><input name="fullname" placeholder="Full Name" onChange={onChangeInput} value={form.fullname}/> </div>
            <div><input name="phone_number" placeholder="Phone Number" onChange={onChangeInput} value={form.phone_number} /> </div>
            <div className="btn"><button onClick={onSubmit}>Add</button></div>

        </form>
    )
}
