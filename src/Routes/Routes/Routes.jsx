import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category";
import News from "../../Pages/News/News";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
                 element: <PrivateRoute><News></News></PrivateRoute>,
                 loader: ({ params }) => fetch(`http://localhost:8000/news/${params.id}`)
            },
            {
                path:'/register',
                element:<Register></Register>
            },
{
                path:'/login',
                element:<Login></Login>
            },

        ]
    },
])