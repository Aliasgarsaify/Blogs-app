import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

//1. creation of context
export const AppContext = createContext();

function AppContextProvider({children}){

    const[loading , setLoading] = useState(false);
    const[posts , setPosts] = useState([]);
    const[page , setPage] = useState(1);
    const[totalPage , setTotalPage] = useState(null);
    const navigate = useNavigate();

    // data filling
    async function fetchBlogPost(page = 1 , tag=null , category){
        setLoading(true);

        let url = `${baseUrl}?page=${page}`;

        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }

        try{
            const response = await fetch(url);
            const output = await response.json();
            setPage(output.page);
            setPosts(output.posts);
            setTotalPage(output.totalPages);
        }
        catch(error){
            console.log("error in fetching the data");
            setPage(1);
            setPosts([]);
            setTotalPage(null);
        }
        setLoading(false);
    }


    function handlePageChange(page){
        navigate({search:`?page=${page}`});
        setPage(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPage, 
        setTotalPage,
        handlePageChange,
        fetchBlogPost
    }


    //2. return
    return (<AppContext.Provider value = {value}>
                {children}
            </AppContext.Provider> );
}

export default AppContextProvider;
