import React from "react";
import { Link } from "react-router-dom";
export default function NextPage() {
  return (
    <div>
      Next page <br />
      <Link to="/">go to home</Link>
    </div>
  );
}
