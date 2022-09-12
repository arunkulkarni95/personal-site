import Head from "next/head";

type Props = {
  pageTitle: string;
}

export const Meta = ({ pageTitle }: Props) => {
  const fullPageTitle = `${pageTitle} | Arun Kulkarni`

  return (
    <Head>
      <title>{fullPageTitle}</title>
      <meta name="description" content="Arun Kulkarni's professional portfolio site" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
} 
export default Meta;
