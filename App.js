import React, { Component } from 'react'
import {View,Text, StyleSheet,Image,TouchableOpacity} from 'react-native'



 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'Iniciar',
      resultado: '',
      result: 'Salvar',
      background: this.gerar_cor()
    }
    this.tempo = null;
    this.iniciar = this.iniciar.bind(this);
    this.salvar = this.salvar.bind(this);
    this.zerar = this.zerar.bind(this);
    this.gerar_cor = this.gerar_cor.bind(this);
  }

  iniciar(){

    if(this.tempo != null){
      clearInterval(this.tempo)
      this.tempo = null;
      this.setState({botao: 'Voltar'})
    }else{
      this.tempo = setInterval(() => {
      this.setState({numero: this.state.numero + 0.1})
      }, 100);
      this.setState({botao: 'Parar'})
    } this.setState({result: 'Salvar'})
  }
  gerar_cor(opacidade = 10) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
 }
  zerar(){
      clearInterval(this.tempo)
      this.tempo = null;
      this.setState({
        botao: 'Iniciar',
        resultado:this.state.numero.toFixed(1),
        numero: 0,
        result: 'Limpar'
      }); 
  }

  salvar(){
    this.setState({resultado:this.state.numero.toFixed(1)})
  }
  render(){
    return(
      <View style={[styles.container,{ backgroundColor: this.state.background }]}>
        <View style={styles.btnArea}> 
         <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
           <Text style={styles.btnTexto}>{this.state.botao}</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.btn} onPress={this.zerar}>
           <Text style={styles.btnTexto}>Zerar</Text>
         </TouchableOpacity>   
         <TouchableOpacity style={styles.btn} onPress={this.salvar}>
           <Text style={styles.btnTexto}>Salvar</Text>
         </TouchableOpacity>   
       </View>
       <Image style={styles.chrono}
       source={require('./src/chrono.png')}
       />

       <Text style={styles.time}>{this.state.numero.toFixed(1)}</Text>


       <View style={styles.areaUltima}>
       <Text style={styles.tempo}>
            {this.state.resultado > 0 ?'Ultimo tempo: '+ this.state.resultado: ''}
       </Text>
         </View>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({

  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  chrono:{
    width: 350,
    height: 400
  },
  time:{
    marginTop: -270,
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold'
  },

  btnArea: {
    flexDirection: 'row',
    marginTop: 50,
    height: 80
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue'
  },
  areaUltima:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 400,
    height: 100,
    margin: 200,
    borderRadius: 9,
    marginBottom: 10
  },
  tempo: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  }
})