class IdeaController < ApplicationController

  def index
    @ideas = Idea.all
  end

  

end
