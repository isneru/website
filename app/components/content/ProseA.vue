<script lang="ts" setup>
interface Props {
	id?: string
	href?: string
}

const props = defineProps<Props>()

function cleanURL(url: string) {
	return url.replace(/^(https?:\/\/|www\.|\/)/i, '').replace(/\/+$/, '')
}
</script>

<template>
	<a
		:href="`${props.href}`"
		:id="props.id"
		class="hover:text-burnt-sienna-1 font-bold transition-colors hover:underline">
		<slot />
		<span class="text-sm font-normal">{{
			` (${cleanURL(props.href?.toLowerCase() ?? '#')})`
		}}</span>
	</a>
</template>
