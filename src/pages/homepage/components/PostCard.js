import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Avatar, CardMedia, Grid } from "@material-ui/core";

const PostCard = (props) => {
  const {
    comunityLogoURL,
    comunityName,
    postUsername,
    postDate,
    postTitle,
    postMediaPictureURL,
  } = props;
  const usrAndDate = `Posted by u/${postUsername}. ${postDate}`;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={comunityLogoURL} />}
        title={comunityName}
        subheader={usrAndDate}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {postTitle}
        </Typography>
      </CardContent>
      <CardMedia style={{ height: "500px" }} image={postMediaPictureURL} />
      {/* <Grid
        container
        spacing={24}
        justify="center"
        // style={{ minHeight: "100vh", maxWidth: "100%" }}
      >
        <img src={postMediaPictureURL} width="500"></img>
      </Grid> */}
      <CardActions>
        <Button size="small">Comments</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
};
export default PostCard;