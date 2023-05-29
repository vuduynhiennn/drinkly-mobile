import { ImageBackground, Pressable, View } from "react-native"
import HeartLinear from "../../assets/icons/HearTLinear"
import HeartIcon from "../../assets/icons/HeartIcon"
import { Text } from "react-native"
import products from '../../products.json'
import navigateTo from "../../utils/navigateTo"
import { useContext } from "react"
import { productContext } from "../../../App"
import { addToFavorite } from "../../store/action"


const ListProducts = ({ navigation }: any) => {

  const { products, productDispatch } = useContext(productContext)

  return (
    <View style={{ marginTop: 40, marginBottom: 90, marginHorizontal: 15, flexDirection: "row", flexWrap: "wrap", gap: 15 }}>
      {products.map((product: any, index: any) => (
        <View key={index} style={{ width: 170, marginBottom: 0 }}>
          <ImageBackground
            source={{ uri: product.image }}
            imageStyle={{ borderRadius: 10}}
          >
            <Pressable style={{ position: "relative" }}
              // onPress={productDispatch(addToFavorite, product)}
            >
              <View style={{ position: "absolute", right: 15, top: 6 }}>
                <HeartLinear />
              </View>

              <View style={{ position: "absolute", right: 16, top: 15 }}>
                <HeartIcon width="28" height="28" />
              </View>
            </Pressable>

            <Pressable style={{ backgroundColor: "#E5E5E5", marginTop: 200, paddingHorizontal: 5, paddingVertical: 12, borderBottomEndRadius: 8, borderBottomStartRadius: 8 }}
              onPress={() => navigation.navigate('Product', product)}
            >

              <View style={{height: 50}}>
                <Text style={{ fontSize: 14, fontWeight: "700", color: "black", marginBottom: 5 }}>
                  {product.title}
                </Text>
              </View>
              <Text style={{ fontSize: 11, color: "#484848" }}>
                {product.price}
              </Text>
            </Pressable>
          </ImageBackground>
        </View>
      ))}
    </View>
  )
}

export default ListProducts