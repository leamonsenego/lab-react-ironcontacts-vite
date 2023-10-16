import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";


const contacts = [
  {
    "name": "Arnold Schwarzenegger",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/sOkCXc9xuSr6v7mdAq9LwEBje68.jpg",
    "popularity": 18.216362,
    "id": "4fe4d8ef-0fac-4bd9-8c02-ed89b668b2a9",
    "wonOscar": false,
    "wonEmmy": true
  },
  {
    "name": "Ben Affleck",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/cPuPt6mYJ83DjvO3hbjNGug6Fbi.jpg",
    "popularity": 9.157077,
    "id": "1599707e-5f49-4529-b920-db3831419b04",
    "wonOscar": true,
    "wonEmmy": false
  },
  {
    "name": "Idris Elba",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    "popularity": 11.622713,
    "id": "11731993-0604-4bee-80d5-67ad845d0a38",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Johnny Depp",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
    "popularity": 15.656534,
    "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Monica Bellucci",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
    "popularity": 16.096436,
    "id": "0ad5e441-3084-47a1-9e9b-b917539bba71",
    "wonOscar": false,
    "wonEmmy": false
  }
]


function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0,5))

  const randomContact = () => {
    const remainingContacts = contactsData.slice(5);
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    setContacts((prevState) => [remainingContacts[randomIndex], ... prevState])
  };

  // sort by popularity
  const handleSortPopularity = () => {
    const sortPopularity = [...contactsData].sort((a, b) => a.popularity - b.popularity)
    setContacts(sortPopularity)

  }
  // sort by name
  const handleSortName = () => {
    const sortName = [...contactsData].sort((a,b) => a.name - b.name)
    setContacts(sortName)
  }
  // delete contact
  const deleteContact = contactId => {
    const filteredContact = contactsData.filter(contact => {
      return contact.id !== contactId;
    });

    setContacts(filteredContact);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={randomContact}> Add Random Contact </button>
      <button onClick={handleSortPopularity}> Sort by popularity </button>
      <button onClick={handleSortName}> Sort by name </button>
      <table>
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {contacts.map(contact => (
          <tr key={contact._id}>
            <td> <img class={"contact-photo"} src={contact.pictureUrl} alt={contact.name}></img></td>
            <td> {contact.name}</td>
            <td> {Math.round(contact.popularity).toFixed(1)} </td>
            <td> {contact.wonOscar? <p> 🏆 </p> : <p> </p>}</td>
            <td> {contact.wonEmmy? <p> 🌟</p> : <p> </p>}</td>
            <td> <button onClick={() => deleteContact(contact.id)}> Delete </button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
