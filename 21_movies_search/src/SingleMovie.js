import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import useFetch from './useFetch'

const SingleMovie = () => {
  const { id } = useParams()

  //^ Implemented the below logic in useFetch custom hook
  /*  
  const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState({ show: false, msg: '' })
    const [movie, setMovie] = useState({})
    const fetchMovie = async (url) => {
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'False') {
        setError({ show: true, msg: data.Error })
      } else {
        setMovie(data)
      }
      setIsLoading(false)
    }
    useEffect(() => {
      fetchMovie(`${API_ENDPOINT}&i=${id}`)
    }, [id])
    */

  const { isLoading, error, data: movie } = useFetch(`${API_ENDPOINT}&i=${id}`)

  if (isLoading) {
    return <div className="loading"></div>
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    )
  }

  const { Poster: poster, Plot: plot, Year: year, Title: title } = movie

  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
