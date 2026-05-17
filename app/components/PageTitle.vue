<script lang="ts" setup>
interface Props {
	title: string
}

const { title } = defineProps<Props>()
</script>

<template>
	<h1 class="text-foreground mb-10 text-base">
		{{ title }}
	</h1>
</template>
