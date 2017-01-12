import { DOM } from "react";

export const Navigation = () =>
    DOM.div(
        {
            className: "navigationStyle",
        },"NAVIGATION",
        DOM.div(
            {
                className: "row"
            },
            DOM.div(
                {
                    className: "col-sm-8 col-sm-offset-1"
                },
                DOM.div(
                    {
                        className: "row"
                    },
                    DOM.div(
                        {
                            className: "col-sm-5"
                        },
                        DOM.span(
                            {
                                className: "navigationItemStyle"
                            },"5"
                        )
                    ),
                    DOM.div(
                        {
                            className: "col-sm-4"
                        },
                        DOM.span(
                            {
                                className: "navigationItemStyle"
                            },"4"
                        )
                    ),
                    DOM.div(
                        {
                            className: "col-sm-3"
                        },
                        DOM.span(
                            {
                                className: "navigationItemStyle"
                            },"3"
                        )
                    )
                )
            )
        )
    );
