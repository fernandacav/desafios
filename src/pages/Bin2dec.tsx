import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";

function Bin2dec() {
  const [binario, setBinario] = useState<string>("");
  const [decimal, setDecimal] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const conversorBin = () => {
    if (/^[01]{1,8}$/.test(binario)) {
      let numDecimal = binario
        .split("")
        .reverse()
        .map((item, index) => {
          return parseInt(item, 10) * Math.pow(2, index);
        })
        .reduce((acc, item) => {
          return acc + item;
        }, 0);
      console.log(numDecimal);
      setErrorMessage("");
      setDecimal(numDecimal);
    } else {
      setDecimal(0);
      setErrorMessage(
        "Por favor, insira uma sequência binária válida de até 8 dígitos (apenas 0's e 1's)."
      );
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "#ccc",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ marginTop: "60px", fontSize: "48px" }}>
        Converter Binário em Decimal
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "65vh",
        }}
      >
        <Typography>Insira a sequência binário</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{ my: 1, width: "200px" }}
            id="binario"
            name="binario"
            value={binario}
            onChange={(ev) => setBinario(ev.target.value)}
          ></TextField>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Button variant="contained" onClick={conversorBin}>
            Converter
          </Button>
          <Typography sx={{ marginTop: "20px", marginBottom: "10px" }}>
            Número decimal:
          </Typography>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ p: 1 }}>
              {" "}
              {decimal !== null && <h2>Decimal: {decimal}</h2>}
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default Bin2dec;
