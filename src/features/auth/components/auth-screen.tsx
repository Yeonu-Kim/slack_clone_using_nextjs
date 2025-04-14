"use client";

import { useState } from "react";
import type { AuthType } from "@/features/auth/entities";
import { SignInCard } from "@/features/auth/components/sign-in-card";
import { SignUpCard } from "@/features/auth/components/sign-up-card";

export const AuthScreen = () => {
  const [authType, setAuthType] = useState<AuthType>("SIGN_IN");
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#5C3B58]">
      <div className="w-[420px]">
        {authType === "SIGN_IN" ? <SignInCard /> : <SignUpCard />}
      </div>
    </div>
  );
};
