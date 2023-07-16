import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/news-categories')
            .then(response => response.json())
            .then((data) => {
                setCategories(data);
            })
    }, [])
    return (
        <div>
            <h4>Categories</h4>
            <div style={{'width':'100%','display':'flex','flexDirection':'column'}}>
                {/* {
                    categories &&
                    categories.map(({id , name})=>(
                        <>
                        <a href={`/${name}`}>{name}</a><br/>
                        </>
                        ))
                } */}

                {
                    categories.map(category => <span key={category.id} className='border' style={{'padding':'10px', 'backgroundColor':'whitesmoke'}}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </span>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;