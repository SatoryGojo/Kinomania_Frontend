import FilmCard from './FilmCard/FilmCard'
import HomeStyle from './Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () =>{

    const [cardsData, setCardData] =  useState([])

    useEffect(() => {

        axios.get('http://127.0.0.1:8000/filmlist').then((response) =>{
            setCardData(response.data)
        })

    }, [])
    console.log(cardsData)
    let unpacking = cardsData.map((el) => (<FilmCard title={el.title} id={el.id}/>))

    return(
        <div className={HomeStyle.card_container}>
            {unpacking}
        </div>
    )
}

export default Home