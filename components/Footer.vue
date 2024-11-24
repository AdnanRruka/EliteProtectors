<script setup lang="ts">
const { t } = useI18n();
const links = [ {
  label: t('Company'),
  children: [{
    label: `${t('PhoneNumber')}: +97-152-631-8803`,
    
  }, {
    label: `${t('Email')}: kommer snart`
  }, {
    label: `${t('Location')}: kommer snart`
  }]
}]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  setTimeout(() => {
    toast.add({
      title: 'Subscribed!',
      description: 'You\'ve been subscribed to our newsletter.'
    })

    loading.value = false
  }, 1000)
}
</script>

<template>
  <UFooter id="footer">
    <template #left>
      <UFooterColumns :links="links">
        <!-- <template #right>
          <form @submit.prevent="onSubmit">
            <UFormGroup label="Subscribe to our newsletter" :ui="{ container: 'mt-3' }">
              <UInput v-model="email" type="email" placeholder="Enter your email"
                :ui="{ icon: { trailing: { pointer: '' } } }" required size="xl"
                autocomplete="off" class="max-w-sm">
                <template #trailing>
                  <UButton type="submit" size="xs"
                    :label="loading ? 'Subscribing' : 'Subscribe'" :loading="loading" />
                </template>
</UInput>
</UFormGroup>
</form>
</template> -->
      </UFooterColumns>
    </template>

    <template #center>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>
  </UFooter>
</template>
