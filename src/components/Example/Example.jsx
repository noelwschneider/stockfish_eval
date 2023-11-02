import axios from "axios"
import { useState } from "react"

function Example() {

    const [example, setExample] = useState('')

    // GET Route
    const getExample = () => {
        axios.get('/example')
        .then( response => {
            console.log('axios GET response.data', response.data)
            // setExample(response.data)
        })
        .catch( error => {
            console.log('error in client GET', error)
        })
    }
    getExample()

    return (<>
        <h1>Example component is on the DOM</h1>
        <h1>If you see numbers below this, GET from database is on the DOM</h1>
    </>)
}



export default Example