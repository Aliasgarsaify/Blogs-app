import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails";
import Header from "../components/Header";

function BlogPage(){

    const {loading, setLoading} = useContext(AppContext);
    const [blog , setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const blogId = location.pathname.split("/").at(-1);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blog";


    async function fetchRelatedBlogs(){

        setLoading(true);
        const url = `${newBaseUrl}?blogId=${blogId}`;

        try{
            const res = await fetch(url);
            const output = await res.json();
            setBlog(output.blog);
            setRelatedBlogs(output.relatedBlogs);
        }
        catch{
            console.log('error in fetchRelatedBlogs')
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);

    }

    useEffect( () => {
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname])


    return (
        <div className="w-11/12 max-w-[550px] py-3 flex flex-col gap-y-7 mt-[50px] mb-[50px] justify-center items-center">
            <Header/>
            <div >
                <button className="rounded-md border px-3 py-1"
                onClick={() => navigate(-1)}>
                    back
                </button>
            </div>
            {
                loading ? 
                <Spinner/> : 
                blog ?
                (<div>
                    <BlogDetails post={blog}/>
                    <h2 className="text-xl font-bold mt-8 mb-8"> Related Blogs</h2>
                    {
                        relatedBlogs.map( (post) => (
                            <div key={post.id} >
                            <BlogDetails post={post}/>
                            </div>
                
                        ))
                    }
                </div>) :

                (<div> No Blog Found </div>)
            }
        </div>
    )
}

export default BlogPage;