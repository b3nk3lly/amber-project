interface FigureProps {
    src: string;
    alt: string;
    caption?: string;
}

export default function Figure({ src, alt, caption }: Readonly<FigureProps>) {
    return (
        <figure className="mx-auto rounded-2xl overflow-hidden shadow-lg bg-white">
            <img src={src} alt={alt} className="w-full object-cover" />
            {caption &&
                <figcaption className="p-4 text-center text-sm text-gray-600 italic">
                    {caption}
                </figcaption>}
        </figure>
    );
}
