require "rails_helper"

RSpec.describe Idea, type: :feature do
  scenario "User creates new idea" do
    visit "/"

    fill_in "Title", with: "New Idea"
    fill_in "Body", with: "This is a great new idea"
    click_button "Submit"

    expect(page).to have_content("New Idea")
    expect(page).to have_content("This is a great new idea")

  end
end
