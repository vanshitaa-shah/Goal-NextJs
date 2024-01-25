"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { signIn } from "next-auth/react";

const SignInWithGithub = () => {
  return (
    <Button
      className="mt-4"
      variant={"secondary"}
      onClick={() =>
        signIn("github", {
          callbackUrl: `${window.location.origin}`,
        })
      }
    >
      Login with GitHub <FontAwesomeIcon className="mx-5" icon={faGithub} />
    </Button>
  );
};

export default SignInWithGithub;
