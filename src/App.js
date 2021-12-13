import React, { Component } from 'react'


const Nabvar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}


function Hello(props) {
  return <h2>{props.title}</h2>
}

const Saludo = (props) => {
  return <h3>{props.saludo}</h3>
}

class Text extends Component {
  render() {
    const textoSegunBool = this.props.isActivated ? 'Verdadero' : 'Falso'
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2)

    return (
      <div>
        <p>{this.props.arrayOfNumbers.join(', ')}</p>
        <p>{this.props.objectWithInfo.key}</p>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">
            <p>JimDev Copyright &copy; 2022</p>
          </span>
        </div>
      </footer>
    )
  }
}

const App = () => {

  return (
    <div>
      <Nabvar />


      <Hello title="React" />
      <Saludo saludo="Hola Mundo" />
      <Text
        arrayOfNumbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        objectWithInfo={{ key: 'First Value', key2: 'othervalue' }}
        text="Hola Mundo desde React" isActivated
        number={7}
      />

      <Footer />

    </div>
  )
}

export default App
