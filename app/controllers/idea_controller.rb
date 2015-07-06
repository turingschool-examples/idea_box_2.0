class IdeaController < ApplicationController

  def index
    @ideas = Idea.all
  end

  def create
    binding.pry
  end

end
