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

  if (cardData?.firstName?.length > 12) {
    setFlexDirection(true);
  }
  if (cardData?.slogan?.length > 12) {
    setFlexDirection(true);
  }

  // if (card.secondCardContent.cardHolderNameBox.length > 8) {
  //   setLimitCardHolderName(true);
  // }
  // if (card?.firstCardContent?.description.length > 8) {
  //   setLimitCardHolderName(true);
  // }

  return (
    <Grid
      xs={11}
      md={6}
      className="cards"
      columns={{ xs: 1, sm: 2 }}
      container
      justifyContent="center"
    >
      <Grid className={card.firstCardContent.firstCardBlog}
       xs={11}
       md={6}
      >
        <img
          src={card.firstCardContent.backGroundImage}
          className={card.firstCardContent.firstCard}
        />
        <div
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
              <h2
                style={
                  cardData.companyName?.length > 12 
                    ? { fontSize: "13px" }
                    : { fontSize: fontSize + "px" } &&
                      cardData.companyName?.length > 20
                    ? { fontSize: "8px" }
                    : { fontSize: fontSize + "px" }
                }
              >
                {cardData.companyName
                  ? cardData.companyName
                  : card.firstCardContent.companyNameText}
              </h2>
              <p
                className={card.firstCardContent.companyNameSlogan}
                style={
                  cardData.slogan?.length > 12
                    ? { fontSize: "8px" }
                    : { fontSize: fontSize + "px" }
                }
              >
                {cardData.slogan
                  ? cardData.slogan
                  : cardData.slogan?.length == 0
                  ? ""
                  : card.firstCardContent.companyNameSloganText}
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className={card.firstCardContent.companyNameLoremText}>
          <p
            // className={card.firstCardContent.companyNameLoremText}
            style={
              cardData.description?.length > 22
                ? { fontSize: "8px" }
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
      <Grid item className={card.secondCardContent.secondCardBlog}
       xs={11}
       md={6}
      >
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
          <div className={card.secondCardContent.cardHolderNameBox}>
            <div
              className={card.secondCardContent.nameLastNameBox}
              style={{
                flexDirection:
                  cardData.firstName && cardData.firstName?.length > 11
                    ? "column"
                    : "row",
                //  ||  cardData.firstName?.length < 14
                // ? { fontSize: "1px" }
                // : { fontSize: fontSize + "px" }

                // &&  cardData.firstName?.length > 14
                // ? { fontSize: "2px" }
                // : { fontSize: fontSize + "px" }
              }}
            >
              <p
                className={card.secondCardContent.cardHolderName}
                style={
                  cardData.firstName?.length < 14
                    ? { fontSize: "11px" }
                    : { fontSize: fontSize + "px" } ||
                      cardData.firstName.length > 14
                    ? { fontSize: "11px" }
                    : { fontSize: fontSize + "px" }
                }
              >
                {cardData.firstName
                  ? cardData.firstName
                  : card.secondCardContent.cardHolderNameText}
              </p>

              <span
                className={card.secondCardContent.cardHolderSurNameText}
                style={
                  cardData.lastName?.length < 14
                    ? { fontSize: "11px", fontWeight: 700 }
                    : { fontSize: fontSize + "px" } &&
                      cardData.lastName?.length > 14
                    ? { fontSize: "11px", fontWeight: 700, display: "block" }
                    : { fontSize: fontSize + "px" }
                }
              >
                {cardData.lastName
                  ? cardData.lastName
                  : card.secondCardContent.cardHolderSurNameText}
              </span>
            </div>

            {/* </b> */}
            {/* <p className={card.secondCardContent.cardHolderMiddleName}
               style={
                cardData. middleName?.length < 14
                  ? { fontSize: "13px" }
                  : { fontSize: fontSize + "px" }

                  ||  cardData. middleName?.length > 14
                  ? { fontSize: "9px" }
                  : { fontSize: fontSize + "px" }

              }
              >
                {cardData.middleName
                  ? cardData.middleName
                  : cardData.middleName?.length > 10
                  ? ""
                  : card.secondCardContent.cardHolderMiddleNameText}
              </p> */}
            <p
              className={card.secondCardContent.cardHolderMiddleName}
              style={
                cardData.middleName?.length < 14
                  ? { fontSize: "13px" }
                  : { fontSize: fontSize + "px" } ||
                    cardData.middleName?.length > 14
                  ? { fontSize: "9px" }
                  : { fontSize: fontSize + "px" }
              }
            >
              {cardData.middleName
                ? cardData.middleName
                : cardData.middleName?.length > 10
                ? ""
                : card.secondCardContent.cardHolderMiddleNameText}
            </p>
            <p
              className={card.secondCardContent.cardHolderOccupation}
              style={
                cardData.title?.length < 19
                  ? { fontSize: "10px" }
                  : { fontSize: fontSize + "px" } || cardData.title?.length > 19
                  ? { fontSize: "7px" }
                  : { fontSize: fontSize + "px" }
              }
            >
              {cardData.title
                ? cardData.title
                : card.secondCardContent.cardHolderOccupationDescription}
            </p>
          </div>

          {/* </div> */}
        </div>
      </Grid>
    </Grid>
  );
};

export default VisitCard;
