import { useState } from "react";
import Modal from "./Modal";

interface TreeNodeProps {
    children: React.ReactNode;
    label?: string;
}

export default function TreeNode({ children, label }: Readonly<TreeNodeProps>) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return <>
        <button className="bg-gray-200 hover:bg-white shadow-md rounded-full w-10 h-10 p-2 outline-2 hover:cursor-pointer flex justify-center items-center" onClick={() => setIsModalOpen(true)}>
            {label}
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {children}
        </Modal>
    </>;
}
