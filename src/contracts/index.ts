import { Asset } from 'contentful'

export interface Guest {
  id: string
  name: string
  biography: string
  photo: Asset
  website: string
  kind: 'speaker' | 'singer'
  ministry: string
}
