import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './App.css'

function App() {

  const [joke, setJoke] = useState()

  const getJoke = async () => {
    const response = await axios('https://api.chucknorris.io/jokes/random')
    console.log('joke', response.data)
    setJoke(response.data)
  }

  useEffect(() => {
    getJoke()
  }, []);

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>
                  {joke.value}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
