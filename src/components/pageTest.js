
const pageTest = () => {

<body>
<div class="container">
<nav id="main_nav" class="navbar navbar-expand-lg navbar-light bg-white shadow">
            <div class="container d-flex justify-content-between align-items-center">
                <a class="navbar-brand h1" href="#">
                    <i class='bx bx-pen bx-sm text-dark'></i>
                    <span class="text-dark h4">ISGI</span> <span class="text-primary h4">Laayoune</span>
                </a>
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler-success" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="navbar-toggler-success">
                    <div class="flex-fill mx-xl-5 mb-2">
                        <ul class="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
                            <li class="nav-item">
                                <a class="nav-link btn-outline-primary rounded-pill px-3" href="index.html">Emplois</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link btn-outline-primary rounded-pill px-3" href="#l">Modules</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link btn-outline-primary rounded-pill px-3" href="#">Groupes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link btn-outline-primary rounded-pill px-3" href="#">GRH</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link btn-outline-primary rounded-pill px-3" href="#">Statistiques</a>
                            </li>
                        </ul>
                    </div>
                    <div class="navbar align-self-center d-flex">
                        <a class="nav-link" href="https://google.com"><i class='bx bx-bell bx-sm bx-tada-hover text-primary'></i></a>
                        <a class="nav-link" href="https://facebook.com"><i class='bx bx-cog bx-sm text-primary'></i></a>
                        <a class="nav-link" href="https://youtube.com"><i class='bx bx-user-circle bx-sm text-primary'></i></a>
                    </div>
                </div>
            </div>
        </nav>

<div id="tabs">
  <ul>
    <li><a href="#"><span>Masses</span></a></li>
    <li><a href="#"><span>Affectations</span></a></li>
    <li><a href="#"><span>Emplois</span></a></li>
    <li><a href="#"><span>Congés</span></a></li>
    <li><a href="#"><span>Paiement</span></a></li>
    <li><a href="#"><span>Bilans de compétences</span></a></li>
    <li><a href="#"><span>Gérer formateurs</span></a></li>
    <li><a href="#"><span>Gérer vacataires</span></a></li>
  </ul>
</div>
<div class="bd-example">
<table  class="table">
    <thead>
      <tr class="table-warning">
        <th scope="col">Code Module</th>
        <th scope="col">Designation</th>
        <th scope="col">Masse horaire p</th>
        <th scope="col">Masse horaire d</th>
        <th scope="col">regional</th>
        <th scope="col">Affecté</th>
        <th scope="col">Ajouter</th>
      </tr>
    </thead>
    <tbody >


                    <tr class="table-success">
                        <th scope="row"> item.codeModule </th>
                        <td>item.designation</td>
                        <td>item.masseHoraireP</td>
                        <td>item.masseHoraireD</td>
                        <td>item.regional</td>
                        <td > item.affecte? "oui":"non" </td>
                        <td>
                            <button >Ajouter</button> 
                            </td>
                    </tr>  

             
    </tbody>
  </table>
  </div>
</div>
</body>
}

export default pageTest;