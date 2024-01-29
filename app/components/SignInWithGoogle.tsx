"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { signIn } from "next-auth/react";

const SignInWithGoogle = () => {
  return (
    <Button
      className="mt-4"
      variant={"secondary"}
      onClick={() => signIn("google")}
    >
      Login with Google
      <FontAwesomeIcon className="mx-5" icon={faGoogle} />
    </Button>
  );
};

export default SignInWithGoogle;
