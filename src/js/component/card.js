import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "../../styles/home.css";




export const Card = (item, nature) => {

    // const { actions, store } = useContext(Context)
    // const [nature, setNature] = useState("")
    // const { property } = item
    // const { id } = item


    return (
        <>
            {/* CARD */}
            <div className="card m-2">
                <img
                    src="https://imagenes.razon.com.mx/files/og_thumbnail/files/fp/uploads/2022/06/23/62b51ed0539a2.r_d.642-253-0.jpeg"
                    className="card-img-top" alt="character-img" />
                <div className="card-body">
                    <h3 className="card-title"><strong>Darth Vader</strong></h3>
                    <p className="card-text fs-5 p-0 m-0"><strong>Gender: </strong>Male</p>
                    <p className="card-text fs-5 p-0 m-0"><strong>Hair color: </strong>Bold</p>
                    <p className="card-text fs-5 p-0 m-0"><strong>Eye color: </strong>Brown</p>
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
        </>
    )
}