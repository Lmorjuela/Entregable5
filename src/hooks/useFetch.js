import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

    const [infoApi, setInfoApi] =useState()
    const [hasError, setHasError] = useState(false)

    const getApi = () => {
        axios.get(url)
        .then(res => {
            setInfoApi(res.data)
            setHasError(false)
        })
        .catch(err=> {
            setHasError(true)
        })
    }
    return [infoApi, getApi, hasError, setInfoApi]
}

export default useFetch