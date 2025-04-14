import { useState } from "react";
import Modal from "./Modal";

interface TreeNodeProps {
    children: React.ReactNode;
    icon?: string;
    label?: string;
}

export default function TreeNode({ children, icon, label }: Readonly<TreeNodeProps>) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return <>
        <div className="bg-gray-200 hover:bg-white shadow-md rounded-full w-10 h-10 p-2 outline-2 hover:cursor-pointer flex justify-center items-center" onClick={() => setIsModalOpen(true)}>
            {icon && <img src={icon} />}
            {label}
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {children}
        </Modal>
    </>;
}
