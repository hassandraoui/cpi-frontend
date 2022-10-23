import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListeFilieres from '../components/Filiere/ListeFilieres'
import ListeFormateurs from '../components/Formateur/ListeFormateurs'
import ListeGroupes from '../components/Groupe/ListeGroupes'
import AdminHeader from '../components/Headers/AdminHeader'
import AdminHeaderStatistiques from '../components/Headers/AdminHeaderStatistiques'
import ListeSalles from '../components/Salle/ListeSalles'
import ListeModules from '../components/Module/ListeModules'

function adminDashboardStat() {
    return (
        <>
                <AdminHeader />
                <AdminHeaderStatistiques />
                <Routes>
                    <Route  path="/" element={<ListeSalles />} />
                    <Route  path="ListeFormateurs" exact element={<ListeFormateurs />}/>
                    <Route  path="ListeGroupes" exact element={<ListeGroupes />}/>
                    <Route  path="ListeFilieres" exact element={<ListeFilieres />}/>
                    <Route  path="ListeModules" exact element={<ListeModules />}/>
                </Routes>
        </>
    )
}

export default adminDashboardStat
