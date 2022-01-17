// @ts-nocheck
// @ts-nocheck
import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";
import useStyles from "./styles.js";

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });
    const post = useSelector((state) =>
        currentId
            ? state.posts.find((message) => message._id === currentId)
            : null
    );
    const dispatch = useDispatch();

    const clear = () => {
        setCurrentId(0);
        setPostData({
            creator: "",
            title: "",
            message: "",
            tags: "",
            selectedFile: "",
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        } else {
            dispatch(updatePost(currentId, postData));
            clear();
        }
    };

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                noValidate
                className={classes.form}
            >
                <Typography variant="h6" color="initial">
                    {currentId ? `Editing ${post.title}` : "Creating a Memory"}
                </Typography>
                <TextField
                    name="creator"
                    label="Creator"
                    fullWidth
                    variant="outlined"
                    className={classes.input}
                    value={postData.creator}
                    onChange={(e) =>
                        setPostData({ ...postData, creator: e.target.value })
                    }
                />
                <TextField
                    name="title"
                    label="Title"
                    fullWidth
                    variant="outlined"
                    className={classes.input}
                    value={postData.title}
                    onChange={(e) =>
                        setPostData({ ...postData, title: e.target.value })
                    }
                />
                <TextField
                    name="message"
                    label="Message"
                    fullWidth
                    variant="outlined"
                    className={classes.input}
                    multiline
                    rows={4}
                    value={postData.message}
                    onChange={(e) =>
                        setPostData({ ...postData, message: e.target.value })
                    }
                />
                <TextField
                    name="tags"
                    label="Tags (coma separated)"
                    fullWidth
                    variant="outlined"
                    className={classes.input}
                    multiline
                    rows={4}
                    value={postData.tags}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            tags: e.target.value.split(","),
                        })
                    }
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setPostData({
                                ...postData,
                                selectedFile: base64,
                            })
                        }
                    />
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    type="submit"
                    className={classes.button}
                >
                    {currentId ? "Update Post" : "Submit"}
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    fullWidth
                    className={classes.button}
                    onClick={clear}
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
