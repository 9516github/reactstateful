import React from "react";
import Year from "./year";
import "./App.css"
export default function App(){
  const data = {
    '2018': [
      'Avengers 1',
      'Now you see me',
      'Fast and Furious 7'
    ],
    '2019': [
      'Avengers 2',
      'Now you see me 2',
      'Fast and Furious 8'
    ],
    '2020': [
      'Final Avengers Movie(Iron man dies)',
      'Now you finally used Lenskart',
      'Covid Came'
    ],
    '2021': [
      'Covid Returns',
    ],
    '2022': [
      'Adventures of Saiman',
      'Adventures of Shaktiman'
    ]
  }
  return (
    <Year data={data}/>
  )
}
