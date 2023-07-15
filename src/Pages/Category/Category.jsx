import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h1 className='text-center'>Category</h1>
            {/* {
                [...news].map((item, index) =>
                    <>
                        <p key={index}>{item.title}</p><br />
                    </>)
            } */}
            {
                categoryNews.map(news => <NewsSummeryCard
                    key={news._id}
                    news={news}
                >

                </NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;