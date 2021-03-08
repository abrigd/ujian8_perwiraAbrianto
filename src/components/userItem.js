import React from "react";

export default function userItem(props) {
    const { name,email,phone,address} = props
  return (
    <div >
      <div className="card mt-2 mb-2" >
        <div className="card-body">
          <p className="card-title"> name : {name}</p>
          <p className="card-text">email : {email}</p>
          <p className="card-text">phone : {phone}</p>
          <p className="card-text">Address : {address}</p>
        </div>
      </div>
    </div>
  );
}
