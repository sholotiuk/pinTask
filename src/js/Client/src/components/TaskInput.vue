<template>
  <div className="task-input my-list">
    <input v-model="title" placeholder="Задача" type="text">
    <input v-model="description" placeholder="Детальніше" type="text">
    <button @click="onAddTask">Додати задачу</button>
  </div>
</template>

<script>

export default {
  name: 'TaskInput',
  methods: {
    onAddTask() {
      if (!this.title || !this.description) {
        alert('Не всі поля заповнені')
        return
      }
      this.$emit('onAddTask', this.title, this.description)
    }
  },
}
</script>

<style scoped>
.task-input {
  margin: 20px 0;
}
</style>
