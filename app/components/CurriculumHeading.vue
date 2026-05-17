<script lang="ts" setup>
interface Props {
	h: string
}

const { h } = defineProps<Props>()
</script>

<template>
	<h2 :id="h" class="text-foreground mb-4 text-[15px]">
		<span class="text-primary">#</span>
		{{ h }}
	</h2>
</template>
