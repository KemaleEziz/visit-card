import React, { forwardRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Typography, Box, Grid, Button } from "@mui/material";

const Print = forwardRef((cards, ref) => {
  const generatePDF = async () => {
    const node = document.querySelector(".first-card-blog");
    const w = document.querySelector(".first-card-blog")?.offsetWidth;
    const h = document.querySelector(".first-card-blog")?.offsetHeight;
    const canvas = await html2canvas(node, { scale: 5 });
    const pdf = new jsPDF("l", "px", [w, h - 5], false);
    const imgData = canvas.toDataURL("image/jpeg");
    pdf.addImage(imgData, "JPEG", 0, 0, w, h);
    pdf.save("vcard.pdf");
  };
  const handlePrintBack = async () => {
    const node = document.querySelector(".second-card-blog");
    const w = document.querySelector(".second-card-blog")?.offsetWidth;
    const h = document.querySelector(".second-card-blog")?.offsetHeight;
    const canvas = await html2canvas(node, { scale: 5 });
    const pdf = new jsPDF("l", "px", [w, h - 5], false);
    const imgData = canvas.toDataURL("image/jpeg");
    pdf.addImage(imgData, "JPEG", 0, 0, w, h);
    pdf.save("vcard.pdf");
  };

  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        // position: "fixed",
        width: "100%",
        paddingBlock: "5px",
        flexDirection: "column",
      }}
    >
      <Grid item className="right-header">
        <Typography
          // className="print-header-text"
          component="h1"
          sx={{
            // color: "#c83e04",
            letterSpacing: "1px",
            fontWeight: "800",
            paddingBlock: "6px",
            marginBlock: "10px",
            "@media (max-width:600px)": {
              fontSize: 10,
            },
          }}
        >
          Choose business card template designed for you
        </Typography>
      </Grid>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        className="print-buttons"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <div>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              generatePDF();
            }}
            style={{
              color: "black",
              border: "none",
              borderRadius: "10px",
              zIndex: 999,
              
            }}
          >
            Print Front
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handlePrintBack()}
            style={{
              color: "black",
              border: "none",
              borderRadius: "10px",
              fontWeight: "500",
              zIndex: 999,
            }}
          >
            Print Back
          </Button>
        </div>
      </Grid>
    </Grid>
  );
});

export default Print;
