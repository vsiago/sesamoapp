import "@/src/styles/global.css";
import {Tabs} from "expo-router"

export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="HomeScreen" options={{headerShown: false}}/>
            <Tabs.Screen name="Services" options={{headerShown: false}}/>
        </Tabs>
    )
}