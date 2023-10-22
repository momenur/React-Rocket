import { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RocketsContext } from '../providers/RocketsProviders';


const Header = () => {
    const { handleStatus, handleSearch, handleUpcoming, SortLaunches } = useContext(RocketsContext)

    // Handle Checkbox || Upcoming Rockets
    const [isChecked, setIsChecked] = useState(true);
    const handleCheckBox = () => {
        setIsChecked(!isChecked);
        handleUpcoming(isChecked);
    }

    // Handle Sort by Status
    const handleStatusInput = (event) => {
        event.preventDefault()
        const status = (event.target.value);
        console.log(status);
        handleStatus(status)

    }

    // Handle Search Functionality
    const handleSearchInput = (event) => {
        event.preventDefault();
        const searchKey = event.target.search.value;
        console.log(searchKey);
        handleSearch(searchKey)
    }

    // Handle Sort by Date
    const handleShortByDateInput = (event) => {
        event.preventDefault();
        const date = event.target.value;
        console.log(date);
        SortLaunches(date)
    }


    

    

    return (
        <div className="md:px-8 ps-5 sm:ps-0 lg:px-0">

            <div className='mt-20 mb-16 md:text-center'>
                <h1 className="text-2xl sm:text-4xl">Spaceflight details</h1>
                <p className='text-[#495057] mt-4'>Find Out the elaborate features of all the past big spaceflights.</p>
            </div>

            <form onChange={handleCheckBox} className='justify-end gap-2 mb-4 md:flex'>
                <input name='upcoming'
                    type="checkbox" id="vehicle1"
                    onChange={handleCheckBox} />
                <label> Show upcoming only</label>
            </form>

            <div className='justify-between md:flex '>
                <form onSubmit={handleSearchInput} className="flex items-center rounded-lg text-md ">
                    <input type="text" name="search" id="" placeholder="Search..." className="w-24 bg-transparent border-[#CED4DA] border-2 text-lg focus:outline-none sm:w-64 h-[38px] px-2" />
                    <button className='bg-[#0D6EFD] text-white h-[38px] px-2' type="submit"><FaSearch className='text-lg text-white' /></button>
                </form>

                <div className='gap-6 mt-6 md:mt-0 md:flex'>
                    <form onChange={handleStatusInput}>
                        <select id="cars" className="px-4 py-3 border-[#CED4DA] border-2 rounded-lg" name="category">
                            <option className="hidden" value="all">By Launch Status</option>
                            <option name='category' className="" value="all">All</option>
                            <option name='category' className="" value="success">Success</option>
                            <option className="" value="failed">Failed</option>
                        </select>
                    </form>

                    <div>
                        <form onChange={handleShortByDateInput} className='mt-6 md:mt-0'>
                            <select id="cars" className="px-4 py-3 border-[#CED4DA] border-2 rounded-lg" name="category">
                                <option className="hidden" value="all">By Launch Date</option>
                                <option className="" value="week">Last week</option>
                                <option className="" value="month">Last Month</option>
                                <option className="" value="year">Last Year</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;