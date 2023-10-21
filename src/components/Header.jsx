import { FaSearch } from 'react-icons/fa';
//By Launch Status
const Header = () => {
    return (
        <div className="">
            <div className='mt-20 mb-16 md:text-center'>
                <h1 className="text-2xl sm:text-4xl">Spaceflight details</h1>
                <p>Find Out the elaborate features of all the past big spaceflights.</p>
            </div>
            <div className='flex justify-between'>
                <form className="flex items-center rounded-lg text-md ">
                    <input type="text" name="" id="" placeholder="Search..." className="w-24 bg-transparent border-[#CED4DA] border-2 text-lg focus:outline-none sm:w-64 h-[38px] px-2" />
                    <button className='bg-[#0D6EFD] text-white h-[38px] px-2' type="submit"><FaSearch className='text-lg text-white' /></button>
                </form>
                <div className='flex gap-6'>
                    <form>
                        <select id="cars" className="px-4 py-3 border-[#CED4DA] border-2 rounded-lg" name="category">
                            <option className="hidden" value="salad">By Launch Status</option>
                            <option className="" value="pizza">Pizza</option>
                            <option className="" value="soup">Soup</option>
                            <option className="" value="drinks">Drinks</option>
                            <option className="" value="dessert">Dessert</option>
                        </select>
                    </form>
                    <div>
                        <form>
                            <select id="cars" className="px-4 py-3 border-[#CED4DA] border-2 rounded-lg" name="category">
                                <option className="hidden" value="salad">By Launch Status</option>
                                <option className="" value="pizza">Pizza</option>
                                <option className="" value="soup">Soup</option>
                                <option className="" value="drinks">Drinks</option>
                                <option className="" value="dessert">Dessert</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;