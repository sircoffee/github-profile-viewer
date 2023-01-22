interface Props {
    title: string,
    event: any,
}

export function Button(args: Props) {
    return (
        <button onClick={args.event}>{args.title}</button>
    );
}