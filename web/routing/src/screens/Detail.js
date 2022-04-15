import React from 'react';
import { useNavigate, useParams, useLocation, useSearchParams } from "react-router-dom";

const Detail = (props) => {

  const navigate = useNavigate();

  const params = useParams()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  let name = searchParams.get('name')
  let id = searchParams.get('id')

  console.log('params', params)
  console.log('location', location)
  console.log('searchParams', searchParams.get('id'))

  return (
    <div>
      <p>
        About
      </p>
      <button onClick={() => {
        navigate("/contact");
      }
      }>
        Contact
      </button>
      <button onClick={() => {
        navigate("/cms");
      }
      }>
        cms
      </button>
      <p>
        {
          params?.id
        }

        {
          // Controllo oggetto se esiste
          location?.state?.cc
        }

        {
          //location.state.name
        }
      </p>
    </div>
  );
}

export default Detail;
