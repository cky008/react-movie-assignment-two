import React from "react";
import Typography from "@mui/material/Typography";
import CastCard from "../castCard";
import Box from "@mui/material/Box";

const movieCredits = ({ castsList }) => {
  let actorCards = castsList.cast.map((c) => (
    <Box key={c.id} p={1} >
      <CastCard key={c.id} cast={c} />
    </Box>
  ));

  return (
    <>
      <Typography variant="h5" component="h3">
        Top Billed Cast
      </Typography>
      <Box sx={{ columnSpacing:'40px', display: 'flex', flexDirection: 'row', overflowX:'scroll' }}>{actorCards}</Box>
    </>
  );
};
export default movieCredits;