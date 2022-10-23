import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHeader from '../components/Headers/AdminHeader'
import AdminHeaderEmplois from '../components/Headers/AdminHeaderEmplois'
import ListeSalles from '../components/Salle/ListeSalles'
import EditSalle from '../components/Salle/EditSalle'
import EmploiSalle from '../components/Salle/EmploiSalle'
import CreateSalle from '../components/Salle/CreateSalle'

function AdminDashboardEmploi() {
    return (
       <>
                <AdminHeader />
                <AdminHeaderEmplois />
                <Routes>
                    <Route  path="/" element={<ListeSalles />} />
                    <Route  path="listeSalles" element={<ListeSalles />} />
                    <Route  path="CreateSalle" element={<CreateSalle />} />
                    <Route  path="EditSalle/:id" element={<EditSalle />} />
                    <Route  path="EmploiSalle/:id" element={<EmploiSalle />} />
                </Routes>
       
       </>
    )
}

export default AdminDashboardEmploi
