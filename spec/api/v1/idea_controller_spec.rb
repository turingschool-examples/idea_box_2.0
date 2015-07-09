require "rails_helper"
require "json"

RSpec.describe Api::V1::IdeaController, type: :controller do

  let!(:quality) { create(:quality) }
  let!(:idea) { create(:idea, quality_id: quality.id) }

  describe "GET #index" do
    it "has json returned" do
      get :index, format: :json
      data = JSON.parse(response.body, symbolize_names: true)
      count = Idea.count

      expect(data.count).to eq(count)
      expect(data.last.class).to eq(Hash)
    end
  end

  describe "GET #show" do
    it "returns json for single idea" do
      id = Idea.first.id
      get :show, format: :json, id: id
      data = JSON.parse(response.body, symbolize_names: true)
      expect(data[:title]).to eq("Inspecting the Chicken Coop")
    end
  end

  describe "GET #edit" do
    it "returns json idea to edit" do
      id = Idea.last.id
      get :edit, format: :json, id: id
      data = JSON.parse(response.body, symbolize_names: true)
      expect(data[:title]).to eq("Inspecting the Chicken Coop")
    end
  end

  describe "POST #create" do
    it "creates new idea via json" do
      quality = Quality.create(option: "Swill")
      original_count = Idea.count
      idea_data = { title: "New Title", body: "New Body", quality_id: quality.id }

      post :create, format: :json, idea: idea_data

      data = Idea.first
      
      expect(data[:title]).to eq("New Title")
      expect(data[:body]).to eq("New Body")
    end
  end
end
