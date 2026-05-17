<script lang="ts" setup>
import { getSeoMeta, me as info } from '@@/utils'

useSeoMeta(getSeoMeta())

definePageMeta({
	layout: 'cv'
})

const me = info('pt')

const skillRows = Object.entries(me.skills).map(([label, items]) => ({
	label,
	value: items.join(', ')
}))

const skillPad = Math.max(...skillRows.map(s => s.label.length))
</script>

<template>
	<div class="flex items-start justify-between gap-6">
		<div>
			<NuxtLink
				href="/"
				class="text-foreground hover:text-primary text-2xl transition-colors">
				{{ me.name }}
			</NuxtLink>
			<p class="text-muted-foreground mt-2">{{ me.about }}</p>
		</div>
		<nav class="flex gap-3 print:hidden">
			<NuxtLink
				href="/cv/en"
				class="text-muted-foreground hover:text-primary transition-colors">
				en
			</NuxtLink>
			<NuxtLink href="/cv/pt" class="text-primary"> pt </NuxtLink>
		</nav>
	</div>

	<Divider />
	<CurriculumHeader />
	<Divider />

	<div class="grid gap-12 lg:grid-cols-2">
		<div>
			<section>
				<CurriculumHeading :h="me.sections[0]" />
				<CurriculumEntry
					v-for="(entry, i) in me.career"
					:key="i"
					:organization="entry.organization"
					:location="entry.location"
					:field="entry.field"
					:start="entry.start"
					:end="entry.end" />
			</section>

			<div class="h-8" />

			<section>
				<CurriculumHeading :h="me.sections[1]" />
				<CurriculumEntry
					v-for="(entry, i) in me.education"
					:key="i"
					:organization="entry.organization"
					:location="entry.location"
					:field="entry.field"
					:start="entry.start"
					:end="entry.end" />
			</section>

			<div class="h-8" />

			<section>
				<CurriculumHeading :h="me.sections[2]" />
				<CurriculumEntry
					v-for="(entry, i) in me.internships"
					:key="i"
					:organization="entry.organization"
					:location="entry.location"
					:field="entry.field"
					:start="entry.start"
					:end="entry.end"
					:tasks="entry.tasks" />
			</section>
		</div>

		<div>
			<section>
				<CurriculumHeading :h="me.sections[3]" />
				<div class="text-muted-foreground space-y-1 font-mono">
					<div v-for="row in skillRows" :key="row.label" class="flex gap-2">
						<span class="text-foreground whitespace-pre">{{
							row.label.padEnd(skillPad, ' ')
						}}</span>
						<span>→</span>
						<span class="flex-1">{{ row.value }}</span>
					</div>
				</div>
			</section>

			<div class="h-8" />

			<section>
				<CurriculumHeading :h="me.sections[4]" />
				<CurriculumRow
					v-for="(lang, i) in me.langs"
					:key="i"
					:label="lang.title"
					:value="lang.level" />
			</section>

			<div class="h-8" />

			<section>
				<CurriculumHeading :h="me.sections[5]" />
				<CurriculumRow
					v-for="(cert, i) in me.certificates"
					:key="i"
					:label="cert" />
			</section>

			<div class="h-8" />

			<section>
				<CurriculumHeading :h="me.sections[6]" />
				<CurriculumRow
					v-for="(ach, i) in me.achievements"
					:key="i"
					:label="ach.title"
					:value="ach.date" />
			</section>
		</div>
	</div>
</template>
