import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Component/Header';

function Shared() {
    return (
        <>
            <Header />
            <Outlet />

        </>
    )
}

export default Shared