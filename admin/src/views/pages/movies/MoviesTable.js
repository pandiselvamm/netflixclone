import {
  Badge,
  Button,
  Card,
  CardHeader,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import Header from "components/Headers/Header.js";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { dateFormat } from "helpers/dateFormat";
import { Link } from "react-router-dom";


const MoviesTable = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`/movies`)
      .then(res => {
        const movies = res.data;
        setMovies(movies);
      })
  }, []);

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
    }, {
      name: 'Created AT',
      selector: row => dateFormat(row.createdAt, "Y-M-D"),
      sortable: true,
    }, {
      name: 'Genre',
      selector: row => <Badge color="info">{row.genre}</Badge>,
      sortable: true,
    }, {
      name: 'Age Limit',
      selector: row => <Badge color="dark" className="text-md">{row.limit}+</Badge>,
      sortable: true,
    }, {
      name: 'Year',
      selector: row => row.year,
      sortable: true,
    }
  ];
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col xl="6">
                    <h3 className="mb-0">Movies Table</h3>
                  </Col>
                  <Col xl="6" className="text-right">
                    <Link to="movie/create">
                      <Button
                        color="primary"
                        size="md"
                      >
                        Create
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </CardHeader>
              <DataTable
                columns={columns}
                data={movies}
                pagination
              />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default MoviesTable;
