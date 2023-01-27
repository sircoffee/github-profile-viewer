interface Props {
  title: string,
  event: any,
  login: any,
  disabled?: boolean,
}

export function Button(args: Props) {
  return (
    <button disabled={args.disabled} className="shadow" onClick={() => args.event(args.login)}>
      {args.title}
    </button>
  );
}
