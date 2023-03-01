import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ListComprobantes = ({ item }) => {
  const { CASA, COMPROBANTE, FECHA, DETALLE, VALOR, CARGOS, DESCARGOS } = item;

  return (
    <>
    <View style={styles.container1}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{fontSize: 12,fontWeight: "bold",color: "indigo"}}>Casa</Text>
        <Text style={{fontSize: 11, paddingLeft: 13, paddingBottom: 5}}>{CASA}</Text>
      </View>
      <View style={{ flexDirection:'column' }}>
        <Text style={{fontSize: 12,fontWeight: "bold",color: "indigo", paddingLeft: 15}}>Comp.</Text>
        <Text style={{fontSize: 11, paddingLeft: 20, paddingBottom: 5}}>{COMPROBANTE}</Text>
      </View>
      <View style={{ flexDirection:'column' }}>
        <Text style={{fontSize: 12,fontWeight: "bold",color: "indigo", paddingLeft: 30}}>Fecha</Text>
        <Text style={{fontSize: 11, paddingLeft: 13, paddingBottom: 5}}>{FECHA}</Text>
      </View>
      <View style={{ flexDirection:'column' }}>
        <Text style={{fontSize: 12,fontWeight: "bold",color: "indigo", paddingLeft: 13}}>Valor</Text>
        <Text style={{fontSize: 11, paddingLeft: 16, paddingBottom: 5}}>{VALOR}</Text>
      </View>
      <View style={{ flexDirection:'column' }}>
        <Text style={{fontSize: 12,fontWeight: "bold",color: "indigo", paddingLeft: 13}}>Crgs</Text>
        <Text style={{fontSize: 11, paddingLeft: 12, paddingBottom: 5}}>{CARGOS}</Text>
      </View>
      <View style={{ flexDirection:'column' }}>
        <Text style={{fontSize: 12,fontWeight: "bold",color: "indigo", paddingLeft: 13}}>Dscgs</Text>
        <Text style={{fontSize: 11, paddingLeft: 16, paddingBottom: 5}}>{DESCARGOS}</Text>
      </View>     
    </View>

    <View style={styles.container2}>
      <View >
        <Text style={{fontSize: 12,fontWeight: "bold",color: "indigo", paddingLeft: 5}}>Detalle:</Text>
        <Text style={{fontSize: 11, paddingLeft: 5, paddingBottom: 5}}>{DETALLE}</Text>
      </View>     
    </View>
    </>   
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "white",
    borderTopEndRadius:10,
    borderTopStartRadius:10,
    flexDirection: "row",
    padding: 5,  
  },
  container2: {
    backgroundColor: "white",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    flexDirection: "column",
    padding: 5, 
  },
});

export default ListComprobantes;