import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import moment from 'moment';
import './Container.css'


const Container = () => {
    const [rockets, setRockets] = useState([]);
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches")
            .then(res => res.json())
            .then(data => setRockets(data))
    }, [])

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

    return (
        <>
            <div className="grid content-between grid-cols-1 gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {
                    currentItems.map(item => <div key={Math.random(10)} className="border-2 border-[#CED4DA] text-center rounded-md " >
                        <img className="mx-auto my-6 w-[124px] h-[124px]" src={item.links.mission_patch_small} alt="" />
                        <p className="text-[#66686b] mt-10 px-20 lg:px-24"><samp>Launch Date: </samp>{moment(item.launch_date_utc).format("D MMM, YYYY")}</p>
                        <h1 className="text-lg font-semibold">{item.mission_name}</h1>
                        <p>{item.rocket.first_stage.rocket_name}</p>
                        <h1 className="mt-5">Launch Status:</h1>
                        <div className="flex justify-center">
                            <p className={`mb-5 ${item.launch_site.launch_success ? "bg-red-300" : 'bg-green-300'} px-2 py-1 mt-3`}>{item.launch_site.launch_success ? "False" : "Success"}</p>

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