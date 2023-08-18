'use client'

import { useState } from 'react'
import { databases } from '@/clients/appwrite'
import { ID } from 'appwrite'
import Input from '@/components/atoms/input'
import toast from 'react-hot-toast'
import Button from '@/components/atoms/button'
import Toaster from '@/components/atoms/toaster'
import './styles.scss'

export default function RegistrationForm() {
  const [formData, setFormData] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  async function onSubmit(e: any) {
    e.preventDefault()

    let payload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
    }

    try {
      let response = await databases.createDocument(
        `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
        `${process.env.NEXT_PUBLIC_ATTENDANCE_COLLECTION_ID}`,
        ID.unique(),
        payload
      )

      console.log('Created', response)
      toast.success('Your details has been submitted successfully')
      setFirstName('')
      setLastName('')
      setEmail('')
    } catch (err) {
      toast.error(
        'An error occurred while submitting the form, please try again'
      )
    }
  }

  return (
    <>
      <h1 className="text-base md:text-2xl text-center pb-4">
        Please fill out this form to register for the event
      </h1>
      <form onSubmit={onSubmit} className="tkm-form-container">
        <div className="input-container">
          <Input
            type="text"
            value={firstName}
            placeholder="First Name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            type="text"
            value={lastName}
            placeholder="Last Name"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="w-full md:px-40 px-5">
          <Input
            value={email}
            type="email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button color="bg-gray-950 w-80" textColor="text-white" type="submit">
          Register
        </Button>
      </form>
      <Toaster />
    </>
  )
}
