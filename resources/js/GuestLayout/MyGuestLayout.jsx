import React from 'react'
import NavBar from '@/Components/GuestComponents/NavBar'
import Footer from '@/Components/GuestComponents/footer'

const MyGuestLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default MyGuestLayout
