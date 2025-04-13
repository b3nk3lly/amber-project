interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

interface ModalContentProps {
    title: string;
    descriptions?: string[];
    imageSources?: string[];
}

export function ModalContent({ title, descriptions, imageSources }: Readonly<ModalContentProps>) {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
            {
                imageSources && <div className="flex flex-wrap justify-center items-center space-x-8 space-y-8">
                    {imageSources.map((src) => <img key={src} src={src} />)}
                </div>
            }
            {descriptions?.map((description, index) => <p key={`${title}-desc-${index}`} className="m-6">{description}</p>)}
        </>
    );
}

export default function Modal({ isOpen, onClose, children }: Readonly<ModalProps>) {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black/25 bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
                    <div className="fixed bg-white rounded-2xl shadow-xl p-6 max-w-200 max-h-128 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-col items-center space-y-4">
                            {children}
                            <div className="flex justify-center">
                                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={onClose}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}