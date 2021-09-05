# frozen_string_literal: true

class CommentsController < ApplicationController
  def create
    @comment = current_user.comments.new(comment_params)
    @comment.save
    redirect_back(fallback_location: root_path)
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
    @idea = Idea.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:content, :idea_id)
  end
end
