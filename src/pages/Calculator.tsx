import React, { useState } from "react";
import { Box, Button, Card, TextareaAutosize, Typography } from "@mui/material";

function Calculator() {
  const [csvText, setCsvText] = useState<string>("");
  const [jsonOutput, setJsonOutput] = useState<string>("");

  const handleConvert = () => {
    const lines = csvText.split("\n");
    const headers = lines[0].split(",");
    const jsonArray = [];
    console.log("headers", headers);
    for (let i = 1; i < lines.length; i++) {
      const currentLine = lines[i];
      if (currentLine === "") continue;
      const values = currentLine.split(",");
      const jsonObject: any = {};

      headers.forEach((header, index) => {
        jsonObject[header] = values[index]?.trim();
      });

      jsonArray.push(jsonObject);
    }
    console.log(jsonArray);
    setJsonOutput(JSON.stringify(jsonArray, null, 2));
  };
  return (
    <Box
      sx={{
        backgroundColor: "#afe0c0",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ marginTop: "60px", fontSize: "48px" }}>
        Converter CSV em JSON
      </Typography>
      <Box
        sx={{
          marginTop: 20,
          marginBottom: 8,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ mx: 10 }}>
          <TextareaAutosize
            minRows={8}
            value={csvText}
            onChange={(e) => setCsvText(e.target.value)}
          ></TextareaAutosize>
        </Box>
        <Card sx={{ width: "350px" }}>{jsonOutput}</Card>
      </Box>
      <Button onClick={handleConvert}>CSV em JSON</Button>
    </Box>
  );
}

export default Calculator;
