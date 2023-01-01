import React from "react";
import { getPersonPopular } from "../api/tmdb-api";
import PageTemplate from '../components/templatePersonListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";

const PersonPage = (props) => {

  const { pagination } = useParams();

  const { data, error, isLoading, isError } = useQuery(
    ["discoverPerson", pagination],
    getPersonPopular
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const persons = data.results;

    return (
      <Grid container sx={{ padding: '20px' }}>
      <Grid item container spacing={1}>
      <PageTemplate
        persons={persons}
      />
      </Grid>
      <Pagination count={data.total_pages} color="primary" variant="outlined" shape="rounded" size="large" showFirstButton showLastButton page={parseInt(pagination)} sx={{ justifyContent: 'center', margin: 'auto', marginTop: '20px'}}
        renderItem={(item) => (
          <PaginationItem component={Link} to={`/person/page${item.page}`} {...item}/>
        )}
      />
    </Grid>

  );
  };
  export default PersonPage;