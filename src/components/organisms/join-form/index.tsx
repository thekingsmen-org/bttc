'use client'

import { useState } from 'react'
import { databases } from '@/clients/appwrite'
import { ID } from 'appwrite'
import Input from '@/components/atoms/input'
import toast from 'react-hot-toast'
import Button from '@/components/atoms/button'
import Toaster from '@/components/atoms/toaster'
import './styles.scss'

export default function JoinForm() {
  const [formData, setFormData] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [bio, setBio] = useState('')

  async function onSubmit(e: any) {
    e.preventDefault()

    let payload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      bio: bio
    }

    try {
      let response = await databases.createDocument(
        `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
        `${process.env.NEXT_PUBLIC_MEMBERSHIP_COLLECTION_ID}`,
        ID.unique(),
        payload
      )

      toast.success(
        'Your details has been submitted successfully, Thanks for joining!',
        {
          duration: 4000,
        }
      )
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhone('')
      setBio('')
    } catch (err) {
      toast.error(
        'An error occurred while submitting the form, please try again'
      )
    }
  }

  return (
    <>
      <h1 className="text-base md:text-2xl text-center pb-4">
        Do you want to be a part of The Kings Men? please fill this form
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
        <div className="input-container">
          <Input
            value={email}
            type="email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            value={phone}
            type="text"
            required
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            />
        </div>
        <div className='md:px-40 px-5 w-full'>
          <textarea
            value={bio}
            required
            onChange={(e) => setBio(e.target.value)}
            className='w-full h-28 bg-white rounded-md border border-gray-200 focus:border-gray-200 focus:bg-white focus:ring-0 text-gray-800'
            placeholder='A short bio'
          />
        </div>
        <Button color="bg-gray-950 w-80" textColor="text-white" type="submit">
          Join
        </Button>
      </form>
      <Toaster />
    </>
  )
}
