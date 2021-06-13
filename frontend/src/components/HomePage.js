import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      hello from home page <br />
      <Button variant="contained" color="primary">
        Hello Worlds
      </Button>
      <Link to="/next">go to next</Link>
    </div>
  );
}
