import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { ListArtits } from './components/ListArtists';
import { Header } from './components/Header';
import { Link } from 'react-router-dom';


function App() {

  const CLIENT_ID = "0abb21aa877949ef8016f59d0216a16d"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState('');

  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([]);

  const [page, setPage] = useState(1);

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

  const searchAlbums = async () => {    
    const {data} = await axios.get("https://api.spotify.com/v1/artists/1JbemQ1fPt2YmSLjAFhPBv/albums", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            include_groups:"album"    
        }
    })
   
    console.log(data.items)
    setAlbums(data.items)
  } 

  const onChangePage = (next) =>{
   
    if(!artists.previus && page + next <= 0) return;
    if(!artists.next && page + next >= 3) return; 

    setPage(page + next);
  }

  
  return (
    <>
      <Header
      token={token}
      AUTH_ENDPOINT={AUTH_ENDPOINT}
      CLIENT_ID={CLIENT_ID}
      REDIRECT_URI={REDIRECT_URI}
      RESPONSE_TYPE={RESPONSE_TYPE}
      logout={logout}
      />      
          
      <div className="container">

        <section className="col-4 mt-3">                
          <form className="d-flex" onSubmit={searchArtists}>         
            <input className="form-control me-2" type="search" onChange={e => setSearchKey(e.target.value)} placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-secondary" type="submit">Search</button>
          </form>  
        </section> 

        <h2 className="App">Your Results</h2> 
        
        <section className="row justify-content-sm center row-cols-auto">
          {artists.map(({id, images, name, followers})=>  
            <ListArtits
              key={id}
              id={id}
              images={images}          
              nameArtist={name}
              followers={followers}
              searchAlbums={searchAlbums}
              albums={albums}   
            />
            )
          }
          <Link></Link>
        </section>

        <footer className="mt-3 mb-3">
          <button type="button" className="btn btn-secondary btn-lg me-3" onClick={()=> onChangePage(-1)}>Prev</button>  | {page}  |  
          <button type="button" className="btn btn-secondary btn-lg ms-3" onClick={()=> onChangePage(1)}>Next</button>
        </footer>      
      </div>     
    </>
  );
}
export default App;
