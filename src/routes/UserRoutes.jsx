import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products'
import Users from '../pages/Users'
import Settings from '../pages/Settings'
import Components from '../pages/Components'

function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/components" element={<Components />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}

export default UserRoutes