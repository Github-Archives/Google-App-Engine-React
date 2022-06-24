// import placeholderImage from './Media/placeholder.jpeg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={placeholderImage} alt="Logo" />
//         <p>
//           <h3>
//             Het is al geruime tijd een bekend gegeven dat een lezer, 
//             tijdens het bekijken van de layout van een pagina, afgeleid 
//             wordt door de tekstuele inhoud!!!
//         </h3>
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import "./App.css"


const axios = require("axios");

/**
 * Using the POST method provided by Axios.
 * The first parameter accepts the target URL.
 * The second parameter accepts an object consisting of multiple key-value-pairs.
 * In this example, we're using the second parameter to send the firstname, middlename, and lastname of the user.
 */
 axios
 .post("https://graphql.anilist.co", {
     firstname: "Tara",
     middlename: "Prasad",
     lastname: "Routray",
 })
 .then((response) => {
     /**
      * The 'then' method is executed only when the request is successfull.
      */
     console.log(response);
 })
 .catch((err) => {
     /**
      * The 'catch' method is executed only when the request fails to complete.
      */
     console.log(err);
 });



const GET_USERS = gql`
  {
    users {
      id
      login
      avatar_url
    }
  }
`

const User = ({ user: { login, avatar_url } }) => (
  <div className="Card">
    <div>
      <img alt="avatar" className="Card--avatar" src={avatar_url} />
      <h1 className="Card--name">{login}</h1>
    </div>
    <a href={`https://github.com/${login}`} className="Card--link">
      See profile
    </a>
  </div> 
)

function App() {
  const { loading, error, data } = useQuery(GET_USERS)

  if (error) return <h1>Something went wrong!</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <main className="App">
      <h1>Github | Users</h1>
      {data.users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </main>
  )
}

export default App
