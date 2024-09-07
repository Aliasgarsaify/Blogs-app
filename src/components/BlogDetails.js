import React from "react";
import { NavLink } from "react-router-dom";

function BlogDetails({post}){
    console.log("in blog details",post);
    return (
        <div>

            <NavLink to={`/blog/${post.id}`}>
                <p className="font-bold text-md ">
                    {post.title}
                </p>
            </NavLink>

            <p className="text-[13px] mt-[8px]">
                By <span className="italic ">{post.author}</span> on

                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span className="underline font-bold"> {post.category} </span>
                </NavLink>
            </p>

            <p className="text-[13px]">Posted on {post.date}</p> 
            <p className="text-sm mt-[8px]">
                {post.content}
            </p>
                <div className="mt-[8px]">
                    {post.tags.map( (tag, index) => (
                    <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`} key={index}>
                        <span  className=" text-blue-500 underline bold text-[13px]">{`  #${tag}  `}</span>
                    </NavLink> ))}
                </div>     

        </div>

    )
}

export default BlogDetails;