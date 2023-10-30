import conf from './conf/conf';
import './App.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'
import { useEffect } from 'react';
import { login,logout } from './store/authSlice';
import {Header ,Footer} from './components/index'

function App() {
 const [loading, setLoading] = useState(true); 
 const dispatch = useDispatch();
 useEffect(()=>{
    authService.getUser()
    .then((userData)=>{
       if(userData){
        dispatch(login({userData}))
       }
       else{
        dispatch(logout());
       }
    })
    .finally(()=>setLoading(false));
 },[])
  return loading?(<div><h1>Loading...</h1></div>):(
    <div className='min-h-screen flex flex-wrap content-between bg-slate-300'>
      <div className='w-full block'>
        <Header/>
        <Footer/>
      </div>
        
    </div>
  )
}

export default App
