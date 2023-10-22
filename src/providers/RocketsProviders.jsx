import { createContext, useEffect, useState } from "react";
export const RocketsContext = createContext(null);

const RocketsProviders = ({children}) => {
    const [rockets, setRockets] = useState([]);
    const [loading, setLoading] = useState(true) 
    const [isChecked, setIsChecked] = useState(false);
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches")
            .then(res => res.json())
            .then(data => {
                setData(data)
                setRockets(data)
            })
            setLoading(false)
    },[]);

    //Handle Search Functionality
    const handleSearch = (searchKey) => {
        const searchResult = data.filter(item =>  item.mission_name.search(`${searchKey}`) !== -1)
        setRockets(searchResult);
    }

    // Handle Sort by Status
    const handleStatus = (status) => {
        if(status === "success"){
           const success = data.filter(rocket => rocket.launch_success == true)
            setRockets(success)
        }else if(status === "failed"){
            const failed = data.filter(rocket => rocket.launch_success == false)

            setRockets(failed)
        }else{
            setRockets(data)
        }
    }

    //  Context Sharing Value
    const rocketsInfo = {
        rockets,
        loading,
        setIsChecked,
        setRockets,
        isChecked,
        handleStatus,
        handleSearch
    }
    return (
        <RocketsContext.Provider value={rocketsInfo}>
            {children}
        </RocketsContext.Provider>
    );
};

export default RocketsProviders;