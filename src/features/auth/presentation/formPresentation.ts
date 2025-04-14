import type { Input } from "@/entities/input";

export const implFormPresentation = () => {
  return {
    useValidator: ({
      inputStates,
    }: {
      inputStates: {
        email: Input<string>;
        password: Input<string>;
        passwordConfirm: Input<string>;
      };
    }) => {
      const { email, password, passwordConfirm } = inputStates;
      return {
        email: {
          isError: email.isError || email.value.trim().length === 0,
          value: email.value,
        },
        password: {
          isError: password.isError || password.value.trim().length === 0,
          value: password.value,
        },
        passwordConfirm: {
          isError:
            password !== passwordConfirm ||
            passwordConfirm.value.trim().length === 0,
          value: passwordConfirm.value,
        },
      };
    },
  };
};
