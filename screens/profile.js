import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen(props) {
    return (
        <View style={styles.container}>
            <Text>PROFILE</Text>
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
    