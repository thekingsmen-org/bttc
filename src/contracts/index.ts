import { Url } from 'next/dist/shared/lib/router/router'

export interface Guest {
  $collectionId?: string
  $createdAt?: string
  $databaseId?: string
  $id?: string
  $permissions?: any[]
  $updatedAt?: string
  bio?: string
  event_id?: string
  facebook_url?: string
  full_name?: string
  instagram_url?: string
  photo?: string
  website?: string
  kind?: 'speaker' | 'singer'
  ministry?: string
}

export interface Member {
  $createdAt?: string
  $id?: string
  $updatedAt?: string
  first_name?: string
  last_name?: string
  email?: string
  phone?: string
  bio?: string
  approved?: boolean
  photo?: string
  title?: string
  denomination?: string
}

export interface NavItemContract {
  name: String
  path?: String
}
