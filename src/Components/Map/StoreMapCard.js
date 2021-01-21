import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import NavigationIcon from "@material-ui/icons/Navigation";

function handleStoreMapCard() {
  console.log("card event!");
}

const useStyles = makeStyles({
  root: {
    width: 140,
    background: "#1d3557c2",
    borderRadius: 10,
    color: "white",
  },
  media: {
    height: 140,
  },

  controls: {
    alignItems: "center",
    padding: 8,
    height: 32,
  },

  wrapIcon: { justifyContent: "center" },
});

export default function StoreMaoCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} color='primary'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image={img}
          // image={"/deco/"+{title}+".jpg"}
          title='Menu Item'
        />
        <CardContent className={classes.controls}>
          <Typography gutterBottom variant='h6' component='h2' align='center'>
            Title
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.wrapIcon}>
        <IconButton
          onClick={() => handleStoreMapCard()}
          color='secondary'
          aria-label='Go!'
        >
          <NavigationIcon color='secondary' />
        </IconButton>
      </CardActions>
    </Card>
  );
}
