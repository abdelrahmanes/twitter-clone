export interface Tweet extends TweetBody {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: 'tweet'
  blockTweet: boolean
}

export type TweetBody = {
  text: string
  username: string
  profileImage: string
  image?: string
  handle: string
}
export type CommentBody = {
  comment: string
  username: string
  profileImage: string
  image?: string
  handle: string
  tweet:{
    _type:'reference',
    _ref:string,
  }
}
export interface Comment extends CommentBody {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: 'comment'

}


