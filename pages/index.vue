<script setup lang="ts">
import { useLanguageStore } from '~/stores/stores';
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

const { language } = useLanguageStore()
//Example of Fetaure object
// name: Secure
// description: Proident nostrud excepteur sint ut culpa consectetur aute adipisicing.
//icon: i - heroicons - lock - closed
const { t } = useI18n();
const ePGoalList = [{
  name: t('EPGoalText1'),
},
{
  name: t('EPGoalText2'),
},
{
  name: t('EPGoalText3'),
}
  ,
{
  name: t('EPGoalText4'),
}
  ,
{
  name: t('EPGoalText5'),
}
  ,
{
  name: t('EPGoalText6'),
}]

const featuresList = [{
  title: t('Affordable'),
  description: t('AffordableDescription'),
  icon: 'i-heroicons-cog'
},
{
  name: t('EPGoalText2'),
},
{
  name: t('EPGoalText3'),
}
  ,
{
  name: t('EPGoalText4'),
}
  ,
{
  name: t('EPGoalText5'),
}
  ,
{
  name: t('EPGoalText6'),
}]

const light = 'https://source.unsplash.com/random/200x200?sky'
const dark = 'https://source.unsplash.com/random/200x200?stars'
</script>

<template>
  <div>
    <ULandingHero class="noto-sans-arabic" :title="t('YourRelaibleProtectorCompany')">
      <template #headline>
        <UBadge v-if="language.WhenProtectionMatters" variant="subtle" size="lg"
          class="relative rounded-full font-semibold">
          <!-- <NuxtLink target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink> -->

          {{ t('WhenProtectionMatters') }}

          <!-- <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon" class="ml-1 w-4 h-4 pointer-events-none" /> -->
        </UBadge>
      </template>

      <Placeholder />

      <ULandingLogos :title="page.logos.title" align="center">
        <UIcon v-for="icon in page.logos.icons" :key="icon" :name="icon"
          class="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white" />
      </ULandingLogos>
    </ULandingHero>



    <ULandingHero id="about" :title="t('AboutUs')">
      <ULandingSection :title="t('FounderName')" :headline="t('Founder')"
        :description="t('AboutText')" align="left">
        <UColorModeImage class="w-full h-full" :light="light" :dark="dark" />
      </ULandingSection>
      <ULandingSection :title="t('EliteProtectorsVision')"
        :description="t('EPVisionText')" align="right">
        <UColorModeImage class="w-full h-full" :light="light" :dark="dark" />
      </ULandingSection>
      <ULandingSection :title="t('EliteProtectorsGoals')" align="left"
        :features="ePGoalList">
        <UColorModeImage class="w-full h-full" :light="light" :dark="dark" />
      </ULandingSection>
    </ULandingHero>


    <ULandingHero id="our-services" :title="t('OurServices')"
      :description="t('ServicesForYourNeeds')">
      <ULandingSection :title="t('OSTitle1')" :description="t('OSText1')"
        :headline="t('OSDescription1')" align="left">
        <UColorModeImage class="w-full h-full" :light="light" :dark="dark" />
      </ULandingSection>
      <ULandingSection :title="t('OSTitle2')" :description="t('OSText2')"
        :headline="t('OSDescription2')" align="right">
        <UColorModeImage class="w-full h-full" :light="light" :dark="dark" />
      </ULandingSection>
      <ULandingSection :title="t('OSTitle3')" :description="t('OSText3')"
        :headline="t('OSDescription3')" align="left">
        <UColorModeImage class="w-full h-full" :light="light" :dark="dark" />
      </ULandingSection>
    </ULandingHero>




    <ULandingSection :title="t('WhyYouShouldChooseUs')"
      :description="t('WhyYouShouldChooseUsText')">
      <UPageGrid id="features"
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <ULandingCard v-for="(  item, index  ) in   featuresList  " :key="index"
          v-bind="item" />
      </UPageGrid>
    </ULandingSection>

    <!-- <ULandingSection :title="page.pricing.title" :description="page.pricing.description"
      :headline="page.pricing.headline">
      <UPricingGrid id="pricing" compact
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <UPricingCard v-for="(plan, index) in page.pricing.plans" :key="index"
          v-bind="plan" />
      </UPricingGrid>
    </ULandingSection> -->

    <ULandingSection :headline="page.testimonials.headline"
      :title="page.testimonials.title" :description="page.testimonials.description">
      <UPageColumns id="testimonials"
        class="xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <div v-for="(  testimonial, index  ) in   page.testimonials.items  " :key="index"
          class="break-inside-avoid">
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
    </ULandingSection>

    <ULandingSection class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10">
      <ULandingCTA v-bind="page.cta" :card="false" />
    </ULandingSection>

    <ULandingSection id="faq" :title="page.faq.title" :description="page.faq.description"
      class="scroll-mt-[var(--header-height)]">
      <ULandingFAQ multiple :items="page.faq.items" :ui="{
      button: {
        label: 'font-semibold',
        trailingIcon: {
          base: 'w-6 h-6'
        }
      }
    }" class="max-w-4xl mx-auto" />
    </ULandingSection>
  </div>
</template>

<style lang="css">
.noto-sans-arabic {
  font-family: "Noto Sans Arabic", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}
</style>
