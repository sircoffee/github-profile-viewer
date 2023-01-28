interface Props {
  data: any;
}

export function RepositoryPanel(args: Props) {
  return (
    <>
      <div className="shadow repository-panel">
        <h3>{args.data.name}</h3>

        {args.data.language ? <p>Written using {args.data.language}</p> : <p>None.</p> }

        <p>{args.data.visibility}</p>
      </div>
    </>
  );
}
