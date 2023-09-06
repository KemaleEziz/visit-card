import React, { useContext, useEffect, useState } from "react";
//css
import "./Card3.css";
//assets
import CardFirst from "../../Cards/Card3/CardFirst.png";
import CardLogo from "../../Cards/Card3/CardLogo.svg";
import Store from "../../context/store";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { Grid } from "@mui/material";

const Card3 = ({ card3, cardData }) => {
  const {
    selectFile,
    fileDataURL,
    fontSize,
    nameStatus,
    uploadFile,
    setLimitCardHolderName,
    limitCardHolderName,
  } = useContext(Store);

  const addressIconStyleList3 = [
    { addressClass: "down-part-lorem223", iconClass: "fa-location-dot3" },
    { addressClass: "down-part-number23", iconClass: "fa-phone3" },
    { addressClass: "down-part-email23", iconClass: "fa-envelope3" },
    { addressClass: "down-part-website23", iconClass: "fa-arrow-pointer3" },
  ];
  if (card3.secondCardContent.cardHolderNameLastName.length > 8) {
    setLimitCardHolderName(true);
  }
  return (
    <Grid
      className="cards"
      columns={{ xs: 1, sm: 2 }}
      container
      justifyContent="center"
    >
      <Grid className={card3.firstCardContent.firstCardBlog}>
        <img
          style={{ width: "400px", height: "230px" }}
          src={card3.firstCardContent.backGroundImage}
          alt=""
        />
        <div className="text-general">
          <div>
            {uploadFile ? (
              <img
                // value={selectedFile}
                className={card3.firstCardContent.cardLogo}
                src={URL.createObjectURL(uploadFile)}
                alt=""
              />
            ) : (
              <img
                // value={selectedFile}
                className={card3.firstCardContent.cardLogo}
                src={CardLogo}
                alt=""
              />
            )}
          </div>

          <div>
            <h1
              className={card3.firstCardContent.companyName}
              style={
                cardData.companyName?.length > 12
                  ? { fontSize: "11px" }
                  : { fontSize: fontSize + "px" }
              }
            >
              {cardData.companyName
                ? cardData.companyName
                : card3.firstCardContent.companyNameText}
            </h1>
            <div>
              <h5 className={card3.firstCardContent.companyNameSlogan}>
                {cardData?.slogan
                  ? cardData?.slogan
                  : cardData.slogan?.length == 0
                  ? ""
                  : card3.firstCardContent.companyNameSloganText}
              </h5>
            </div>
          </div>

          <div>
            <p className={card3.firstCardContent.companyNameLorem}>
              {cardData.description
                ? cardData.description
                : cardData?.description?.length == 0
                ? ""
                : card3.firstCardContent.companyNameLoremText}
            </p>
          </div>
        </div>
      </Grid>
      <Grid className={card3.secondCardContent.secondCardBlog}>
        <img
          style={{ width: "400px", height: "230px" }}
          src={card3.secondCardContent.backGroundImage}
          alt=""
        />
        <div className="name-div">
          <div className={card3.secondCardContent.divClassName}>
            <div
              className={card3.secondCardContent.cardHolderNameLastName}
              //  style={{
              //   flexDirection: limitCardHolderName ? "column" : "row",
              // }}
            >
             
                <h2 className={card3.secondCardContent.cardHolderName}>
                  {cardData.firstName
                    ? cardData.firstName.slice(0,17)
                    : card3.secondCardContent.cardHolderNameText}
                </h2>
             
          
                <h2 className={card3.secondCardContent.cardHolderSurname}>
                  {cardData.lastName
                    ? cardData.lastName.slice(0,17)
                    : card3.secondCardContent.cardHolderSurnameText}
                </h2>
              
            </div>
          </div>
          <p className={card3.secondCardContent.cardHolderOccupation}>
            {cardData.title
              ? cardData.title
              : card3.secondCardContent.cardHolderOccupationText}
          </p>
        </div>

        {/* <div className="address-list"> */}
        <div className="info-box3">
          {card3.addressText.map((v, index) => {
            return (
              v.text != null && (
                <div key={v.id}>
                  <div key={v.id} className="icon-text3">
                    <div className={addressIconStyleList3[index].iconClass}>
                      {v?.icon}
                    </div>
                    <div className={addressIconStyleList3[index].addressClass}>
                      {v?.text}
                    </div>
                  </div>
                  <p style={{ display: "none" }}> {++index}</p>
                </div>
              )
            );
          })}
        </div>
        {/*            
          </div> */}
      </Grid>
    </Grid>
  );
};

export default Card3;
