<script setup lang="ts">
import type { NuxtError } from '#app'

const quotes404 = [
	'this page got lost in the void.',
	'404? more like 4-oops.',
	"the meows couldn't find what you're looking for.",
	"it's not you. it's the URL.",
	'404. a digital ghost town.',
	'oops. this page went to take a nap.',
	'this page is on vacation.',
	'this page is taking a coffee break.'
]

const quote404 = quotes404[Math.floor(Math.random() * quotes404.length)]

const props = defineProps({
	error: Object as () => NuxtError
})
</script>

<template>
	<NuxtLayout v-if="error"">
		<PageTitle :title="error.statusCode.toString()" />
			<p class="text-muted-foreground">
				{{
					error.statusCode === 404
						? quote404
						: "well that wasn't supposed to happen"
				}}
			</p>
			<NuxtLink
				to="/"
				class="mt-6 inline-block text-primary hover:opacity-80 transition-opacity"
				variant="button">
				← home
			</NuxtLink>
	</NuxtLayout>
</template>
