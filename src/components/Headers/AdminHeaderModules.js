import React from 'react'
import { Link } from 'react-router-dom'

function AdminHeaderModules() {
    return (
        <div id="tabs">
        <ul>
            <li><Link to="/admin/module/ListeModules"><span>Modules</span></Link></li>
            <li><Link to="/admin/module/CreateModule/"><span>Créer module</span></Link></li>
            <li><Link to="/admin/module/EditModule/:id"><span>Modifier module</span></Link></li>
        </ul>
        </div>
    )
}

export default AdminHeaderModules
