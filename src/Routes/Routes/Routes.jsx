import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category";
import News from "../../Pages/News/News";


export const Routes = createBrowserRouter([
    {
        path: "/", element: <Main></Main>,
        children: [
            {
                path: "/",
                 element: <Home></Home>,
                 loader: ()=>fetch('http://localhost:8000/news')
            },
            {
                path: "/category/:id",
                 element: <Category></Category>,
                 loader:({params})=>fetch(`http://localhost:8000/category/${params.id}`)
            },
            {
                path: "/news/:id",
                 element: <News></News>,
                 loader: ({ params }) => fetch(`http://localhost:8000/news/${params.id}`)
            },

        ]
    },
])