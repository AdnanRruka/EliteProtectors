<script setup lang="ts">
  import { useLanguageStore } from '~/stores/stores';
  const { data: page } = await useAsyncData('index', () =>
    queryContent('/').findOne()
  );
  import aboutUsImg from '../assets/img/about-us-img.jpg';
  import epVision from '../assets/img/ep-vision.jpg';
  import epGoals from '../assets/img/goals.jpg';
  import epFounder from '../assets/img/founder.jpg';
  import epPersonalBodyguard from '../assets/img/epPersonalBodyguard.jpg';
  import epCelebrity from '../assets/img/epCelebrity.jpg';
  import epChildren from '../assets/img/epChildren.jpg';

  const { language } = useLanguageStore();
  //Example of Fetaure object
  // name: Secure
  // description: Proident nostrud excepteur sint ut culpa consectetur aute adipisicing.
  //icon: i - heroicons - lock - closed
  const { t } = useI18n();
  const ePGoalList = computed(() => [
    {
      name: t('EPGoalText1'),
    },
    {
      name: t('EPGoalText2'),
    },
    {
      name: t('EPGoalText3'),
    },
    {
      name: t('EPGoalText4'),
    },
    {
      name: t('EPGoalText5'),
    },
    {
      name: t('EPGoalText6'),
    },
  ]);

  const featuresList = computed(() => [
    {
      title: t('ProfessionalAndExperiencedStaffTitle'),
      description: t('ProfessionalAndExperiencedStaffDescription'),
      icon: 'i-heroicons-user-group',
    },
    {
      title: t('AdaptabilityTitle'),
      description: t('AdaptabilityDescription'),
      icon: 'i-heroicons-adjustments-horizontal',
    },
    {
      title: t('HighQualityServiceTitle'),
      description: t('HighQualityServiceDescription'),
      icon: 'i-heroicons-cog',
    },
    {
      title: t('EffectiveRiskManagementTitle'),
      description: t('EffectiveRiskManagementDescription'),
      icon: 'i-heroicons-rocket-launch',
    },
    {
      title: t('DiscretionAndIntegrityTitle'),
      description: t('DiscretionAndIntegrityDescription'),
      icon: 'i-heroicons-chart-bar',
    },
    {
      title: t('StandardTitle'),
      description: t('StandardDescription'),
      icon: 'i-heroicons-shield-check',
    },
  ]);

  const testimonialItems = computed(() => [
    {
      quote: t('Testimonial1Quote'),
      author: {
        name: t('Testimonial1Name'),
        description: t('Testimonial1Company'),
        avatar: {
          // src: "https://i.pravatar.cc/120?img=1",
          // loading: "lazy"
        },
      },
    },
    {
      quote: t('Testimonial2Quote'),
      author: {
        name: t('Testimonial2Company'),
        description: t('Testimonial2Name'),
      },
    },
    {
      quote: t('Testimonial3Quote'),
      author: {
        name: t('Testimonial3Name'),
      },
    },
    {
      quote: t('Testimonial4Quote'),
      author: {
        name: t('Testimonial4Name'),
      },
    },
    {
      quote: t('Testimonial5Quote'),
      author: {
        name: t('Testimonial5Name'),
      },
    },
    {
      quote: t('Testimonial6Quote'),
      author: {
        name: t('Testimonial6Company'),
      },
    },
  ]);
</script>

<template>
  <div>
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src="../assets/security.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <ULandingHero class="noto-sans-arabic ULandingHero">
      <template #headline> </template>
    </ULandingHero>

    <ULandingHero id="about" :title="t('AboutUs')">
      <!-- <ULandingSection
        :title="t('AboutUs')"
        :description="t('AboutText')"
        align="right"
      >
        <UColorModeImage
          class="w-full"
          :light="aboutUsImg"
          :dark="aboutUsImg"
        />
      </ULandingSection> -->

      <ULandingCard color="lime">
        <div class="flex gap-4 md:flex-row flex-col">
          <div class="flex-1 flex flex-col justify-center">
            <h2 class="text-3xl font-semibold">
              {{ t('AboutUs') }}
            </h2>
            <p class="mt-4 text-gray-500 dark:text-gray-400">
              {{ t('AboutText') }}
            </p>
          </div>
          <div class="flex-1">
            <img :src="aboutUsImg" class="w-full rounded-md" />
          </div>
        </div>
      </ULandingCard>

      <!-- <ULandingSection
        :title="t('EliteProtectorsVision')"
        :description="t('EPVisionText')"
        align="right"
      >
        <UColorModeImage
          class="w-full h-full"
          :light="epVision"
          :dark="epVision"
        />
      </ULandingSection> -->

      <ULandingCard color="rose">
        <div class="flex gap-4 md:flex-row flex-col">
          <div class="flex-1">
            <img :src="epVision" class="w-full rounded-md" />
          </div>
          <div class="flex-1 flex flex-col justify-center">
            <h2 class="text-3xl font-semibold">
              {{ t('EliteProtectorsVision') }}
            </h2>
            <p class="mt-4 text-gray-500 dark:text-gray-400">
              {{ t('EPVisionText') }}
            </p>
          </div>
        </div>
      </ULandingCard>
      <ULandingCard color="blue" class="md:flex-row flex-col">
        <ULandingSection
          class="p-0"
          :ui="{ body: { base: 'py-0' } }"
          :title="t('EliteProtectorsGoals')"
          align="left"
          :features="ePGoalList"
        >
          <UColorModeImage
            class="w-full h-full"
            :light="epGoals"
            :dark="epGoals"
          />
        </ULandingSection>
      </ULandingCard>
    </ULandingHero>

    <ULandingHero
      id="services"
      :title="t('OurServices')"
      :description="t('ServicesForYourNeeds')"
    >
      <!-- <ULandingSection
        :title="t('OSTitle1')"
        :description="t('OSText1')"
        :headline="t('OSDescription1')"
        align="left"
      >
        <UColorModeImage
          class="w-full h-full"
          :light="epPersonalBodyguard"
          :dark="epPersonalBodyguard"
        />
      </ULandingSection> -->
      <UPricingCard
        :title="t('OSTitle1')"
        style="
          background: url(/img/epPersonalBodyguard.jpg) no-repeat;
          background-size: cover;
          background-position: center;
        "
        :highlight="false"
        :ui="{
          price: {
            wrapper: 'hidden',
            container: 'hidden',
          },
          body: {
            base: 'bg-black bg-opacity-40 text-white',
          },
          description: 'text-md sm:text-base text-white dark:text-white mt-2 ',
          title: 'text-green',
          features: {
            item: {
              base: ' text-md flex items-center  min-w-0 text-white',
              label: ' text-xl text-white dark:text-white',
            },
          },
        }"
        :button="{
          label: t('ReadMore'),
          to: {
            path: '/personal-bodyguard-service',
          },
        }"
        orientation="vertical"
      />

      <!-- <ULandingSection
        :title="t('OSTitle2')"
        :description="t('OSText2')"
        :headline="t('OSDescription2')"
        align="center"
      >
        <UColorModeImage
          class="w-full h-full"
          :light="epCelebrity"
          :dark="epCelebrity"
        />
      </ULandingSection> -->

      <UPricingCard
        :title="t('OSTitle2')"
        :headline="t('OSTitle2')"
        style="
          background: url(/img/epCelebrity.jpg) no-repeat;
          background-size: cover;
          background-position: center;
        "
        :highlight="false"
        :ui="{
          price: {
            wrapper: 'hidden',
            container: 'hidden',
          },
          body: {
            base: 'bg-black bg-opacity-40 text-white',
          },
          description: 'text-md sm:text-base text-white dark:text-white mt-2 ',
          title: 'text-green',
          features: {
            item: {
              base: ' text-md flex items-center  min-w-0 text-white',
              label: ' text-xl text-white dark:text-white',
            },
          },
        }"
        :button="{
          label: t('ReadMore'),
          to: {
            path: '/celebrity-bodyguard-services',
          },
        }"
        orientation="vertical"
      />
      <!-- <ULandingSection
        :title="t('OSTitle3')"
        :description="t('OSText3')"
        :headline="t('OSDescription3')"
        align="center"
      >
        <UColorModeImage
          class="w-full h-full"
          :light="epChildren"
          :dark="epChildren"
        />
      </ULandingSection> -->

      <UPricingCard
        :title="t('OSTitle3')"
        :headline="t('OSTitle3')"
        style="
          background: url(/img/epChildren.jpg) no-repeat;
          background-size: cover;
          background-position: center;
        "
        :highlight="false"
        :ui="{
          price: {
            wrapper: 'hidden',
            container: 'hidden',
          },
          body: {
            base: 'bg-black bg-opacity-40 text-white',
          },
          description: 'text-md sm:text-base text-white dark:text-white mt-2 ',
          title: 'text-green',
          features: {
            item: {
              base: ' text-md flex items-center  min-w-0 text-white',
              label: ' text-xl text-white dark:text-white',
            },
          },
        }"
        :button="{
          label: t('ReadMore'),
          to: {
            path: '/bodyguard-for-children',
          },
        }"
        orientation="vertical"
      />
    </ULandingHero>

    <ULandingSection
      :title="t('WhyYouShouldChooseUs')"
      :description="t('WhyYouShouldChooseUsText')"
    >
      <UPageGrid
        id="features"
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <ULandingCard
          v-for="(item, index) in featuresList"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>
    <ULandingSection
      :headline="t('Testimonials')"
      :title="t('TestimonialsTitle')"
    >
      <UPageColumns
        id="testimonials"
        class="xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <div
          v-for="(testimonial, index) in testimonialItems"
          :key="index"
          class="break-inside-avoid"
        >
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
      <!-- <ULandingHero id="about" :title="t('Founder')">
       <ULandingSection
        :title="t('FounderName')" :headline="t('Founder')" 
        :description="t('AboutFounder')" align="left">
        <UColorModeImage class="w-full h-full" :light="epFounder" :dark="epFounder" />
      </ULandingSection>
    </ULandingHero> -->
    </ULandingSection>
  </div>
</template>

<style lang="css">
  .noto-sans-arabic {
    font-family: 'Noto Sans Arabic', sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-variation-settings: 'wdth' 100;
  }

  .ULandingHero {
    height: 100vh;
  }
</style>
