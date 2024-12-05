import { useContext } from "react";
import Context from "../context/context";
import { Image, StyleSheet, TextInput, Text, View } from "react-native";

import { assets, COLORS, SHADOW } from "../constants";
import Icon from "./Icon";

const Header = ({ title }) => {
  const { search, setSearch } = useContext(Context);

  return (
    <View style={styles.headerContainer}>
 
      <View
        style={[
          title ? { flexDirection: "row-reverse" } : { flexDirection: "row" },
          styles.logoContainer,
        ]}
      >
        
        
        {title ? (
          <Text style={styles.title}>{title}</Text>
        ) : (
          <>
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={assets.searchLight} />
              <TextInput
                style={styles.input}
                placeholder="Search albums"
                placeholderTextColor="#fff"
                value={search}
                onChangeText={setSearch}
              />
            </View>
            <Icon iconUrl={assets.filter} iconWidth={23} iconHeight={30} />
          </>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: COLORS.accent,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    ...SHADOW,
  },

  logoContainer: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  headerLogo: {
    width: 57.6,
    height: 42,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4a00e0", // Nền xanh gradient
    borderRadius: 50, // Bo tròn
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#fff",
    borderWidth: 1,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
  },

  inputIcon: {
    width: 15,
    height: 15,
    marginHorizontal: 8,
  },

  title: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
  },
});
