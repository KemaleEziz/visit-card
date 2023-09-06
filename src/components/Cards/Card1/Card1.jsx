import React, { useContext, useState, useEffect } from "react";

// ASSETS
import "./Card1.css";
import Store from "../../context/store";
import Logo from "../../Cards/Card1/logo1.svg";
import { Grid } from "@mui/material";
// CUSTOM IMPORTS

const VisitCard = ({ card, animateCard1 }) => {
  const {
    cardData,
    fontSize,
    flexDirection,
    uploadFile,
    setFlexDirection,
    limitCardHolderName,
    setLimitCardHolderName,
  } = useContext(Store);

  const addressIconStyleList1 = [
    { addressClass: "down-part-lorem", iconClass: "fa-location1" },
    { addressClass: "down-part-number", iconClass: "fa-envelope1" },
    { addressClass: "down-part-email", iconClass: "fa-phone1" },
    { addressClass: "down-part-website", iconClass: "fa-arrow-pointer1" },
  ];

  if (cardData?.companyName?.length > 12) {
    setFlexDirection(true);
  }

  if (card.secondCardContent.cardHolderNameText.length > 8) {
    setLimitCardHolderName(true);
  }

  return (
    <Grid
      className="cards"
      columns={{ xs: 1, sm: 2 }}
      container
      justifyContent="center"
    >
   
      <Grid item className={card.firstCardContent?.firstCardBlog}>
        <img
          src={card.firstCardContent?.backGroundImage}
          className={card.firstCardContent?.firstCard}
        />
        <div
          // style={
          //   cardData.cardDesign?.length > "220px"
          //     ? { fontSize: "6px" } &&  { flexDirection: "column" }
          //     : { flexDirection: flexDirection ? "column" : "row" }
          // }
          className={card.firstCardContent.cardDesign}
          style={{ flexDirection: flexDirection ? "column" : "row" }}
        >
          <div className={card.firstCardContent.LogoBox}>
            {uploadFile ? (
              <img
              
                className={card.firstCardContent.cardLogo}
                src={URL.createObjectURL(uploadFile)}
                alt=""
              />
            ) : (
              <img
                
                className={card.firstCardContent.cardLogo}
                src={Logo}
                alt=""
              />
            )}
          </div>
          <div>
            <div className={card.firstCardContent.companyName}>
              <div>
                <h2
                  style={
                    cardData.companyName?.length > 12
                      ? { fontSize: "11px" }
                      : cardData.companyName?.length > 25
                      ? { fontSize: "7px" }
                      : { fontSize: fontSize + "px" }
                  }

                  // ?{fontSize:"13px",flexDirection:'column'}
                  // :{cardData.companyName?.length >= 25
                  // ?{fontSize:"10px"}
                  // :{fontSize:fontSize+'px'}}
                >
                  {cardData.companyName}
                  {cardData.companyName
                    ? cardData.companyName
                    : card.firstCardContent.companyNameText}
                </h2>
              </div>

              <div className={card.firstCardContent.companyNameSloganBox}>
                <p
                  className={card.firstCardContent.companyNameSlogan}
                  style={
                    cardData.companyNameSlogan?.length > 12
                      ? { fontSize: "22px" }
                      : { fontSize: fontSize + "px" }
                  }
                >
                  {cardData?.slogan
                    ? cardData?.slogan
                    : cardData.slogan?.length == 0
                    ? ""
                    : card.firstCardContent.companyNameSloganText}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={card.firstCardContent.companyNameLoremTextBox}>
          <p
            className={card.firstCardContent.companyNameLoremText}
            style={
              cardData.companyNameLoremText?.length > 12
                ? { fontSize: "4px" }
                : { fontSize: fontSize + "px" }
            }
          >
            {cardData.description
              ? cardData.description
              : cardData.description?.length == 0
              ? ""
              : card.firstCardContent.companyNameLoremContext}
          </p>
        </div>
      </Grid>

      {/* second card */}
      <Grid item className={card.secondCardContent.secondCardBlog}>
        <img
          src={card.secondCardContent.backGroundImage}
          className={card.secondCardContent.secondCard}
          alt=""
        />
        <div className={card.secondCardContent.firstCardDataBox}>
          <div className={card.secondCardContent.iconGroup}>
            {card.addressText.map((v, index) => {
              return (
                v.text != null && (
                  <div key={v.id}>
                    <div key={v.id} className="icon-text1">
                      <div className={addressIconStyleList1[index].iconClass}>
                        {v?.icon}
                      </div>
                      <div
                        className={addressIconStyleList1[index].addressClass}
                      >
                        {v.text}
                      </div>
                    </div>
                    <p style={{ display: "none" }}> {++index}</p>
                  </div>
                )
              );
            })}
          </div>
          <div
            className={card.secondCardContent.cardHolderNameBox}
            style={{
              flexDirection: limitCardHolderName ? "column" : "row",
            }}
          >
            <div className={card.secondCardContent.nameLastNameBox}>
              <p
                className={card.secondCardContent.cardHolderName}
                style={{ flexDirection: flexDirection ? "column" : "row" }}
              >
                {cardData.firstName
                  ? cardData.firstName
                  : cardData.firstName?.length > 10
                  ? ""
                  : card.secondCardContent.cardHolderNameText}
              </p>
              <b>
                {" "}
                <span className={card.secondCardContent.cardHolderSurNameText}>
                  {cardData.lastName
                    ? cardData.lastName
                    : card.secondCardContent.cardHolderSurNameText}
                </span>
              </b>
              <p className={card.secondCardContent.cardHolderMiddleName}>
              {cardData.middleName
                  ? cardData.middleName
                  : cardData.middleName?.length > 10
                  ? ""
                  : card.secondCardContent.cardHolderMiddleNameText}
              </p>
              <p
                className={card.secondCardContent.cardHolderOccupation}

                //  style={{
                //   cardData.cardHolderOccupation .length > 10
                //   ? {fontSize :'1px'}
                //   : {fontSize: fontSize + 'px'}
                // }}
              >
                {cardData.title
                  ? cardData.title
                  : card.secondCardContent.cardHolderOccupationDescription}
              </p>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default VisitCard;
