<script lang="ts" setup>
interface Props {
	label: string
	value?: string
}

const { label, value } = defineProps<Props>()
</script>

<template>
	<div class="text-muted-foreground mb-2 flex flex-wrap gap-x-2">
		<span class="text-foreground">{{ label }}</span>
		<template v-if="value">
			<span>·</span>
			<span>{{ value }}</span>
		</template>
	</div>
</template>
