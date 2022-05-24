<script setup lang="ts">
import useCurrentInstance from '../hooks/hooksuseCurrentInstance'
import { ref, onMounted } from 'vue'
const { globalProperties } = useCurrentInstance()

// eslint-disable-next-line vue/valid-define-props
defineProps<{ msg: string }>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sayHelloByEEL = () => {
  globalProperties.$eel.say_hello_py('哈哈哈哈!')
}

const sayHelloJS = (x: string) => {
  console.log('Hello from ' + x)
}
globalProperties.$eel.expose(sayHelloJS, 'say_hello_js')
sayHelloJS('Javascript World!')
globalProperties.$eel.say_hello_py('Javascript World!')
onMounted(() => {
  console.log(globalProperties)
})
const count = ref(0)
console.log(count)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
