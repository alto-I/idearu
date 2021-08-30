json.ideas do
  json.array! @ideas do |idea|
    json.partial! "api/v1/ideas/idea", idea: idea
  end
end
