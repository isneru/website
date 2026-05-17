<script lang="ts" setup>
import { type Repository } from '@@/utils'

type Props = {
	project: Repository
}

const { project } = defineProps<Props>()
</script>

<template>
	<li class="group">
		<a
			:href="project.url"
			class="text-foreground group-hover:text-primary my-5 transition-colors"
			target="_blank"
			rel="noreferrer">
			{{ project.name }}
		</a>
		<p class="text-muted-foreground mt-1">{{ project.desc }}</p>
		<p v-if="project.langs.length == 1" class="text-muted-foreground mt-1">
			language:
			{{ project.langs[0].toUpperCase() }}
		</p>
		<p v-else-if="project.langs.length > 1" class="text-muted-foreground mt-1">
			languages:
			{{ project.langs.join(', ').toUpperCase() }}
		</p>
		<p v-else class="text-muted-foreground mt-1">languages not specified</p>
	</li>
</template>
