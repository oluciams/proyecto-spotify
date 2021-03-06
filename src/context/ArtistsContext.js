import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const ArtistsContext = createContext();

export const ArtistsContextProvider = ({children})=>{

  const CLIENT_ID = "0abb21aa877949ef8016f59d0216a16d"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token" 

  const [token, setToken] = useState('');
  const [searchKey, setSearchKey] = useState('')

  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([]);

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState('');
  const [totalPages, setTotalPages] = useState(1);

  const [previous, setPrevious] = useState('');
  const [next, setNext] = useState('');

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
        
      setPages(data.artists)
      setArtists(data.artists.items)
      setNext(data.artists.next)  
      setPrevious(data.artists.previous)    
      numberPages(data.artists.total, data.artists.limit)
  } 

  const searchPagination = async (url) => {  
    const {data} = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {            
            type: "artist"
        }
    })
    setArtists(data.artists.items)
    setNext(data.artists.next)
    setPrevious(data.artists.previous) 
  }   

  const searchAlbums = async (id) => {   

    const {data} = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
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

  const numberPages = (total, limit)=>{

    let totalPages = parseInt((total/limit))    
    const remainder = (total%limit)
    
    if(remainder !== 0){
      totalPages = totalPages + 1 
    } 
    setTotalPages(totalPages)
  }


  const onChangePage = (num) =>{    

    if(!artists.previous && page + num <= 0) return;
    if(!artists.next && page + num > totalPages) return;       

    setPage(page + num);
    if (num === -1){
      searchPagination(previous)
    } else {
      searchPagination(next)
    }
  } 

  const value ={
    CLIENT_ID,
    REDIRECT_URI,
    AUTH_ENDPOINT, 
    RESPONSE_TYPE,
    token,
    searchKey,
    setSearchKey,
    albums,
    artists,
    page,
    pages,
    totalPages,
    logout, 
    searchArtists,
    searchAlbums,
    onChangePage  
  }

  return(
    <ArtistsContext.Provider value={value}>
      {children}
    </ArtistsContext.Provider>

  )
}