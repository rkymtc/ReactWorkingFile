import {useState,useEffect} from 'react'
import List from './List'
import './styles.css'
import Form from './Form'
function Context() {
    const [contacts, setContacts] = useState([

{
    fullname:"Kader YAZGI",
    phone_number:"03120000001",
},
{
    fullname:"Ali YAZGI",
    phone_number:"03120500002",
},
{
    fullname:"Deren YAZGI",
    phone_number:"03126000700",
},
{
    fullname:"Mahmut DEMİR",
    phone_number:"0312000007",
},
{
    fullname:"Salih DURU",
    phone_number:"03120544664",
},
{
    fullname:"Melisa ÇETİN",
    phone_number:"03120000044",
}

    ]);
   
 useEffect(()=>{
     console.log(contacts);//contact değiştiği anda yaz.
 },[contacts]);

    return (
        <div id="container">
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
            {/*eski ve yeni kayıtları form'a gönder*/}
        </div>
    )
}

export default Context
