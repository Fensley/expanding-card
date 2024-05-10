import React from "react";

function App(infor) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{infor.name}</h2>
          <img src={infor.img} className="circle-img" alt="" />
        </div>
        <div className="bottom">
          <p className="info">{infor.number}</p>
          <p className="info">{infor.email}</p>
        </div>
      </div>
    </div>
  );
}

function Jack(infor) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{infor.name}</h2>
        <img src={infor.img} className="circle-img" alt="" />
      </div>
      <div className="bottom">
        <p className="info">{infor.number}</p>
        <p className="info">{infor.email}</p>
      </div>
    </div>
  );
}

function Chuck(infor) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{infor.name}</h2>
        <img src={infor.img} className="circle-img" alt="" />
      </div>
      <div className="bottom">
        <p className="info">{infor.number}</p>
        <p className="info">{infor.email}</p>
      </div>
    </div>
  );
}

export { App, Jack, Chuck };
