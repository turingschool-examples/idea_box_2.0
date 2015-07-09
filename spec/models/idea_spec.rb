require "rails_helper"

RSpec.describe "ActiveModel validations" do

  it "has a factory" do
    expect(build(:idea)).to be_valid
  end

  let(:quality) { build(:quality) }
  let(:idea) { create(:idea, quality_id: quality.id) }

  it { expect(idea).to validate_uniqueness_of(:title) }
  it { expect(idea).to validate_uniqueness_of(:body) }
  it { expect(idea).to validate_presence_of(:title) }
  it { expect(idea).to validate_presence_of(:body) }


  xit "updates the quality on upvote unless genius" do
    idea.update_quality("upvote")
    expect(idea.quality).to eq(2)

    idea.update_quality("upvote")
    expect(idea.quality).to eq(3)

    idea.update_quality("upvote")
    expect(idea.quality).to_not eq(4)
    expect(idea.quality).to eq(3)
  end

end
