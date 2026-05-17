<script lang="ts" setup>
interface Props {
	organization: string
	location: string
	field: string
	start: string
	end: string
	tasks?: string[]
}

const { organization, location, field, start, end, tasks } = defineProps<Props>()
</script>

<template>
	<div class="mb-4">
		<div class="text-foreground">{{ organization }}</div>
		<div class="text-muted-foreground">{{ location }} · {{ field }}</div>
		<div class="text-muted-foreground text-xs">{{ start }} — {{ end }}</div>
		<ul
			v-if="tasks && tasks.length"
			class="text-muted-foreground mt-2 list-disc space-y-1 pl-5 text-xs">
			<li
				v-for="(task, i) in tasks"
				:key="i">
				{{ task }}
			</li>
		</ul>
	</div>
</template>
