import { useState } from "react";
import Modal from "./Modal";

interface TreeNodeProps {
    children: React.ReactNode;
    icon: string;
}

export default function TreeNode({ children, icon }: Readonly<TreeNodeProps>) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return <>
        <div className="bg-gray-200 hover:bg-white shadow-md rounded-full w-14 p-2 outline-2 hover:cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <img src={icon} />
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {children}
        </Modal>
    </>;
}
