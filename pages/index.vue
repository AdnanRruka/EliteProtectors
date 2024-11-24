<script setup lang="ts">
import { useLanguageStore } from '~/stores/stores';
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
import aboutUsImg from '../assets/New/about-us-img.jpg'
import epVision from '../assets/New/ep-vision.jpg'
import epGoals from '../assets/New/goals.jpg'
import epFounder from '../assets/New/founder.jpg'
import epPersonalBodyguard from '../assets/New/epPersonalBodyguard.jpg'
import epCelebrity from '../assets/New/epCelebrity.jpg'
import epChildren from '../assets/New/epChildren.jpg'

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
  title: t('ProfessionalAndExperiencedStaffTitle'),
  description: t('ProfessionalAndExperiencedStaffDescription'),
  icon: 'i-heroicons-user-group'
},
{
  title: t('AdaptabilityTitle'),
  description: t('AdaptabilityDescription'),
  icon: 'i-heroicons-adjustments-horizontal'
  },
  {
  title: t('HighQualityServiceTitle'),
  description: t('HighQualityServiceDescription'),
    icon: 'i-heroicons-cog'
  },
  {
  title: t('EffectiveRiskManagementTitle'),
  description: t('EffectiveRiskManagementDescription'),
  icon: 'i-heroicons-rocket-launch'
  },
  {
  title: t('DiscretionAndIntegrityTitle'),
  description: t('DiscretionAndIntegrityDescription'),
  icon: 'i-heroicons-chart-bar'
  },
  {
  title: t('StandardTitle'),
  description: t('StandardDescription'),
  icon: 'i-heroicons-shield-check'
  },
]


const testimonialItems= [
  {
  quote: t('Testimonial1Quote'),
      author: {
        name: t('Testimonial1Name'),
        description: t('Testimonial1Company'),
        avatar: {    
          // src: "https://i.pravatar.cc/120?img=1",
          // loading: "lazy"
        }
      }
},
{
  quote: t('Testimonial2Quote'),
      author: {
        name: t('Testimonial2Company'),
        description: t('Testimonial2Name'),
      }
},
{
  quote: t('Testimonial3Quote'),
      author: {
        name: t('Testimonial3Name'),
      }
},
{
  quote: t('Testimonial4Quote'),
      author: {
        name: t('Testimonial4Name'),
      }
},
{
  quote: t('Testimonial5Quote'),
      author: {
        name: t('Testimonial5Name'),
      }
},
{
  quote: t('Testimonial6Quote'),
      author: {
        name: t('Testimonial6Company'),
      }
}
]

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
    <ULandingHero class="noto-sans-arabic ULandingHero" :title="t('YourRelaibleProtectorCompany')">

    
    <!-- <div class="absolute inset-0 bg-black/40 z-10"></div> -->
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

      <!-- <Placeholder /> -->

      <ULandingLogos :title="page.logos.title" align="center">
        <UIcon v-for="icon in page.logos.icons" :key="icon" :name="icon"
          class="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white" />
      </ULandingLogos>
    </ULandingHero>



    <ULandingHero id="about" :title="t('AboutUs')">
      <ULandingSection :title="t('AboutUs')" :description="t('AboutText')" align="right">
        <UColorModeImage   class="w-full " :light="aboutUsImg" :dark="aboutUsImg" />
      </ULandingSection>
      <ULandingSection :title="t('EliteProtectorsVision')"
        :description="t('EPVisionText')" align="right">
        <UColorModeImage class="w-full h-full" :light="epVision" :dark="epVision" />
      </ULandingSection>
      <ULandingSection :title="t('EliteProtectorsGoals')" align="left"
        :features="ePGoalList">
        <UColorModeImage class="w-full h-full" :light="epGoals" :dark="epGoals" />
      </ULandingSection>
    </ULandingHero>

    <ULandingHero
      id="our-services" :title="t('OurServices')"
      :description="t('ServicesForYourNeeds')">
      <ULandingSection
        :title="t('OSTitle1')" :description="t('OSText1')"
        :headline="t('OSDescription1')" align="left">
        <UColorModeImage class="w-full h-full" :light="epPersonalBodyguard" :dark="epPersonalBodyguard" />
      </ULandingSection>
      <ULandingSection :title="t('OSTitle2')" :description="t('OSText2')"
        :headline="t('OSDescription2')" align="center">
        <UColorModeImage class="w-full h-full" :light="epCelebrity" :dark="epCelebrity" />
      </ULandingSection>
      <ULandingSection :title="t('OSTitle3')" :description="t('OSText3')"
        :headline="t('OSDescription3')" align="center">
        <UColorModeImage class="w-full h-full" :light="epChildren" :dark="epChildren" />
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
    <ULandingSection :headline="t('Testimonials')"
      :title="t('TestimonialsTitle')" >
      <UPageColumns id="testimonials"
        class="xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <div v-for="(  testimonial, index  ) in   testimonialItems  " :key="index"
          class="break-inside-avoid">
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
      <ULandingHero id="about" :title="t('Founder')">
       <ULandingSection
        :title="t('FounderName')" :headline="t('Founder')" 
        :description="t('AboutFounder')" align="left">
        <UColorModeImage class="w-full h-full" :light="epFounder" :dark="epFounder" />
      </ULandingSection>
    </ULandingHero>
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


.ULandingHero {
  height: 100vh;
}
</style>
