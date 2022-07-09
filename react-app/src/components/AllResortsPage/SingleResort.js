import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {getResort} from '../../store/resorts'
import './Resorts.css'

/***************************************************************************************/


function SingleResort() {

    const { resortId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [disable, setDisable] = useState(true);


    useEffect(() => {
        dispatch(getResort(resortId));
    }, [dispatch]);

    const resort = useSelector(state => state.resort)
    const user = useSelector((state) => state?.session.user);

    const images = resort?.resort_images;
  
    return (
        <>
            <div className="single-resort-main">
                <h1>
                    {resort?.name}
                </h1>
				<div className="imagesSpot">
					{images?.map((image, i) => {
						return (
							<img
								className="singleImageSpot"
								src={image.url}
								alt="image"
								key={i}
							/>
						);
					})}
				</div>
                <h2>Island: {resort.island}</h2>
                <h2>Country: {resort.country}</h2>
                <div className='resort-description'>
                    <h3>
                    {resort.description}
                    </h3>
                    <h3>Price: ${resort.price}/night</h3>
                </div>
                <div className="resort-amenities">
                    <h2>Amenities</h2>
                    {(resort?.minibar) && 
                    <p>Minibar</p>
                    }
                    {(resort?.gym) && 
                    <p>Fitness Center</p>
                    }
                    {(resort?.spa) && 
                    <p>Spa</p>
                    }
                    {(resort?.jacuzzi) && 
                    <p>Jacuzzi</p>
                    }
                    {(resort?.pool) && 
                    <p>Swimming Pool</p>
                    }
                    {(resort?.room_service) && 
                    <p>Room Service</p>
                    }
                    {(resort?.fire_place) && 
                    <p>Fire Place</p>
                    }
                    {(resort?.wifi) && 
                    <p>Wifi</p>
                    }
                    {(resort?.workspace) && 
                    <p>Personal Workspace</p>
                    }
                    {(resort?.water_sports) && 
                    <p>Water Activities</p>
                    }
                </div>
            </div>
        </>
    )
}



export default SingleResort