import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";

const CastCard = ({ cast }) => {

  return (
    <Link to={`/person/${cast.id}`} style={{color: "black",textDecoration: "none"}}>
      <Card sx={{ height: 260, width: 120 }} >
        <CardMedia
          sx={{ width: 120, height: 150, justifyContent: 'center', alignItems: 'center' }}
          image={
            cast.profile_path
              ? `https://themoviedb.org/t/p/w276_and_h350_face/${cast.profile_path}`
              : img
          }
        />
        <CardContent>
          <Grid container>
            <Grid item>
              <Typography component="p" fontSize={8} >
                {cast.name}
              </Typography>
            </Grid>
            <Grid item >
              <Typography component="p" fontSize={5}>
                {cast.character}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card >
    </Link>
  );

};
export default CastCard;