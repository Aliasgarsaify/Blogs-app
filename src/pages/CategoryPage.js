import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";
import Header from "../components/Header";

function CategoryPage(){

    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div className="w-11/12 max-w-[550px] py-3 flex flex-col gap-y-7 mt-[50px] mb-[50px] justify-center items-center">
            <Header/>

            <div className="flex items-center gap-4">
                <button className="rounded-md border px-3 py-1"
                onClick={() => navigate(-1)}>
                    Back
                </button>

                <h2 >
                    Blogs on   <span  className="ml-2 text-blue-500 underline bold text-[13px]">#{category}</span>
                </h2>

            </div>

            <Blogs/>

            <Pagination/>

        </div>
    )
}

export default CategoryPage;