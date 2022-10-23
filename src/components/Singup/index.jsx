import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		nom: "",
		prenom: "",
		matricule:"",
		email: "",
		role:"",
		password: ""
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		console.log("Dans handleChange Signup")
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		console.log("Dans handlesubmit signup")
		e.preventDefault();
		try {
			const url = "http://192.168.80.129:3000/users/createUser";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res);
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
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="prenom"
							onChange={handleChange}
							value={data.prenom}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="nom"
							onChange={handleChange}
							value={data.nom}
							required
							className={styles.input}
						/>
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
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Role"
							name="role"
							onChange={handleChange}
							value={data.role}
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
						<button type="submit"  className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
