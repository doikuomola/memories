// @ts-nocheck
import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import { Form } from "./components";
import Posts from "./components/Posts/Posts";
import memories from "./images/memories.png";
import useStyles from "./styles";

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId]);
    return (
        <Container maxWidth="lg">
            <AppBar
                position="sticky"
                color="inherit"
                className={classes.appBar}
            >
                <Toolbar>
                    <Typography
                        variant="h2"
                        align="right"
                        className={classes.heading}
                    >
                        Memories
                    </Typography>
                    <img
                        className={classes.image}
                        src={memories}
                        alt="icon"
                        height={60}
                    />
                </Toolbar>
            </AppBar>
            {/* <Container maxWidth="lg"> */}
            <Grid container spacing={3} justifyContent="space-between">
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
            {/* </Container> */}
        </Container>
    );
};

export default App;
