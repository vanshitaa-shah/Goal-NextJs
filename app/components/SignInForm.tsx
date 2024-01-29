"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SignInWithEmail = async () => {
    setIsSubmitting(true);
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (!signInResult?.ok) {
      return toast({
        title: "well this did not work...",
        description: "Something went wrong, please try again",
        variant: "destructive",
      });
    }

    return toast({
      title: "Check your email",
      description: "A link has been sent to you ",
    });
  };
  return (
    <form action={SignInWithEmail}>
      <div className="flex flex-col gap-y-2">
        <Label>Email</Label>
        <Input
          name="email"
          type="email"
          placeholder="name2example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button type="submit" className="mt-4 w-full">
        {isSubmitting ? "Wait..." : "Login with Email"}
      </Button>
    </form>
  );
};

export default SignInForm;
