import React, { useContext } from "react";
//assets
import Logo from "../Card2/Logo.svg";
//css
import "./Card2.css";
import Store from "../../context/store";
import { Grid } from "@mui/material";

const Card2 = ({ card }) => {
  console.log("card", card);
  const { cardData } = useContext(Store);
  const {
    selectedFile,
    setSelectedFile,
    fileDataURL,
    setFileDataURL,
    uploadFile,
    fontSize,
    setFlexDirection,
    limitCardHolderName,
    setLimitCardHolderName,
    flexDirection
    
  } = useContext(Store);

  const addressIconStyleList = [
    { addressClass: "down-part-lorem22", iconClass: "fa-location-dot" },
    { addressClass: "down-part-number2", iconClass: "fa-phone" },
    { addressClass: "down-part-email2", iconClass: "fa-envelope" },
    { addressClass: "down-part-website2", iconClass: "fa-arrow-pointer" },
  ];

  if (cardData?.companyName?.length > 12) {
    setFlexDirection(true);
  }

  if (cardData?.cardHolderName?.length > 10) {
    setFlexDirection(true);
  }

  if (cardData?.firstName?.length > 8) {
    setFlexDirection(true);
  }
 let index = 0
  return (
    <Grid
      className="cards"
      columns={{ xs: 1, sm: 2 }}
      container
      justifyContent="center"
    >
      {/* first card */}
      <Grid className={card?.firstCardContent?.firstCardBlog}>
        <img
          src={card?.firstCardContent?.backGroundImage}
          className={card?.firstCardContent?.firstCard}
        />

        <div className="design-div">
          <div>
            {uploadFile ? (
              <img
                // value={selectedFile}
                className={card.firstCardContent?.cardLogo}
                src={URL.createObjectURL(uploadFile)}
                alt=""
              />
            ) : (
              <img
                // value={selectedFile}
                className={card?.firstCardContent?.cardLogo}
                src={Logo}
                alt=""
              />
            )}
          </div>
          <div  className={card?.firstCardContent?.companyName}>
            <h3
            style={
              cardData.companyName?.length > 12
                ? { fontSize: "11px" } : 
                cardData.companyName?.length > 24 ?
                 {fontSize: "5px"}
                : { fontSize: fontSize + "px" }
            }
           
            >
              {cardData.companyName
                ? cardData.companyName
                : card?.firstCardContent?.companyNameText}
            </h3>
          </div>
          <div>
            <p className={card?.firstCardContent?.companyNameSlogan}>
              {cardData?.slogan
                ? cardData?.slogan
                : cardData.slogan?.length == 0
                ? ""
                : card?.firstCardContent?.companyNameSloganText}
            </p>
          </div>
        </div>
        <div className={card?.firstCardContent?.companyNameLoremTextBox}>
          <p className={card?.firstCardContent?.companyNameLoremText}>
            {cardData.description
              ? cardData.description
              : cardData.description?.length == 0
              ? ""
              : card?.firstCardContent?.companyNameLoremTextContent}
          </p>
        </div>
      </Grid>

      {/* second card */}
      <Grid className={card?.secondCardContent.secondCardBlog}>
        <img
          src={card?.secondCardContent.backGroundImage}
          className={card?.secondCardContent.secondCard}
          alt=""
        />
        <div className="company-info">
          <div className={card?.secondCardContent?.flexClassName}
              style={{ flexDirection: flexDirection ? "column" : "row" }} 
          >

            <h2 className={card?.secondCardContent?.cardHolderName}
          //  style={{ flexDirection: flexDirection ? "column" : "row" }}
            >
              {cardData.firstName
                ? cardData.firstName.slice(0,17)
                : card?.secondCardContent.cardHolderNameText}
            </h2>
            <span className={card?.secondCardContent.cardHolderSurname}
            
            >
              {cardData.lastName
                ? cardData.lastName.slice(0,20)
                : card?.secondCardContent.cardHolderSurnameText}
            </span>
          </div>
          <p className={card?.secondCardContent.cardHolderOccupation}>
            {cardData.title
              ? cardData.title
              : card?.secondCardContent.cardHolderOccupationText}
          </p>
        </div>
        <div className="info-box2">
          {card?.addressText.map((v) => {
            return (
              v.text != null && (
                <div key={v.id}>
                  <div key={v.id} className="icon-text2">
                    <div className={addressIconStyleList[index]?.iconClass}>
                      {v?.icon}
                    </div>
                    <p className={addressIconStyleList[index].addressClass}>
                      {v?.text}
                    </p>
                  </div>
                  <p style={{ display: "none" }}> {++index}</p>
                </div>
              )
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default Card2;
