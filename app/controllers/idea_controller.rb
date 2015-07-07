class IdeaController < ApplicationController
  def resume_box
    @ideas = Idea.all
  end

  def edit
    @idea = Idea.find_by!(id: params[:id])
  end

  def update
    Idea.update(params[:id].to_i, idea_params)
    redirect_to "/"
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality_id)
  end
end
