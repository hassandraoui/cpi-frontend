import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
//import Directeur1 from "./components/Directeur1";
//import Directeur2 from "./components/Directeur2";
import CreateFiliere from "./components/Filiere/CreateFiliere";
import CreateModule from "./components/Module/CreateModule";
import CreateGroupe from "./components/Groupe/CreateGroupe";
import ListeFilieres from "./components/Filiere/ListeFilieres";
import ListeGroupes from "./components/Groupe/ListeGroupes";
import ListeModules from "./components/Module/ListeModules";
import EditModule from "./components/Module/EditModule";
import EditFiliere from "./components/Filiere/EditFiliere";
import EditGroupe from "./components/Groupe/EditGroupe";
import AddModulesToFiliere from "./components/Filiere/AddModulesToFiliere";
import AddModulesToGroupe from "./components/Groupe/AddModulesToGroupe";
import CreateFormateur from "./components/Formateur/CreateFormateur";
import ListeFormateurs from "./components/Formateur/ListeFormateurs";
import EditFormateur from "./components/Formateur/EditFormateur";
import AddModulesToFormateur from "./components/Formateur/AddModulesToFormateur";
//import pageTest from "./components/pageTest";
import ListeModulesOfFormateur from "./components/Formateur/ListeModulesOfFormateur";
import CreateSalle from "./components/Salle/CreateSalle";
import ListeSalles from "./components/Salle/ListeSalles";
import EditSalle from "./components/Salle/EditSalle";
import EmploiSalle from "./components/Salle/EmploiSalle";
import EmploiFormateur from "./components/Formateur/EmploiFormateur";

import AdminDashboardStat from "./pages/adminDashboardStat";
import AdminHeader from "./components/Headers/AdminHeader";
import AdminDashboardEmploi from "./pages/AdminDashboardEmploi";
import AdminDashboardGroupe from "./pages/AdminDashboardGroupe";
import AdminDashboardModule from "./pages/AdminDashboardModule";
import AdminDashboardFormateur from "./pages/AdminDashboardFormateur";
import AdminDashboardFiliere from "./pages/AdminDashboardFiliere";

function App() {
	const accessToken = localStorage.getItem("accessToken");

	return (
		<BrowserRouter>
		<Routes>
			{accessToken && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />

			<Route path="/admin/" element={<AdminHeader />} />
			<Route path="/admin/filiere/*" element={<AdminDashboardFiliere />} />
			<Route path="/admin/stat/*" element={<AdminDashboardStat />} />
			<Route path="/admin/emploi/*" element={<AdminDashboardEmploi />} />
			<Route path="/admin/groupe/*" element={<AdminDashboardGroupe />} />
			<Route path="/admin/module/*" element={<AdminDashboardModule />} />
			<Route path="/admin/grh/*" element={<AdminDashboardFormateur />} />

			<Route path="/CreateFiliere" exact element={<CreateFiliere />} />
			<Route path="/ListeFilieres" exact element={<ListeFilieres />} />
			<Route path="/EditFiliere/:id" exact element={<EditFiliere />} />
			<Route path="/AddModulesToFiliere/:id" exact element={<AddModulesToFiliere />} />

			<Route path="/CreateModule" exact element={<CreateModule />} />
			<Route path="/ListeModules" exact element={<ListeModules />} />
			<Route path="/EditModule/:id" exact element={<EditModule />} />

			<Route path="/CreateGroupe" exact element={<CreateGroupe />} />
			<Route path="/ListeGroupes" exact element={<ListeGroupes />} />
			<Route path="/EditGroupe/:id" exact element={<EditGroupe />} />
			<Route path="/AddModulesToGroupe/:id" exact element={<AddModulesToGroupe />} />

			<Route path="/CreateFormateur" exact element={<CreateFormateur />} />
			<Route path="/ListeFormateurs" exact element={<ListeFormateurs />} />
			<Route path="/EditFormateur/:id" exact element={<EditFormateur />} />
			<Route path="/ListeModulesOfFormateur/:id" exact element={<ListeModulesOfFormateur />} />
			<Route path="/AddModulesToFormateur/" exact element={<AddModulesToFormateur />} />
			<Route path="/EmploiFormateur/:id" exact element={<EmploiFormateur />} />

			<Route path="/CreateSalle" exact element={<CreateSalle />} />
			<Route path="/ListeSalles" exact element={<ListeSalles />} />
			<Route path="/EditSalle/:id" exact element={<EditSalle />} />
			<Route path="/EmploiSalle/:id" exact element={<EmploiSalle />} />

			<Route path="/test" exact element={<pageTest />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
		</BrowserRouter>
	);
}

export default App;
