import React from 'react'
import { Link } from 'react-router-dom'

function AdminHeaderStatistiques() {
    return (
        <div id="tabs">
        <ul>
            <li><Link to="/admin/stat/"><span>Salles</span></Link></li>
            <li><Link to="/admin/stat/ListeFormateurs"><span>Formateurs</span></Link></li>
            <li><Link to="/admin/stat/ListeGroupes"><span>Groupes</span></Link></li>
            <li><Link to="/admin/stat/ListeFilieres"><span>Filières</span></Link></li>
            <li><Link to="/admin/stat/ListeModules"><span>Modules</span></Link></li>
        </ul>
        </div>
    )
}

export default AdminHeaderStatistiques
