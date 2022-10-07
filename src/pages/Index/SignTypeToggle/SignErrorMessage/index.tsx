interface Props {
  authError: string;
}

export function SignErrorMessage({authError}:Props) {
  return (
    <span className="text-error text-center block mb-2">
      {authError}
    </span>
  );
}