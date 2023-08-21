interface Props {
  authError: string | null | undefined;
}

export function SignErrorMessage({authError}:Props) {
  console.log("auth error",authError);
  return (
    <span className="text-error text-center block mb-2">
      {authError}
    </span>
  );
}