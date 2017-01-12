import { DOM } from "react";
import { Brand } from "./Brand";
import { Navigation } from "./Navigation";

export const Footer = () =>

DOM.div(
    {
        className: "container-fluid text-center"
    },
    DOM.div(
        {
            className: "row"
        },
        DOM.div(
            {
                className: "footerContainerStyle",
            },
            DOM.div(
                {
                    className: "col-sm-12"
                },
                DOM.p(
                    {
                        className: "footerContainerStyle"
                    },"FOOTER"
                )                
            )
        )
    )
)