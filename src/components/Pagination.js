import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination(){

    const{page, totalPage, handlePageChange} = useContext(AppContext);

    return (
        <div className="w-full flex justify-center fixed bottom-0 bg-white border-2 py-2">
            <div className="flex justify-between items-center w-11/12 max-w-[550px] ">
                <div className="flex gap-x-4">
                    { page > 1 &&
                    <button className="rounded-md border px-3 py-1"
                    onClick={() => handlePageChange(page-1)}>
                    Previous
                    </button>
                    }
                    { page < totalPage &&
                        <button className="rounded-md border px-3 py-1"
                        onClick={() => handlePageChange(page+1)}>
                            Next
                        </button>
                    }
                </div>
            
                <p className="text-sm font-bold"> Page {page} of {totalPage} </p>
   
            </div>
        </div>
    )
}

export default Pagination;