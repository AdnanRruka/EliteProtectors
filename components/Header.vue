<script setup lang="ts">
import EPLogoLight from '../assets/EPLogoDark.png'
import EPLogoDark from '../assets/EPLogoDark.png'


const nuxtApp = useNuxtApp()
const { t } = useI18n();
const { activeHeadings, updateHeadings } = useScrollspy()
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
}
])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#testimonials'),
    document.querySelector('#faq'),
    document.querySelector('#about')

  ])
})

const routeToFooter =()=>{
  const footerElement = document.getElementById("footer");
  if (footerElement) {
    footerElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
  }
}
</script>

<template>
  <UHeader :links="links">
    <template #logo>
     <UColorModeImage  width="300" height="100"   :light="EPLogoLight" :dark="EPLogoDark" />
    </template>
    <template #right>
      <LanguageSwitcher />
      <UColorModeButton size="sm" />
      <UButton @click="routeToFooter()" :label="t('ContactUs')" color="white" variant="ghost"
        trailing-icon="i-heroicons-arrow-right-20-solid" class="hidden lg:flex" />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />
      <UDivider class="my-6" />
      <UButton :label="t('ContactUs')" color="white" block class="mb-3" />
    </template>
  </UHeader>
</template>
