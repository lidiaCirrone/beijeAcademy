import React, { useEffect } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";

import {path} from '../routes/routes';

function Home() {
  //https://jsonplaceholder.typicode.com/posts

  const navigate = useNavigate();
  const params = useParams()
  const location = useLocation()

  const ApiPOst = () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json())
      .then((json) => {

        console.log(json);
      })
  }

  useEffect(() => {
    ApiPOst()
  }, [])

  console.log(params)
  console.log(location)

  return (
    <div>
      <p>
        HOME - List
      </p>
      {
        <button onClick={() => {
          navigate(
            path.detail(5),
            {
              state: {
                id: 5,
                name: 'roberto',
                cc: '5656 76483 92347 3847'
              }
            }
          );
        }
        }>
          Detail
        </button>
      }

      <button onClick={() => {
        navigate(
          "classScreen",
          {
            state: {
              id: 1,
              name: 'roberto'
            }
          }
        );
      }
      }>
        classScreen
      </button>
    </div>
  );
}

export default Home;
