import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/result");
  }, []);
  return <div>I'm Main</div>;
}
