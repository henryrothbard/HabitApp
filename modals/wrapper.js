import { useCallback } from "react";
import { Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mpc: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
    }
})

function ModalPressCapturer({id, controller}) {
    if (id === controller.modals.length - 1) return null;

    const clearAbove = useCallback(() => {controller.clear(id)}, [id, controller]);

    return (
        <Pressable onPress={clearAbove} style={styles.mpc}>
        </Pressable>
    );
}

export default function ModalWrapper({ children, id, controller, ...props }) {
    if (!props.onPress) props.onPress = () => {};
    return (
        <Pressable {...props}>
            <ModalPressCapturer id={id} controller={controller} />
            {children}
        </Pressable>
    );
}