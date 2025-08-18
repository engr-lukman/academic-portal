<template>
  <div :class="cardClasses">
    <div
      v-if="$slots.header || title"
      class="card-header"
    >
      <slot name="header">
        <h3
          v-if="title"
          class="title-3"
        >
          {{ title }}
        </h3>
      </slot>
    </div>

    <div
      v-if="$slots.media"
      class="card-media"
    >
      <slot name="media" />
    </div>

    <div :class="bodyClasses">
      <slot />
    </div>

    <div
      v-if="$slots.footer"
      class="card-footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (value) =>
      ["default", "elevated", "outlined", "filled"].includes(value),
  },
  hover: {
    type: Boolean,
    default: true,
  },
  padding: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg", "xl", "none"].includes(value),
  },
  title: {
    type: String,
    default: null,
  },
});

const cardClasses = computed(() => {
  const baseClasses =
    "bg-[--color-background] rounded-2xl overflow-hidden transition-all duration-300 border border-[--color-border]";

  const variantClasses = {
    default: "shadow-md",
    elevated: "shadow-xl",
    outlined: "border-2 border-[--color-border]",
    filled: "bg-[--color-surface]",
  };

  const hoverClasses = props.hover
    ? "hover:shadow-2xl hover:-translate-y-2 transform cursor-pointer"
    : "";

  return [baseClasses, variantClasses[props.variant], hoverClasses]
    .filter(Boolean)
    .join(" ");
});

const bodyClasses = computed(() => {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
    none: "p-0",
  };

  return paddingClasses[props.padding];
});
</script>

<style scoped>
.card-header {
  padding: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.card-media {
  overflow: hidden;
}

.card-footer {
  padding: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}
</style>
