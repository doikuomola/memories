// @ts-nocheck
import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post.js";
import useStyles from "./styles.js";

const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    return (
        <Grid container spacing={3} className={classes.container}>
            {posts.map((post) => (
                <Grid item xs={12} sm={6} key={post._id}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Posts;
