import { Dimensions } from 'react-native'

const params = {
    blockSize: 40,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15,   //Proporção do painel superior da tela em porcentagem (15% para header e 85% para tabuleiro) 
    difficultLevel: 0.1, // 10% dos campos estarão com mina (Nível - Fácil) 
    
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor( width / this.blockSize )
    },

    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const borderHeight = totalHeight * ( 1 - params.headerRatio)
        return Math.floor(borderHeight / this.blockSize)
    }
}

export default params
