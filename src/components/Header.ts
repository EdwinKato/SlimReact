import { DOM, createElement } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { Brand } from "./Brand";
import { Navigation } from "./Navigation";

export const Header = () =>
    DOM.div(
        {
            className: "container-fluid"
        },
        "HEADER",
        DOM.div(
            {
              className: "row"  
            },
            DOM.div(
                {
                    className: "headerContainerStyle"
                },
                "Header container style",
                DOM.div(
                    {
                        className: "col-sm-5"
                    },
                    createElement(Brand, null)
                ),
                DOM.div(
                    {
                        className: "col-sm-7"
                    },
                    createElement(Navigation, null)
                    
                )
            )
        )
    )

