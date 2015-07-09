require "rails_helper"

RSpec.describe Idea, type: :feature do
  xscenario "User creates new idea" do
    visit "/"

    fill_in "title", with: "New Idea"
    fill_in "body", with: "This is a great new idea"
    find(".job-save").click
    wait_until { find(".idea-container", visible: true) }
    expect(page).to have_content("New Idea")
    expect(page).to have_content("This is a great new idea")

  end
end
