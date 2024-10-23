import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";

function BorderRadius() {
  const [topLeft, setTopLeft] = useState<number>(0);
  const [topRight, setTopRight] = useState<number>(0);
  const [bottomLeft, setBottomLeft] = useState<number>(0);
  const [bottomRight, setBottomRight] = useState<number>(0);

  return (
    <Box
      sx={{
        backgroundColor: "#7a7a7a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ my: "60px", fontSize: "48px" }}>
        Border Radius{" "}
      </Typography>

      <Box sx={{ display: "flex" }}>
        <TextField
          sx={{ left: "80px", width: "100px" }}
          value={topLeft}
          onChange={(ev) => setTopLeft(parseInt(ev.target.value))}
          type="number"
        ></TextField>
        <TextField
          sx={{ alignSelf: "end", right: "20px", width: "100px" }}
          value={bottomLeft}
          onChange={(ev) => setBottomLeft(parseInt(ev.target.value))}
          type="number"
        ></TextField>
        <div
          style={{
            border: "5px solid #000000",
            height: "300px",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e0e0e0",
            borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
          }}
        >
          <Typography>Teste</Typography>
        </div>

        <TextField
          value={topRight}
          onChange={(ev) => setTopRight(parseInt(ev.target.value))}
          sx={{ left: "20px", width: "100px" }}
        ></TextField>
        <TextField
          sx={{ alignSelf: "end", right: "80px", width: "100px" }}
          value={bottomRight}
          onChange={(ev) => setBottomRight(parseInt(ev.target.value))}
          type="number"
        ></TextField>
      </Box>
    </Box>
  );
}

export default BorderRadius;
