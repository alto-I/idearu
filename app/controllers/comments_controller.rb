# frozen_string_literal: true

class CommentsController < ApplicationController
  before_action :set_idea, only: %i[create]

  def create
    @comment = current_user.comments.new(comment_params)
    if @comment.save
      redirect_to idea_path(id: @idea.id)
    else
      @error_comment = @comment
      render template: 'ideas/show'
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      redirect_back(fallback_location: root_path, notice: 'コメントを削除しました')
    else
      flash.now[:alert] = 'コメント削除に失敗しました'
      redirect_back(fallback_location: root_path)
    end
  end

  private

  def set_idea
    @idea = Idea.find(params[:idea_id])
  end

  def comment_params
    params.require(:comment).permit(:content, :idea_id)
  end
end
