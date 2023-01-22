interface Props {
    title: string,
    event: any,
}

export function Button(args: Props) {
    return (
        <button className="shadow" onClick={args.event}>{args.title}</button>
    );
}