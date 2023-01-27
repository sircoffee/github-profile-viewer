interface Props {
  title: string;
  event: any;
  login: any;
}

export function Button(args: Props) {
  return (
    <button className="shadow" onClick={() => args.event(args.login)}>
      {args.title}
    </button>
  );
}
