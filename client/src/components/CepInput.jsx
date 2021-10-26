import axios from "axios";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import ShowCepInfo from "./ShowCepInfo";

function CepInput() {
  const [data, setData] = useState("");
  const [cepValue, setCepValue] = useState("");

  const fetchData = useCallback(async () => {
    if (cepValue.length == 8) {
      const { data: newData } = await axios.get(
        `http://localhost:4000/cep?value=${cepValue}`
      );
      console.log(newData);
      setData(newData);
      setCepValue("");
    }
  }, [cepValue]);
  useEffect(() => {
    fetchData();
  }, [fetchData, cepValue]);
  return (
    <div className="container">
      <header />      
      <input
        className="cep-input-field"
        name="cepValue"
        value={cepValue}
        onChange={(event) => setCepValue(event.target.value)}
      />
      <ShowCepInfo
        cep={data.cep}
        state={data.state}
        city={data.city}
        neighborhood={data.neighborhood}
        street={data.street}
      ></ShowCepInfo>
    </div>
  );
}
export default CepInput;
