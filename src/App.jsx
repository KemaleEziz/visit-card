import "./App.css";
//card1
import FrontFoto from "./components/Cards/Card1/FrontFoto192.png";
import BackFoto from "./components/Cards/Card1/BackFoto192.png";
import Logo from "./components/Cards/Card1/logo1.svg";
import Logo2 from "./components/Cards/Card2/Logo.svg";
// card2
import FirstCard from "./components/Cards/Card2/FirstCard.png";
import SecondCard from "./components/Cards/Card2/SecondCard.png";
//card3
import Form from "./pages/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Store from "./components/context/store";
import { useState } from "react";
import {
  FaArrowPointer,
  FaEnvelope,
  FaFontAwesome,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import Card1 from "./components/Cards/Card1/Card1";
import Card2 from "./components/Cards/Card2/Card2";
import Card3 from "./components/Cards/Card3/Card3";
import Alboms from "./components/alboms/alboms";
import CardFirst from "./components/Cards/Card3/CardFirst.png";
import CardSecond from "./components/Cards/Card3/CardSecond.png";
import Update from "./pages/Update/Update";

function App() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [cardData, setCardData] = useState([]);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [fontSize, setFontSize] = useState(12);
  const [name, setName] = useState("");
  const [flexDirection, setFlexDirection] = useState();
  const [uploadFile, setUploadFile] = useState();
  const [chooseCard, setChooseCard] = useState(null);
  const [limitCardHolderName, setLimitCardHolderName] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState();

  const cards = [
    {
      firstCardContent: {
        firstCard: "first-card",
        backGroundImage: `../..${FrontFoto}`,
        companyName: "company-name3",
        companyNameStyle: "company-name-design",
        companyNameText: "Media",
        companyNameSlogan: "company-name-slogan",
        companyNameSloganText: "SLOGANHERE",
        companyNameLoremText: "lorem",
        companyNameLoremContext: "lorem ipsum dolor",
        cardDesign: "first-card-design",
        LogoContent: `../..${Logo2}`,
        cardLogo: "card-first-card-logo",
        LogoBox: "card-first-card-logo-box",
        companyNameLoremTextBox: "company-name-lorem-text-box1",
        firstCardBlog: "first-card-blog",
        companyNameSloganBox: "companyNameSloganBox",
      },
      secondCardContent: {
        secondCard: "second-card",
        backGroundImage: `../..${BackFoto}`,
        divClassName: "company-info",
        cardHolderOccupation: "span-text",
        cardHolderOccupationText: "occupation",
        cardHolderOccupationDescription: "Graphic Designer",
        informationBox: "information-box",
        iconGroup: "icon-group1",
        iconInformation: "icon-information1",
        cardHolderNameBox: "cardHolderNameBox",
        cardHolderName: "card-holder-name1",
        cardHolderNameText: `THOMAS`,
        cardHolderSurNameText: "SMITH",
        secondCardBlog: "second-card-blog",
        firstCardDataBox: "firstCardDataBox",
        nameLastNameBox: "nameLastNameBox",
        companyNameLoremTextBox1: "company-name-lorem-text-box1",
        cardHolderMiddleName: "cardHolderMiddleName",
        cardHolderMiddleNameText: "middleName",
      },
      addressText: [
        {
          id: 1,
          text: cardData.address
            ? cardData.address
            : cardData.address == ""
            ? null
            : "123 Dummy, Lorem Ipsum",
          icon: <FaLocationDot />,
        },
        {
          id: 2,
          text: cardData?.phoneNumber
            ? cardData?.phoneNumber
            : cardData.phoneNumber == ""
            ? null
            : "+00 1234 5XXX 9012",
          icon: <FaPhone />,
        },
        {
          id: 3,
          text: cardData.email
            ? cardData?.email
            : cardData.email == ""
            ? null
            : "info@email space",
          icon: <FaEnvelope />,
        },
        {
          id: 4,
          text: cardData.website
            ? cardData.website
            : cardData.website == ""
            ? null
            : "www.websiteaddress",
          icon: <FaArrowPointer />,
        },
      ],
      contentLimit: {
        companyNameLimit: 17,
      },
    },
    // card2

    {
      firstCardContent: {
        firstCard: "first-card2",
        backGroundImage: `../..${FirstCard}`,
        companyName: "company-name",
        companyNameText: "Design",
        companyNameSlogan: "slogan1",
        companyNameSloganText: "Tagline-space",
        companyNameLoremText: "down-part-lorem2",
        companyNameLoremTextContent: "Lorem Ipsum Dolor",
        companyNameLoremTextBox: "company-name-lorem-text-box",
        LogoContent2: `../..${Logo2}`,
        firstCardBlog: "first-card-blog",
        cardLogo: "card-logo",
      },

      secondCardContent: {
        secondCard: "second-card2",
        backGroundImage: `../..${SecondCard}`,
        DivclassName: "company-info",
        cardHolderName: "card-holder-name",
        cardHolderNameText: "MARK",
        cardHolderSurname: "card-holder-surname",
        cardHolderSurnameText: "Smith",
        cardHolderOccupation: "cofounder-p",
        cardHolderOccupationText: "Co-Founder Brand Name",
        flexClassName: "flex",
        foncticonClassName: "fonticon",
        secondCardBlog: "second-card-blog",
      },

      addressText: [
        {
          id: 1,
          text: cardData.address
            ? cardData.address
            : cardData.address == ""
            ? null
            : "123 Dummy, Lorem Ipsum",
          icon: <FaLocationDot />,
        },
        {
          id: 2,
          text: cardData?.phoneNumber
            ? cardData?.phoneNumber
            : cardData.phoneNumber == ""
            ? null
            : "+00 1234 5XXX 9012",
          icon: <FaPhone />,
        },
        {
          id: 3,
          text: cardData.email
            ? cardData?.email
            : cardData.email == ""
            ? null
            : "info@email space",
          icon: <FaEnvelope />,
        },
        {
          id: 4,
          text: cardData.website
            ? cardData.website
            : cardData.website == ""
            ? null
            : "www.websiteaddress",
          icon: <FaArrowPointer />,
        },
      ],
    },
    //card3

    {
      firstCardContent: {
        firstCardBlog: "first-card-blog",
        backGroundImage: `../..${CardFirst}`,
        companyName: "company-name",
        companyNameText: "Design",
        companyNameSlogan: "slogan",
        companyNameSloganText: "Tagline space",
        companyNameLorem: "lorem-text",
        companyNameLoremText: "Lorem Ipsum Dolor",
        cardLogo: "cardLogo",
        companyNameLoremTextBox1: "company-name-lorem-text-box1",
      },

      secondCardContent: {
        secondCardBlog: "second-card-blog",
        backGroundImage: `../..${CardSecond}`,
        divClassName: "name-class",
        cardHolderName: "card-holder-namee",
        cardHolderNameText: "MARK",
        cardHolderSurname: "card-holder-surnamee",
        cardHolderSurnameText: "Smith",
        cardHolderOccupation: "project-manager",
        cardHolderOccupationText: "Project Manager",
        flexClassName: "flex",
        cardHolderNameLastName: "cardHolderNameLastName",
      },

      addressText: [
        {
          id: 1,
          text: cardData.address
            ? cardData.address
            : cardData.address == ""
            ? null
            : "123 Dummy, Lorem Ipsum",
          icon: <FaLocationDot />,
        },

        {
          id: 2,
          text: cardData?.phoneNumber
            ? cardData?.phoneNumber
            : cardData.phoneNumber == ""
            ? null
            : "+00 1234 5XXX 9012",
          icon: <FaPhone />,
        },
        {
          id: 3,
          text: cardData.email
            ? cardData?.email
            : cardData.email == ""
            ? null
            : "info@email space",
          icon: <FaEnvelope />,
        },
        {
          id: 4,
          text: cardData.website
            ? cardData.website
            : cardData.website == ""
            ? null
            : "www.websiteaddress",
          icon: <FaArrowPointer />,
        },
      ],
    },
  ];

  return (
    <>
      <Store.Provider
        value={{
          flexDirection,
          setFlexDirection,
          name,
          setName,
          fontSize,
          setFontSize,
          selectedCard,
          setSelectedCard,
          fileDataURL,
          setFileDataURL,
          cards,
          cardData,
          setCardData,
          uploadFile,
          setUploadFile,
          chooseCard,
          setChooseCard,
          limitCardHolderName,
          setLimitCardHolderName,
          isEditing,
          setIsEditing,
          open, setOpen
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route
              path="/Alboms"
              element={<Alboms card={cards[selectedCard]} />}
            />
          </Routes>
        </BrowserRouter>
      </Store.Provider>
    </>
  );
}

export default App;
