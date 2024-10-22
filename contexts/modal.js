import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [activeModals, setActiveModals] = useState([]);
    const ModalController = useMemo(() => ({
        pop: (id) => {
            setActiveModals(prev => {
                id = id !== undefined ? id : prev.length - 1;
                return prev.toSpliced(id, 1);
            });
            return ModalController;
        },
        push: (m, id) => {
            setActiveModals(prev => {
                id = id !== undefined ? id : prev.length;
                return prev.toSpliced(id, 0, m);
            });
            return ModalController;
        },
        replace: (m, id) => {
            setActiveModals(prev => {
                id = id !== undefined ? id : prev.length - 1;
                return prev.toSpliced(id, 1, m);
            });
            return ModalController;
        },
        clear: (id) => {
            setActiveModals(prev => {
                id = id !== undefined ? id : -1;
                return prev.slice(0, id + 1);
            });
            return ModalController;
        },
        modals: activeModals,
        setModals: setActiveModals,
    }), [activeModals]);

    return (
        <ModalContext.Provider value={{activeModals, ModalController}}>
            {children}
        </ModalContext.Provider>
    );
}

// const makeSelf = (ModalController, id) => { 
//     const self = {
//         id: id,
//         remove: () => { ModalController.pop(id); return self; },
//         add: (m) => { ModalController.push(m, id + 1); return self; },
//         replace: (m) => { ModalController.replace(m, id); return self; },
//     }
//     return self;
// }

export const Modals = () => {
    const { activeModals, ModalController } = useContext(ModalContext);
    const clearModals = useCallback(() => ModalController.clear(-1), [ModalController]);
    if (!activeModals.length) return null;

    return (
        <View style={styles.bg}>
            <Pressable style={styles.bg} onPress={clearModals}></Pressable>  
            {activeModals.map((Modal, id) => (
                <Modal 
                    key={id} 
                    id={id} 
                    controller={ModalController} 
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}
});