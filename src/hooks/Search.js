import { ref, computed, watch } from 'vue';

export default userSearch(items) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    const availableProjects = computed(function () {
      if (activeSearchTerm.value) {
        return items.projects.filter((prj) =>
          prj.title.includes(activeSearchTerm.value)
        );
      }
      return items.projects;
    });

    const hasProjects = computed(function () {
      return items.projects && availableProjects.value.length > 0;
    });

    watch(enteredSearchTerm, function (newValue) {
      setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
          activeSearchTerm.value = newValue;
        }
      }, 300);
    });
};