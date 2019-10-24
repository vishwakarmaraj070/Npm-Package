import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import {
    styled,
    Card,
    createMuiTheme,
    Box,
    CardActions,
    Typography,
    CardMedia
} from "@material-ui/core";

// box system for styling
import {
    compose,
    spacing,
    borders,
    display,
    flexbox,
    positions,
    shadows,
    sizing,
    typography,
    palette
} from "@material-ui/system";

const BoxSystem = compose(
    spacing,
    borders,
    display,
    flexbox,
    positions,
    shadows,
    sizing,
    typography,
    palette
);

// end box system
// card here
// theme here
let cardTheme;

const DumiCard = props => {
    // create theme
    cardTheme = createMuiTheme({
        palette: {
            primary: {
                main: props.color ? props.color : "#444"
            }
        }
    });

    // style
    const MyCard = styled(({ ...props }) => <Card {...props} />)(BoxSystem, {});

    // wider card
    const WiderCard = styled(({ ...props }) => <Box {...props} />)({
        width: "max-content",
        marginLeft: "2%",
        "& > div": {
            overflow: "inherit"
        },
        "& .card-img-box": {
            marginLeft: "-5%",
            width: "110%",
            borderRadius: ".25rem",
            boxShadow:
                " 0 5px 11px 0 rgba(0, 0, 0, .18), 0 4px 15px 0 rgba(0, 0, 0, .15)"
        },
        "& span[class*='-focusHighlight-']": {
            zIndex: -11
        }
    });

    // narrower card
    const NarrowerCard = styled(({ ...props }) => <Box {...props} />)({
        width: "max-content",
        marginTop: "2.5%",
        "& > div": {
            overflow: "inherit"
        },
        "& .card-img-box": {
            marginLeft: "5%",
            marginTop: "-5%",
            width: "90%",
            zIndex: 99999,
            borderRadius: ".25rem",
            boxShadow:
                " 0 5px 11px 0 rgba(0, 0, 0, .18), 0 4px 15px 0 rgba(0, 0, 0, .15)"
        },
        "& span[class*='-focusHighlight-']": {
            zIndex: -11
        }
    });

    return (
        <React.Fragment>
            <ThemeProvider theme={cardTheme}>
                {props.card === "wider" ? (
                    <WiderCard className="card-box">
                        <MyCard {...props}>{props.children}</MyCard>
                    </WiderCard>
                ) : props.card === "narrower" ? (
                    <NarrowerCard className="card-box">
                        <MyCard {...props}>{props.children}</MyCard>
                    </NarrowerCard>
                ) : (
                    <MyCard {...props}>{props.children}</MyCard>
                )}
            </ThemeProvider>
        </React.Fragment>
    );
};

export const RCard = styled(DumiCard)(BoxSystem);
// end card here

// card action

const CardAction = styled(({ ...props }) => <CardActions {...props} />)(
    BoxSystem,
    {}
);

const DumiRCardAction = props => {
    return (
        <React.Fragment>
            <CardAction {...props}>{props.children}</CardAction>
        </React.Fragment>
    );
};

export const RCardAction = styled(DumiRCardAction)(BoxSystem);

// end card here

// card body

const DumiRCardBody = props => {
    // styled
    const CardBody = styled(({ ...props }) => <Typography {...props} />)(
        BoxSystem,
        {}
    );

    return (
        <React.Fragment>
            <CardBody {...props}>{props.children}</CardBody>
        </React.Fragment>
    );
};

export const RCardBody = styled(DumiRCardBody)(BoxSystem);

// end card body

// card content

const DumiRCardContent = props => {
    // style
    const CardCont = styled(({ ...props }) => <Box {...props} />)(
        BoxSystem,
        {}
    );

    return (
        <React.Fragment>
            <CardCont {...props} p={2}>
                {props.children}
            </CardCont>
        </React.Fragment>
    );
};

export const RCardContent = styled(DumiRCardContent)(BoxSystem);

// end card content

// card image

const CardImage = styled(({ ...props }) => <CardMedia {...props} />)(BoxSystem);

const DumiRCardImage = props => {
    // image style
    const MyImage = styled(({ ...props }) => <Box {...props} />)({
        transition: "0.16s",
        overflow: "hidden",
        transform: "scaleY(1.05)",
        "&:hover": {
            transform: () =>
                props.hover === "zoom-in"
                    ? "scale(1.2)"
                    : props.hover === "zoom-out"
                    ? "scale(0.9)"
                    : props.hover === "zoom-in-rotate"
                    ? "scale(1.4) rotateZ(5deg)"
                    : "",
            transformOrigin: "center"
        }
    });
    return (
        <React.Fragment>
            <CardImage
                style={{
                    overflow: props.hover ? "hidden" : "inherit"
                }}
                {...props}
                component="div"
                className="card-img-box"
            >
                <MyImage
                    component="img"
                    src={props.src}
                    alt="card img"
                    style={{ width: "100%" }}
                />
            </CardImage>
        </React.Fragment>
    );
};

export const RCardImage = styled(DumiRCardImage)(BoxSystem);

// end card image

// card title

const DumiRCardTitle = props => {
    // primary color
    const primary = cardTheme.palette.primary;
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: props.color ? props.color : primary.dark
            }
        }
    });

    const CardTitle = styled(({ ...props }) => <Typography {...props} />)(
        BoxSystem
    );
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CardTitle
                    {...props}
                    component={props.component ? props.component : "h1"}
                >
                    {props.children}
                </CardTitle>
            </ThemeProvider>
        </React.Fragment>
    );
};

export const RCardTitle = styled(DumiRCardTitle)(BoxSystem);

// end card title
