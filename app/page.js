"use client"
import Homepage from "./home/page"
import Fotter from "./components/footer/Footer"
import Header from './components/header/Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"




export default function page() {
  return (
    <>
   
    <Header/>
    <Homepage/>
    <Fotter/>
    </>
  )
}
