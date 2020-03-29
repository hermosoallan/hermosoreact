import React from 'react';

function ComponenteFuncional() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

class App extends React.Component{
  
  state = {
    nome: "Allan Hermoso"
  }
  
  render(){
    return(
    <h1>TESTANDO {this.state.nome}</h1>
    )
  }
}

export default App;
