import { PortalInjectKey } from 'hooks/use-portal-element'
import {
  NConfigProvider,
  NDialogProvider,
  NMessageProvider,
  NNotificationProvider,
  darkTheme,
  dateZhCN,
  useDialog,
  useMessage,
  useNotification,
  zhCN,
} from 'naive-ui'
import { RouteName } from 'router/name'
import { defineComponent, onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'

import { useUIStore } from './stores/ui'
import { useUserStore } from './stores/user'

import('typescript').then(({ createSourceFile, ScriptTarget }) => {
  const file = createSourceFile(
    'a.ts',
    `export interface a {}`,
    ScriptTarget.ES2022,
  )
  console.log(file)
})

const Root = defineComponent({
  name: 'RootView',

  setup() {
    const { fetchUser } = useUserStore()
    const router = useRouter()
    onMounted(() => {
      const message = useMessage()
      const _error = message.error
      Object.assign(message, {
        error: (...rest: any[]) => {
          // @ts-ignore
          _error.apply(this, rest)
          throw rest[0]
        },
      })

      window.message = message
      window.notification = useNotification()
      window.dialog = useDialog()

      fetchUser().then(() => {
        const toSetting = localStorage.getItem('to-setting')
        if (toSetting === 'true') {
          router.push({
            name: RouteName.Setting,
            params: {
              type: 'user',
            },
          })
          localStorage.removeItem('to-setting')
        }
      })
    })
    const $portalElement = ref<JSX.Element | null>(null)

    provide(PortalInjectKey, {
      setElement(el) {
        $portalElement.value = el
        return () => {
          $portalElement.value = null
        }
      },
    })

    return () => {
      return (
        <>
          <RouterView />
          {$portalElement.value}
        </>
      )
    }
  },
})

const App = defineComponent({
  setup() {
    const uiStore = useUIStore()
    return () => {
      const { isDark, naiveUIDark } = uiStore
      return (
        <NConfigProvider
          locale={zhCN}
          dateLocale={dateZhCN}
          theme={naiveUIDark ? darkTheme : isDark ? darkTheme : null}
        >
          <NNotificationProvider>
            <NMessageProvider>
              <NDialogProvider>
                <Root />
              </NDialogProvider>
            </NMessageProvider>
          </NNotificationProvider>
        </NConfigProvider>
      )
    }
  },
})

// eslint-disable-next-line import/no-default-export
export default App
