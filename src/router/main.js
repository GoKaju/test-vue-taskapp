import projects from '../components/projects/Project.vue';
import task from '../components/task/Task.vue'


export const routes = [
    {path: '/', component: projects},
    {path: '/task/:id', component: task}
];
