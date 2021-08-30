json.idea @idea
json.comments do
  json.array! @idea.comments do |comment|
    json.partial! "api/v1/ideas/comment", comment: comment
  end
end
