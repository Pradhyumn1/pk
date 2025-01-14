import axios from "axios";
import { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Paper, CardActionArea, CardMedia, Grid, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Button, CircularProgress } from "@material-ui/core";
import cblogo from "./logo.jpeg";
import image from "./bg.png";
import { DropzoneArea } from 'material-ui-dropzone';
import { common } from '@material-ui/core/colors';
import Clear from '@material-ui/icons/Clear';

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(common.white),
        backgroundColor: common.white,
        '&:hover': {
            backgroundColor: '#ffffff7a',
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    clearButton: {
        width: "-webkit-fill-available",
        borderRadius: "15px",
        padding: "15px 22px",
        color: "#000000a6",
        fontSize: "20px",
        fontWeight: 900,
    },
    root: {
        maxWidth: 345,
        flexGrow: 1,
    },
    media: {
        height: 400,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    gridContainer: {
        justifyContent: "center",
        padding: "4em 1em 0 1em",
    },
    mainContainer: {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: "93vh",
        marginTop: "8px",
    },
    imageCard: {
        margin: "auto",
        maxWidth: 400,
        height: 500,
        backgroundColor: 'transparent',
        boxShadow: '0px 9px 70px 0px rgb(0 0 0 / 30%) !important',
        borderRadius: '15px',
    },
    imageCardEmpty: {
        height: 'auto',
    },
    noImage: {
        margin: "auto",
        width: 400,
        height: "400 !important",
    },
    input: {
        display: 'none',
    },
    uploadIcon: {
        background: 'white',
    },
    tableContainer: {
        backgroundColor: 'transparent !important',
        boxShadow: 'none !important',
    },
    table: {
        backgroundColor: 'transparent !important',
    },
    tableHead: {
        backgroundColor: 'transparent !important',
    },
    tableRow: {
        backgroundColor: 'transparent !important',
    },
    tableCell: {
        fontSize: '22px',
        backgroundColor: 'transparent !important',
        borderColor: 'transparent !important',
        color: '#000000a6 !important',
        fontWeight: 'bolder',
        padding: '1px 24px 1px 16px',
    },
    tableCell1: {
        fontSize: '14px',
        backgroundColor: 'transparent !important',
        borderColor: 'transparent !important',
        color: '#000000a6 !important',
        fontWeight: 'bolder',
        padding: '1px 24px 1px 16px',
    },
    tableBody: {
        backgroundColor: 'transparent !important',
    },
    text: {
        color: 'white !important',
        textAlign: 'center',
    },
    buttonGrid: {
        maxWidth: "416px",
        width: "100%",
    },
    detail: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    appbar: {
        background: '#be6a77',
        boxShadow: 'none',
        color: 'white'
    },
    loader: {
        color: '#be6a77 !important',
    }
}));

export const ImageUpload = () => {
    const Classes = useStyles();
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [data, setData] = useState();
    const [image, setImage] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    let confidence = 0;

    const sendFile = async () => {
        if (image) {
            let formData = new FormData();
            formData.append("file", selectedFile);
            let res = await axios({
                method: "post",
                url: `http://localhost:4000/predict`,
                data: formData,
            });
            if (res.status === 200) {
                setData(res.data);
            }
            setIsloading(false);
        }
    }

    const clearData = () => {
        setData(null);
        setImage(false);
        setSelectedFile(null);
        setPreview(null);
    };

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);
    }, [selectedFile]);

    useEffect(() => {
        if (!preview) {
            return;
        }
        setIsloading(true);
        sendFile();
    }, [preview]);

    const onSelectFile = (files) => {
        if (!files || files.length === 0) {
            setSelectedFile(undefined);
            setImage(false);
            setData(undefined);
            return;
        }
        setSelectedFile(files[0]);
        setData(undefined);
        setImage(true);
    };

    if (data) {
        confidence = (parseFloat(data.confidence) * 100).toFixed(2);
    }

    return (
        <React.Fragment>
            <AppBar position="static" className={Classes.appbar}>
                <Toolbar>
                    <Typography className={Classes.title} variant="h6" noWrap>
                        CodeBasics: Potato Disease Classification
                    </Typography>
                    <div className={Classes.grow} />
                    <Avatar src={cblogo}></Avatar>
                </Toolbar>
            </AppBar>
            <Container maxWidth={false} className={Classes.mainContainer} disableGutters={true}>
                <Grid
                    className={Classes.gridContainer}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <Card className={`${Classes.imageCard} ${!image ? Classes.imageCardEmpty : ''}`}>
                            {image && <CardActionArea>
                                <CardMedia
                                    className={Classes.media}
                                    image={preview}
                                    component="image"
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                            }
                            {!image && <CardContent className={Classes.content}>
                                <DropzoneArea
                                    acceptedFiles={['image/*']}
                                    dropzoneText={"Drag and drop an image of a potato plant leaf to process"}
                                    onChange={onSelectFile}
                                />
                            </CardContent>}
                            {data && <CardContent className={Classes.detail}>
                                <TableContainer component={Paper} className={Classes.tableContainer}>
                                    <Table className={Classes.table} size="small" aria-label="simple table">
                                        <TableHead className={Classes.tableHead}>
                                            <TableRow className={Classes.tableRow}>
                                                <TableCell className={Classes.tableCell1}>Label:</TableCell>
                                                <TableCell align="right" className={Classes.tableCell1}>Confidence:</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody className={Classes.tableBody}>
                                            <TableRow className={Classes.tableRow}>
                                                <TableCell component="th" scope="row" className={Classes.tableCell}>
                                                    {data.class}
                                                </TableCell>
                                                <TableCell align="right" className={Classes.tableCell}>{confidence}%</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>}
                            {isLoading && <CardContent className={Classes.detail}>
                                <CircularProgress color="secondary" className={Classes.loader} />
                                <Typography className={Classes.title} variant="h6" noWrap>
                                    Processing
                                </Typography>
                            </CardContent>}
                        </Card>
                    </Grid>
                    {data &&
                        <Grid item className={Classes.buttonGrid} >
                            <ColorButton variant="contained" className={Classes.clearButton} color="primary" component="span" size="large" onClick={clearData} startIcon={<Clear fontSize="large" />}>
                                Clear
                            </ColorButton>
                        </Grid>}
                </Grid >
            </Container >
        </React.Fragment>
    );
};
export default ImageUpload