import React from "react";
import '../styles/ShowCepInfo.css';


function ShowCepInfo(props) {
  
  return (
    <>
      <p 
      className="cep-info"
      >Cep Info</p>
      <ul className="list">
        <li>CEP: {props.cep}</li>
        <li>State: {props.state}</li>
        <li>City: {props.city}</li>
        <li>Neighborhood: {props.neighborhood}</li>
        <li>Street: {props.street}</li>
      </ul>
    </>
   
  );
}

export default ShowCepInfo;
