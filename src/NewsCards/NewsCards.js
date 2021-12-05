import { Grid, Grow } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCards/NewsCard/NewsCard";
import useStyles from './styles'

// getting "articles" from the props in App.js
const NewsCards = ({ articles }) => {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid classname={classes.container} container alignItems="stretch">
        {articles.map((article, i) => {
          <Grid item xs={12} sm={6} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} i={i} />;
          </Grid>;
        })}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
