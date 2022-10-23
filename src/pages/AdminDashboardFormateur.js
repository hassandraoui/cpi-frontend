import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListeFormateurs from '../components/Formateur/ListeFormateurs'
import CreateFormateur from '../components/Formateur/CreateFormateur'
import EditFormateur from '../components/Formateur/EditFormateur'
import AddModulesToFormateur from '../components/Formateur/AddModulesToFormateur'
import ListeModulesOfFormateur from '../components/Formateur/ListeModulesOfFormateur'
import AdminHeader from '../components/Headers/AdminHeader'
import AdminHeaderGRH from '../components/Headers/AdminHeaderGRH'
import EmploiFormateur from '../components/Formateur/EmploiFormateur'


function AdminDashboardFormateur() {
    return (
       <>
                <AdminHeader />
                <AdminHeaderGRH />
                <Routes>
                    <Route  path="/" element={<ListeFormateurs />} />
                    <Route  path="ListeFormateurs" element={<ListeFormateurs />} />
                    <Route  path="CreateFormateur" element={<CreateFormateur />} />
                    <Route  path="EditFormateur/:id" element={<EditFormateur />} />
                    <Route  path="AddModulesToFormateur" element={<AddModulesToFormateur />} />
                    <Route  path="ListeModulesOfFormateur/:id" element={<ListeModulesOfFormateur />} />
                    <Route  path="EmploiFormateur/:id" element={<EmploiFormateur />} />
                </Routes>
       
       </>
    )
}

export default AdminDashboardFormateur
