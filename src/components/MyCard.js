import React,{useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import FlipToBackIcon from '@mui/icons-material/FlipToBack';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';

export const MyCard = ({title,poster_path,overview,release_date}) => {
    const [isFlipped,setIsFlipped]=useState(false)

  return (
      <div  className="col-md-3 col-sm-6 col-12 text-center">
          <ReactCardFlip  isFlipped={isFlipped} flipDirection="vertical">
          <div className="card" >
            <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <FlipToBackIcon className="pointer" onClick={()=>setIsFlipped(!isFlipped)}/>
            </div>
        </div>

        <div isFlipped={isFlipped} >
            <h5 className="border-bottom ">{title}</h5>
            <div>{release_date}</div>
            <div>{overview}</div>
            <FlipToFrontIcon className="pointer" onClick={()=>setIsFlipped(!isFlipped)}/>
        </div>
      </ReactCardFlip>
    </div>
  )
}
