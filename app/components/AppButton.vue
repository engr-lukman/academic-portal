<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <Icon
      v-if="icon && iconPosition === 'left'"
      :name="icon"
      :class="iconClasses"
    />
    <span v-if="$slots.default"><slot /></span>
    <Icon
      v-if="icon && iconPosition === 'right'"
      :name="icon"
      :class="iconClasses"
    />
  </component>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "accent", "outline", "ghost"].includes(value),
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg", "xl"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: null,
  },
  iconPosition: {
    type: String,
    default: "left",
    validator: (value) => ["left", "right"].includes(value),
  },
  tag: {
    type: String,
    default: "button",
  },
});

const buttonClasses = computed(() => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

  const variantClasses = {
    primary:
      "bg-[--color-primary] text-white hover:bg-[--color-primary-light] hover:shadow-xl focus:ring-[--color-primary]",
    secondary:
      "bg-[--color-secondary] text-white hover:bg-[--color-secondary-light] hover:shadow-xl focus:ring-[--color-secondary]",
    accent:
      "bg-[--color-accent] text-white hover:bg-[--color-accent-light] hover:shadow-xl focus:ring-[--color-accent]",
    outline:
      "bg-white text-[--color-primary] border-2 border-[--color-primary] hover:bg-[--color-primary] hover:text-white hover:shadow-lg focus:ring-[--color-primary]",
    ghost:
      "text-[--color-primary] hover:bg-[--color-primary] hover:bg-opacity-10 hover:shadow-md focus:ring-[--color-primary]",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
  ].join(" ");
});

const iconClasses = computed(() => {
  const sizeMap = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-7 h-7",
  };

  const marginMap = {
    left: props.size === "sm" ? "mr-2" : "mr-3",
    right: props.size === "sm" ? "ml-2" : "ml-3",
  };

  return `${sizeMap[props.size]} ${marginMap[props.iconPosition]}`;
});
</script>
