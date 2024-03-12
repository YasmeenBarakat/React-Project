import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="w-40">
      <Link to="/createpost">
        <Button type="button" gradientDuoTone="purpleToPink" className="w-full">
          Create a Post
        </Button>
      </Link>
    </div>
  );
}
