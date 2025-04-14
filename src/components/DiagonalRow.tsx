import { ReactNode } from "react"

interface DiagonalRowProps {
    first: ReactNode;
    second: ReactNode;
    third: ReactNode;
}

export default function DiagonalRow({ first, second, third }: Readonly<DiagonalRowProps>) {
    return (<>
        <div className="w-full place-items-center grid grid-cols-3">
            <div />
            <div />
            {third}
        </div>
        <div className="w-full place-items-center grid grid-cols-3">
            <div />
            {second}
            <div />
        </div>
        <div className="w-full place-items-center grid grid-cols-3">
            {first}
            <div />
            <div />
        </div>
    </>);
}