  <template>
  <n-config-provider :locale="locale" :date-locale="dateEnUS">
    <slot />
  </n-config-provider>
</template>

<script>
  import { defineComponent } from 'vue'
  import { NConfigProvider, createLocale, enUS } from 'naive-ui'
  import { enUS, dateEnUS } from 'naive-ui'

  const customizedLocale = createLocale(
    {
      Input: {
        placeholder: '不提申请不构成加班'
      }
    },
    enUS
  )

  export default defineComponent({
    components: {
      NConfigProvider
    },
    setup() {
      return {
        locale: customizedLocale,
        dateEnUS
      }
    }
  })
</script>
