import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";


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
