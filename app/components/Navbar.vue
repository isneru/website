<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pathname = computed(() => route.path)

const routes = [
	{
		label: 'stack',
		to: '/stack'
	},
	{
		label: 'guestbook',
		to: '/guestbook'
	},
	{
		label: 'cv',
		to: '/cv'
	}
]
</script>

<template>
	<nav class="mx-auto max-w-2xl px-6 pt-10 pb-16 text-sm" role="navigation">
		<div class="flex items-center justify-between">
			<NuxtLink
				aria-label="home"
				class="text-foreground hover:text-primary transition-colors"
				active-class="text-primary"
				to="/">
				neru
			</NuxtLink>

			<ul class="text-muted-foreground flex gap-6">
				<li v-for="(route, idx) in routes" :key="idx">
					<NuxtLink
						:aria-label="`go to ${route.label} page`"
						:to="route.to"
						active-class="text-primary"
						:class="{ 'text-primary': route.active }"
						class="hover:text-primary transition-colors">
						{{ route.label }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>
