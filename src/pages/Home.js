
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import UserItem from "../components/userItem";

import { useSelector, useDispatch } from "react-redux";
import { setDataUser } from "../config/redux/action";
import Register from "../components/auth/Register";



function Home() {
  const { dataUser } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
   const [filter, setFilter] = useState("");
   const [search, setSearch] = useState("");
  //  const [dataUsers, setDataUsers] = useState([]);




  useEffect(() => {
    dispatch(setDataUser());
  }, [dispatch]);


  const onSearch = () =>{
  const url = `http://localhost:4000/user/${filter}/${search}`;
  axios.get(url).then((res) => {
    const responseAPIUser = res.data.data;
    setDataUsers(responseAPIUser);
    // console.log(responseAPIUser)
    // console.log(dataUser);
 });
  }

  return (
    <div className="container border rounded">
      <div className="col-auto">
        <div className="box-percarian ">
          <select
            className="custom-select filter"
            onChange={(e) => setFilter(e.target.value)}
          >
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
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            className="btn  btn-search"
            style={{ marginTop: -20 }}
            onClick={onSearch}
          >
            Cari
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          {dataUser.map((user) => {
            return (
              <UserItem
                key={user._id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                address={user.address}
              />
            );
          })}
        </div>
        <div className="col-md-5 mt-3 border rounded">
          <p>Add User</p>
          <Register />
        </div>
      </div>
    </div>
  );
}

export default Home;
