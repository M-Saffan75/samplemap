import { COLOURS } from './Theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  circ_image: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: COLOURS.light
  },

  theme_name: {
    fontSize: 16,
    color: COLOURS.black,
    fontFamily: 'Roboto-Bold',
  },

  theme_select_image: {
    width: 20,
    height: 20,
  },

  theme_select: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: COLOURS.black,
    justifyContent: 'space-between',
  },


  // 
  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modal: {
    padding: 20,
    elevation: 10,
    width: '80%',
    borderRadius: 10,
    paddingVertical: 30,
    backgroundColor: '#fff',
  },

  //
});

export default styles;
