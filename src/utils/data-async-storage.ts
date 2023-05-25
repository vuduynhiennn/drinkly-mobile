import AsyncStorage from "@react-native-async-storage/async-storage"

export const getDataAsyncStorage = async (item: any) => {
    const value = await AsyncStorage.getItem(item)
    return value
}
