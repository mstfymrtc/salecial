import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar,Dimensions } from 'react-native';

var {width}=Dimensions.get('window');
export default EStyleSheet.create({
    container: {
        position: 'relative',
        left: 0,
        top: 0,
        right: 0,
        '@media ios': {
            paddingTop: 20,
        },
        '@media android': {
            paddingTop: StatusBar.currentHeight,
        },
        width:width
    },
    button: {
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    icon: {
        width: 18,
    },
});