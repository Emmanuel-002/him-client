import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <Fragment>
      <CardGroup className="text-danger">
        <Card className="m-3 border-0 bg-light">
          <Card.Img
            variant="top"
            src="images/statistclogo.jfif"
            className="p-2 cardimage"
          />
          <Card.Body>
            <Card.Title>Statistics</Card.Title>
            <Card.Text>Statistical Data will be displayed here</Card.Text>
          </Card.Body>

          <Link
            to={'/statistics'}
            className="text-light text-decoration-none bg-info text-center p-2"
          >
            Go to statistics
          </Link>
        </Card>
        <Card className="m-3 border-0 bg-light">
          <Card.Img
            variant="top"
            src="images/populationlogo.jpg"
            className="p-2 cardimage"
          />
          <Card.Body>
            <Card.Title>Population</Card.Title>
            <Card.Text>Population data will be displayed here</Card.Text>
          </Card.Body>

          <Link
            to={'/population'}
            className="text-light text-decoration-none bg-info text-center p-2"
          >
            Go to population
          </Link>
        </Card>
      </CardGroup>
      <CardGroup className="text-danger">
        <Card className="m-3 border-0 bg-light">
          <Card.Img
            variant="top"
            src="images/refererlogo.png"
            className="p-2 cardimage"
          />
          <Card.Body>
            <Card.Title>Referrer</Card.Title>
            <Card.Text>Referrer Data will be displayed here</Card.Text>
          </Card.Body>

          <Link
            to={'/referrer'}
            className="text-light text-decoration-none bg-info text-center p-2"
          >
            Go to referrer
          </Link>
        </Card>
        <Card className="m-3 border-0 bg-light">
          <Card.Img
            variant="top"
            src="images/encounterlogo.jfif"
            className="p-2 cardimage"
          />
          <Card.Body>
            <Card.Title>Encounter</Card.Title>
            <Card.Text>Encounter Data will be displayed here</Card.Text>
          </Card.Body>
          <Link
            to={'/encounter'}
            className="text-light text-decoration-none bg-info text-center p-2"
          >
            Go to encounter
          </Link>
        </Card>
      </CardGroup>
    </Fragment>
  );
};

export default Cards;
