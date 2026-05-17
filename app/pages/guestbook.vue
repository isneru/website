<script lang="ts" setup>
import { ref } from 'vue'
import { getSeoMeta, timeAgo } from '@@/utils'

useSeoMeta(getSeoMeta())

const name = ref('')
const message = ref('')
const token = ref('')
const submitting = ref(false)
const error = ref('')

const {
	data: entries,
	error: fetchError,
	status
} = await useLazyFetch('/api/guestbook', { server: false })

const submit = async () => {
	error.value = ''

	if (!name.value.trim() || !message.value.trim() || !token.value) {
		error.value = token.value
			? 'both fields are required'
			: 'please complete the captcha check'
		return
	}

	submitting.value = true

	try {
		await useFetch('/api/guestbook', {
			method: 'POST',
			body: { name: name.value, message: message.value, token: token.value }
		})
		name.value = message.value = token.value = ''
		await refreshNuxtData()
	} catch (e: any) {
		error.value = e?.data?.error || 'something went wrong'
	}

	submitting.value = false
}

definePageMeta({
	layout: 'default'
})
</script>

<template>
	<PageTitle title="guestbook" />

	<form @submit.prevent="submit" class="mb-12 space-y-3">
		<input
			v-model="name"
			placeholder="name"
			maxlength="24"
			class="border-border text-foreground placeholder:text-muted-foreground focus:border-primary w-full border-b bg-transparent py-2 font-mono text-sm transition-colors outline-none" />
		<input
			v-model="message"
			placeholder="message"
			maxlength="240"
			class="border-border text-foreground placeholder:text-muted-foreground focus:border-primary w-full resize-none border-b bg-transparent py-2 font-mono text-sm transition-colors outline-none" />
		<NuxtTurnstile :options="{ language: 'en' }" v-model="token" />
		<div class="space-y-1">
			<button
				type="submit"
				:disabled="submitting"
				class="text-muted-foreground hover:text-primary font-mono text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50">
				{{ submitting ? 'sending...' : 'submit →' }}
			</button>
			<p v-if="error" class="font-mono text-xs text-red-400">{{ error }}</p>
		</div>
	</form>

	<p
		v-if="status !== 'success' && !fetchError"
		class="text-muted-foreground font-mono text-sm">
		loading...
	</p>
	<p v-else-if="fetchError" class="font-mono text-sm text-red-400">
		something went wrong. try again later.
	</p>
	<div v-else class="w-full space-y-6">
		<p v-if="!entries?.length" class="text-muted-foreground font-mono text-sm">
			no entries yet. be the first.
		</p>
		<div v-else v-for="entry in entries" :key="entry.id" class="space-y-1">
			<p class="text-foreground text-sm whitespace-pre-wrap">
				{{ entry.message }}
			</p>
			<p class="text-muted-foreground font-mono text-xs">
				{{ entry.name }} · {{ timeAgo(entry.created_at!) }}
			</p>
		</div>
	</div>
</template>
