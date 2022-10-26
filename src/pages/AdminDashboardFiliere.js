import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddModulesToFiliere from '../components/Filiere/AddModulesToFiliere'
import CreateFiliere from '../components/Filiere/CreateFiliere'
import EditFiliere from '../components/Filiere/EditFiliere'
import ListeFilieres from '../components/Filiere/ListeFilieres'
//import ListeGroupes from '../components/Groupe/ListeGroupes'
import AdminHeader from '../components/Headers/AdminHeader'
import AdminHeaderFilieres from '../components/Headers/AdminHeaderFilieres'
//import AdminHeaderModules from '../components/Headers/AdminHeaderModules'
//import ListeModules from '../components/Module/ListeModules'


function AdminDashboardFiliere() {
    return (
       <>
                <AdminHeader />
                <AdminHeaderFilieres />
                <Routes>
                    <Route  path="/" element={<ListeFilieres />} />
                    <Route  path="ListeFilieres" element={<ListeFilieres />} />
                    <Route  path="CreateFiliere" element={<CreateFiliere />} />
                    <Route  path="EditFiliere/:id" element={<EditFiliere />} />
                    <Route  path="AddModulesToFiliere/:id" element={<AddModulesToFiliere />} />
                </Routes>
       
       </>
    )
}

export default AdminDashboardFiliere
