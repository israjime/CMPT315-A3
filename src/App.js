import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import { CardList } from './components/cardList/cardlist.component';
import { SearchBar } from './components/searchbar/searchbar.component';
import { Message } from './components/message/message.component';
import { Card } from './components/card/card.component';

function App() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
    const response = await fetch("https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json");
    const data = await response.json();
    setEmails(data);
  };
  fetchUsers();
  }, [emails]);
  
  const [searchInput, setSearchInput] = useState("");
  const handleInput = e => {
    setSearchInput(e.target.value);
  };

  const [filteredEmails, setFilteredEmails] = useState([]);
  useEffect(() => {
    let filtered = [];
    if(searchInput===""){
      filtered = emails;
    }else{
      filtered = emails.filter(emails => emails.from.toLowerCase().includes(searchInput.toLowerCase()));
    }
    setFilteredEmails(filtered);
  }, [emails,searchInput]);

  const [click, setSelection] = useState("");
  const handleClick = e => {
    setMessage(e.target.value);
  };

  const [message, setMessage] = useState([]);
  useEffect(() => {
    let filtered = [];
    if(searchInput===""){
      filtered = emails;
    }else{
      filtered = emails.filter(emails => emails.from.toLowerCase().includes(searchInput.toLowerCase()));
    }
    setFilteredEmails(filtered);
  }, [emails,searchInput]);


  return (
    <div className="App">
    <h1><font size = '+3'> Email Viewer</font></h1>
    <tr>
    <td>
    <SearchBar 
      placeholder='Search Emails'
      handleInput={handleInput}>
    </SearchBar>
    <CardList emails={emails} />
    </td>
    <td> <Message emails={emails}/></td>
    </tr>
    </div>
  );
}
  


export default App;
