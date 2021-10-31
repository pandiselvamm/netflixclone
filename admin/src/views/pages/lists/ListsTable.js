import {
    Card,
    CardHeader,
    Container,
    Row,
    Badge,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown
} from "reactstrap";
import Header from "components/Headers/Header.js";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { dateFormat } from "helpers/dateFormat";


const ListsTable = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        axios.get(`/lists`)
            .then(res => {
                const users = res.data;
                setLists(users);
            })
    }, []);

    const columns = [
        {
            name: 'Name',
            selector: row => row.title,
        }, {
            name: 'Type',
            selector: row => <Badge color="info">{row.type}</Badge>,
        }, {
            name: 'Genre',
            selector: row => <Badge color="primary">{row.genre}</Badge>,
        }, {
            name: 'Created At',
            selector: row => dateFormat(row.createdAt, "Y-M-D"),
        }, {
            name: 'Action',
            cell: row => (
                <UncontrolledDropdown>
                    <DropdownToggle
                        className="btn-icon-only text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={(e) => e.preventDefault()}
                    >
                        <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            Action
                        </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            Another action
                        </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            Something else here
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            ),
            allowOverflow: true,
            button: true,
            width: '56px',
        },

    ];
    return (
        <>
            <Header />
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Lists Table</h3>
                            </CardHeader>
                            <DataTable
                                columns={columns}
                                data={lists}
                                pagination
                            />
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default ListsTable;
