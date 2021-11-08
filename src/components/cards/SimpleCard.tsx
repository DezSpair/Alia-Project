import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

type SimpleCardProps = React.PropsWithChildren<{ title?: string }>;

export function SimpleCard(props: SimpleCardProps) {
  return (
    <Card>
      <CardContent>
        {props.title && <Typography variant="h6">{props.title}</Typography>}
        {props.children}
      </CardContent>
    </Card>
  );
}
