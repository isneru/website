<script lang="ts" setup>
import { age, getSeoMeta, fetchUserRepos, projects } from '@@/utils'
useSeoMeta(getSeoMeta())
</script>

<template>
	<p class="text-foreground text-2xl">Diogo Nogueira</p>
	<p class="text-muted-foreground mt-2">
		a frontend developer who chose to hard code his life
	</p>

	<div class="mt-16">
		<h2 class="text-foreground mb-10 text-base">projects</h2>
		<ul class="space-y-6">
			<Project
				v-for="project in projects"
				:key="project.id"
				:project="project" />
		</ul>
	</div>
</template>
