<script lang="ts" setup>
import { me } from '@@/utils'

const { info } = me('en')
</script>

<template>
	<div class="text-muted-foreground grid gap-x-8 gap-y-2 md:grid-cols-2">
		<DynamicSpan
			v-for="({ Icon, text, href }, id) in info"
			:href="href"
			:key="id">
			<component :is="Icon" :stroke-width="2" />
			{{ text }}
		</DynamicSpan>
	</div>
</template>
