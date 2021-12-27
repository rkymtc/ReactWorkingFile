import {useState,useEffect} from 'react'
import List from './List'
import './styles.css'
import Form from './Form'
import data from '../data/data'

function Context() {
    const [contacts, setContacts] = useState(data);
   
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
