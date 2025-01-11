<script setup lang="ts">
  import EPLogoLight from '../assets/logo.png';
  import EPLogoDark from '../assets/logo.png';

  const nuxtApp = useNuxtApp();
  const { t } = useI18n();
  // const { activeHeadings, updateHeadings } = useScrollspy();
  const links = computed(() => [
    {
      label: t('Services'),
      to: '#services',
      icon: 'i-heroicons-cube-transparent',
      active: false,
    },
    {
      label: t('Testimonials'),
      to: '#testimonials',
      icon: 'i-heroicons-academic-cap',
      active: false,
    },
    {
      label: t('AboutUs'),
      to: '#about',
      icon: 'i-heroicons-academic-cap',
      active: false,
    },
  ]);

  nuxtApp.hooks.hookOnce('page:finish', () => {
    updateHeadings([
      document.querySelector('#features'),
      document.querySelector('#testimonials'),
      document.querySelector('#faq'),
      document.querySelector('#about'),
    ]);
  });

  const routeToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  };
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <UColorModeImage
        width="400"
        height="100"
        :light="EPLogoLight"
        :dark="EPLogoDark"
      />
    </template>
    <template #right>
      <LanguageSwitcher />
      <UColorModeButton size="sm" />
      <UButton
        @click="routeToFooter()"
        :label="t('ContactUs')"
        color="white"
        variant="ghost"
        trailing-icon="i-heroicons-arrow-right-20-solid"
        class="hidden lg:flex"
      />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />
      <UDivider class="my-6" />
      <UButton
        :label="t('ContactUs')"
        color="white"
        block
        class="mb-3"
        to="#contact"
      />
    </template>
  </UHeader>
</template>
