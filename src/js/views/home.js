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
        <div className="text-center text-danger fs-1">
          <strong>CHARACTERS</strong>
        </div>

        <div className="card-group">
          <div className="card">
            <img
              src="https://imagenes.razon.com.mx/files/og_thumbnail/files/fp/uploads/2022/06/23/62b51ed0539a2.r_d.642-253-0.jpeg"
              className="card-img-top" alt="character-img" />
            <div className="card-body">
              <h2 className="card-title"><strong>Darth Vader</strong></h2>
              <p className="card-text fs-3 p-0 m-0"><strong>Gender: </strong>Male</p>
              <p className="card-text fs-3 p-0 m-0"><strong>Hair color: </strong>Bold</p>
              <p className="card-text fs-3 p-0 m-0"><strong>Eye color: </strong>Brown</p>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between">
                {/* <Link to={`detail/${type}/${uid}`}> */}
                < button className="btn btn-primary">Lean more!</button>
                {/* </Link> */}
                < button className="btn btn-warning"
                // onClick={() => actions.addFavorite(item)}
                >
                  <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", }} />
                </button>
              </div>
            </div>
          </div>
        </div>





      </div >
    </>
  )
};
