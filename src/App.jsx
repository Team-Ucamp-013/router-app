import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const pacientes = [
    {
      nombre: 'Fatima',
      edad: 25,
    },
    {
      nombre: 'Athziri',
      edad: 25,
    },
    {
      nombre: 'Antonio',
      edad: 29,
    },
    {
      nombre: 'Dany',
      edad: 25,
    },
    {
      nombre: 'Omar',
      edad: 23,
    },
    {
      nombre: 'Carlos',
      edad: 30,
    }
  ]

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <Container>
        <Row>
          {
            pacientes.map((item, index) => (
              <Col md={4}>
                <Card key={index} style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.edad}</Card.Subtitle>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default App
