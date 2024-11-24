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

</script>

<template>
  <UFooter id="footer">
    <template #left>
      <UFooterColumns :links="links">
      </UFooterColumns>
    </template>

    <template #center>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>
  </UFooter>
</template>
