import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import  Spinner from './Spinner'
import BlogDetails from "./BlogDetails";

function Blogs(){
    // consume 
    const {posts, loading} = useContext(AppContext);

    return (
        <div className="w-11/12 max-w-[550px] py-3 flex flex-col gap-y-7 mt-[50px] mb-[50px] justify-center items-center">
            {
                loading ?
                ( <Spinner/> ) :

                ( posts.length === 0 ? 

                    (<div> <p>NO Post Found</p> </div>) :

                    ( posts.map( (post) => (
                        <BlogDetails key={post.id} post={post} />
                    )))
                )
            }
        </div>
    ) 
}

export default Blogs;