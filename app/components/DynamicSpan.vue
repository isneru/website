<script lang="ts" setup>
type Props = {
	href?: string
}

const { href } = defineProps<Props>()
</script>

<template>
	<a
		v-if="href"
		:href="href"
		rel="noreferrer"
		target="_blank"
		class="hover:text-primary flex items-center gap-2 transition-colors">
		<slot />
	</a>
	<span v-else class="flex items-center gap-2"><slot /></span>
</template>
