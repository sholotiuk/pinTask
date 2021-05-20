<template>
  <div class="task-card" :style="{'background-color': task.status ? doneColor : notDoneColor}">
    <div class='task-card-main'>
      <div>
        <h4>{{ task.title }}</h4>
        <p>{{ task.description }}</p>
      </div>
      <div>
        <button @click="onDone" v-if='!task.status'>✅</button>
        <button @click="onRemove">❌</button>
      </div>
    </div>
    <div class='task-card-date'>додано {{ task.day }}.{{ task.month }}.{{ task.year }},{{ task.hour }}:{{ task.minute }}:{{ task.second }}</div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  },
  data() {
    return {
      doneColor: 'rgba(70, 190, 20, .3)',
      notDoneColor: 'rgba(211, 50, 0, .3)'
    }
  },
  methods: {
    onDone() {
      this.$emit('onDone', this.task.id)
    },
    onRemove() {
      this.$emit('onRemove', this.task.id)
    },
  }
}
</script>

<style scoped>
.task-card {
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  border: 2px solid #000;
  transition: background-color .3s;
}
.task-card-main {
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button:last-child {
  margin-left: 5px;
}

.task-card-date {
  font-size: 0.9em;
  font-style: italic;
  text-align: right;
  color: rgba(0, 0, 0, .7);
  margin-top: 10px;
}
</style>
