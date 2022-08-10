import { useEffect, useState } from "react";

type useModal = () => {isOpen: boolean, setIsOpen: (val: boolean) => void};

export const useModal: useModal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    useEffect(() => {
        if(isOpen){
            document.body.classList.add("modal-open");
        }else{
            document.body.classList.remove("modal-open");
        };

    }, [isOpen]);

    return {
        isOpen,
        setIsOpen
    };
};