import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import Head from 'next/head'
import { useRouter } from 'next/router'

const NewMeetupPage = () => {
  const router = useRouter()
  const addMeetuphandler = async (enteredMeetup) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetup),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    router.push('/')
  }

  return (
    <>
      <Head>
        <title>addd pog</title>
        <meta name="description" content="adding own meetup " />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetuphandler} />
    </>
  )
}

export default NewMeetupPage
