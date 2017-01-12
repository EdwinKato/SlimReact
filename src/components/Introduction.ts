import { DOM } from "react";

export const Introduction = () =>
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
                    className: "introductionContainerStyle"
                },
                DOM.div(
                    {
                        className: "col-sm-12"
                    },
                    DOM.h2(
                        {
                            className: "introductionHeaderStyle"
                        },
                        "INTRODUCTION"               
                    ),
                    DOM.a(
                        {
                            className: "btn btn-danger btn-lg",
                            href: "localhost/infotech"
                        }, "Infotech"           
                    ),
                )
            )
        )
    )
