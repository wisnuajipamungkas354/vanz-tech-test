type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
}

const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
      {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 111,
            commentContent: 'Haai juga hai jugaa'
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 121,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      }
    ]
  },
  {
    commentId: 2,
    commentContent: 'Halooo'
  }
]

const countComments = (comments: IComment[]): number => comments.reduce(
  (total, c) => total + 1 + (c.replies ? countComments(c.replies) : 0), 0);

console.log(countComments(comments));