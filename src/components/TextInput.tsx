interface Props {
    event: any,
}

export function TextInput(args: Props) {
    return (
        <>
            <input type="text" placeholder="Type Github Username" onChange={(e) => {
                args.event(e.target.value);
            }}></input>
        </>
    );
}