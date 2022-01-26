import React from "react";
import classes from "./TitrePrincipal.module.css";

const titrePrincipal = (props) => {
    const css = `${classes.titlePolice} text-center border border-dark mt-3 p-2 rounded`;
    return (
        <h1 className={css}>{props.children}</h1>
    );
}

export default titrePrincipal;