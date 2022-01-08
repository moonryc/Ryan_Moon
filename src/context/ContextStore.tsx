import React, {createContext, useState} from 'react';


export const ContextStore = createContext({
    isModalOpen:false,
    setIsModalOpen:(value:boolean)=>{}
});


const ContextStoreContainer = (props:any) => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <ContextStore.Provider value={{isModalOpen, setIsModalOpen}}>
            {props.children}
        </ContextStore.Provider>
    );
};

export default ContextStoreContainer;
