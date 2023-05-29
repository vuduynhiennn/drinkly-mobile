import { StatusBar, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../components/home/Header'
import Banner from '../../components/home/Banner'
import Categories from '../../components/home/Categories'
import ListProducts from '../../components/home/ListProducts'


const Home = ({navigation}: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <StatusBar
          animated={true}
          backgroundColor="#3FBDF1"
        />
        <Header />
        <Banner />
        <Categories />
        <ListProducts navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home 