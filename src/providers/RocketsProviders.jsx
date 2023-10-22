import { createContext, useEffect, useState } from "react";
export const RocketsContext = createContext(null);

// date filter
import moment from 'moment';

const RocketsProviders = ({ children }) => {
    const [rockets, setRockets] = useState([]);
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches")
            .then(res => res.json())
            .then(data => {
                setData(data)
                setRockets(data)
                setLoading(false)
            })

    }, []);

    //Handle Search Functionality
    const handleSearch = (searchKey) => {
        const searchResult = data.filter(item => item.mission_name.search(`${searchKey}`) !== -1)
        setRockets(searchResult);
    }

    // Handle Sort by Status
    const handleStatus = (status) => {
        if (status === "success") {
            const success = data.filter(rocket => rocket.launch_success == true)
            setRockets(success)
        } else if (status === "failed") {
            const failed = data.filter(rocket => rocket.launch_success == false)

            setRockets(failed)
        } else {
            setRockets(data)
        }
    }

    //Handle Upcoming only
    const handleUpcoming = (checked) => {
        if (checked) {
            const upcomingRocket = data.filter(item => item.upcoming === true);
            setRockets(upcomingRocket)
        } else {
            setRockets(data)
        }
    }

    // Sort by date
    const SortLaunches = (sortingKey) => {
        const lastWeekStart = moment().subtract(1, 'week').startOf('week');
        const lastWeekEnd = moment().subtract(1, 'week').endOf('week');

        const lastMonthStart = moment().subtract(1, 'month').startOf('month');
        const lastMonthEnd = moment().subtract(1, 'month').endOf('month');

        const lastYearStart = moment().subtract(1, 'year').startOf('year');
        const lastYearEnd = moment().subtract(1, 'year').endOf('year');

        if (sortingKey === "week") {
            const launchesLastWeek = data.filter(data => {
                moment(data.launch_date_utc).isBetween(lastWeekStart, lastWeekEnd, null, '[]');
            });
            
            setRockets(launchesLastWeek)

        } else if (sortingKey === "month") {
            const launchesLastMonth = data.filter(data => {
                moment(data.launch_date_utc).isBetween(lastMonthStart, lastMonthEnd, null, '[]');
            });
            
            setRockets(launchesLastMonth)

        } else if (sortingKey === "year") {
            const launchesLastYear = data.filter(data => {
                moment(data.launch_date_utc).isBetween(lastYearStart, lastYearEnd, null, '[]');
            });
            
            setRockets(launchesLastYear)
        }
    }



    //  Context Sharing Value
    const rocketsInfo = {
        rockets,
        loading,
        setRockets,
        handleStatus,
        handleSearch,
        handleUpcoming,
        SortLaunches
    }
    return (
        <RocketsContext.Provider value={rocketsInfo}>
            {children}
        </RocketsContext.Provider>
    );
};

export default RocketsProviders;