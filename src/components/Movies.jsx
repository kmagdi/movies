import React from 'react'
import {useState } from 'react';
import {MyForm} from './MyForm';
import {MyCard} from './MyCard'
import {motion} from 'framer-motion'
import {useQuery} from 'react-query';

const url='https://api.themoviedb.org/3/search/movie?api_key=9cc1258c8b2f2e4d1d54c581ec774f91&language=hu&page=1&include_adult=false'

const fetchMovies = async ({queryKey}) => {
    const [_key, title] = queryKey
    const response= await fetch(`${url}&query=${title}`);
  return await response.json();
};

export const Movies=()=> {
    const [title,setTitle] = useState('Star Wars')
    const { data,status } = useQuery(["movies",title],fetchMovies);   

  return (
    <div className="container bg-light p-3">
        <motion.h1  initial={{ x: "0%" }}  animate={{ x: "calc(100vw - 70%)" }}>
            Filmek
        </motion.h1>
        <MyForm setTitle={setTitle}/>
        <div className="row justify-content-center mb-2">
          {status=="error" && <p>Error fetching data</p>}
          {status=="loading" && <p>Fetching data...</p>}
          {status=="success" && data.results?.map(movie=><MyCard key={movie.id} {...movie}/>)}
        </div>   
      </div>
  )
}
