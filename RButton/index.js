import React from "react";
import { Button, styled, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

const RButton = props => {
    // create theme
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: props.color
            }
        }
    });

    // style
    const MyButton = styled(({ ...props }) => <Button startIcon {...props} />)({
        wordWrap: "break-word",
        whiteSpace: "normal",
        marginRight: "0.5rem",
        borderWidth: () => (props.variant === "outlined" ? "2px" : null),
        borderRadius: () => (props.rounded ? "10em" : "0.125rem"),
        padding: () =>
            props.sm ? "0.4rem 0.8rem" : props.lg ? "0.6rem 1.7rem" : null,
        fontSize: () => (props.sm ? "0.64rem" : props.lg ? "0.94rem" : null),
        boxShadow: () =>
            props.variant === "text"
                ? null
                : "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
        "&:hover, &:focus, &:active": {
            outline: "0",
            boxShadow:
                " 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)",
            borderWidth: () => (props.variant === "outlined" ? "2px" : null)
        }
    });

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <MyButton
                    variant={props.variant}
                    startIcon={props.startIcon ? props.startIcon : null}
                    endIcon={props.endIcon ? props.endIcon : null}
                    color="primary"
                >
                    {props.children}
                </MyButton>
            </ThemeProvider>
        </React.Fragment>
    );
};

export default RButton;
