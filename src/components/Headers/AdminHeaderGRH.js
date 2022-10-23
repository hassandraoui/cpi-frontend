import React from 'react'
import { Link } from 'react-router-dom'

function AdminHeaderGRH() {
    return (
        <div id="tabs">
        <ul>
            <li><Link to="/admin/grh/ListeFormateurs/"><span>Formateurs</span></Link></li>
            <li><Link to="/admin/grh/CreateFormateur/"><span>Créer formateur</span></Link></li>
            <li><Link to="/admin/grh/EditFormateur/"><span>Modifier formateur</span></Link></li>
            <li><Link to="/admin/grh/AddModulesToFormateur/"><span>Ajouter module à un formateur</span></Link></li>
            <li><Link to="/admin/grh/ListeModulesOfFormateur/"><span>Modules du formateur</span></Link></li>
            <li><Link to="/admin/grh/EmploiFormateur/"><span>Emploi du formateur</span></Link></li>
        </ul>
        </div>
    )
}

export default AdminHeaderGRH
