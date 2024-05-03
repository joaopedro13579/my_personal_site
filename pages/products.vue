<script>
import "/css/products.css"
import { ref } from 'vue';

export default {
  setup() {
    const selected = ref('');

    function onInput(event) {
      selected.value = event.target.value;
    }

    return {
      selected,
      onInput
    };
  }
};
const checkedNames = ref([])
</script>
<template>
    <div class="choose_conteiner">
        <select v-model="selected" @input="onInput" class="selector">
            <option disabled value="">Please select one</option>
            <option>Complete Site</option>
            <option>Design</option>
            <option>User Experience</option>
        </select>
        <input placeholder="Number of pages">

    </div><div class="wip">
    <h1 calss="wip">Wip</h1></div>
<p class="text">{{selected}}</p>
</template>