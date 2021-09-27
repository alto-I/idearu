# frozen_string_literal: true

class IdeasController < ApplicationController
  before_action :set_idea, only: %i[show edit update destroy solved not_solved]
  before_action :authenticate_user!,
                only: %i[new edit update destroy solved not_solved]

  def index
    @ideas = Idea.all
  end

  def show
    @comments = @idea.comments
    @comment = current_user.comments.new if user_signed_in?
  end

  def new; end

  def edit
    if current_user.admin || @idea.user == current_user
      render 'edit'
    else
      redirect_to root_path
    end
  end

  def update
    if @idea.update(idea_params)
      redirect_to @idea, notice: 'サービス案を更新しました。'
    else
      render :edit
    end
  end

  def destroy
    @idea.destroy
    redirect_to root_path, notice: '投稿されたサービス案を削除しました。'
  end

  def solved
    @idea.solved = true
    @idea.save
    redirect_to idea_path(id: @idea.id)
  end

  def not_solved
    @idea.solved = false
    @idea.save!
    redirect_to idea_path(id: @idea.id)
  end

  private

  def set_idea
    @idea = Idea.find(params[:id])
  end

  def idea_params
    params.require(:idea).permit(:title, :elevatorpitch)
  end
end
