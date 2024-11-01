import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"

const DetailFilmPage = () =>{

    const [filmData, setFilmData] = useState([])
    const {id} = useParams()


    useEffect(() =>{

        axios.get(`http://127.0.0.1:8000/filmlist/${id}/`)
        .then((response) => (
            setFilmData(response.data[0])
        ))

    }, [])
    return(

        <div>
            <h2>{filmData.title}</h2>
            <h3>{filmData.director}</h3>
        </div>
    )
}

export default DetailFilmPage