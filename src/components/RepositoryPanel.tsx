interface Props {
    data: any,
}

export function RepositoryPanel(args: Props) {
    return(
        <>
            {
                args.data.owner.map((e: any) => {
                    <div className="shadow repository-panel">{e}</div>
                })
            }
        </>
    );
}