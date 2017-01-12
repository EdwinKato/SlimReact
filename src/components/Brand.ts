import { DOM } from "react";

interface BrandProps {
    color: string;
    fontSize?: string;
    fontWeight: number;
    textTransform: string;
    textAlign?: string;

}

export const Brand = (props: BrandProps) =>
  DOM.h1(
    {
      style: { width: 0 , color: "#e74c3c", fontSize: "28px", fontWeight: 600, textTransform: "uppercase", textAlign: "center" }
    }, "BRAND"
    );



