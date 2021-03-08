import axios from "axios";
import React, { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(1);
  const [address, setAddress] = useState("");

  const onSubmit = () => {
    console.log("name", name);
    console.log("email", email);
    console.log("phone", phone);
    console.log("address", address);

    
  //   const data = {
  //   "name": name,
  //   "email": email,
  //   "phone": phone,
  //   "address": address
  // }
    

    // console.log(data);

    // const config = {
    //   headers: { "content-type": "multipart/form-data" },
    // };
    const url ="http://localhost:4000/auth/register"

    axios
      .post(url, {
        name: name,
        email: email,
        phone: phone,
        address: address
      },)
      .then((res) => {
        console.log("add user success", res);
        alert("user Berhasil ditambahkan","terimakasih")
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div>
      <div className="container">
        
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              required
              value={name}
              type="text"
              className="form-control"
              id="name"
              placeholder="Masukan Nama"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              className="form-control"
              id="phone"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="address"
              rows={3}
            />
          </div>
          <button className="btn btn-search" onClick={onSubmit}>
            submit
          </button>
  
      </div>
    </div>
  );
}
