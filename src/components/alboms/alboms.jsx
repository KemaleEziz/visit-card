 import { Box, Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import Store from "../context/store";
import Card1 from "../Cards/Card1/Card1";
import Card2 from "../Cards/Card2/Card2";
import Card3 from "../Cards/Card3/Card3";
import Print from "../Print";
import { useLocation } from "react-router-dom";
import "./albom.css";
import { useFormik } from "formik";
import { validationSchema } from "../../validation/Validation";
import { fields } from "../../components/constants";
//import Carouselly from '../Carouselly/Carouselly';
import Carouselly2 from '../Carouselly2/Carouselly2';

const Alboms = () => {
  const { state } = useLocation();
  const {
    cardData,
    setCardData,
    selectedCard,
    setSelectedCard,
    cards,
    fileDataURL,
    setFileDataURL,
    selectedFile,
    setSelectedFile,
    setFontSize,
    fontSize,
    flexDirection,
    setFlexDirection,
    setNameStatus,
    setName,
    setDisplay,
    setSlogan,
    chooseCard,

  } = useContext(Store);
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
  const handleChange = (e) => {
    let id = e.target.value;
    setSelectedCard(id);
  };

  const fileRef = useRef();
  const firstRef = useRef();

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
  const handleImageClick = (value) => {
    setChooseCard(value);
  };

  return (

    <Grid container item xs={11} md={6} className="visaPageBox">
    <Grid className="print-header-box">
      <Print
      className="print-box"
      ref={{ frontComponentRef }} />  
  </Grid>
      <Grid >
        <div>
        {/* <Carouselly onImageClick={handleImageClick} /> */}
        <Carouselly2 onImageClick={handleImageClick} />
      {console.log(chooseCard)}
      {chooseCard ==1 &&(
        <div >
          <Card1 card={cards[0]} cardData={cardData} />
        </div>
      )}
      {chooseCard ==2 &&(
        <div>
          <Card2 card={cards[1]} cardData={cardData} />
        </div>
      )}
      {chooseCard ==3 &&(
        <div>
          <Card3 card3={cards[2]} cardData={cardData} />
        </div>
      )}
        </div>
       
      </Grid>
    </Grid>
    // <Box className="alboms"   >
      // <Grid item xs={11} md={6} container className="right-box">
     
      // {/* <Grid className="upperVisaPageBox"> */}
       
      // </Grid>
      // </Grid>
    // </Box>
  );
};

export default Alboms;
