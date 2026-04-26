import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Analytics from '../pages/Analytics'
import Reports from '../pages/Reports'
import Users from '../pages/Users'
import Settings from '../pages/Settings'

function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}

export default UserRoutes