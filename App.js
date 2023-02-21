import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Bars2Icon, Bars3Icon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import HomeScreen from './screens/HomeScreen';
export default function App() {
  return (
    <View>
      <SafeAreaView className="bg-[#f2f4fa]">
        <View className="px-4 pt-2  ">
          <TouchableOpacity className="shadow-lg rounded-full bg-white  w-10 items-center  p-2  " ><Bars3Icon size={25} color="gray" /></TouchableOpacity>
          <Text className=" text-2xl pb-4 font-semibold pt-2"> Hi,  Abdul </Text>
          <Text className="text-3xl font-semibold "> What is Your
          </Text>
          <Text className="text-3xl font-semibold">favorite Dish?</Text>
        </View>

        <View className="shadow-lg  rounded-full bg-white ml-2  mr-2 mt-5">
          <View className="p-1 flex-row px-4 items-center">
            < MagnifyingGlassIcon size={24} color="gray" />
            <TextInput keyboardType='default' placeholder='Search Your Dish' />

          </View>


        </View>

        <View className="flex-row  ">
          <Text className="px-4 pt-2 font-bold text-xl flex-1">Categories </Text>

          <Text className="px-4 pt-2 font-bold text-sm "> See all </Text>



        </View>


        <ScrollView
          horizontal={true}
          pagingEnabled={true}>


          <TouchableOpacity>

            <View className="px-4  pt-2 relative  ">
              <Image source={{
                uri: "https://images.pexels.com/photos/13474336/pexels-photo-13474336.jpeg?auto=compress&cs=tinysrgb&w=600"


              }} className="w-20  h-20 rounded-full bg-slate-600" />

              <View>
                <Text className="text-lg font-semibold text-gray-600">Rice</Text>
              </View>
            </View>

          </TouchableOpacity>
          <TouchableOpacity>

            <View className="px-4  pt-2 relative  ">
              <Image source={{
                uri: "https://images.pexels.com/photos/13474336/pexels-photo-13474336.jpeg?auto=compress&cs=tinysrgb&w=600"


              }} className="w-20  h-20 rounded-full bg-slate-600" />

              <View>
                <Text className="text-lg font-semibold text-gray-600">Rice</Text>
              </View>
            </View>

          </TouchableOpacity>
          <TouchableOpacity>

            <View className="px-4  pt-2 relative  ">
              <Image source={{
                uri: "https://images.pexels.com/photos/13474336/pexels-photo-13474336.jpeg?auto=compress&cs=tinysrgb&w=600"


              }} className="w-20  h-20 rounded-full bg-slate-600" />

              <View>
                <Text className="text-lg font-semibold text-gray-600">Rice</Text>
              </View>
            </View>

          </TouchableOpacity>
        </ScrollView>
















        <View className="flex-row px-4 p-1">
          <Text className="flex-1 text-2xl font-bold"> Top Dishes </Text>
          <Text className="text-gray-700"> See all  </Text>
        </View>


        {/* //// lower orders */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}>
          <TouchableOpacity>
            <ScrollView className=" relative"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}>
              <View className=" bg-white rounded-md  shadow-lg w-[200px] h-[220px] px-4 ml-4 items-center p-10 "

              >
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"

                  }} className=" w-[150px] h-[90px] " />
                <View>
                  <Text className=" text-lg font-semibold"> Sushi Octopus</Text>
                  <Text>Rice + Octopus</Text>
                  <View className="flex-row space-x-5 ">
                    <Text className=""> 9shs</Text>
                    <Text className="shadow-sm bg-[#1e283c] rounded-md text-white">
                      Order
                    </Text>
                  </View>

                </View>

              </View>

            </ScrollView>
          </TouchableOpacity>
          <TouchableOpacity>
            <ScrollView className=" relative"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}>
              <View className=" bg-white rounded-md  shadow-lg w-[200px] h-[220px] px-4 ml-4 items-center p-10 "

              >
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"

                  }} className=" w-[150px] h-[90px] " />
                <View>
                  <Text className=" text-lg font-semibold"> Sushi Octopus</Text>
                  <Text>Rice + Octopus</Text>
                  <View className="flex-row space-x-5 ">
                    <Text className=""> 9shs</Text>
                    <Text className="shadow-sm bg-[#1e283c] rounded-md text-white">
                      Order
                    </Text>
                  </View>

                </View>

              </View>

            </ScrollView>
          </TouchableOpacity>
          <TouchableOpacity>
            <ScrollView className=" relative"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}>
              <View className=" bg-white rounded-md  shadow-lg w-[200px] h-[220px] px-4 ml-4 items-center p-10 "

              >
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"

                  }} className=" w-[150px] h-[90px] " />
                <View>
                  <Text className=" text-lg font-semibold"> Sushi Octopus</Text>
                  <Text>Rice + Octopus</Text>
                  <View className="flex-row space-x-5 ">
                    <Text className=""> 9shs</Text>
                    <Text className="shadow-sm bg-[#1e283c] rounded-md text-white">
                      Order
                    </Text>
                  </View>

                </View>

              </View>

            </ScrollView>
          </TouchableOpacity>
        </ScrollView>






      </SafeAreaView>
    </View>

  );
}


