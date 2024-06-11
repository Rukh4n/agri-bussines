import React from 'react'
import NavBar from '@/Components/GuestComponents/NavBar'

const MyGuestLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div>
                {children}
            </div>
        </>
    )
}

export default MyGuestLayout
