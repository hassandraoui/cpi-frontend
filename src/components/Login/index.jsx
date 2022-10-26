import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ matricule: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		console.log("Dans handleChange login")
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Dans handlesubmit login")
		try {
			const url = "http://192.168.80.129:3000/auth/login";
			console.log(data)
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("accessToken", res.accessToken);
			localStorage.setItem("refreshToken", res.refreshToken);
			window.location = "/Directeur";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<>
		        <div>
                    <nav id="main_nav" className="navbar navbar-expand-lg navbar-light bg-white shadow">
            <div className="container d-flex justify-content-between align-items-center">
                <a className="navbar-brand h1" href="/">
                    <i className='bx bx-pen bx-sm text-dark'></i>
                    <span className="text-dark h4">ISGI</span> <span className="text-primary h4">Laayoune</span>
                </a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler-success" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="navbar-toggler-success">
                    <div className="flex-fill mx-xl-5 mb-2">
                        <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/admin/emploi">Emplois</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/admin/module">Modules</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/admin/groupe">Groupes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/admin/filiere">Filières</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/admin/grh">GRH</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/admin/stat">Statistiques</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar align-self-center d-flex">
                        <a className="nav-link" href="https://google.com"><i className='bx bx-bell bx-sm bx-tada-hover text-primary'></i></a>
                        <a className="nav-link" href="https://facebook.com"><i className='bx bx-cog bx-sm text-primary'></i></a>
                        <a className="nav-link" href="https://youtube.com"><i className='bx bx-user-circle bx-sm text-primary'></i></a>
                    </div>
                </div>
            </div>
        </nav>


        </div>
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="text"
							placeholder="Matricule ou CIN"
							name="matricule"
							onChange={handleChange}
							value={data.matricule}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
</>
	);
};

export default Login;
