import React from 'react'
import { Link } from 'react-router-dom'

function AdminHeaderFilieres() {
    return (
        <div id="tabs">
        <ul>
            <li><Link to="/admin/filiere/ListeFilieres"><span>Filières</span></Link></li>
            <li><Link to="/admin/filiere/CreateFiliere"><span>Créer filière</span></Link></li>
            <li><Link to="/admin/filiere/EditFiliere/:id"><span>Modifier filière</span></Link></li>
            <li><Link to="/admin/filiere/AddModuleToFiliere/:id"><span>Ajouter module à une filière</span></Link></li>
        </ul>
        </div>
    )
}

export default AdminHeaderFilieres
