import React from 'react';  
function Food({ fav}) {
  return <div>I love { fav}</div>
}

function App() {
  return (
    <div>
      <h1>hello!</h1>
      <Food fav="kimchi"/>
      <Food fav="라면"/>
      <Food fav="만두"/>
      <Food fav="스파게티"/>
       
    </div>
  );
}

export default App;
