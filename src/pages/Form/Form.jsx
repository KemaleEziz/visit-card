import React, { useContext, useState, useRef, forwardRef } from "react";
//Assets
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Form.css";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { fields } from "../../components/constants";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Store from "../../components/context/store";
import Card2 from "../../components/Cards/Card2/Card2";
import Card3 from "../../components/Cards/Card3/Card3";
import Card1 from "../../components/Cards/Card1/Card1";
import { useFormik } from "formik";
import Print from "../../components/Print";
import { validationSchema } from "../../validation/Validation";
import { useNavigate } from "react-router-dom";
import { postDAta } from "../../service/login/post"
// import Carouselly from "../../components/Carouselly/Carouselly";
import Carouselly2 from "../../components/Carouselly2/Carouselly2";
import "animate.css";

function Form() {
  const {
    cardData,
    setCardData,
    selectedCard,
    setSelectedCard,
    setUploadFile,
    cards,
    chooseCard,
    setChooseCard,
    limitCardHolderName,
    setLimitCardHolderName,
  } = useContext(Store);
  const fileRef = useRef();
  const firstRef = useRef();
  const navigate = useNavigate();
  const frontComponentRef = useRef();
  const [cardList, setCardList] = useState([
    {
      projectName: "Card1",
      progectBgColor: "red",
    },
    {
      projectName: "Card2",
      progectBgColor: "blue",
    },
    {
      projectName: "Card3",
      progectBgColor: "yellow",
    },
  ]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      companyName: "",
      slogan: "",
      description: "",
      address: "",
      phoneNumber: "",
      email: "",
      website: "",
      title: "",
    },
    validate(values) {
      const errors = {};

      if (!values.email) {
        errors.email = "Email field is required!";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Email must be valid!";
      }

      return errors;
    },
    onSubmit: async (values) => {
      localStorage.setItem("dataKey", JSON.stringify(values));
      setCardData(values);
      navigate("/Alboms");
      const fileInput = fileRef.current;
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        setUploadFile(file);
      }
    },
    validationSchema: validationSchema,
  });

  const handleChange = (e) => {
    let id = e.target.value;
    setSelectedCard(id);
  };
  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  const handleImageClick = (value) => {
    setChooseCard(value);
  };
  // let data = formik.initialValues

  // postDAta(data);

  return (
    <>
     
      <Grid container className="visaPageBoxxxxx">
        <Grid item xs={11} md={6} className="left-box">
          <h1
            className="left-header"
            style={{ color: "#1e73e3", marginBottom: "20px" }}
          >
            Add your information
          </h1>
          <Box
            onSubmit={formik.handleSubmit}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0, display: "block" },
            }}
            noValidate
            autoComplete="off"
          >
            {fields.map((field, i) => (
              <TextField
                style={{
                  width: "100%",
                }}
                name={field.name}
                size={field.size}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                variant="standard"
                placeholder={field.placeholder}
                type={field.type}
                key={i}
                ref={firstRef}
                error={
                  formik.touched[field.name] &&
                  Boolean(formik.errors[field.name])
                }
                helperText={
                  formik.touched[field.name] && formik.errors[field.name]
                }
              />
            ))}

            <Box className="choose-file-input">
              <input type="file" name="logo" ref={fileRef} />
            </Box>
            <Button onClick={() => postDAta(formik?.values)} // ORxan code
              style={{ marginTop: "20px", marginBottom: "20px" }}
              size="small"
              id="choose-button"
              type="submit"
              variant="outlined"
              sx={{
                width: "290px",
                height: "35px",
                color: "#995D81",
                display: "block",
                borderRadius: "20px",
                fontWeight: "700",
                mt: 5,
                m: "auto",
                transition: ".3s linear",
                "&:hover": {
                  bgcolor: "#1e73e3",
                  color: "white",
                },
              }}
            >
              Generate Your Business card
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Form;
