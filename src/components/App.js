import React, {useEffect, useState} from 'react'

const App = () => {

    const [dogImage, setDogImage] = useState(null)
    
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => setDogImage(data.message))
    }, [])

    return (
        <div>
            {!dogImage ? <p>Loading...</p> : null}
            <img src={dogImage} alt="A Random Dog"></img>
        </div>
    )
}

export default App
