import { DOM } from "react";
import { Brand } from "./Brand";
import { Navigation } from "./Navigation";

export const Content = () =>
  DOM.h1(
    {
      className: "container-fluid text-center",
    },
    DOM.div(
        {
             className:"row" 
        },
        DOM.div(
            { 
                className: "containerStyle"
            },
            DOM.div(
                {
                    className: "col-sm-12"
                },
                DOM.h3(
                    {
                        className: "contentHeaderStyle"
                    }
                ),
                DOM.p(
                    {
                        className: "contentStyle"
                    },"CONTENT"
                )
            )
        )
    )
    );

