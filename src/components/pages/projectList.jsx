import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProjectList({ results }) {
  // maps over the results, destructring the properties, shows each projects name and link to repo
  // conditionally renders a link to the deployed application if it has been deployed

  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
      <Grid container spacing={3} sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {results.map(({ name, url, deployed }) => (
          
          <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ height: "100%", backgroundColor: "#fff7e0" }}>
              
              <CardMedia
                sx={{ height: 160 }}
                image="./images/raccoon-marie-claire-deland.png"
                title="photo of raccoon by Marie Claire Deland"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name.toUpperCase()}
                </Typography>
              </CardContent>

              <CardActions>
                <a
                  className="github-link"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="small">GitHub</Button>
                </a>

                {"   "}

                {deployed ? (
                  <a
                    className="deployed-link"
                    href={`https://jaychan0125.github.io/${name}/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="small">Deployed</Button>
                  </a>
                ) : null}

              </CardActions>

            </Card>
          </Grid>
        ))}

      </Grid>
    </Box>
  );
}

export default ProjectList;
