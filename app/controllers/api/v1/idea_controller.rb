require "json"

class API::V1::IdeaController < ApplicationController

  respond_to :json

  def index
    respond_with Idea.all
  end

  def show

  end

  def create

  end

  def destroy

  end

  def edit

  end

  def update

  end

  protected

  def idea_params
    binding.pry
    params.require(:idea)
  end
end
