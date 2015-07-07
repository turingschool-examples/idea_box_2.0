class IdeaController < ApplicationController
  def resume_box
    @ideas = Idea.all
  end
end
