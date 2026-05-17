<script lang="ts" setup>
import { age, getSeoMeta, fetchUserRepos } from '@@/utils'

useSeoMeta(getSeoMeta())

const groups: { key: string; items: [string, string][] }[] = [
	{
		key: 'languages',
		items: [
			['main', 'javascript'],
			['rest', 'c, c++, java, php, nix']
		]
	},
	{
		key: 'systems',
		items: [
			['os', 'posix, nixos, win11'],
			['embedded', 'xmc, raspberry pi, arduino']
		]
	},
	{
		key: 'tools',
		items: [
			['editor', 'neovim, vscode'],
			['multiplexer', 'tmux']
		]
	}
]
</script>

<template>
	<PageTitle title="stack" />
	<div class="space-y-8">
		<section v-for="group in groups" :key="group.key">
			<h2 class="text-foreground mb-2">{{ group.key }}</h2>
			<dl class="space-y-1">
				<div
					v-for="[k, v] in group.items"
					:key="k"
					class="grid grid-cols-[140px_1fr] gap-4">
					<dt class="text-muted-foreground">{{ k }}</dt>
					<dd class="text-foreground">{{ v }}</dd>
				</div>
			</dl>
		</section>
	</div>
</template>
