import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity,} from 'react-native';
import {PencilSquareIcon, ChevronLeftIcon,marginLeft, UserCircleIcon, ChevronRightIcon,
  Cog6ToothIcon,IdentificationIcon,StarIcon, GlobeAltIcon,DevicePhoneMobileIcon,marginRight,EllipsisVerticalIcon

} from 'react-native-heroicons/solid'

export default function App() {
  return (
    <View style={{backgroundColor:'white', flex:1, flexDirection:'column'}}>

      <View style={{flexDirection:'row', justifyContent:'flex-start',paddingTop:30, paddingLeft:20, 
       marginLeft:20 }}>
         <Text style={{fontSize:15, alignSelf:'center', fontWeight:'800',
      marginRight:80, marginLeft:80, marginBottom:50 }}>Messages</Text>
        <EllipsisVerticalIcon size={20} color='black'/>
     
      </View>


      <ScrollView>

<View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft: 6}}>
<UserCircleIcon size={40} color='blue'></UserCircleIcon>

<View style={{flexDirection:'column', paddingLeft: 10, width: 190}}>
<Text style={{fontSize:14, fontWeight:'500'}}>MTN.N</Text>
<Text style={{color:'black', width:200}}>your yafun main Account:Airtime:N16:52. Yanfun...</Text>
</View>

<View style={{width: 100, flexDirection: 'row', marginRight: 40, }}>
<Text style={{fontSize: 10, marginEnd: 6}}> Just now</Text>
<View style={{height: 5, width: 5, backgroundColor: 'black', borderRadius: 50, marginTop: 4}}/>
</View>

</View>

<View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft: 6, marginTop: 10}}>
<UserCircleIcon size={40} color='blue'></UserCircleIcon>

<View style={{flexDirection:'column', paddingLeft: 10, width: 190}}>
<Text style={{fontSize:14, fontWeight:'500'}}>MTN BETA TALK</Text>
<Text style={{color:'black', width:200}}>250% Bonus on Recharge...</Text>
</View>

<View style={{width: 100, flexDirection: 'row', marginRight: 40}}>
<Text style={{fontSize: 10, marginEnd: 6}}> 9:54 AM</Text>
</View>

</View>

 <View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:6, marginTop:20}}>
<UserCircleIcon size={40} color='blue'></UserCircleIcon>

<View style={{flexDirection:'column', paddingLeft:10, width:190}}>
  <Text style={{fontSize:14, fontWeight:'500'}}>Unity Bank</Text>
  <Text style={{color:'black', width:200}}>Credit Alert; N2,500,000 29/10/2022</Text>
</View>


<View style={{width:100, flexDirection:'row', marginRight:40}}>
  <Text style={{fontSize:10, marginEnd:6}}>10:56 AM</Text>
  </View>
  


  </View>  


  <View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:6, marginTop:20}}>
<UserCircleIcon size={40} color='blue'></UserCircleIcon>

<View style={{flexDirection:'column', paddingLeft:10, width:190}}>
  <Text style={{fontSize:14, fontWeight:'500'}}>GLO</Text>
  <Text style={{color:'black', width:200}}>Glo Data plans are Now Bigger and Better!....</Text>
</View>


<View style={{width:100, flexDirection:'row', marginRight:40}}>
  <Text style={{fontSize:10, marginEnd:6}}>11:00 AM</Text>
  </View>
  


  </View>  


  <View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:6, marginTop:20}}>
<UserCircleIcon size={40} color='blue'></UserCircleIcon>

<View style={{flexDirection:'column', paddingLeft:10, width:190}}>
  <Text style={{fontSize:14, fontWeight:'500'}}>GLO</Text>
  <Text style={{color:'black', width:200}}>Glo Data plans are Now Bigger and Better!....</Text>
</View>


<View style={{width:100, flexDirection:'row', marginRight:40}}>
  <Text style={{fontSize:10, marginEnd:6}}>11:00 AM</Text>
  </View>
  


  </View>  

  <View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:6, marginTop:20}}>
<UserCircleIcon size={40} color='blue'></UserCircleIcon>

<View style={{flexDirection:'column', paddingLeft:10, width:190}}>
  <Text style={{fontSize:14, fontWeight:'500'}}>GLO</Text>
  <Text style={{color:'black', width:200}}>Glo Data plans are Now Bigger and Better!....</Text>
</View>


<View style={{width:100, flexDirection:'row', marginRight:40}}>
  <Text style={{fontSize:10, marginEnd:6}}>11:00 AM</Text>
  </View>
  


  </View>  



  <View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:6, marginTop:20}}>
<UserCircleIcon size={40} color='blue'></UserCircleIcon>

<View style={{flexDirection:'column', paddingLeft:10, width:190}}>
  <Text style={{fontSize:14, fontWeight:'500'}}>GLO</Text>
  <Text style={{color:'black', width:200}}>Glo Data plans are Now Bigger and Better!....</Text>
</View>


<View style={{width:100, flexDirection:'row', marginRight:40}}>
  <Text style={{fontSize:10, marginEnd:6}}>11:00 AM</Text>
  </View>
  


  </View>  

  <View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:6, marginTop:20}}>
<UserCircleIcon size={40} color='blue'></UserCircleIcon>

<View style={{flexDirection:'column', paddingLeft:10, width:190}}>
  <Text style={{fontSize:14, fontWeight:'500'}}>GLO</Text>
  <Text style={{color:'black', width:200}}>Glo Data plans are Now Bigger and Better!....</Text>
</View>


<View style={{width:100, flexDirection:'row', marginRight:40}}>
  <Text style={{fontSize:10, marginEnd:6}}>11:00 AM</Text>
  </View>
  


  </View>  



  <View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:6, marginTop:20}}>
<UserCircleIcon size={40} color='blue'></UserCircleIcon>

<View style={{flexDirection:'column', paddingLeft:10, width:190}}>
  <Text style={{fontSize:14, fontWeight:'500'}}>GLO</Text>
  <Text style={{color:'black', width:200}}>Glo Data plans are Now Bigger and Better!....</Text>
</View>


<View style={{width:100, flexDirection:'row', marginRight:40}}>
  <Text style={{fontSize:10, marginEnd:6}}>11:00 AM</Text>
  </View>
  


  </View>  





  <View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:6, marginTop:20}}>
<UserCircleIcon size={40} color='blue'></UserCircleIcon>

<View style={{flexDirection:'column', paddingLeft:10, width:190,}}>
  <Text style={{fontSize:14, fontWeight:'500'}}>GLO</Text>
  <Text style={{color:'black', width:200}}>Glo Data plans are Now Bigger and Better!....</Text>
</View>



<View style={{flexDirection:'column', marginRight:40, justifyContent:'center'}}>
  <Text style={{fontSize:10, marginEnd:6}}>11:00 AM</Text>
  <TouchableOpacity style={{borderWidth:1, borderRadius:20, height:50,justifyContent:'center', alignItems:'center', 
  borderColor:'blue', width:80, backgroundColor:'blue', }}>
    <Text style={{color:'white', fontSize:18, fontWeight:'400'}}>Start Chat</Text>
  </TouchableOpacity>
  </View>
  


  </View>  


  <View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:6, marginTop:20}}>
<UserCircleIcon size={40} color='blue'></UserCircleIcon>

<View style={{flexDirection:'column', paddingLeft:10, width:190}}>
  <Text style={{fontSize:14, fontWeight:'500'}}>GLO</Text>
  <Text style={{color:'black', width:200}}>Glo Data plans are Now Bigger and Better!...</Text>
</View>

<View style={{width:100, flexDirection:'row', marginRight:40}}>
  <Text style={{fontSize:10, marginEnd:6}}>11:00 AM</Text>
  </View>
  
 
  </View>
  


  

  </ScrollView>



</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
