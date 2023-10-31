import React from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/config'
import { logout } from '../../store/authSlice'
const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <div className="mb-3">
            <button type="submit" className="mb-1.5 block w-full text-center text-white bg-pink-500 hover-bg-pink-500 px-2 py-1.5 rounded-md">
                Add Product
            </button>
        </div>
    )
}

export default LogoutBtn