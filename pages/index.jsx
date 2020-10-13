import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/components/ProTip';
import Copyright from '../src/components/Copyright';
import Menu from '../components/Menu';

export default function Index() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Create Next App</title>
      </Head>
      <Container maxWidth="sm">
        <Menu />
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
