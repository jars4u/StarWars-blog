import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";
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

          {/* CHARACTERS MAPPING*/}
          {
            people.map((item, index) => {
              console.log(item);

              return (

                <Card key={index} item={item} type={"person"} />

              )
            })
          }
        </div>


        {/* TITULO */}
        <div className="text-center text-danger fs-1">
          <strong>PLANETS</strong>
        </div>

        {/* CONTAINER */}
        <div className="d-flex justify-content-between overflow-auto">

          {/* PLANETS MAPPING*/}
          {
            planets.map((item, index) => {
              return (

                <Card key={index} item={item} type={"planet"} />

              )
            })
          }
        </div>


        {/* TITULO */}
        <div className="text-center text-danger fs-1">
          <strong>VEHICLES</strong>
        </div>

        {/* CONTAINER */}
        <div className="d-flex justify-content-between overflow-auto">

          {/* VEHICLES MAPPING*/}
          {
            vehicles.map((item, index) => {
              return (

                <Card key={index} item={item} type={"vehicle"} />

              )
            })
          }

        </div>
      </div >
    </>
  )
};
