<template>
<div id="home">
    <b-form @submit="onSubmit">

    <b-form-group id="input-group-2" label="Verifique a previsão para vacinação de sua primeira dose:" label-for="input-3">
       
        <b-form-select
          id="input-3"
          
          v-model="age"
          :options="ages"
          required
        ></b-form-select>

        <br><br>

        <b-form-select
          id="input-3"
          
          v-model="state"
          :options="states"
          required
        ></b-form-select>

    </b-form-group>      

    <b-button type="submit" variant="primary" style="margin-right: 10px">Enviar para verificação em automação</b-button>

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
        text: "",
        age: null,
        state: null,
        ages: [{text: 'Idade', value: null},18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],
        states: [{text: 'Estado', value: null},'Acre','Amapá','Alagoas','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul'
        ,'Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo'
        ,'Sergipe','Tocantins']
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.formResult = "Carregando..."
        axios.get(`http://localhost:5000/automacao/${this.age}/${this.state}`)
        .then(res => {
          this.formResult = res.data.result
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