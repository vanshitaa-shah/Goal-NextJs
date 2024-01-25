import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import SignInWithGithub from "../components/SignInWithGithub";
import { authOptions } from "../utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignInForm from "../components/SignInForm";

const AuthRoute = async () => {
  const session = await getServerSession(authOptions);

  //won't let authenticated users access auth route
  if (session) {
    return redirect("/");
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <Card className="p-5">
        <CardHeader>
          <CardTitle>Please Sign in</CardTitle>
          <CardDescription>
            To access the private page you have to be authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <SignInForm />
            <SignInWithGithub />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthRoute;
