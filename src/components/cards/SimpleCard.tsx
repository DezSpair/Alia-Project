import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

type CardProps = {
  title?: string;
  isActive?: boolean;
};

type SimpleCardProps = React.PropsWithChildren<CardProps>;

const activeSyles = { background: "rgba(100, 220, 100, 0.2)" };

const defaultStyles = {
  maxWidth: 500,
  background: "rgb(245, 250, 255)",
  transition: "background 0.5s ease",
  margin: 5
};

export function SimpleCard(props: SimpleCardProps) {
  const style = { ...defaultStyles, ...(props.isActive ? activeSyles : {}) };
  return (
    <Card style={style}>
      <CardContent>
        {props.title && <Typography variant="h6">{props.title}</Typography>}
        {props.children}
      </CardContent>
    </Card>
  );
}
