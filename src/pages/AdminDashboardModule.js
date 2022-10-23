import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListeFilieres from '../components/Filiere/ListeFilieres'
import ListeGroupes from '../components/Groupe/ListeGroupes'
import AdminHeader from '../components/Headers/AdminHeader'
import AdminHeaderModules from '../components/Headers/AdminHeaderModules'
import ListeModules from '../components/Module/ListeModules'
import EditModule from '../components/Module/EditModule'
import CreateModule from '../components/Module/CreateModule'
import ListeModulesOfFormateur from '../components/Formateur/ListeModulesOfFormateur'
import AddModulesToFormateur from '../components/Formateur/AddModulesToFormateur'


function AdminDashboardModule() {
    return (
       <>
                <AdminHeader />
                <AdminHeaderModules />
                <Routes>
                    <Route  path="/" element={<ListeModules />} />
                    <Route  path="listeModules" element={<ListeModules />} />
                    <Route  path="CreateModule" element={<CreateModule />} />
                    <Route  path="EditModule/:id" element={<EditModule />} />
                    <Route  path="AddModulesToFormateur/:id" element={<AddModulesToFormateur />} />
                    <Route  path="ListeModulesOfFormateur/:id" element={<ListeModulesOfFormateur />} />
                </Routes>
       
       </>
    )
}

export default AdminDashboardModule
