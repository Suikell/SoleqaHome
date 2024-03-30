import React from 'react'
import { Switch, Text } from 'react-native-paper'

import { CollapsibleContent } from '~ui/Collapsible/CollapsibleContent'
import { DateTimePicker } from '~ui/DateTimePicker/DateTimePicker'
import { FlexRow } from '~ui/Layout/FlexRow'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren & {
  closeContent: () => void
}

const DESCRIPTION = `When the state is changed manually it overrides trigger groups. The
actuator state stays set based on this setting even when trigger
conditions are met.`

export const ManualControlContent: React.FC<TProps> = ({ closeContent }) => {
  const onConfirm = React.useCallback(() => {
    // TODO
    console.log('confirm')
  }, [])
  return (
    <CollapsibleContent
      title={`Manual control`}
      description={DESCRIPTION}
      onConfirm={onConfirm}
      onCancel={closeContent}
    >
      <FlexRow marginTop={shrink(16)} justifyContent={`space-between`}>
        <Text variant={`titleMedium`}>Actuator state should be:</Text>
        <Switch />
      </FlexRow>

      <DateTimePicker
        title={<Text variant={`titleMedium`}>Turn on until:</Text>}
        validDateRange={{
          startDate: new Date(),
        }}
        onSetDate={(date) => console.log(date)}
      />
    </CollapsibleContent>
  )
}

// import * as React from 'react'
// import { useState } from 'react'
// import {
//   Dimensions,
//   Modal,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native'

// export const ManualControlModal = () => {
//   // We need to get the height of the phone and use it relatively,
//   // This is because height of phones vary
//   const windowHeight = Dimensions.get('window').height

//   // This state would determine if the drawer sheet is visible or not
//   const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)

//   // Function to open the bottom sheet
//   const handleOpenBottomSheet = () => {
//     setIsBottomSheetOpen(true)
//   }

//   // Function to close the bottom sheet
//   const handleCloseBottomSheet = () => {
//     setIsBottomSheetOpen(false)
//   }

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         onPress={handleOpenBottomSheet}
//         style={{
//           width: '90%',
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderWidth: 1,
//           borderColor: '#86827e',
//           paddingVertical: 12,
//           borderRadius: 8,
//         }}
//       >
//         <Text>Open Drawer</Text>
//       </TouchableOpacity>
//       <Modal
//         animationType="slide"
//         transparent
//         visible={isBottomSheetOpen}
//         onRequestClose={handleCloseBottomSheet}
//       >
//         <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>

//           <View
//             style={{
//               flex: 0,
//               width: '100%',
//               justifyContent: 'space-between',
//               flexDirection: 'row',
//             }}
//           >
//             <TouchableOpacity onPress={handleCloseBottomSheet}>
//               <Text>Close</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={{ paddingVertical: 16 }}>
//             <View
//               style={{
//                 opacity: 0.2,
//                 height: 1,
//                 borderWidth: 1,
//                 borderColor: '#86827e',
//                 marginVertical: 16,
//               }}
//             />
//             <View
//               style={{
//                 flex: 0,
//                 justifyContent: 'flex-start',
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}
//             >
//               <Text>articles written</Text>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   )
// }

// // The StyleSheet is imported from React Native
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bottomSheet: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     paddingVertical: 23,
//     paddingHorizontal: 25,
//     bottom: 0,
//     borderWidth: 1,
//     borderColor: 'red',
//   },
// })

// import { TAppTheme, useAppTheme } from 'App'
// import * as React from 'react'
// import { StyleSheet } from 'react-native'
// import { Modal, Text } from 'react-native-paper'

// import { shrink } from '~utils/helpers/shrink'
// import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

// type TProps = NoChildren & {
//   visible: boolean
//   hideModal: () => void
// }

// export const ManualControlModal: React.FC<TProps> = ({
//   visible,
//   hideModal,
// }) => {
//   const theme = useAppTheme()
//   const styles = useStylesWithTheme(styleCreator)

//   return (
//     <>
//       <Modal
//         visible={visible}
//         onDismiss={hideModal}
//         contentContainerStyle={styles.modal}
//         theme={{ colors: { backdrop: `rgba(42, 50, 45, 0.712)3)` } }}
//       >
//         <Text variant={`titleMedium`}>Manual control</Text>
//         <Text>
//           When the state is changed manually it overrides trigger groups. The
//           actuator state stays set based on this setting even when trigger
//           conditions are met.
//         </Text>
//       </Modal>
//       {/* <Switch value={hasManualOverride} onValueChange={showModal} />

//       <Button style={{ marginTop: 30 }} onPress={showModal}>
//         Show
//       </Button> */}
//     </>
//   )
// }

// const styleCreator = (theme: TAppTheme) =>
//   StyleSheet.create({
//     modal: {
//       backgroundColor: 'rgb(73, 78, 75)',
//       borderRadius: shrink(32),
//       marginHorizontal: shrink(60),
//       padding: shrink(60),
//       gap: shrink(32),
//     },
//   })
