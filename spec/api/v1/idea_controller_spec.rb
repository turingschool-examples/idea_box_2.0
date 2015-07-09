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

  describe "POST #update" do
    it "returns update without vote json" do
    id = Idea.last.id
    idea_data = {title: "Updated Title", body: "Updated Body"}

    post :update, format: :json, id: id, idea: idea_data

    data = JSON.parse(response.body, symbolize_names: true)
    expect(data[:title]).to eq("Updated Title")
    expect(data[:body]).to eq("Updated Body")
    end
  end

  describe "POST #create" do
    it "creates new idea via ajax" do
      quality = Quality.create(option: "swill")
      original_count = Idea.count
      idea_data = { title: "New Title", body: "New Body", quality_id: quality.id }

      post :create, format: :json, idea: idea_data

      data = Idea.first

      expect(Idea.count).to eq(original_count + 1)
      expect(data[:title]).to eq("New Title")
      expect(data[:body]).to eq("New Body")
    end
  end

  describe "DELETE #destroy" do
    it "deletes an idea with json" do
      original_count = Idea.count
      id = Idea.last.id

      delete :destroy, format: :json, id: id
      expect(Idea.count).to eq(original_count - 1)
    end
  end
end
