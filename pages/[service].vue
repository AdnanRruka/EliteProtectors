<script setup lang="ts">
  import EPLogo from '@/assets/logo1.svg';

  const route = useRoute();
  interface Service {
    serviceWeProvideTitle?: string;
    serviceImg?: string;
    serviceWeProvideDescription?: string;
    servicesWeProvide?: Array<{
      icon?: string;
      name: string;
      description?: string;
    }>;
    name: string;
    description: string;
    img: string;
    img2?: string;
    videoOrImg?: string;
    featureTitle?: string;
    featureDescription?: string;
    features: Array<
      | {
          icon?: string;
          name: string;
          description?: string;
        }
      | string
    >;
    questions: Array<{
      label: string;
      content: string;
    }>;
  }
  const { t } = useI18n();

  const services = computed(() => [
    {
      name: t('OSTitle1'),
      type: 'personal-bodyguard-service',
      description: t('OSDescription1'),
      img: '/img/epPersonalBodyguard.jpg',
      img2: '/img/pd2.jpg',
      serviceImg: '/img/epPersonalBodyguard.jpg',
      serviceWeProvideTitle: t('OSTitle1'),
      serviceWeProvideDescription: t('OSText1'),
      servicesWeProvide: [],
    },
    {
      name: t('OSTitle2'),
      type: 'celebrity-bodyguard-services',
      description: t('OSDescription2'),
      img: '/img/c3.jpg',
      img2: '/img/celebrity.jpg',
      serviceImg: '/img/epCelebrity.jpg',
      serviceWeProvideTitle: t('OSTitle2'),
      serviceWeProvideDescription: t('OSText2'),
    },
    {
      name: t('OSTitle3'),
      type: 'bodyguard-for-children',
      description: t('OSDescription3'),
      img: '/img/family.jpg',
      img2: '/img/epChildren.jpg',
      serviceImg: '/img/ep-vision.jpg',
      serviceWeProvideTitle: t('OSTitle3'),
      serviceWeProvideDescription: t('OSText3'),
    },
  ]);

  const currentService = computed<Service | undefined>(() => {
    return services.value.find(
      (service) =>
        service.type.toLowerCase().replace(' ', '') === route.params.service
    );
  });
</script>

<template>
  <div v-if="currentService">
    <img
      v-if="currentService"
      class="absolute inset-0 w-[200px] h-[100px] top-[10%] left-[1%] z-10 hidden lg:block"
      :src="EPLogo"
    />
    <img
      v-if="currentService"
      class="absolute inset-0 w-full h-full object-cover z-0"
      :src="currentService.img"
    />

    <ULandingHero
      class="overlay"
      :ui="{
        title:
          'text-4xl font-bold tracking-tight sm:text-5xl text-white dark:text-white',
        description: 'mt-4 text-lg text-white dark:text-white',
      }"
      :title="currentService.name"
      :description="currentService.description"
      orientation="vertical"
      :links="[
        {
          label: t('ContactUs'),
          color: 'gray',
          size: 'lg',
          to: '#contact',
        },
      ]"
    >
      <template #default>
        <img
          v-if="currentService.img2"
          :src="currentService.img2"
          class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700 max-h-[700px] object-cover"
        />
      </template>
    </ULandingHero>

    <ULandingSection
      class="mt-[40%] xs:mt-[70%] SM:mt-[80%]"
      :title="currentService.serviceWeProvideTitle"
      :description="currentService.serviceWeProvideDescription"
      align="right"
      :features="currentService.servicesWeProvide"
    >
      <img
        :src="currentService.serviceImg"
        class="w-full h-full object-cover z-0 rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700 max-h-[700px]"
      />
    </ULandingSection>
  </div>
</template>

<style scoped>
  .overlay {
    height: 94.5vh;
    color: white !important;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust darkness */
    z-index: 1; /* Place it above the video but below the content */
  }
</style>
