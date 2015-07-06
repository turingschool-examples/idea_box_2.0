require "rails_helper"

RSpec.describe "ActiveModel validations" do

  it "has a factory" do
    expect(build(:idea)).to be_valid
  end

  let(:quality) { build(:quality) }
  let(:idea) { build(:idea, quality_id: quality.id) }

  it { expect(idea).to validate_uniqueness_of(:title) }
  it { expect(idea).to validate_uniqueness_of(:body) }
  it { expect(idea).to validate_presence_of(:title) }
  it { expect(idea).to validate_presence_of(:body) }
end
