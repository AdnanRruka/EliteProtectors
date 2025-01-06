<script setup lang="ts">
  const { data: page } = await useAsyncData('index', () =>
    queryContent('/').findOne()
  );

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
  const currentService = computed<Service | undefined>(() => {
    return services.value.find(
      (service) =>
        service.name.toLowerCase().replace(' ', '') === route.params.service
    );
  });

  const services = ref([
    {
      name: 'Papptak',
      description: 'Högkvalitativt tätskikt för platta och låglutande tak',
      img: '/img/papptak.png',
      img2: '/img/papptak2.png',
      videoOrImg: '/img/feature-video.mp4',
      featureTitle: 'Fördelar med papptak',
      serviceImg: '/img/papptak3.png',
      featureDescription:
        'Letar du efter en pålitlig takläggare för papptak i Skåne, Kronoberg eller Blekinge? Takspecialisten i Syd AB är experter på installation av papptak, reparation av papptak och underhåll av papptak. Vi erbjuder hållbara och kostnadseffektiva lösningar för flacka tak som ger långvarigt skydd mot väder och vind',
      serviceWeProvideTitle: 'Tjänster vi erbjuder för papptak',
      serviceWeProvideDescription:
        'Vi erbjuder våra takläggningstjänster för papptak i Malmö, Lund, Växjö, Älmhult, Ljungby, Blekinge och hela Skåne och Kronoberg. Kontakta oss idag för en kostnadsfri offert!',
      servicesWeProvide: [
        {
          name: 'Installera papptak',
          description:
            'Professionell läggning av papptak för både bostäder och kommersiella byggnader',
        },
        {
          name: 'Reparera papptak',
          description:
            'Åtgärd av läckor och skador på papptak snabbt och effektivt',
        },
        {
          name: 'Underhåll av papptak',
          description:
            'Regelbundet underhåll av papptak för att förlänga takets livslängd och säkerställa dess funktionalitet',
        },
      ],
      features: [
        {
          icon: 'i-heroicons-shield-check',
          name: 'Kostnadseffektivt papptak för både små och stora takprojekt',
          description: 'Tål tuffa väderförhållanden år efter år',
        },
        {
          icon: 'i-heroicons-currency-dollar',
          name: 'Hållbarhet och lång livslängd om underhålls korrekt',
          description: 'Bra värde för pengarna med låg totalkostnad',
        },
        {
          icon: 'i-heroicons-clock',
          name: 'Lång livslängd upp till 30 år',
          description: 'Håller i decennier med rätt underhåll',
        },
        {
          icon: 'i-heroicons-wrench',
          name: 'Minimalt underhållsbehov',
          description: 'Kräver lite skötsel för att behålla sin funktion',
        },
        {
          icon: 'i-heroicons-rocket-launch',
          name: 'Snabb installation av papptak utan att det påverkar din verksamhet eller hem',
          description:
            'Effektiv installation som minimerar störningar i din vardag',
        },
      ],
      questions: [
        {
          label: 'Varför ska jag välja papptak?',
          content:
            'Papptak är ett kostnadseffektivt, hållbart och väderbeständigt alternativ som passar perfekt för flata tak, samt garage och andra byggnader med liknande takstrukturer. Det ger långvarigt skydd mot väder och vind.',
        },
        {
          label: 'Hur lång livslängd har ett papptak?',
          content:
            'Med rätt underhåll kan papptak hålla mellan 20-30 år. Vi hjälper till att förlänga takets livslängd med noggrant utfört arbete och kvalitetsmaterial.',
        },
        {
          label: 'Är papptak lämpliga för mitt hus?',
          content:
            'Ja, papptak är idealiska för både nya och gamla hus, flata tak och även garage. Vi anpassar lösningen efter ditt hus, garage eller andra byggnader.',
        },
        {
          label: 'Vad kostar det att lägga ett papptak?',
          content:
            'Kostnaden för ett papptak varierar beroende på takets storlek och materialval, men vi erbjuder konkurrensmässiga priser och gratis offerter så att du kan få en tydlig uppfattning om kostnaden.',
        },
        {
          label: 'Behöver jag oroa mig för vädret när ni byter mitt papptak?',
          content:
            'Vi planerar arbetet noggrant och ser till att det genomförs under bra väderförhållanden för att säkerställa ett hållbart resultat. Vid behov använder vi skydd för att minimera väderpåverkan under arbetets gång.',
        },
        {
          label: 'Erbjuder ni garantiintyg på det nya papptaket?',
          content:
            'Ja, vi erbjuder ett garantiintyg för alla våra papptak. Intyget skrivs ut direkt när vi färdigställer arbetet, och innan vi avslutar genomför vi en noggrann genomgång av hela taket för att säkerställa att allt är korrekt utfört. Detta ger dig trygghet och säkerhet att ditt tak är skyddat under många år framöver.',
        },
        {
          label: 'Hur vet jag om mitt tak behöver bytas?',
          content:
            'Tecken på att ditt tak behöver bytas kan vara läckage, sprickor, blåsor eller synlig slitage. Vi gör en grundlig inspektion för att bedöma takets skick och ge dig professionella råd.',
        },
      ],
    },
  ]);
</script>

<template>
  <div v-if="currentService">
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
          label: 'Kontakta oss för en kostnadsfri offert',
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
          class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700 max-h-[700px]"
        />
      </template>
    </ULandingHero>

    <ULandingSection
      v-if="currentService.features"
      class="mt-[20%]"
      :title="currentService.featureTitle"
      :description="currentService.featureDescription"
      align="left"
      :features="
        currentService.features?.map((feature) =>
          typeof feature === 'string' ? { name: feature } : feature
        )
      "
    >
      <template
        v-if="
          currentService.videoOrImg &&
          currentService.videoOrImg.endsWith('.mp4')
        "
      >
        <video
          autoplay
          muted
          loop
          playsinline
          class="w-full h-full object-cover z-0 rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700 max-h-[700px]"
        >
          <source :src="currentService.videoOrImg" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </template>
      <template v-else>
        <img
          :src="currentService.videoOrImg"
          class="w-full h-full object-cover z-0 rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700 max-h-[700px]"
        />
      </template>
    </ULandingSection>

    <ULandingSection
      class="mt-[20%]"
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

    <ULandingSection title="Frågor och svar	">
      <ULandingFAQ :items="currentService.questions" multiple />
    </ULandingSection>
  </div>
</template>

<style scoped>
  .overlay {
    height: 93vh;
    color: white !important;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust darkness */
    z-index: 1; /* Place it above the video but below the content */
  }
</style>
