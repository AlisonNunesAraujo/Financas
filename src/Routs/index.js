import React from "react";
import { View } from "react-native";

import AuthRouts from "./auth.routs";

export default function Routs(){
    const Loading = false;
    const Singned = false;

    return(
        Singned ? <View></View> : <AuthRouts/>
    )
}