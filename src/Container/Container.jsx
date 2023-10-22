import { useContext, useState } from "react";
import ReactPaginate from 'react-paginate';
import moment from 'moment';
import './Container.css'
import { RocketsContext } from "../providers/RocketsProviders";


const Container = () => {
    const { rockets, loading } = useContext(RocketsContext)

    // Pagination 
    const itemsPerPage = 9;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = rockets.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(rockets.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % rockets.length;
        setItemOffset(newOffset);
    }
    if (loading) {
        return <div className="flex h-[500px] justify-center items-center">
            <p className="text-7xl">Loading...</p>
        </div>
    }

    return (
        <>
            <div className="grid content-between grid-cols-1 gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {
                    currentItems.map(item => <div key={Math.random(10)} className="border-2 border-[#CED4DA] text-center rounded-md " >
                        <img className="mx-auto my-6 w-[124px] h-[124px]" src={item.links.mission_patch_small} alt="" />
                        <p className="text-[#66686b] mt-10"><samp>Launch Date: </samp>{moment(item.launch_date_utc).format("D MMM, YYYY")}</p>
                        <h1 className="text-lg font-semibold">{item.mission_name}</h1>
                        <p>{item.rocket.first_stage.rocket_name}</p>
                        <h1 className="px-24 mt-5 lg:px-36">Launch Status:</h1>
                        <div className="flex justify-center">
                            <p className={`mb-5 ${item.launch_success ? "bg-[#198754]" : 'bg-[#DC3545]'} px-2 py-1 mt-3 text-white`}>{item.launch_success ? "Success" : "Failed"}</p>

                        </div>
                    </div>)
                }
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={6}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousClassName="page-num"
                nextClassName="page-num"
                activeLinkClassName="active"
            />
        </>
    );
};

export default Container;