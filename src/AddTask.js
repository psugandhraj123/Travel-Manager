import Modal from "./Modal";
import { useState } from "react";
import "./addTask.css";
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Formik, Form } from "formik";
import InputField from "./form/InputField";
import Address from "./form/Address";
import axios from "axios";

function AddTask({ onClose, open }) {
  const [loading, setLoading] = useState(false);
  /* function to add new task to firestore */
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      await addDoc(collection(db, "tasks"), {
        ...values,
        created: Timestamp.now(),
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };
  return (
    <Modal modalLable="Add Details" onClose={onClose} open={open}>
      {loading && <p>Loading...</p>}
      <Formik
        initialValues={{ name: "", age: "", sex: "", address: "" }}
        onSubmit={handleSubmit}
      >
        {({ values, setValues }) => {
          return (
            <Form className="addTask" name="addTask">
              <InputField
                name="file"
                fieldProps={{
                  type: "file",
                  onChange: async (e) => {
                    setLoading(true);
                    const formData = new FormData();
                    formData.append("file", e.target.files[0]); // appending file
                    const res = await axios.post(
                      "https://psugandhraj-pdfextractor.herokuapp.com/upload",
                      formData
                    );
                    setValues({
                      ...values,
                      destination: res.data.location,
                      duration: `${res.data.startDate}-${res.data.endDate}`,
                    });
                    setLoading(false);
                  },
                }}
                label="Upload Pdf: "
              />
              <InputField
                name="name"
                label="Name"
                fieldProps={{ placeholder: "Enter Name" }}
              />
              <InputField
                name="age"
                label="Age"
                fieldProps={{ placeholder: "Enter Age" }}
              />
              <InputField
                name="sex"
                label="Sex"
                fieldProps={{ placeholder: "Enter Sex" }}
              />

              <Address name={"address"} label="Address: " />
              <InputField
                name="destination"
                label="Destination: "
                fieldProps={{ placeholder: "Enter Travel Destination" }}
              />
              <InputField
                name="duration"
                label="Duration: "
                fieldProps={{ placeholder: "Enter Travel Duration" }}
              />
              <button type="submit">Done</button>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
}

export default AddTask;
