import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./temp.css"

const TaskForm = (props) => {

    console.log(props);
    return (
        <div className="form-wrapper">
            <Formik>
                {() => (
                    <Form>
                        <div className="container-task">
                            <div className="row">
                                <h4>Zadanie</h4>
                                <div className="input-group">
                                    <Field type="text" name="fullName" placeholder="Tytuł" />
                                </div>
                                <div className="input-group">
                                    <Field type="email" name="email" placeholder="Pracownik" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-half">
                                    <h4>Termin wykonania</h4>
                                    <div className="input-group">
                                        <div className="col-third">
                                            <Field type="text" name="day" placeholder="DD" />
                                        </div>
                                        <div className="col-third">
                                            <Field type="text" name="month" placeholder="MM" />
                                        </div>
                                        <div className="col-third">
                                            <Field type="text" name="year" placeholder="YYYY" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-half">
                                    <h4>Godzina</h4>
                                    <div className="input-group">
                                        <div className="col-half">
                                            <Field type="time" name="time" placeholder="00:00" />
                                        </div>
                                        <div className="col-half">
                                            <button className="button">Dodaj</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default TaskForm;