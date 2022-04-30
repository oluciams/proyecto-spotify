import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { ListArtits } from './components/ListArtists';

function App() {

  const CLIENT_ID = "0abb21aa877949ef8016f59d0216a16d"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState('');

  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)
    
  }, []);

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "artist"
        }
    })
    console.log(data.artists.items)
    setArtists(data.artists.items)
  }

 
  
  return (
    <div className="container">      
      <h2 className="App">Spotify React</h2>

        {!token ?        
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
          : <button type="button" className="btn btn-secondary me-0" onClick={logout}>Logout</button>}

        {token ? 
          <form onSubmit={searchArtists}>
            <input type="text" onChange={e => setSearchKey(e.target.value)}/>
            <button className="btn btn-secondary" type={"submit"}>Search</button>
          </form> 
          : <h2>Please login</h2>
        }
      <section className="row row-cols-sm-2 row-cols-md-4">
        {artists.map(({id, images, name})=>  
          <ListArtits
            key={id}
            images={images}          
            nameArtist={name}
          />
          )
        }
      </section>
        
    </div>
  );
}
export default App;
