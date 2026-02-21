<script lang="ts" setup>
type Props = {
	start: string
	end: string
}

const { start, end } = defineProps<Props>()
</script>
<template>
	<span class="flex w-full items-center justify-between">
		<span class="bg-antiflash-white pr-2 text-nowrap">{{ start }}</span>
		<span class="h-[3px] w-full bg-[url('/pattern.svg')] bg-repeat-space" />
		<span class="bg-antiflash-white pl-2 text-nowrap">{{ end }}</span>
	</span>
</template>
