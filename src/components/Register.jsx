import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, setUser, updateUser, googleLogin } =
    useContext(AuthContext);

  const [nameError, setNameError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    // name  valeta
    if (name.length < 5) {
      setNameError("You must provide at least 5 characters");
      return;
    } else {
      setNameError("");
    }

    // password vali
    if (!/(?=.*[A-Z])/.test(password)) {
      return setError("Password must contain at least one uppercase letter.");
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return setError("Password must contain at least one lowercase letter.");
    }
    if (password.length < 6) {
      return setError("Password must be at least 6 characters long.");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

       toast.success("✅ Account Created Successfully!", { autoClose: 1200 });
        // Swal.fire({
        //   title: "✅ Account Created Successfully!",
        //   icon: "success",
        //   draggable: true,
        // });

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((err) => {
            const errm = err.message;
            setError(errm);
            setUser(user);
          });
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
        toast.error("This didn't work.")
      });
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
      // toast.success("🎉 Logged in with Google!");
        Swal.fire({
          title: "🎉 Logged in with Google Successfully!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Register now!
        </h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              required
              placeholder="Your name"
            />
            {nameError && <p className="text-red-600">{nameError}</p>}
            {/* photo */}
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input"
              required
              placeholder="photo URL"
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              required
              placeholder="your email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              required
              placeholder="Password"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button className="btn btn-neutral bg-green-600 hover:bg-green-700 mt-4">
              Register
            </button>
          </fieldset>
        </form>
        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="btn bg-pink-200 hover:bg-pink-300 text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p>
          If you have An Account ? Please{" "}
          <Link className="text-blue-700" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
