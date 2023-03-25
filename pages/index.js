import MeetupList from '@/components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Head from 'next/head'

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React pog</title>
        <meta
          name="description"
          content="Browse a huge list of meeeeeeeeeeeee"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  )
}

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:12345@cluster0.1sjptcr.mongodb.net/?retryWrites=true&w=majority'
  )
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  }
}

export default HomePage
