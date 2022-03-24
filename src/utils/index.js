import { Dimensions } from 'react-native'


const { height: sHeight, width: sWidth } = Dimensions.get('window')

const mapLocalHostToIP = (source) => {
    if (Platform.OS === 'android') {
        if (Array.isArray(source)) {
            const games =  source.map(game => {
                game.icon = game.icon.replace('localhost', '10.0.2.2');
                game.preview = game.preview.map(item => item.replace('localhost', '10.0.2.2'));
                return game;
            })
            return games;
        }
        source.icon = source.icon.replace('localhost', '10.0.2.2');
        source.preview = source.preview.map(item => item.replace('localhost', '10.0.2.2'));
    }
    return source;
}

export { sHeight, sWidth, mapLocalHostToIP }