import React, { useState } from 'react';
import Posts from "../components/Posts";
import Form from "../components/Form";

const Home = ({ user }) => {
      const [currentId, setCurrentId] = useState(0);

      return (
            <div className="home">
                  <Posts user={user} currentId={currentId} setCurrentId={setCurrentId} />
                  <Form user={user} currentId={currentId} setCurrentId={setCurrentId} />
            </div>
      )
}

export default Home