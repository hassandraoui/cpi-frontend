import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddModulesToGroupe from '../components/Groupe/AddModulesToGroupe'
import CreateGroupe from '../components/Groupe/CreateGroupe'
import EditGroupe from '../components/Groupe/EditGroupe'
import EmploiGroupe from '../components/Groupe/EmploiGroupe'
import ListeGroupes from '../components/Groupe/ListeGroupes'
import AdminHeader from '../components/Headers/AdminHeader'
import AdminHeaderGroupes from '../components/Headers/AdminHeaderGroupes'

function AdminDashboardGroupe() {
    return (
       <>
                <AdminHeader />
                <AdminHeaderGroupes />
                <Routes>
                    <Route  path="/" element={<ListeGroupes />} />
                    <Route  path="ListeGroupes" element={<ListeGroupes />} />
                    <Route  path="CreateGroupe" element={<CreateGroupe />} />
                    <Route  path="EditGroupe/:id" element={<EditGroupe />} />
                    <Route  path="AddModulesToGroupe/:id" element={<AddModulesToGroupe />} />
                    <Route  path="EmploiGroupe/:id" element={<EmploiGroupe />} />
                </Routes>
       
       </>
    )
}

export default AdminDashboardGroupe
