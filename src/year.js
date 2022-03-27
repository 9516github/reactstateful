import React, { useState } from "react"
import ShowData from "./showData";

export default function Year(props) {
  const [dataChoice, setData] = useState("")
  return <>
    <select id="select" onChange={(e) => {
      setData(e.target.value);
    }}>
      <option value="null">choose</option>
      <option value="2018">2018</option>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
    </select>
    <div id="selected-year"><ShowData data={props.data} dataChoice={dataChoice} />
    </div>
  </>
}