json.id idea.id
json.userId idea.user_id
json.userName idea.user.name
json.title idea.title
json.elevatorpitch idea.elevatorpitch
json.solved idea.solved
json.createdAt idea.created_at
json.updatedAt idea.updated_at
json.likes idea.likes.length
json.comments idea.comments.length
if idea.comments.last
  json.latestCommentDate idea.comments.last.updated_at
else
  json.latestCommentDate DateTime.new(2021, 1, 1)
end

