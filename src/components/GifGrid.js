import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridIte } from './GifGridIte';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );
    return(
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid ">
                    {
                        images.map( img => (
                            <GifGridIte 
                                key={ img.id }
                                {...img}
                            />
                        ))
                    }
            </div>
        </>
    )
}