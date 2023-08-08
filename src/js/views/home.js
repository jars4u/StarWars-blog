import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context)
	const { people, vehicles, planets} = store
};
