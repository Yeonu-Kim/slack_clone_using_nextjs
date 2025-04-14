import { CircleUser, Cat } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import type { AuthType } from "@/features/auth/entities";

type SocialSignUpButtonInfo = {
  type: "GOOGLE" | "GITHUB";
  content: string;
};

const socialSignUpButtonList: SocialSignUpButtonInfo[] = [
  { type: "GOOGLE", content: "Continue with Google" },
  { type: "GITHUB", content: "Continue with Github" },
];

export const SignUpCard = ({
  setAuthType,
}: {
  setAuthType: (input: AuthType) => void;
}) => {
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="flex flex-col gap-2">
        <CardTitle className="text-2xl">Sign up to continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <form className="flex flex-col gap-2">
          <Input
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Email"
            required
          />
          <Input
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Password"
            required
          />
          <Input
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Confirm Password"
            required
          />
          <Button type="submit" className="w-full" size="lg">
            Continue
          </Button>
          <Separator />
          <section className="flex flex-col gap-2.5">
            {socialSignUpButtonList.map(({ type, content }, index) => (
              <SocialSignInButton
                key={`sign-up-button-${index}`}
                type={type}
                content={content}
              />
            ))}
          </section>
          <p className="text-xs text-muted-foreground">
            Already have an account?{" "}
            <span
              className="text-sky-700 hover: underline cursor-pointer"
              onClick={() => {
                setAuthType("SIGN_IN");
              }}
            >
              Sign In
            </span>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

const SocialSignInIcon = ({
  type,
  className,
}: {
  type: "GOOGLE" | "GITHUB";
  className?: string;
}) => {
  switch (type) {
    case "GOOGLE":
      return <CircleUser className={className} />;
    case "GITHUB":
      return <Cat className={className} />;
    default:
      return <CircleUser className={className} />;
  }
};

const SocialSignInButton = ({
  type,
  content,
}: {
  type: "GOOGLE" | "GITHUB";
  content: string;
}) => {
  return (
    <Button
      disabled={false}
      onClick={() => {}}
      variant="outline"
      size="lg"
      className="w-full relative"
    >
      <SocialSignInIcon type={type} className="absolute top-3 left-2.5" />
      {content}
    </Button>
  );
};
