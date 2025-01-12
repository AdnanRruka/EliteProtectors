<script setup lang="ts">
  import EPLogoLight from '../assets/logo.png';
  import EPLogoDark from '../assets/logo.png';

  const nuxtApp = useNuxtApp();
  const { t } = useI18n();
  // const { activeHeadings, updateHeadings } = useScrollspy();
  const links = computed(() => [
    {
      label: t('Services'),
      to: useRoute().path === '/' ? '#services' : '/#services',
      active: false,
    },
    {
      label: t('Testimonials'),
      to: useRoute().path === '/' ? '#testimonials' : '/#testimonials',
      active: false,
    },
    {
      label: t('AboutUs'),
      to: '#about',
      active: false,
    },
  ]);

  nuxtApp.hooks.hookOnce('page:finish', () => {
    const headings = [
      document.querySelector('#services'),
      document.querySelector('#testimonials'),
      document.querySelector('#about'),
    ];
    if (headings.every((heading) => heading)) {
      useScrollspy().updateHeadings(headings);
    }
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
        width="100"
        height="100"
        :light="EPLogoLight"
        :dark="EPLogoDark"
      />
    </template>
    <template #right>
      <UColorModeButton size="sm" />
      <UButton
        @click="routeToFooter()"
        :label="t('ContactUs')"
        color="white"
        variant="ghost"
        trailing-icon="i-heroicons-arrow-right-20-solid"
        class="hidden lg:flex"
      />
      <LanguageSwitcher class="hidden lg:block" />
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

      <LanguageSwitcher />
    </template>
  </UHeader>
</template>
