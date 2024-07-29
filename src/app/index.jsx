import "@/src/styles/global.css";
import { router } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="bg-[#363947] flex-1 items-center justify-start ">
      <View className="h-[35%] justify-end  ">
        <Image source={require("@/assets/images/logo-sesamo.png")} resizeMode="contain" className="w-[250]"/>
      </View>
      <View className=" bg-[#363947] flex-1 w-full h-[30%] px-10">
        <Text className="text-white text-center mt-10 text-2xl">
          Acessar conta
        </Text>
        <View className="gap-y-3 mt-10">
          <TextInput className="bg-[#272935] border border-white p-4 rounded-md text-white text-lg" selectionColor="#33B6FF" placeholder="username" placeholderTextColor="#9699A4"></TextInput>
          <TextInput className="bg-[#272935] border border-white p-4 rounded-md text-white text-lg" selectionColor="#33B6FF" placeholder="password" placeholderTextColor="#9699A4" secureTextEntry></TextInput>
          <TouchableOpacity onPress={router.navigate('/HomeScreen')} className="bg-sky-500 w-full p-3 h-16 rounded-xl items-center justify-center mt-12">
            <Text className="text-xl text-white">Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
