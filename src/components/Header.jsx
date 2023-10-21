import { FaSearch } from 'react-icons/fa';


const Header = () => {
    return (
        <div className="md:px-4 ps-5 sm:ps-0 lg:px-0">
            <div className='mt-20 mb-16 md:text-center'>
                <h1 className="text-2xl sm:text-4xl">Spaceflight details</h1>
                <p className='text-[#495057] mt-4'>Find Out the elaborate features of all the past big spaceflights.</p>
            </div>
            <form className='justify-end gap-2 mb-4 md:flex'>
                <input type="checkbox" />
                <label> Show upcoming only</label>
            </form>
            <div className='justify-between md:flex '>
                <form className="flex items-center rounded-lg text-md ">
                    <input type="text" name="" id="" placeholder="Search..." className="w-24 bg-transparent border-[#CED4DA] border-2 text-lg focus:outline-none sm:w-64 h-[38px] px-2" />
                    <button className='bg-[#0D6EFD] text-white h-[38px] px-2' type="submit"><FaSearch className='text-lg text-white' /></button>
                </form>
                <div className='gap-6 mt-6 md:mt-0 md:flex'>
                    <form>
                        <select id="cars" className="px-4 py-3 border-[#CED4DA] border-2 rounded-lg" name="category">
                            <option className="hidden" value="salad">By Launch Status</option>
                            <option className="" value="success">Success</option>
                            <option className="" value="failed">Failed</option>
                        </select>
                    </form>
                    <div>
                        <form className='mt-6 md:mt-0'>
                            <select id="cars" className="px-4 py-3 border-[#CED4DA] border-2 rounded-lg" name="category">
                                <option className="hidden" value="salad">By Launch Status</option>
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