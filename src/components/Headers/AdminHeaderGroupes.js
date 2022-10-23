import React from 'react'
import { Link } from 'react-router-dom'

function AdminHeaderGroupes() {
    return (
        <div id="tabs">
        <ul>
            <li><Link to="ListeGroupes"><span>Groupes</span></Link></li>
            <li><Link to="/admin/groupe/CreateGroupe"><span>Créer groupe</span></Link></li>
            <li><Link to="/admin/groupe/EditGroupe/:id"><span>Modifier groupe</span></Link></li>
            <li><Link to="/admin/groupe/AddModuleToGroupe/:id"><span>Ajouter module à un groupe</span></Link></li>
            <li><Link to="/admin/groupe/EmploiGroupe/:id"><span>Emploi d'un groupe</span></Link></li>
        
        </ul>
        </div>
    )
}

export default AdminHeaderGroupes
