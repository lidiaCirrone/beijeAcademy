import React from 'react';
import { useNavigate, useParams, useLocation, Outlet, Link } from "react-router-dom";

function Cms() {

  const navigate = useNavigate();

  const params = useParams()
  const location = useLocation()

  console.log(params.id)
  console.log(location)

  return (
    <div>
      <p>
        Cms
      </p>
      <div>
        <button onClick={() => {
          navigate("profile");
        }
        }>
          profile
        </button>

        <Link to={'orders/5/roby'} state={{
          name: 'forbici'
        }}> orders </Link>

        <button onClick={() => {
          navigate("/");
        }
        }>
          home
        </button>
      </div>

      <Outlet />

    </div>
  );
}

export default Cms;
