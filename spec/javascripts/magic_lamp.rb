MagicLamp.fixture do
  Idea.create([
    {title: "New Title", body: "New Body"},
    {title: "New Title2", body: "New Body2"}
    ])
    binding.pry
  render template: "idea/resume_box"
end
