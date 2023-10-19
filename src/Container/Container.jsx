import { useEffect, useState } from "react";

const Container = () => {
    const [rockets, setRockets] = useState([]);
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches")
        .then(res => res.json())
        .then(data => setRockets(data))
    },[])
    console.log(rockets);
    return (
        <div>
            {
                rockets.map(item => <div key={Math.random(10)}>
                    <img src={item.links.mission_patch_small} alt="" />
                    <p><samp>Lunch Date</samp>{item.launch_date_utc}</p>
                    <h1>{item.mission_name}</h1>
                    <p>{item.rocket.first_stage.rocket_name}</p>
                </div>)
            }
        </div>
    );
};

export default Container;