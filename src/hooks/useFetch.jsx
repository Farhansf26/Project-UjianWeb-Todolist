import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null) 

  useEffect(() => {
    fetch(url)
    .then(res => {
      if(!res.ok){
        throw Error("Couldn't fetch the data")
      }
      return res.json()
    })
    .then((response) => {
      setData(response)
      setError(null)
      setIsLoading(false)
    })
    .catch((error) => {
      setError(error.message)
      setIsLoading(false)
    })
  }, [url, data])
  return {data, isLoading, error}
}

export default useFetch;
