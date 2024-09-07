import React, { useContext , useEffect } from "react";
import "./App.css";
import { Routes ,Route, useSearchParams, useLocation } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";


function App() {

  const {fetchBlogPost} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect( () => {
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      // iska mtlb tag wala page show karo
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPost(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPost(Number(page), category);
    }
    else{ 
      fetchBlogPost(Number(page));
    }


  },[location.pathname, location.search]);

 

  return (

    <div className="flex flex-col w-screen justify-center items-center">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog/:blogId" element={<BlogPage/>}></Route>
        <Route path="/tags/:tag" element={<TagPage/>}></Route>
        <Route path="/categories/:category" element={<CategoryPage/>}></Route>
      </Routes>
    </div>


    );
}

export default App;
