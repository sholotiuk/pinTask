<template>
  <main>
    <img src="./assets/logo.png" id='logo'>
    <TaskInput @onAddTask="addTask"></TaskInput>
    <ul class="task-list my-list">
      <li v-for="task in taskList" :key="task.id">
        <TaskCard @onDone="setDoneTask" @onRemove="removeTask" :task="task"></TaskCard>
      </li>
    </ul>
  </main>
</template>

<script>
import TaskInput from "./components/TaskInput.vue";
import TaskCard from "./components/TaskCard.vue";

export default {
  name: 'App',
  components: {
    TaskInput,
    TaskCard
  },
  data() {
    return { taskList: [] }
  },
  methods: {
    addTask(title, description) {
      let existingIds = this.taskList.map(task => task.id);
      let newId = existingIds.length != 0 ? Math.max(...existingIds) + 1 : 0;
      let now = new Date();

      this.taskList.push({
        id: newId, title: title, description: description, status: false, month: now.getMonth() + 1, day: now.getDate(), year: now.getFullYear(), hour: now.getHours(), minute: now.getMinutes(), second: now.getSeconds()
      })
    },
    setDoneTask(id) {
      this.taskList = this.taskList.map(task => {
        if(task.id === id)
          task.status = true
        return task
      })
    },
    removeTask (id) {
      this.taskList = this.taskList.filter(task => task.id != id)
    }
  },
}
</script>

<style>

#logo {
  margin: 0 auto;
  width: 100%;
}
.task-list {
  list-style: none;
}

button {
  cursor: pointer;
  transition: all .3s;
}
button:hover {
  background: #ccc;
}
</style>
