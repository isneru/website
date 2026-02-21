<script lang="ts" setup>
import { getSeoMeta, me as info } from '@@/utils'

useSeoMeta(getSeoMeta())

definePageMeta({
	layout: 'unrestricted-width'
})

const me = info('pt')
</script>

<template>
	<div
		class="prose-xl prose-invert prose-h3:m-[24px_0_8px_0] mx-auto px-8 lg:px-0">
		<h1>
			<NuxtLink
				class="decoration-burnt-sienna-1 font-bold hover:underline"
				href="/">
				{{ me.name }}
			</NuxtLink>
		</h1>
		<h2>{{ me.about }}</h2>
		<CurriculumHeader />
		<div class="lg:grid lg:grid-cols-2 lg:gap-10">
			<div>
				<h2 id="Career" class="text-gunmetal relative font-bold">
					<span
						class="text-burnt-sienna-1 absolute top-2 -left-5 rounded-full text-xl">
						#
					</span>
					{{ me.sections[0] }}
				</h2>
				<div v-for="(job, id) in me.career" :key="id" class="mb-6">
					<h3 class="text-burnt-sienna-1 font-medium">
						{{ job.organization }}
					</h3>
					<div class="opacity-80">{{ job.location }}</div>
					<div class="italic opacity-70">{{ job.field }}</div>
					<LineSpans :start="job.start" :end="job.end" />
				</div>
				<h2 id="Education" class="text-gunmetal relative font-bold">
					<span
						class="text-burnt-sienna-1 absolute top-2 -left-5 rounded-full text-xl">
						#
					</span>
					{{ me.sections[1] }}
				</h2>
				<div v-for="(step, id) in me.education" :key="id" class="mb-6">
					<h3 class="text-burnt-sienna-1 font-medium">
						{{ step.organization }}
					</h3>
					<div class="opacity-80">{{ step.location }}</div>
					<div class="italic opacity-70">{{ step.field }}</div>
					<LineSpans :start="step.start" :end="step.end" />
				</div>
				<h2 id="Internships" class="text-gunmetal relative font-bold">
					<span
						class="text-burnt-sienna-1 absolute top-2 -left-5 rounded-full text-xl">
						#
					</span>
					{{ me.sections[2] }}
				</h2>
				<div v-for="(internship, id) in me.internships" :key="id" class="mb-6">
					<h3 class="text-burnt-sienna-1 font-medium">
						{{ internship.organization }}
					</h3>
					<div class="opacity-80">{{ internship.location }}</div>
					<div class="italic opacity-70">{{ internship.field }}</div>
					<LineSpans :start="internship.start" :end="internship.end" />
					<ul class="mt-3 list-disc">
						<li
							v-for="(task, id) in internship.tasks"
							:key="id"
							class="my-2 px-0 leading-snug">
							{{ task }}
						</li>
					</ul>
				</div>
			</div>
			<div>
				<h2 id="Skills" class="text-gunmetal relative font-bold">
					<span
						class="text-burnt-sienna-1 absolute top-2 -left-5 rounded-full text-xl">
						#
					</span>
					{{ me.sections[3] }}
				</h2>
				<div
					v-for="section in Object.keys(me.skills)"
					:key="section"
					class="pt-2">
					<span
						class="decoration-burnt-sienna-1 font-semibold underline decoration-wavy">
						{{ section }}
					</span>
					{{ ': ' }}
					<span>
						{{ me.skills[section as keyof typeof me.skills].join(', ') }}
					</span>
				</div>
				<h2 id="Languages" class="text-gunmetal relative font-bold">
					<span
						class="text-burnt-sienna-1 absolute top-2 -left-5 rounded-full text-xl">
						#
					</span>
					{{ me.sections[4] }}
				</h2>
				<LineSpans
					v-for="language in me.langs"
					:key="language.title"
					:start="language.title"
					:end="language.level" />
				<h2 id="Certificates" class="text-gunmetal relative font-bold">
					<span
						class="text-burnt-sienna-1 absolute top-2 -left-5 rounded-full text-xl">
						#
					</span>
					{{ me.sections[5] }}
				</h2>
				<span v-for="(certificate, id) in me.certificates" :key="id">{{
					certificate
				}}</span>
				<h2 id="Achievements" class="text-gunmetal relative font-bold">
					<span
						class="text-burnt-sienna-1 absolute top-2 -left-5 rounded-full text-xl">
						#
					</span>
					{{ me.sections[6] }}
				</h2>
				<LineSpans
					v-for="(achievement, id) in me.achievements"
					:key="id"
					:start="achievement.title"
					:end="achievement.date" />
			</div>
		</div>
	</div>
</template>
