import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screen2 from "./screen2";
import screen3 from "./screen3";
import screen1 from "./screen1";

const Stack = createNativeStackNavigator();

export default function Stack_Navigation() {
    return (
        // Make sure NavigationContainer is only in the root file
     
            <Stack.Navigator screenOptions={{headerShown : false} }>
                 <Stack.Screen name="screen1" component={screen1} />
                <Stack.Screen name="screen2" component={screen2} />
                <Stack.Screen name="screen3" component={screen3} />
            </Stack.Navigator>
        
    );
}
