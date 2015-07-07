require "json"

class Api::V1::IdeaController < ApplicationController

  respond_to :json

  def index
    respond_with Idea.all
  end

  def show

  end

  def create
    respond_with :api, :v1, Idea.create(idea_params)
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  def edit

  end

  def update

  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end
end
