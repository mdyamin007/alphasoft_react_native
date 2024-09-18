import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <>
    <Stack screenOptions={{headerShown: true}}>
    <Stack.Screen name='index' options={{headerShown: false}}/>
    <Stack.Screen name='scan' options={{headerShown: true, title: "Scan QR/Barcode"}}/>
    </Stack>
    </> 
  )
}

export default _layout
