<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();
const language = computed({
    get: () => locale.value,
    set: (value) => {
        setLocale(value)
    }
})

</script>

<template>
    <div>
        <USelectMenu v-model="language" :options="locales" value-attribute="code"
            option-attribute="name">
            <template #leading>
                <UAvatar v-if="locale == 'sa-AR'" class="m-5.5" size="2xs"
                    src="https://static.vecteezy.com/system/resources/previews/003/094/399/non_2x/saudi-arabia-national-flag-illustration-editable-image-vector.jpg" />

                <UAvatar v-else class="m-5.5" size="2xs"
                    src="https://www.avrupayolunda.com/wp-content/uploads/2022/12/togggg-1.png" />
            </template>
            <template #option="{ option }">
                <UAvatar v-if="option.name == 'AR'" class="m-5.5" size="2xs"
                    src="https://static.vecteezy.com/system/resources/previews/003/094/399/non_2x/saudi-arabia-national-flag-illustration-editable-image-vector.jpg" />

                <UAvatar v-else class="m-5.5" size="2xs"
                    src="https://www.avrupayolunda.com/wp-content/uploads/2022/12/togggg-1.png" />
                <span class="truncate">{{ option.name }}</span>
            </template>
        </USelectMenu>

    </div>
</template>



<style scoped></style>