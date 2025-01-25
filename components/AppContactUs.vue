<template>
  <ULandingSection id="contact" class="bg-gray-50 dark:bg-gray-900">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
        {{ $t('ContactUs') }}
      </h2>

      <div class="flex flex-col items-center mt-8">
        <span class="text-xl font-medium">Mosab Moaiql</span>
        <span class="text-sm text-gray-600 dark:text-gray-400 mt-1">CEO</span>
        <div
          class="flex items-center gap-x-3 mt-4 hover:transform hover:scale-105 transition-transform"
        >
          <UIcon name="i-heroicons-phone" class="w-6 h-6 text-primary-500" />
          <a href="tel:+46762466448" class="text-lg hover:text-primary-500"
            >+46 72 313 3511</a
          >
        </div>
        <div
          class="flex items-center gap-x-3 mt-2 hover:transform hover:scale-105 transition-transform"
        >
          <UIcon name="i-heroicons-envelope" class="w-6 h-6 text-primary-500" />
          <a
            href="mailto:joakim@takspecialistenisyd.com"
            class="text-lg hover:text-primary-500"
          >
            mosab.moaiql@gmail.com
          </a>
        </div>
      </div>
    </div>
  </ULandingSection>
</template>
