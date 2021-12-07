import {useState} from 'react'

function List({contacts}) {//listeleme işlemi için kayıtları çekiyoruz.
   const [filterText,setFilterText]=useState("");
   const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key )=>
  item[key]
  .toString().
  toLowerCase()
  .includes(filterText.toLocaleLowerCase())
  )}); {/* string e çevir, küçük harfe çevir. arama yaparken büyükte olsa bulsun */}
    return (
        <div>


            <input placeholder="search" value={filterText} onChange={(e)=> setFilterText(e.target.value)}/>
           <ul className="list"> {/* listeleme için ul yapısını kullanıyoruz.*/}
               {filtered.map((contacts,key) =>(
               <li key={key}>{/* döngü içerisine alıyoruz*/}
                 
                  <span> {contacts.fullname}</span>
                  <span> {contacts.phone_number}</span>

     </li>
               ))}
               </ul> 

               <p>Total contacts {filtered.length}</p>
        </div>
    );
}

export default List
