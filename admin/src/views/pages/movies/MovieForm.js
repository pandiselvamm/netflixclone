import React, { useEffect, useState } from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    Spinner,
} from "reactstrap";
import { Formik } from 'formik';
import { useHistory, useParams } from "react-router-dom";
import UserHeader from "components/Headers/UserHeader.js";
import axios from 'axios';
import makeToast from 'helpers/makeToast';
import * as Yup from 'yup';
import { storage } from "../../../firebase"

const movieCreateScheam = Yup.object().shape({
    title: Yup.string().required('Required'),
    desc: Yup.string().required('Required'),
    thumbnail: Yup.string().required('Required'),
    video: Yup.string().required('Required'),
    trailer: Yup.string().required('Required'),
    image: Yup.string().required('Required'),
    year: Yup.string().required('Required'),
});

const MovieForm = () => {
    const history = useHistory();
    const [movie, setMovie] = useState([]);
    const [uploaded, setUploaded] = useState(false);
    let { id } = useParams();
    useEffect(() => {
        if (id) {
            axios.get(`/movies/find/${id}`)
                .then(res => {
                    const movie = res.data;
                    setMovie(movie);
                })
        }
    }, []);

    useEffect(() => {
        if (uploaded === 4) {
            movie.isSeries = false;
            axios.post("/movies", movie).then(res => {
                makeToast("success", "Movie sucessfully created");
                history.push('/admin/movies');
            }).catch(err => {
                makeToast("error", err.response.data.message)
            })
        }
    }, [uploaded]);
    return (
        <>
            <UserHeader isNew={!id && true} />
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Movie Form</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={
                                        {
                                            title: '',
                                            desc: '',
                                            image: '',
                                            thumbnail: '',
                                            trailer: '',
                                            video: '',
                                            year: '',
                                            limit: '',
                                            genre: '',
                                            isSeries: false
                                        }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        let files = [
                                            { file: values.image, label: "image" },
                                            { file: values.thumbnail, label: "thumbnail" },
                                            { file: values.video, label: "video" },
                                            { file: values.trailer, label: "trailer" },
                                        ];
                                        let tempValues = values;
                                        files.forEach((item) => {
                                            const fileName = new Date().getTime() + item.label + item.file.name;
                                            const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
                                            uploadTask.on(
                                                "state_changed",
                                                (snapshot) => {
                                                    const progress =
                                                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                                    console.log("Upload is " + progress + "% done");
                                                },
                                                (error) => {
                                                    console.log(error);
                                                },
                                                () => {
                                                    uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                                                        tempValues[item.label] = url;
                                                        setMovie(tempValues);
                                                        setUploaded((prev) => prev + 1);
                                                    });
                                                }
                                            );
                                        });
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                        setFieldValue
                                    }) => (
                                        < Form encType="multipart/form-data" onSubmit={handleSubmit}>
                                            <div className="pl-lg-4">
                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup >
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-title"
                                                            >
                                                                Title<span className="text-danger ml-1">*</span>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-title"
                                                                placeholder="Title"
                                                                name="title"
                                                                type="text"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.title}
                                                            />
                                                            <p className="text-danger ml-2">{errors.title && touched.title && errors.title}</p>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-desc"
                                                            >
                                                                Description <span className="text-danger ml-1">*</span>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-desc"
                                                                placeholder="Description"
                                                                rows="3"
                                                                type="textarea"
                                                                name="desc"
                                                                resizable="false"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.desc}
                                                            />
                                                            <p className="text-danger ml-2">{errors.desc && touched.desc && errors.desc}</p>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup >
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-image"
                                                            >
                                                                Image<span className="text-danger ml-1">*</span>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-image"
                                                                placeholder="Image"
                                                                name="image"
                                                                type="file"
                                                                accept="image/png, image/gif, image/jpeg"
                                                                onChange={(event) => {
                                                                    setFieldValue("image", event.target.files[0]);
                                                                }}
                                                            />
                                                            <p className="text-danger ml-2">{errors.image && touched.image && errors.image}</p>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-thumb"
                                                            >
                                                                Thumbnail <span className="text-danger ml-1">*</span>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-thumbnail"
                                                                placeholder="Thumbnail"
                                                                type="file"
                                                                name="thumbnail"
                                                                accept="image/png, image/gif, image/jpeg"
                                                                onChange={(event) => {
                                                                    setFieldValue("thumbnail", event.target.files[0]);
                                                                }}
                                                            />
                                                            <p className="text-danger ml-2">{errors.thumbnail && touched.thumbnail && errors.thumbnail}</p>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup >
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-video"
                                                            >
                                                                Video<span className="text-danger ml-1">*</span>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-video"
                                                                placeholder="Video"
                                                                name="video"
                                                                type="file"
                                                                accept="video/mp4,video/x-m4v,video/*"
                                                                onChange={(event) => {
                                                                    setFieldValue("video", event.target.files[0]);
                                                                }}
                                                            />
                                                            <p className="text-danger ml-2">{errors.video && touched.video && errors.video}</p>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-trailer"
                                                            >
                                                                Trailer <span className="text-danger ml-1">*</span>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-trailer"
                                                                placeholder="Trailer"
                                                                type="file"
                                                                name="trailer"
                                                                accept="video/mp4,video/x-m4v,video/*"
                                                                onChange={(event) => {
                                                                    setFieldValue("trailer", event.target.files[0]);
                                                                }}
                                                            />
                                                            <p className="text-danger ml-2">{errors.trailer && touched.trailer && errors.trailer}</p>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup >
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-year"
                                                            >
                                                                Year<span className="text-danger ml-1">*</span>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-year"
                                                                placeholder="year"
                                                                name="year"
                                                                type="text"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.year}

                                                            />
                                                            <p className="text-danger ml-2">{errors.year && touched.year && errors.year}</p>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-limit"
                                                            >
                                                                Limit <span className="text-danger ml-1">*</span>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-limit"
                                                                placeholder="limit"
                                                                type="select"
                                                                name="limit"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.limit}
                                                            >
                                                                <option value="13">
                                                                    13+
                                                                </option>
                                                                <option value="16">
                                                                    16+
                                                                </option>
                                                                <option value="18">
                                                                    18+
                                                                </option>
                                                            </Input>
                                                            <p className="text-danger ml-2">{errors.limit && touched.limit && errors.limit}</p>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup >
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-genre"
                                                            >
                                                                Genre<span className="text-danger ml-1">*</span>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-genre"
                                                                placeholder="genre"
                                                                name="genre"
                                                                type="select"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.genre}
                                                            >
                                                                <option value="action">Action</option>
                                                                <option value="crime">Crime</option>
                                                                <option value="comedy">Comedy</option>
                                                                <option value="romance">Romance</option>
                                                                <option value="romance">Horror</option>
                                                            </Input>
                                                            <p className="text-danger ml-2">{errors.genre && touched.genre && errors.genre}</p>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-isSeries"
                                                            >
                                                                Is Series <span className="text-danger ml-1">*</span>
                                                            </label>
                                                            <br />
                                                            <label className="custom-toggle">
                                                                <input type="checkbox" name="isSeries"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.isSeries}
                                                                />
                                                                <span className="custom-toggle-slider rounded-circle" />
                                                            </label>
                                                            <p className="text-danger ml-2">{errors.isSeries && touched.isSeries && errors.isSeries}</p>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Button
                                                    color="info"
                                                    type="submit" disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? <Spinner animation="grow" variant="light" /> : "SUBMIT"}
                                                </Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MovieForm
