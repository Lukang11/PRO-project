import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Workcard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Tomek Wilczewski</Card.Title>
        <Card.Subtitle>12:30-13:45</Card.Subtitle>
        <Card.Text>
          Wymiana opon
        </Card.Text>
        <Button variant="primary">Zrobione</Button>
      </Card.Body>
    </Card>
  );
}

export default Workcard;