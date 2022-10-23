import React from 'react'
import { Link } from 'react-router-dom'

function AdminHeaderEmplois() {
    return (
        <div id="tabs">
        <ul>
            <li><Link to="/admin/emploi/ListeSalles"><span>Salles</span></Link></li>
            <li><Link to="/admin/emploi/CreateSalle"><span>Créer salle</span></Link></li>
            <li><Link to="/admin/emploi/EditSalle"><span>Modifier salle</span></Link></li>
            <li><Link to="/admin/emploi/EmploiSalle"><span>Emploi d'une salle</span></Link></li>
        </ul>
        </div>
    )
}

export default AdminHeaderEmplois
