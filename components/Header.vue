<script setup lang="ts">
import { useLanguageStore } from '~/stores/stores';

const nuxtApp = useNuxtApp()
const { t } = useI18n();
const { activeHeadings, updateHeadings } = useScrollspy()
const { language } = useLanguageStore()
const links = computed(() => [{
  label: t('Services'),
  to: '#features',
  icon: 'i-heroicons-cube-transparent',
  active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('about')
},
{
  label: t('Testimonials'),
  to: '#testimonials',
  icon: 'i-heroicons-academic-cap',
  active: activeHeadings.value.includes('testimonials')
},
{
  label: t('AboutUs'),
  to: '#about',
  icon: 'i-heroicons-academic-cap',
  active: activeHeadings.value.includes('about')
}, {
  label: t('FAQ'),
  to: '#faq',
  icon: 'i-heroicons-question-mark-circle',
  active: activeHeadings.value.includes('faq')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    // document.querySelector('#pricing'),
    document.querySelector('#testimonials'),
    document.querySelector('#faq'),
    document.querySelector('#about')

  ])
})
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <UBadge label="EliteProtectors" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <LanguageSwitcher />

      <UColorModeButton size="sm" />
      <UButton :label="t('ContactUs')" color="white" variant="ghost"
        trailing-icon="i-heroicons-arrow-right-20-solid" class="hidden lg:flex" />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />
      <UDivider class="my-6" />
      <UButton :label="t('ContactUs')" color="white" block class="mb-3" />
      <!-- <UButton label="Get started" block /> -->
    </template>
  </UHeader>
</template>
