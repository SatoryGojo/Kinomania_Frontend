import FilmCardStyle from './FilmCard.module.css'
import { Link } from 'react-router-dom'


const FilmCard = (props) =>{
    return(
        <div>
            <h3><Link to={`filmlist/${props.id}`}>{props.title}</Link></h3>
        </div>
    )
}

export default FilmCard