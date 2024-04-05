<template>
  <div>
    <div>
      {{ node.label }}
    </div>
    <div v-if="hasChildren">
      <mainTextBoxList v-for="child in node.children" :key="child.id" :node="child" :class="child.class" />
    </div>
  </div>
</template>


<script>

export default {
  name: "mainTextBoxList",
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasChildren() {
      const { children } = this.node;
      return children && children.length > 0;
    },
  },
};
</script>