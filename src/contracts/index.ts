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
