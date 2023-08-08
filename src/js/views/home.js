import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context)
  const { people, vehicles, planets } = store

  return (
    <>
      <div className="container col-8">

        {/* TITULO */}
        <div className="text-center text-danger fs-1">
          <strong>CHARACTERS</strong>
        </div>

        {/* CONTAINER */}
        <div className="d-flex justify-content-between overflow-auto">

          {/* CARD */}
          <Card />

        </div>





      </div >
    </>
  )
};
