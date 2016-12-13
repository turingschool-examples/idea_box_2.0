class Api::V1::IdeasController < ApplicationController

  def index
    @ideas = Idea.all
    render json: @ideas
  end

  def create
    @idea = Idea.new(idea_params)
    render json: @idea if @idea.save
  end

  def destroy
    idea = Idea.find(params[:id])
    idea.destroy
    render json: {}, status: 204
  end

  def update
    @idea = Idea.find(params[:id])
    render json: @idea if @idea.update(idea_params)
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end
end
