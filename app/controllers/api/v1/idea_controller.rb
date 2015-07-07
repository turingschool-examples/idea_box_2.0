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
    idea = Idea.find_by!(id: params[:idea][:id].to_i)
    if params[:idea][:vote] != nil
      idea.update_quality(params[:idea][:vote])
      respond_with idea.update(idea_params)
    else
      respond_with idea.update(idea_params)
    end
  end

  private

  def idea_params
    params.require(:idea).permit(:id, :title, :body, :quality)
  end
end