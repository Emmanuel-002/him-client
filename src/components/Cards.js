import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <Fragment>
      <Container>
        <CardGroup>
          <Card className="mt-3 border-0">
            <Link
              to={'/statistics'}
              className="text-dark text-decoration-none bg-light p-0"
            >
              <Card.Img
                variant="top"
                src="images/statistclogo.jfif"
                className="cardimage"
              />
              <Card.Body>
                <Card.Title>Statistics</Card.Title>
                <Card.Text>Statistical Data will be displayed here</Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card className="mt-3 border-0 bg-light">
            <Link
              to={'/population'}
              className="text-dark text-decoration-none bg-light p-0"
            >
              <Card.Img
                variant="top"
                src="images/populationlogo.jpg"
                className="cardimage"
              />
              <Card.Body>
                <Card.Title>Population</Card.Title>
                <Card.Text>Population data will be displayed here</Card.Text>
              </Card.Body>
            </Link>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="m-3 border-0 bg-light">
            <Link
              to={'/referrer'}
              className="text-dark text-decoration-none bg-light p-0"
            >
              <Card.Img
                variant="top"
                src="images/refererlogo.png"
                className="cardimage"
              />
              <Card.Body>
                <Card.Title>Referrer</Card.Title>
                <Card.Text>Referrer Data will be displayed here</Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card className="m-3 border-0 bg-light">
            <Link
              to={'/encounter'}
              className="text-dark text-decoration-none bg-light p-0"
            >
              <Card.Img
                variant="top"
                src="images/encounterlogo.jfif"
                className="cardimage"
              />
              <Card.Body>
                <Card.Title>Encounter</Card.Title>
                <Card.Text>Encounter Data will be displayed here</Card.Text>
              </Card.Body>
            </Link>
          </Card>
        </CardGroup>
      </Container>
    </Fragment>
  );
};

export default Cards;
