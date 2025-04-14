export type Input<T> = {
  isError: boolean;
  value: T;
  onChange: (input: T) => void;
};
