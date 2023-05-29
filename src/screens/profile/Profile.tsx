import { ImageBackground, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useContext, useState } from 'react'
import LogoutIcon from '../../assets/icons/LogoutIcon'
import EditIcon from '../../assets/icons/EditIcon'
import { userContext } from '../../../App'
import ExitIcon from '../../assets/icons/ExitIcon'
import SeePRIcon from '../../assets/icons/SeePRIcon'
import UploadImageIcon from '../../assets/icons/UploadImageIcon'
import DeletedIcon from '../../assets/icons/DeletedIcon'

const Profile = () => {

  const { userInfor, userDispatch } = useContext(userContext);

  const [userImage, setUserImage] = useState({ uri: "https://funkylife.in/wp-content/uploads/2023/02/cute-girl-pic-2-1024x1024.jpg" })
  const [userName, setUserName] = useState(userInfor.displayName || "Đặt tên mới")
  const [isFocusedEditIcon, setIsFocusedEditIcon] = useState(false)
  const [isEdtied, setIsEdited] = useState(false)
  const [newUserName, setNewUserName] = useState<any>("")
  const [focusedUserImage, setFocusedUserImage] = useState<any>(false)

  const handleLogOut = async () => {
  }

  const handleChangeUserName = () => {
    setIsFocusedEditIcon(true)
    setIsEdited(true)
  }

  const handleUpdateUserInfor = () => {
    setIsEdited(false)
    setIsFocusedEditIcon(false)
  }

  const onUserImage = () => {
    setFocusedUserImage(true)
  }

  const onExitUserImage = () => {

    setFocusedUserImage(false)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignSelf: "center", alignItems: "center", marginTop: 40 }}>
        <TouchableOpacity
          onPress={onUserImage}
        >
          <ImageBackground
            source={userImage}
            style={{ width: 150, height: 150 }}
            imageStyle={{ borderRadius: 100 }}
          />
        </TouchableOpacity>

        <View style={{ marginRight: 20 }}>
          <TextInput
            style={{ color: "#000000", fontWeight: "600", fontSize: 16, marginTop: 2 }}
            editable={isFocusedEditIcon}
            onChangeText={setNewUserName}
          >

              {userName}
          </TextInput>

          <TouchableOpacity style={{ position: "absolute", right: -31, top: 10 }}
            onPress={handleChangeUserName}
          > 
            <EditIcon width="24px" height="24px" />
          </TouchableOpacity>
        </View>
      </View>

       

      {
        focusedUserImage ?
          (
            <>
              <View style={{ position: "absolute", flex: 1, backgroundColor: "#000000", height: 1000, width: 2000, zIndex: 5, opacity: 0.5 }}></View>
              <View style={{ backgroundColor: "white", paddingVertical: 25, borderRadius: 10, position: "absolute", bottom: 70, zIndex: 100, width: "100%", gap: 10 }}>
                <TouchableOpacity style={{ position: "absolute", top: -20, left: 178, backgroundColor: "white", borderRadius: 100 }}
                  onPress={onExitUserImage}
                >
                  <ExitIcon />
                </TouchableOpacity>
                <View style={{ paddingHorizontal: 15 }}>
                  <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 0 }}>
                    <SeePRIcon />
                    <Text style={{ color: "#000000", fontSize: 15 }}> See your profile picture</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ paddingHorizontal: 15 }}>
                  <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>

                    <UploadImageIcon />
                    <Text style={{ color: "#000000" }}> Change your profile picture</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ paddingHorizontal: 15 }}>
                  <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 0 }}>
                    <DeletedIcon />
                    <Text style={{ color: "#000000" }}> Remove your profile picture</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )
          : null
      }

      <View style={{ gap: 15, marginTop: 25 }}>
        <View style={{ backgroundColor: "white", marginHorizontal: 25, paddingVertical: 15, paddingHorizontal: 10, borderRadius: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 11, fontWeight: "600", color: "#000000" }}> Your email</Text>
          </View>
          <Text style={{ fontSize: 12, marginTop: 3 }}> nhienduyvu@gmail.com</Text>
        </View>

        <View style={{ backgroundColor: "white", marginHorizontal: 25, paddingVertical: 15, paddingHorizontal: 10, borderRadius: 10 }}>
          <Text style={{ fontSize: 11, fontWeight: "600", color: "#000000" }}> Your Address</Text>
          <Text style={{ fontSize: 12, marginTop: 3 }}> Ha Noi, Viet Nam</Text>
        </View>

      </View>


      <View>
        <Text> Track Order </Text>
      </View>


      {isEdtied ?
        <TouchableOpacity style={{ alignSelf: "center", paddingHorizontal: 90, paddingVertical: 14, backgroundColor: "#3FBDF1", borderRadius: 10, marginTop: 25 }}>
          <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: "500" }}
            onPress={handleUpdateUserInfor}
          >
            Update
          </Text>
        </TouchableOpacity>
        : null
      }

      <KeyboardAvoidingView style={{position: "absolute", top: 700}}>
        <View>

          <View style={{ marginHorizontal: 15 }}>
            <TouchableOpacity
              style={{ flexDirection: "row", borderWidth: 1, alignItems: "center", gap: 6, borderColor: "grey", backgroundColor: "white", alignSelf: "flex-start", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10 }}
              onPress={handleLogOut}
            >
              <LogoutIcon />
              <Text style={{ color: "#000000", fontSize: 13, fontWeight: "500" }}> Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Profile