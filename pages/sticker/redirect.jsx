import Head from "next/head"
import CenterHeader from "@components/Center-Header"
import Footer from "@components/Footer"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Sticker() {
  const { locale, locales, asPath } = useRouter()
  const route = useRouter()

  const content = {
    sticker: {
      "nl-NL": "Mooie sticker hé?",
      "en-UK": "Pretty sticker aye?",
    },
    welcome: {
      "nl-NL": "Welkom",
      "en-UK": "Welcome",
    },
  }
  useEffect(() => {
    setTimeout(() => {
      route.push("/")
    }, 1500)
  }, [])
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Strijp Spark</title>
      </Head>
      <main className="flex flex-col items-center mx-auto my-auto space-y-4 max-w-lg text-center p-1">
        <CenterHeader title={content.sticker[locale]} />
      </main>
    </div>
  )
}
