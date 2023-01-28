interface Props {
  data: any;
}

export function RepositoryPanel(args: Props) {
  return (
    <>
      <div className="shadow repository-panel">{args.data}</div>
    </>
  );
}
