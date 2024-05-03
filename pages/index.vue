<script setup lang="ts">
import "/css/mainpage.css"
function information()
{
    navigateTo('/info',{external:true})
}
function contacts()
{
    navigateTo('/contact',{external:true})
}
function portifolio()
{
    navigateTo('/port',{external:true})
}
function products()
{
    navigateTo('/products',{external:true})
}
</script>
<template>
    <div class="container">
        <h1>João Pedro De Souza Lopes</h1>
        <button id="products" @click="products()" class="button"><h3>Products</h3></button>
        <button id="Portifolio" @click="portifolio() " class="button"><h3>Portifolio</h3></button>
        <button id="contacts" @click="contacts() " class="button"><h3>Contacts</h3></button>
        <button id="Information" @click="information()" class="button"><h3>Information</h3></button>
    </div>
</template>
  