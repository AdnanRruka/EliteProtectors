import { defineStore } from 'pinia'

export const useLanguageStore = defineStore("languages", () => {
    const language = ref({
        Services: "Services",
        Pricing: "Pricing",
        FAQ: "FAQ",
        About: "About us",
        WhenProtectionMatters: "When Protection matters",
        AboutText: "anAdnanAdnanAdnanAdnanAdnanAdnanAdnanAdnanAdnanAdnanAdnan",
        OurServices: "Our Services"
    })
    const arabic = ref({
        Services: "خدمات",
        Pricing: "التسعير",
        FAQ: "التعليمات",
        BtnAbout: "معلومات عنا",
        WhenProtectionMatters: "عندما تكون الحماية مهمة",
        AboutText: "Adnan arabic",
        OurServices: "خدماتنا"
    })
    return { language, arabic }
})