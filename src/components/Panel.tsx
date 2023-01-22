import { ReactNode, useState } from "react";

interface Props {
    data?: any,
    children: ReactNode,
    suspend?: boolean,
}

export function Panel(args: Props) {
    const [suspeded, setSuspended] = useState("");

    return (
        <>
            { args.suspend ? 
                <div className="panel shadow suspend">{args.children}</div>
                :
                <div className="panel shadow">{args.children}</div>
            }
        </>
    );
}