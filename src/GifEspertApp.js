import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifEspertApp = () => {

    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categorias, SetCategorias] = useState(['Dragon Ball']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { SetCategorias}/>
            <ol>
                { categorias.map( category => 
                    <GifGrid 
                        key={ category }
                        category={ category} 
                    />
                    ) 
                }
            </ol>
        </>
    )
}