import Head from "next/head";

type Props = {
  pageTitle: string;
  path: string;
}

export const Meta = ({ pageTitle, path }: Props) => {
  const fullPageTitle = `${pageTitle} | Arun Kulkarni`
  const url = `https://arunkulkarni.io${path}`
  const imageUrl = 'https://arunkulkarni.io/professional.png'

  return (
    <Head>
      <title>{fullPageTitle}</title>
      <meta name="description" content="Arun Kulkarni's professional portfolio site" />
      <meta property="og:title" content={fullPageTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:descripiton" content="Arun Kulkarni's professional portfolio site" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
} 

export default Meta;
