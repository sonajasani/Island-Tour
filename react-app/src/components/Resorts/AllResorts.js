import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useHistory, NavLink } from "react-router-dom";
import './AllResort.css'

import {getResorts} from '../../store/resorts'

/********************************************************************/

function AllResorts() {

    const dispatch = useDispatch();
    const history = useHistory();
  
    useEffect(() => {
       dispatch(getResorts());
    }, [dispatch]);
    
    const sessionUser = useSelector((state) => state.session.user);
    
    useEffect(() => {
        if (sessionUser) history.push("/resorts");
        else history.push("/");

    }, [sessionUser]);

    const AllResorts = useSelector(state => state.resort)
    const resorts = Object.values(AllResorts)

    const asiaResort =  resorts.filter(resort => resort?.continent === "Asia")
    const saResort =  resorts.filter(resort => resort?.continent === "South America")
    const naResort =  resorts.filter(resort => resort?.continent === "North America")
    const africaResort =  resorts.filter(resort => resort?.continent === "Africa")
    const antarticaResort =  resorts.filter(resort => resort?.continent === "Antartica")
    const europeResort =  resorts.filter(resort => resort?.continent === "Europe")
    const oceaniaResort =  resorts.filter(resort => resort?.continent === "Oceania")
    

    return (
        <>
            <div className='all-resort-div'>
                <h1>Famous Island Resorts Around The World !</h1>
                <div>
                    <NavLink to='resorts/new' className='upload-resort-btn'>
                        <button>
                            Upload New Resort
                        </button>
                    </NavLink>
                </div>
                
                <div className="resorts-div">
                    <div className='resort-sub-div'>
                        <div className="continent-resort">
                            <h2>Asia</h2>
                            {asiaResort?.map((r, i) => (
                                <ul>
                                    <NavLink to={`/resorts/${r.id}`} className='resort-name-div'>
                                        <li  key={i}>
                                        <p>{r.name}</p>
                                        </li>
                                    </NavLink>
                                </ul>
                            ))}
                        </div>
                        <div className="continent-resort">
                            <h2>Europe</h2>
                            {europeResort?.map((r, i) => (
                                <ul>
                                <NavLink to={`/resorts/${r.id}`} className='resort-name-div'>
                                    <li  key={i}>
                                    <p>{r.name}</p>
                                    </li>
                                </NavLink>
                            </ul>
                            ))}
                        </div>
                        <div className="continent-resort">
                            <h2>North America</h2>
                            {naResort?.map((r, i) => (
                                <ul>
                                <NavLink to={`/resorts/${r.id}`} className='resort-name-div'>
                                    <li  key={i}>
                                    <p>{r.name}</p>
                                    
                                    </li>
                                </NavLink>
                            </ul>
                            ))}
                        </div>
                        <div className="continent-resort">
                            <h2>South America</h2>
                            {saResort?.map((r, i) => (
                                <ul>
                                <NavLink to={`/resorts/${r.id}`} className='resort-name-div'>
                                    <li  key={i}>
                                    <p>{r.name}</p>
                                    </li>
                                </NavLink>
                            </ul>
                            ))}
                        </div>
                        <div className="continent-resort">
                            <h2>Oceania</h2>
                            {oceaniaResort?.map((r, i) => (
                                <ul>
                                <NavLink to={`/resorts/${r.id}`} className='resort-name-div'>
                                    <li  key={i}>
                                    <p>{r.name}</p>
                                    </li>
                                </NavLink>
                            </ul>
                            ))}
                        </div>
                        <div className="continent-resort">
                            <h2>Africa</h2>
                            {africaResort?.map((r, i) => (
                                <ul>
                                <NavLink to={`/resorts/${r.id}`} className='resort-name-div'>
                                    <li  key={i}>
                                    <p>{r.name}</p>
                                
                                    </li>
                                </NavLink>
                            </ul>
                            ))}
                        </div>
                        <div className="continent-resort">
                            <h2>Antarctica</h2>
                            {antarticaResort?.map((r, i) => (
                                <ul>
                                <NavLink to={`/resorts/${r.id}`} className='resort-name-div'>
                                    <li  key={i}>
                                    <p>{r.name}</p>
                                    
                                    </li>
                                </NavLink>
                            </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

/********************************************************************/

export default AllResorts;
