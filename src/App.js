
import './App.css';
import { useEffect, useState } from 'react';
import {MyForm} from './components/MyForm';
import {MyCard} from './components/MyCard'
import {motion} from 'framer-motion'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies,setMovies]=useState([])
  const [query,setQuery] = useState('')

  const url='https://api.themoviedb.org/3/search/movie?api_key=9cc1258c8b2f2e4d1d54c581ec774f91&language=hu&page=1&include_adult=false'

  useEffect(()=>{
    if(query)
      fetchData()
  },[query])

  const fetchData=async ()=>{
    const response=await fetch(`${url}&query=${query}`)
    const data=await response.json()
    console.log(data)
    console.log(data.results)
    setMovies(data.results)
  }
        
  

  return (
    <div className="container bg-light p-3">
     <motion.h1  initial={{ x: "0%" }}  animate={{ x: "calc(100vw - 70%)" }}>
        Filmek
    </motion.h1>
    <MyForm setQuery={setQuery}/>
    <div className="row justify-content-center mb-2">
       {query && movies.filter(movies=>movies.poster_path).map(movie=><MyCard key={movie.id} {...movie}/>)}
    </div>
    
    </div>
  );
}

export default App;
