// @ts-nocheck
import {
    Delete,
    MoreHoriz,
    ThumbDownAlt,
    ThumbUpAlt,
} from "@mui/icons-material";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import moment from "moment";
import React from "react";
import { deletePost, likePost } from "../../../actions/posts";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                title={post.title}
                className={classes.media}
                image={
                    post.selectedFile ||
                    "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                }
            />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">
                    {moment(post.createdAt).fromNow()}
                </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button size="small" onClick={() => setCurrentId(post._id)} className={classes.iconBtn}>
                    <MoreHoriz fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="h2"
                >
                    {post.tags.map((tag) => `#${tag} `)}
                </Typography>
                <Typography
                    className={classes.title}
                    variant="h5"
                    component="h2"
                >
                    {post.title}
                </Typography>
            </div>
            <CardContent className={classes.content}>
                <Typography
                    className={classes.postMessage}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                >
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button
                    className={classes.likeBtn}
                    color="primary"
                    size="small"
                    onClick={() => dispatch(likePost(post._id))}
                >
                    <ThumbUpAlt fontSize="small" />
                    &nbsp; LIKES {post.likeCount}
                </Button>
                <Button
                    className={classes.deleteBtn}
                    color="error"
                    size="small"
                    onClick={() => dispatch(deletePost(post._id))}
                >
                    <Delete fontSize="small" />
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;
