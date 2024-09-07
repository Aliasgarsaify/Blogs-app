import React from "react";
import Header from "../components/Header"
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

function Home(){
    return (
        <div className="flex flex-col w-screen justify-center items-center">
            <Header/>
            <Blogs/>
            <Pagination/>
        </div>
    )
}

export default Home;