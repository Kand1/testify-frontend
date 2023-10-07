import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import NoMatch from "./components/no-match/NoMatch";
import s from './App.module.css'

const App = () => {

    const [ isFetching, setIsFetching ] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const isUserAuthorized = false
    const isLoginPage = location.pathname === '/login'

    useEffect(() => {
        (async () => {
            setIsFetching(true)
            await new Promise((res) => setInterval(() => res(''), 1000))
            setIsFetching(false)
        })()
    }, [])

    if (isFetching) {
        return <div>loading...</div>
    }

    if (!(isUserAuthorized || isLoginPage)) {
        navigate('/login')
    }

    return (
        <div className={s.container}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    )
}

export default App
