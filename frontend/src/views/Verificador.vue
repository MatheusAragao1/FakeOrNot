<template>
<div id="home">
    <b-form @submit="onSubmit">

      <b-form-group id="input-group-2" label="Digite o texto para ser avaliado:" label-for="input-2">
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Digite o texto (precisa contar um mínimo de 100 palavras)...."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      

      <b-button type="submit" variant="primary" style="margin-right: 10px">Enviar para AI em automação</b-button>

      <b-button type="button" v-on:click="onSubmit2" variant="success" style="margin-right: 10px">Enviar para simulação de AI</b-button>
    </b-form>
    <b-card class="mt-3" header="Resposta da API:">
      <p class="m-3">{{ formResult }}</p>
    </b-card>
</div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'verificador',
    data() {
      return {
        formResult: "",
        text: ""
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        if(this.text.split(' ').length < 100){
          alert('necessario um minimo de 100 palavras')
          return
        }
        this.formResult = "Carregando..."
        axios.post(`http://localhost:5000/automacao/`, { text: this.text})
        .then(res => {
          this.formResult = res.data.result
        }).catch(e => {
          this.formResult = e
        })
      },
      onSubmit2(event){
        event.preventDefault()
        this.formResult = "Carregando..."
        axios.post(`http://localhost:5000/ai/`, { text: this.text})
        .then(res => {
          this.formResult = "A AI classificou o texto como: " + res.data.result
        }).catch(e => {
          this.formResult = e
        })
      }
    }
  }
</script>

<style>
    #home {
        width: 30%;
        margin: 0 auto;
        margin-top: 10px;
    }
</style>