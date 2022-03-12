const app = Vue.createApp({
  data() {
    return {
      taskEntered: "",
      tasks: [],
      listIsShown: true,
      listStatus: ""
    };
  },
  methods: {
    addTask() {
      if (this.taskEntered !== "") {
        this.tasks.push(this.taskEntered);
        this.taskEntered = "";
      }
    },
    buttonClicked() {
      this.listIsShown = !this.listIsShown;
    },
    deleteTask(idx) {
        this.tasks.splice(idx, 1);
    }
  }
});

app.mount("#assignment");
