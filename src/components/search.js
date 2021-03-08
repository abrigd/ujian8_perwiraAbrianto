import axios from 'axios';
import React, { useState } from 'react'

export default function Search() {
  const [filter,setFilter] = useState('')
  const [search, setSearch] = useState('')
  const [dataUsers, setDataUser] = useState([])

  console.log(filter);
  console.log(dataUsers);
  console.log(search);

  const onSearch = () =>{

    const url = `http://localhost:4000/user/${filter}/${search}`;
    axios.get(url)
    .then(res=>{
      const responseAPIUser = res.data.data
      setDataUser(responseAPIUser)
      // console.log(responseAPIUser)
      // console.log(dataUser);

    })
  }
  return (
    <div>
      <div className="col-auto">
        <div className="box-percarian ">
          <select className="custom-select filter" onChange={(e)=>setFilter(e.target.value)}>
            <option>Filter</option>
            <option value="name">name</option>
            <option value="email">email</option>
            <option value="phone">phone</option>
            <option value="address">address</option>
          </select>
          <div className="form-group ">
            <input
              type="text"
              className="form-control search"
              placeholder="Pencarian"
              onChange={(e)=>setSearch(e.target.value)}
            />
          </div>
          <button  className="btn  btn-search" style={{marginTop:-20}} onClick={onSearch}>
            Cari
          </button>
        </div>
      </div>
    </div>
  );
}
